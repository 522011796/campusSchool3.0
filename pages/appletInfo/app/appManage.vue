<template>
  <div class="container">
    <div>
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
                  <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
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
                    <div class="text-center">{{ scope.row.applet_name }}</div>
                      <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.applet_name }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('部门')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="right" popper-class="custom-table-right-popover">
                    <div class="text-center" style="max-height: 150px;overflow-y: auto">
                      <div v-for="(item, index) in scope.row.department_names.split(',')">
                        <span>{{item}}</span>
                      </div>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class" style="width: 120px;display: inline-block">
                        {{ scope.row.department_names }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('类型')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ serverTypeInfo(scope.row.applet_type, 'set') }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ serverTypeInfo(scope.row.applet_type, 'set') }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('类别')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">{{ scope.row.category_name }}</div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{ scope.row.category_name }}
                      </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                prop="appName"
                :label="$t('状态')">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                    <div class="text-center">
                      <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                      <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                    </div>
                    <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                      <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                      <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                width="120"
                :label="$t('操作')">
                <template slot-scope="scope">
                  <i v-if="scope.row.enable" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
                  <i v-if="!scope.row.enable" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>
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
            <el-input v-model="form.appName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('应用类型')" prop="type">
            <my-select :sel-value="form.type" :options="filterAppManageType" width-style="260" @change="handleFormChange($event, 1)"></my-select>
          </el-form-item>
          <el-form-item :label="$t('应用类别')" prop="category">
<!--            <my-select :sel-value="form.category" :options="categorys" width-style="260" @change="handleFormChange($event, 2)"></my-select>-->
            <el-select v-model="form.category" :placeholder="$t('请选择')" @change="handleFormChange($event, 2)" style="width: 260px">
              <el-option v-for="item in categorys" :key="item.value" :label="item.label" :value="item.value" :disabled="item.enable == false"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('归属部门')" prop="dept">
            <my-cascader ref="SelectorCollege" :sel-value="form.dept" :props="{multiple: true}" type="4" sub-type="id" width-style="260" @change="handleCascaderChange($event)"></my-cascader>
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
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import appManageValidater from "~/utils/validater/appManageValidater";
  import MyCascader from "~/components/utils/select/MyCascader";
  export default {
    mixins: [mixins,appManageValidater],
    components: {MyCascader, MySelect, MyInputButton},
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
      this.initCategory();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          departmentPath: this.collegeData,
          appletType: this.searchType,
          enable: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_applet_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initType(){

      },
      initCategory(){
        let params = {};
        this.$axios.get(common.server_type_all_list, {params: params}).then(res => {
          if (res.data.data){
            let array = [];
            for (let i = 0; i < res.data.data.length; i++){
              array.push({
                text: res.data.data[i].categoryName,
                value: res.data.data[i].id+'',
                label: res.data.data[i].categoryName,
                enable: res.data.data[i].enable
              });
            }
            this.categorys = array;
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
        let deptArr = [];
        let params = {
          id: item.id
        };
        this.form = {
          id: item.id,
          appName: item.applet_name,
          type: item.applet_type + '',
          category: item.category_id + ''
        }
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_applet_deptinfo, params).then(res => {
          if (res.data.code == 200){
            for (let i = 0; i < res.data.data.length; i++){
              let dept = [];
              let array = res.data.data[i].departmentIds.split(",");
              for (let j = 0; j < array.length; j++){
                dept.push(parseInt(array[j]));
              }
              deptArr.push(dept);
            }
            this.form.dept = deptArr;
          }
          this.dialogApp = true;
        });
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      statusInfo(item, type){
        let params = {
          id: item.id,
          enable: type
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_applet_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      formInfo(item){
        this.$router.push({
          path: '/appletInfo/app/appCreate',
          query: {
            id: item.id,
            appName: item.applet_name,
            top: 'appletInfo',
            key: 'appCreate',
            sub: 'appCenter'
          }
        });
      },
      handleCascaderChange(data){
        console.log(data);
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
            let deptArrStr = '';
            let deptArr = [];
            if (this.form.dept.length == 0){
              MessageWarning(this.$t("请选择部门"));
              return;
            }
            for (let i = 0; i < this.form.dept.length; i++){
              deptArrStr += this.form.dept[i].join();
              if (this.form.dept.length - 1 != i){
                deptArrStr += '|';
              }
            }
            let params = {
              appletName: this.form.appName,
              appletType: this.form.type,
              categoryId: this.form.category,
              departmentIds: deptArrStr,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_applet_save;
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
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
        url = common.server_applet_delete;
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
