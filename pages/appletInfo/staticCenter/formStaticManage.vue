<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">统计表管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <div class="layout-inline">
              <el-dropdown class="layout-item" trigger="click">
                <el-button type="primary" size="small">
                  {{$t("创建统计表")}}<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="addInitData($event, true)">PC端数据模版</el-dropdown-item>
                  <el-dropdown-item @click.native="addInitData($event, false)">H5端数据模版</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <my-cascader :props="{ checkStrictly: true }" class="layout-item" ref="SelectorDept" size="small" width-style="160" :clearable="true" :sel-value="searchCommDeptData" type="4" sub-type="" @change="handleCascaderChange($event)"></my-cascader>
            </div>
          </el-col>
          <el-col :span="12" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称')" @click="search"></MyInputButton>
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
            prop="permission_name"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.stat_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.stat_name}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('创建时间')">
            <template slot-scope="scope">
              <span>{{$moment(scope.row.create_time).format("YYYY-MM-DD HH:mm")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('部门/院系')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.department_names ? scope.row.department_names : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.department_names ? scope.row.department_names : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('模版类型')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.form_name ? scope.row.form_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.web_type ? $t("PC模版") : $t("H5模版")}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-cog margin-right-5 color-grand" @click="settingInfo(scope.row)"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" @right-close="cancelDrawDialog" :visible="drawerVisible" size="85%" :title="title">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="24">
              <div class="layout-inline">
                <span class="tab-class font-bold layout-item">
                  {{title}}
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content">
        <template v-if="titleType == true">
          <pc-static-template ref="pcRef"></pc-static-template>
        </template>
      </div>

      <div slot="footer" class="padding-lr-10">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" :loading="btnLoading" @click="okDrawDialog()">
          {{$t("确定")}}
        </el-button>
      </div>
    </drawer-layout-right>


    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
import mixin from "~/utils/mixins";
import LayoutTb from "~/components/Layout/LayoutTb";
import MyInputButton from "~/components/search/MyInputButton";
import MyPagination from "~/components/MyPagination";
import DialogNormal from "~/components/utils/dialog/DialogNormal";
import MyNormalDialog from "~/components/utils/dialog/MyNormalDialog";
import DrawerRight from "~/components/utils/dialog/DrawerRight";
import {common} from "~/utils/api/url";
import {setChildren, MessageSuccess, MessageError, MessageWarning} from "~/utils/utils";
import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
import appFormSetValidater from "~/utils/validater/appFormSetValidater";
import MyCascader from "~/components/utils/select/MyCascader";
import PcStaticTemplate from "~/components/form/PCStaticTemplate";
import MySelect from "~/components/MySelect";

export default {
  mixins: [mixin, appFormSetValidater],
  components: {
    MySelect,
    PcStaticTemplate,
    MyCascader,
    DrawerLayoutRight, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight},
  data(){
    return {
      drawerVisible: false,
      drawerLoading: false,
      visibleConfim: false,
      dialogLoading: false,
      btnLoading: false,
      refreshTeacherStatus: false,
      refreshStudentStatus: false,
      tableData: [],
      searchKey: '',
      departmentPath: '',
      teacherArray: [],
      approverUsers: [],
      roleList: [],
      errorTeacher: '',
      roleOptions: [],
      title: '',
      titleType: '',
      searchCommDeptData: [],
      staticFormList: [],
      searchStaticForm: '',
      form: {
        id: '',
        name: '',
        des: '',
        roleType: 0,
        roleOprLook: false,
        roleOprDel: false,
        roleOprSubmit: false,
        roleOprImOrEx: false,
        roleTeachers: false,
        roleStudents: false,
        roleUsers: [],
        roleUserGroup: [],
        enable: true,
        permissionContent: '',
        permissionContentArray: [],
        approverTeacherId: [],
        approverStudentId: [],
        roleList: []
      },
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
        searchKey: this.searchKey,
        departmentPath: this.departmentPath
      };
      this.$axios.get(common.static_appinfo_form_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    initFormList(){
      let params = {
        page: 1,
        num: 9999
      };
      this.$axios.get(common.static_appinfo_form_page, {params: params}).then(res => {
        if (res.data.data){
          let array = [];
          for (let i = 0; i < res.data.data.list.length; i++) {
            array.push({
              label: res.data.data.list[i].stat_name,
              value: res.data.data.list[i].id
            });
          }
          this.staticFormList = array;
        }
      });
    },
    addInitData(item, type){
      this.titleType = type;
      this.title = type ? this.$t("PC端数据配置") : this.$t("H5端数据配置");
      //this.initFormList();
      this.drawerVisible = true;
    },
    settingInfo(data){

    },
    editInfo(data){
      this.titleType = data.web_type;
      this.title = data.web_type ? this.$t("PC端数据配置") : this.$t("H5端数据配置");
      this.form = {

      };

      this.drawerVisible = true;
    },
    deleteInfo(item){
      this.form.id = item.id;
      this.visibleConfim = true;
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
    search(data){
      this.searchKey = data.input;
      this.page = 1;
      this.init();
    },
    changeFormType(data){

    },
    handleSearchChange(data, type){
      switch (type) {
        case 1:
          this.searchStaticForm = data;
          break;
          break;
      }
    },
    handleCascaderChange(data){
      this.departmentPath = data[data.length-1];
      this.page = 1;
      this.init();
    },
    closeDrawerDialog(event){
      this.closeDialog();
      if (this.$refs['pcRef']){
        this.$refs.pcRef.closePcDialog();
      }
      this.drawerVisible = false;
    },
    cancelDrawDialog(){
      this.drawerVisible = false;
    },
    closeDialog(event){
      this.form = {
        id: '',
        name: '',
        des: '',
        roleType: 0,
        roleOprLook: false,
        roleOprDel: false,
        roleOprSubmit: false,
        roleOprImOrEx: false,
        roleTeachers: false,
        roleStudents: false,
        roleUsers: [],
        roleUserGroup: [],
        enable: true,
        permissionContent: '',
        permissionContentArray: [],
        approverTeacherId: [],
        approverStudentId: [],
        roleList: [],
      };
      this.errorTeacher = '';
      this.teacherArray = [];
      this.approverUsers = [];
      if (this.$refs['form']){
        this.$refs['form'].resetFields();
      }
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        id: this.form.id,
      }
      url = common.static_appinfo_form_del;
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
    handleCancelChange(data) {
      this.visibleConfim = false;
    },
    okDrawDialog(event){
      let url = '';
      this.$refs['formRole'].validate((valid) => {
        if (valid) {
          let roleList = [];
          for (let i = 0; i < this.form.roleList.length; i++){
            if (this.form.roleList[i].length == 2){
              roleList.push(this.form.roleList[i]);
            }
          }
          let params = {
            //formId: this.formId.id,
            permissionType: this.form.roleType,
            permissionCondition1: this.form.roleOprLook,
            permissionCondition2: this.form.roleOprDel,
            permissionCondition3: this.form.roleOprImOrEx,
            permissionStudentSwitch: this.form.roleStudents,
            permissionTeacherSwitch: this.form.roleTeachers,
            permissionName: this.form.name,
            enable: this.form.enable,
            des: this.form.des,
            roleContent: roleList.length > 0 ? JSON.stringify(roleList) : ""
          };
          let contentArray = [];
          for (let i = 0 ; i < this.form.permissionContentArray.length; i++){
            contentArray.push(this.form.permissionContentArray[i].user_id);
          }
          params['permissionContent'] = contentArray.join();
          if (this.form.id != ""){
            params['id'] = this.form.id;
          }
          url = common.server_form_template_permission_save;
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(url, params, {loading: false}).then(res => {
            if (res.data.code == 200) {
              this.drawerVisible = false;
              this.init();
              MessageSuccess(res.data.desc);
            } else {
              MessageError(res.data.desc);
            }
            this.btnLoading = false;
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
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.block-item-bg{
  border-radius: 5px;
  background: #FFFFFF;
  padding: 10px;
}
</style>
