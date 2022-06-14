<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">流程管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="6">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("创建流程")}}</el-button>
          </el-col>
          <el-col :span="18" class="text-right">
            <div class="layout-inline">
              <my-select class="layout-item width-150" size="small" :placeholder="$t('状态')" :options="filterAppManageStatus" :clearable="true" @change="handleSearchChange($event, 1)"></my-select>
              <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></my-input-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <el-table
          ref="refTable"
          :data="tableData"
          header-cell-class-name="custom-table-cell-bg"
          size="medium"
          row-key="id"
          :max-height="tableHeight.height"
          style="width: 100%">
          <el-table-column
            align="center"
            :label="$t('创建时间')">
            <template slot-scope="scope">
              <span>{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('流程名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('环节数量')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('学生数量')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.category_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.category_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('状态')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">
                  <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                  <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                </div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <div class="text-center">
                    <label v-if="scope.row.enable" class="color-success">{{$t("已发布")}}</label>
                    <label v-if="!scope.row.enable" class="color-warning">{{$t("待发布")}}</label>
                  </div>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="140">
            <template slot-scope="scope">
              <i v-if="scope.row.enable" class="fa fa-stop-circle color-warning margin-right-5" @click="statusInfo(scope.row, false)"></i>
              <i v-if="!scope.row.enable" class="fa fa-play-circle color-success margin-right-5" @click="statusInfo(scope.row, true)"></i>

              <i class="fa fa-edit color-grand margin-right-5" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="流程设计"
            width="140">
            <template slot-scope="scope">
              <i class="fa fa-cog color-success" @click="settingInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal top="10vh" :visible="dialogSetting" :title="$t('流程设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item :label="$t('流程名称')" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('学生范围')">
            <el-button size="mini" type="warning" @click="studentManage">{{$t('添加学生')}}</el-button>
            <span class="color-muted margin-left-10">{{$t('学生人数')}}</span>
            <span class="color-muted">0</span>
            <span class="color-muted">{{$t('人')}}</span>
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

    <drawer-layout-right tabindex="1" :append-to-body="true" @close="closeDialog"  @changeDrawer="closeDialog" :visible="drawerVisible" size="80%">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-user"></i>
            {{$t('管理学生')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div class="text-left layout-inline">
          <el-col :span="18">
            <my-select class="layout-item width-150" size="small" :placeholder="$t('选择年度')" :sel-value="searchYear" :options="yearOptions" :clearable="true" @change="handleSearchChange($event, 2)"></my-select>
            <my-cascader class="layout-item" ref="SelectorDept" size="small" width-style="160" :sel-value="searchCommDeptData" type="1" sub-type="4" @change="handleCascaderChange($event)"></my-cascader>
            <my-select class="layout-item " size="small" :placeholder="$t('选择性别')" :clearable="true" :sel-value="searchSex" :options="g_sex" width-style="150" @change="handleSearchChange($event, 3)"></my-select>
          </el-col>
          <el-col :span="6" class="text-right">
            <my-input-button ref="teacher width-150" size="small" plain width-class="width: 180px" type="success" :clearable="true" :placeholder="$t('名称')" @click="searchStudent"></my-input-button>
          </el-col>
        </div>
        <div class="moon-clearfix"></div>
        <div class="padding-tb-10">
          <el-table
            ref="refTable"
            :data="tableStudentData"
            header-cell-class-name="custom-table-cell-bg"
            :max-height="tableHeight16.height"
            style="width: 100%;">
            <el-table-column align="center" :label="$t('录取日期')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    1
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('录取号')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('姓名')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('性别')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('专业')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('班级')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" :label="$t('招生老师')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.name}}</div>
                  <span slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.name}}
                  </span>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="20">
            <div class="text-left">
              <el-pagination
                background
                :page-sizes="[10, 20, 50, 100]"
                layout="total, sizes, prev, pager, next"
                :total="totalStudent"
                :current-page="pageStudent"
                :page-size="numStudent"
                @size-change="sizeStudentChange"
                @current-change="currentStudentPage">
              </el-pagination>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="text-right padding-lr-10">
              <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("保存")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>

    <drawer-layout-right tabindex="1" :append-to-body="true" @close="closeDialog"  @changeDrawer="closeDialog" :visible="dialogFlowSetting" size="80%">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <span class="tab-class font-bold">
            <i class="fa fa-user"></i>
            {{$t('流程设计')}}
          </span>
        </div>
      </div>
      <div slot="content" class="color-muted">
        <div>
          <my-new-student-flow ref="flow" :formId="serverDataItem" :flow-data="flowListData" :form="flowFormData"></my-new-student-flow>
        </div>
      </div>
      <div slot="footer">
        <el-row>
          <el-col :span="24">
            <div class="text-right padding-lr-10">
              <el-button size="small" @click="cancelFlowDrawDialog">{{$t("取消")}}</el-button>
              <el-button size="small" type="primary" :loading="drawerLoading" @click="okFlowDrawDialog">{{$t("保存")}}</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" :detail="subTitle" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import mixins from "~/utils/mixins";
  import {common} from "~/utils/api/url";
  import {MessageError, MessageSuccess, MessageWarning} from "~/utils/utils";
  import flowManageValidater from "~/utils/validater/flowManageValidater";
  import MyNormalDialog from "~/components/utils/dialog/MyNormalDialog";
  import MySelect from "~/components/MySelect";
  import MyNewStudentFlow from "~/components/flow/MyNewStudentFlow";
  export default {
    components: {MyNewStudentFlow, MySelect, MyNormalDialog},
    mixins: [mixins,flowManageValidater],
    data(){
      return {
        pageStudent: 1,
        totalStudent: 0,
        numStudent: 20,
        subTitle: '',
        visibleConfim: false,
        tableData: [],
        tableStudentData: [],
        dialogSetting: false,
        drawerVisible: false,
        dialogLoading: false,
        drawerLoading: false,
        dialogFlowSetting: false,
        yearOptions: [],
        searchKey: '',
        searchStatus: '',
        statusOptions: [],
        typeOptions: [],
        studentSelArray: [],
        searchYear: '',
        searchSex: '',
        searchStudnetKey: '',
        searchStudentCollege: '',
        searchStudentMajor: '',
        searchStudentGrade: '',
        searchStudentClass: '',
        searchCommDeptData: [],
        versionStatus: '',
        serverDataItem: {},
        serverDataIndex: '',
        flowListData: [],
        formFieldList: [],
        flowFormData: {},
        searchStudnetCollege: '',
        searchStudnetMajor: '',
        searchStudnetGrade: '',
        searchStudnetClass: '',
        form: {
          id: '',
          year: '',
          name: '',
          type: '',
          time: ''
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
          searchStatus: this.searchStatus,
          searchKey: this.searchKey
        };
        this.$axios.get(common.server_type_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initStudent(){
        let params = {
          page: this.page,
          num: this.num,
          searchYear: this.searchYear,
          searchClass: this.searchClass,
          searchSex: this.searchSex,
          queryType: 2,
          searchStudnetCollege: this.searchStudnetCollege,
          searchStudnetClass: this.searchStudnetClass,
          searchStudnetMajor: this.searchStudnetMajor,
          searchKey: this.searchStudnetKey
        };
        this.$axios.get(common.log_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableStudentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
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
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initStudent();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initStudent();
      },
      closeDialog(event){
        this.form = {
          id: '',
          name: '',
          enable: true
        };
        this.subTitle = "";
        this.studentSelArray = [];
        this.searchSex = '';
        this.searchClass = '';
        this.searchYear = '';
        this.searchStudnetKey = '';
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
        url = common.server_type_delete;
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
      },
      studentManage(){
        this.initStudent();
        this.drawerVisible = true;
      },
      addInfo(){
        this.dialogSetting = true;
      },
      editInfo(item){
        this.form = {
          id: item.id,
          name: item.category_name,
          enable: item.enable
        };
        this.dialogSetting = true;
      },
      settingInfo(item){
        this.dialogFlowSetting = true;
      },
      deleteInfo(item){
        this.form.id = item.id;
        this.visibleConfim = true;
      },
      statusInfo(item, status){
        let params = {
          id: item.id,
          enable: status
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.server_type_enable, params).then(res => {
          if (res.data.code == 200){
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      handleSearchChange(event, type){
        if (type == 1){
          this.searchStatus = event;
        }else if (type == 2){
          this.searchYear = event;
        }else if (type == 3){
          this.searchSex = event;
        }
      },
      handleCascaderChange(data){
        this.searchStudnetCollege = "";
        this.searchStudnetMajor = "";
        this.searchStudnetGrade = "";
        this.searchStudnetClass = "";
        if (data.length == 1){
          this.searchStudnetCollege = data[0];
        }else if (data.length == 2){
          this.searchStudnetCollege = data[0];
          this.searchStudnetMajor = data[1];
        }else if (data.length == 3){
          this.searchStudnetCollege = data[0];
          this.searchStudnetMajor = data[1];
          this.searchStudnetGrade = data[2];
        }else if (data.length == 4){
          this.searchStudnetCollege = data[0];
          this.searchStudnetMajor = data[1];
          this.searchStudnetGrade = data[2];
          this.searchStudnetClass = data[3];
        }
        this.pageStudent = 1;
        this.initStudent();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init(data);
      },
      searchStudent(data){
        this.searchStudnetKey = data.input;
        this.page = 1;
        this.initStudent();
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        let url = "";
        let studnetArray = [];
        let params = {

        };
        //临时用，需求未确定
        if (studnetArray.length == 0){
          MessageWarning(this.$t("请选择学生"));
          return;
        }
        url = common.circular_add;
        //params = this.$qs.stringify(params);
        this.drawerLoading = true;
        this.$axios.post(url, params, {dataType: 'stringfy'}).then(res => {
          if (res.data.code == 200){
            this.drawerVisible = false;
            this.initStudent();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.drawerLoading = false;
        });
      },
      cancelFlowDrawDialog(){
        this.dialogFlowSetting = false;
      },
      okFlowDrawDialog(event){

      },
      cancelDialog(){
        this.dialogSetting = false;
      },
      okDialog(){
        let url = '';
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.dialogLoading = true;
            let params = {
              categoryName: this.form.name,
            };
            if (this.form.id != ''){
              params['id'] = this.form.id;
            }
            url = common.server_type_save;
            params = this.$qs.stringify(params);
            this.$axios.post(url, params).then(res => {
              if (res.data.code == 200){
                this.dialogSetting = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.dialogLoading = false;
            });
          }
        });
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.header-block{
  height: 40px;
  line-height: 40px;
}
</style>
