<template>
  <div class="container">
    <div class="container">
      <layout-lr>
        <div slot="left">
          <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
            <!--<span class="layout-left-menu-tag"></span>-->
            <span class="layout-left-menu-title">应用管理</span>
          </div>
          <my-el-tree type="4" sub-type="" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
        </div>

        <div slot="right">
          <div class="layout-top-tab margin-top-5">
            <el-row>
              <el-col :span="8">
                <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建应用")}}</el-button>
<!--                <el-button size="small" type="warning"  icon="el-icon-notebook-2" @click="myInfo($event)">{{$t("我的应用")}}</el-button>-->
              </el-col>
              <el-col :span="16" class="text-right">
                <div class="layout-inline">
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('类型')" :options="filterAppManageType" :clearable="true" @change="handleTypeChange($event, 1)"></my-select>
                  <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleTypeChange($event, 2)"></my-select>
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></my-input-button>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-10">
            <el-table
              ref="refTable"
              :data="tableData"
              header-cell-class-name="custom-table-cell-bg"
              size="medium"
              :max-height="tableHeight2.height"
              style="width: 100%">
              <el-table-column
                align="center"
                :label="$t('名称')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.classroom_no }}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.classroom_no }}{{ scope.row.classroom_no }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('部门')">
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('类型')">
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('类别')">
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('状态')">
              </el-table-column>
              <el-table-column
                align="center"
                width="120"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <i class="fa fa-stop-circle margin-right-5 color-grand" @click="statusInfo(scope.row)"></i>
                  <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                  <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="60"
                :label="$t('表单')">
                <template slot-scope="scope">
                  <i class="fa fa-cog margin-right-5 color-grand" @click="formInfo(scope.row)"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-right-footer text-right">
            <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </layout-lr>
    </div>

    <dialog-normal top="10vh" :visible="dialogApp" :title="$t('应用设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('应用名称')" prop="appName">
            <el-input :disabled="form.id != ''" v-model="form.appName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('应用类型')" prop="type">
            <my-select :sel-value="form.type" :options="types" width-style="260" @change="handleFormChange($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('应用类别')" prop="category">
            <my-select :sel-value="form.category" :options="categorys" width-style="260" @change="handleFormChange($event, 2)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('归宿部门')" prop="dept">
            <my-cascader ref="SelectorCollege" :sel-value="form.dept" type="4" sub-type="id" width-style="260" @change="handleCascaderChange($event)"></my-cascader>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="dialogLoading == false ? okDialog() : ''">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </dialog-normal>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import MyInputButton from "~/components/search/MyInputButton";
  import MySelect from "~/components/MySelect";
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess} from "~/utils/utils";
  import appManageValidater from "~/utils/validater/appManageValidater";
  export default {
    mixins: [mixins,appManageValidater],
    components: {MySelect, MyInputButton},
    data(){
      return {
        tableData: [],
        collegeList: [],
        categorys: [],
        types: [],
        subTitle: '',
        collegeData: '',
        searchKey: '',
        searchType: '',
        searchStatus: '',
        dialogLoading: false,
        dialogApp: false,
        visibleConfim: false,
        form: {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          collegeData: this.collegeData,
          searchType: this.searchType,
          searchStatus: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.classroom_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.init();
      },
      currentPage(event){
        this.page = event;
        this.init();
      },
      jumpPage(data){
        this.page = data;
        this.init();
      },
      nodeClick(data){
        this.collegeData = data.department_path;
        this.page = 1;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      addInfo(){
        this.dialogApp = true;
      },
      myInfo(){

      },
      editInfo(item){

      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      statusInfo(item){

      },
      formInfo(item){

      },
      handleCascaderChange(data){
        this.form.dept = data;
      },
      handleTypeChange(event, type){
        if (type == 1){
          this.searchType = event;
        }else if (type == 2){
          this.searchStatus = event;
        }
      },
      handleFormChange(event, type){
        if (type == 1){
          this.form.type = event;
        }else if (type == 2){
          this.form.category = event;
        }
      },
      cancelDialog(){
        this.dialogApp = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              appName: this.form.appName,
              type: this.form.type,
              category: this.form.category,
              dept: this.form.dept,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
              url = common.class_edit;
            }else {
              url = common.class_edit;
            }
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogApp = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      },
      closeDialog(event){
        this.form = {
          id: '',
          appName: '',
          type: '',
          category: '',
          dept: []
        };
        this.subTitle = "";
        this.resetCasadeSelector('SelectorCollege');
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        }
        url = common.class_delete;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      }
    }
  }
</script>

<style scoped>

</style>
