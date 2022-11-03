<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">统计表管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <div class="layout-inline">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInitData($event)">{{$t("创建统计表")}}</el-button>
              <my-cascader :props="{ checkStrictly: true }" class="layout-item" ref="SelectorDeptSearch" size="small" width-style="160" :clearable="true" :sel-value="searchCommDeptData" type="4" sub-type="" @change="handleCascaderChange($event)"></my-cascader>
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
              <el-popover trigger="hover" placement="left">
                <div class="text-center">
                  <div v-if="scope.row.department_names != '' && scope.row.department_names != null" style="max-height: 200px;overflow-y: auto">
                    <div v-for="(item, index) in scope.row.department_names.split(',')" :key="index">
                      <span class="font-size-12">{{item}}</span>
                    </div>
                  </div>
                  <div v-else>--</div>
                </div>
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
                <div class="text-center">{{scope.row.web_type ? $t("PC模版") : $t("H5模版")}}</div>
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

    <drawer-layout-right @changeDrawer="closeDrawerDialog" @right-close="cancelDrawDialog" :visible="drawerAddInfo" size="600px" :title="$t('统计表设置')">
      <div slot="content">
        <div>
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("基础信息")}}</label>
            </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative;">
            <el-form :model="formStatic" :rules="staticRules" ref="formStatic" label-width="120px">
              <el-form-item :label="$t('名称')" prop="name">
                <el-input v-model="formStatic.name" size="small" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('类型')" prop="name">
                <my-select size="small" :clearable="true" :sel-value="formStatic.type" :options="typeList" width-style="300" @change="handleSelect($event, 1)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('部门/院系')" prop="name">
                <div>
                  <el-radio-group v-model="formStatic.collegeAndDeptType" @change="handleSelect($event, 3)">
                    <el-radio label="0">部门</el-radio>
                    <el-radio label="1">院系</el-radio>
                  </el-radio-group>
                </div>
                <my-cascader ref="SelectorCollege" size="small" :sel-value="formStatic.collegeAndDept" :props="{multiple: true}" :type="formStatic.collegeAndDeptType == 0 ? '4' : '1'" :sub-type="formStatic.collegeAndDeptType == 1 ? '1' : 'id'" width-style="300" @change="handleSelect($event, 2)"></my-cascader>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("权限成员")}}</label>
            </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative;">
            <div class="padding-lr-10">
              <div>
                <div class="margin-top-5">
                  <span class="color-muted margin-right-10">{{$t("成员范围")}}: </span>
                  <el-checkbox v-model="formStatic.roleStudents" @change="changeFormStudent"><span class="font-size-12">{{$t("所有学生")}}</span></el-checkbox>
                  <el-checkbox v-model="formStatic.roleTeachers" @change="changeFormTeacher"><span class="font-size-12">{{$t("所有老师")}}</span></el-checkbox>
                </div>
              </div>

              <div class="margin-top-10">
                <div class="margin-top-10">
                  <!--                <el-button size="mini"><span class="font-size-12">{{$t("组织部门")}}(0)</span></el-button>-->
                  <!--                <el-button size="mini"><span class="font-size-12">{{$t("班级")}}(0)</span></el-button>-->
                  <span class="color-muted margin-right-10">{{$t("组织范围")}}: </span>
                  <el-popover
                    popper-class="custom-popper-class-form"
                    placement="top"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(1)">
                    <div>
                      <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :group-id="formStatic.id" :sel-arr="formStatic.permissionContentArray" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
                    </div>
                    <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                      <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                      {{$t("教师")}}
                    </el-button>
                  </el-popover>

                  <el-popover
                    popper-class="custom-popper-class-form"
                    placement="top"
                    width="700"
                    trigger="click"
                    @show="handleShowTeacher(2)">
                    <div>
                      <student-tree-and-list-no-page ref="popverStudentRef" :group-id="formStatic.id" :sel-arr="formStatic.permissionContentArray" set-type="check" @select="handleSelUser($event, 2)"></student-tree-and-list-no-page>
                    </div>
                    <el-button slot="reference" type="success" plain size="small" @click="loadingShow(2)">
                      <i v-if="refreshStudentStatus == true" class="fa fa-refresh fa-spin"></i>
                      {{$t("学生")}}
                    </el-button>
                  </el-popover>

                  <span>{{$t("人数")}}: {{approverUsers.length}}</span>
                </div>
              </div>
              <div class="margin-top-10">
                <div class="layout-inline font-size-12" style="position: relative;">
                  <span class="layout-item color-muted margin-right-10">{{$t("院系角色")}}: </span>
                  <el-select size="small" style="width: 300px" v-model="formStatic.collegeRole" multiple @change="handleUserType">
                    <el-option
                      v-for="item in fiterTeacherRoleTreeType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="margin-top-10">
                <div class="layout-inline font-size-12" style="position: relative;">
                  <span class="layout-item color-muted margin-right-10">{{$t("部门角色")}}: </span>
                  <my-cascader class="layout-item" :clearable="true" ref="SelectorDept" :props="{multiple: true}" size="small" width-style="300" :sel-value="formStatic.roleList" type="5" sub-type="" @change="handleDeptChange($event)"></my-cascader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div slot="footer" class="padding-lr-10">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" :loading="btnLoading" @click="okFormDrawDialog()">
          {{$t("确定")}}
        </el-button>
      </div>
    </drawer-layout-right>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" @opened="openedForm" @right-close="cancelDrawDialog" :visible="drawerVisible" size="85%" :title="title">
      <div slot="title">
        <div class="header-block padding-lr-10">
          <el-row>
            <el-col :span="24">
              <div class="layout-inline">
                <span class="tab-class font-bold layout-item">
                  {{title}}
                </span>
                <el-button type="warning" size="small" @click="appClick">{{$t("移动端模版预览")}}</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="content">
        <template v-if="titleType == true">
          <pc-static-template ref="pcRef" :static-id="staticId" :static-pc-form-data="staticPcFormData"></pc-static-template>
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
import formStaticValidater from "~/utils/validater/formStaticValidater";

export default {
  mixins: [mixin, formStaticValidater],
  components: {
    MySelect,
    PcStaticTemplate,
    MyCascader,
    DrawerLayoutRight, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight},
  data(){
    return {
      drawerAddInfo: false,
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
      staticPcFormList: [],
      staticPcFormData: [],
      formId: '',
      staticId: '',
      typeList: [
        {"label": 'PC端模板', value: true},
        // {"label": 'H5端模板', value: false}
      ],
      formStatic:{
        id: '',
        name: '',
        type: '',
        collegeAndDeptType: '0',
        collegeAndDept: [],
        roleStudents: [],
        roleTeachers: [],
        permissionContent: '',
        permissionContentArray: [],
        approverTeacherId: [],
        approverStudentId: [],
        roleList: [],
        collegeRole: [],
        deptRole: [],
        roleUsers: [],
      },
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
      this.drawerAddInfo = true;
    },
    openedForm(){
      if(this.$refs['pcRef']){
        this.$refs['pcRef'].initAsync();
      }
    },
    async settingInfo(data){
      this.titleType = data.web_type;
      this.title = data.web_type ? this.$t("PC端数据配置") : this.$t("H5端数据配置");
      //this.initFormList();

      let params = {
        id: data.id
      };
      await this.$axios.get(common.static_appinfo_form_info, {params: params}).then(res => {
        if (res.data.code == 200){
          for (let i = 0; i < res.data.data.unitList.length; i++){
            if (i == 0){
              delete res.data.data.unitList[i]['campusId'];
              delete res.data.data.unitList[i]['filterRules'];
              delete res.data.data.unitList[i]['groupRule'];
              delete res.data.data.unitList[i]['groupType'];
              delete res.data.data.unitList[i]['relaFormId'];
              delete res.data.data.unitList[i]['relaFromField1'];
              delete res.data.data.unitList[i]['relaFromField2'];
            }else if(i == 1 || i == 2 || i == 3 || i == 4 || i == 6){
              delete res.data.data.unitList[i]['campusId'];
              delete res.data.data.unitList[i]['relaFromField2'];
              res.data.data.unitList[i]['relaFromField1'] = (res.data.data.unitList[i]['relaFromField1'] != undefined && res.data.data.unitList[i]['relaFromField1'] != "") ? JSON.parse(res.data.data.unitList[i]['relaFromField1']) : [];

              if (res.data.data.unitList[i]['filterRules'] == "" || res.data.data.unitList[i]['filterRules'] == null){
                delete res.data.data.unitList[i]['filterRules'];
              }else {
                res.data.data.unitList[i]['filterRules'] = (res.data.data.unitList[i]['filterRules'] != undefined && res.data.data.unitList[i]['filterRules'] != "") ? JSON.parse(res.data.data.unitList[i]['filterRules']) : "";
              }
            }else if(i == 7){
              delete res.data.data.unitList[i]['campusId'];
              delete res.data.data.unitList[i]['relaFromField2'];
              delete res.data.data.unitList[i]['filterRules'];

              res.data.data.unitList[i]['relaFromField1'] = (res.data.data.unitList[i]['relaFromField1'] != undefined && res.data.data.unitList[i]['relaFromField1'] != "") ? JSON.parse(res.data.data.unitList[i]['relaFromField1']) : [];
            }else if(i == 5){
              delete res.data.data.unitList[i]['campusId'];

              res.data.data.unitList[i]['relaFromField1'] = (res.data.data.unitList[i]['relaFromField1'] != undefined && res.data.data.unitList[i]['relaFromField1'] != "") ? JSON.parse(res.data.data.unitList[i]['relaFromField1']) : [];
              res.data.data.unitList[i]['relaFromField2'] = (res.data.data.unitList[i]['relaFromField2'] != undefined && res.data.data.unitList[i]['relaFromField2'] != "") ? JSON.parse(res.data.data.unitList[i]['relaFromField2']) : [];
              if (res.data.data.unitList[i]['filterRules'] == "" || res.data.data.unitList[i]['filterRules'] == null){

                delete res.data.data.unitList[i]['filterRules'];
              }else {
                res.data.data.unitList[i]['filterRules'] = (res.data.data.unitList[i]['filterRules'] != undefined && res.data.data.unitList[i]['filterRules'] != "") ? JSON.parse(res.data.data.unitList[i]['filterRules']) : "";
              }
            }else {
              delete res.data.data.unitList[i]['campusId'];
            }
          }
          this.staticPcFormData = res.data.data.unitList;
        }
      });

      this.staticId = data.id + "";
      this.drawerVisible = true;
    },
    editInfo(data){
      let params = {
        id: data.id
      };
      this.$axios.get(common.static_appinfo_form_info, {params: params, loading:false}).then(res => {

        this.formStatic = {
          id: res.data.data.id,
          name: res.data.data.statName,
          type: res.data.data.webType,
          collegeAndDeptType: res.data.data.departmentType == true ? "1" : "0",
          collegeAndDept: [],
          roleStudents: res.data.data.permission.permissionStudentSwitch,
          roleTeachers: res.data.data.permission.permissionTeacherSwitch,
          permissionContent: '',
          permissionContentArray: [],
          approverTeacherId: [],
          approverStudentId: [],
          roleList: res.data.data.permission.roleContent != null && res.data.data.permission.roleContent != ""  ? JSON.parse(res.data.data.permission.roleContent) : [],
          collegeRole: res.data.data.permission.collegeContent != null && res.data.data.permission.collegeContent != ""  ? res.data.data.permission.collegeContent.split(",") : [],
          deptRole: [],
          roleUsers: [],
        };
        let permissionUserIds = [];
        this.form.permissionContentArray = [];
        this.approverUsers = [];
        if (res.data.data.permission.userContent != ""){
          this.approverUsers = res.data.data.permission.userContent.split(",");
          permissionUserIds = res.data.data.permission.userContent.split(",");
          for (let i = 0; i < permissionUserIds.length; i++){
            this.formStatic.permissionContentArray.push({
              user_id: permissionUserIds[i]
            });
          }
        }

        let collegeAndDeptList = [];
        if (res.data.data.departmentType == true){
          for (let i = 0; i < res.data.data.collegeList.length; i++){
            collegeAndDeptList.push([res.data.data.collegeList[i].collegeId]);
          }
        }else {
          for (let i = 0; i < res.data.data.deptList.length; i++){
            if (res.data.data.deptList[i]['departmentIds'] && res.data.data.deptList[i]['departmentIds'].length > 0){
              collegeAndDeptList.push(JSON.parse(res.data.data.deptList[i]['departmentIds']));
            }
          }
        }

        this.formStatic.collegeAndDept = collegeAndDeptList;
      });

      this.drawerAddInfo = true;
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
      this.drawerAddInfo = false;
      this.drawerVisible = false;
    },
    cancelDrawDialog(){
      this.drawerAddInfo = false;
      this.drawerVisible = false;
    },
    closeDialog(event){
      this.formStatic = {
        id: '',
        name: '',
        type: '',
        collegeAndDeptType: '1',
        collegeAndDept: [],
        roleStudents: [],
        roleTeachers: [],
        permissionContent: '',
        permissionContentArray: [],
        approverTeacherId: [],
        approverStudentId: [],
        roleList: [],
        collegeRole: [],
        deptRole: [],
        roleUsers: [],
      };
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
      this.resetCasadeSelector('selectorDept');
      this.resetCasadeSelector('SelectorCollege');
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
    handleSelect(event,type){
      if (type == 1){
        let typeStr = type == "1" ? true : false;
        this.formStatic.type = typeStr;
      }else if (type == 2){
        this.formStatic.collegeAndDept = event;
      }else if (type == 3){
        this.formStatic.collegeAndDept = [];
        this.formStatic.collegeAndDeptType = event;
      }
    },
    handleUserType(event){
      this.formStatic.collegeRole = event;
    },
    handleDeptChange(data){
      this.formStatic.roleList = data;
    },
    changeFormTeacher(data){
      this.formStatic.roleTeachers = data;
    },
    changeFormStudent(data){
      this.formStatic.roleStudents = data;
    },
    loadingShow(type){
      let timer = null;
      clearTimeout(timer);
      switch (type) {
        case 1:
          this.refreshTeacherStatus = true;
          timer = setTimeout(() => {
            this.refreshTeacherStatus = false;
            clearTimeout(timer);
          },1000);
          break;
        case 2:
          this.refreshStudentStatus = true;
          timer = setTimeout(() => {
            this.refreshStudentStatus = false;
            clearTimeout(timer);
          },1000);
          break;
      }
    },
    handleShowTeacher(type){
      setTimeout(()=>{
        if (type == 1){
          this.$refs.popverTeacherRef._handleOpen();
        }else if (type == 2){
          this.$refs.popverStudentRef._handleOpen();
        }
      },800);
    },
    handleSelUser(data, type){
      if (type == 1){
        this.formStatic.approverTeacherId = data;
        let studentArr = this.formStatic.approverStudentId ? this.formStatic.approverStudentId : [];
        this.formStatic.roleUsers = studentArr.concat(this.formStatic.approverTeacherId);
      }else if (type == 2){
        this.form.approverStudentId = data;
        let tesacherArr = this.formStatic.approverTeacherId ? this.formStatic.approverTeacherId : [];
        this.formStatic.roleUsers = tesacherArr.concat(this.formStatic.approverStudentId);
      }
      this.formStatic.roleUsers = [...new Set(this.formStatic.roleUsers)];
      //console.log(this.form.roleUsers);
      this.approverUsers = this.formStatic.roleUsers;
    },
    okDrawDialog(event){
      let url = '';
      this.staticPcFormList = [];
      let pcRef = this.$refs.pcRef;
      if (pcRef.staticPcFormList.length == 0){
        MessageWarning(this.$t("检测到统计表单信息未设置完全，请设置"));
        return;
      }else if (pcRef.staticPcFormList[0].filterType == "" || pcRef.staticPcFormList[0].unitName == ""){
        MessageWarning(this.$t("请设置搜索栏信息"));
        return;
      }else if (pcRef.staticPcFormList[1].relaFormId == "" || pcRef.staticPcFormList[1].relaFromField1.length == 0 || pcRef.staticPcFormList[1].unitName == ""){
        MessageWarning(this.$t("请设置顶部卡片信息"));
        return;
      }else if (pcRef.staticPcFormList[2].relaFormId == "" || pcRef.staticPcFormList[2].relaFromField1.length == 0 || pcRef.staticPcFormList[2].unitName == ""){
        MessageWarning(this.$t("请设置顶部卡片信息"));
        return;
      }else if (pcRef.staticPcFormList[3].relaFormId == "" || pcRef.staticPcFormList[3].relaFromField1.length == 0 || pcRef.staticPcFormList[3].unitName == ""){
        MessageWarning(this.$t("请设置顶部卡片信息"));
        return;
      }else if (pcRef.staticPcFormList[4].relaFormId == "" || pcRef.staticPcFormList[4].relaFromField1.length == 0 || pcRef.staticPcFormList[4].unitName == ""){
        MessageWarning(this.$t("请设置顶部卡片信息"));
        return;
      }else if (pcRef.staticPcFormList[5].relaFormId == "" || pcRef.staticPcFormList[5].relaFromField1.length == 0 || pcRef.staticPcFormList[5].relaFromField2.length == 0 || pcRef.staticPcFormList[5].unitName == ""){

        MessageWarning(this.$t("请设置柱状图信息"));
        return;
      }else if (pcRef.staticPcFormList[6].relaFormId == "" || pcRef.staticPcFormList[6].relaFromField1.length == 0 || pcRef.staticPcFormList[6].unitName == ""){
        MessageWarning(this.$t("请设置环形图信息"));
        return;
      }else if (pcRef.staticPcFormList[7].relaFormId == "" || pcRef.staticPcFormList[7].relaFromField1.length == 0 || pcRef.staticPcFormList[7].groupType === ""){

        MessageWarning(this.$t("请设置表格信息"));
        return;
      }
      //console.log(pcRef.staticPcFormList);
      let params = {
        list: pcRef.staticPcFormList
      };
      url = common.static_appinfo_form_unit_save;
      //params = this.$qs.stringify(params);
      this.btnLoading = true;
      this.$axios.post(url, params, {loading: false, dataType: 'stringfy'}).then(res => {
        if (res.data.code == 200) {
          this.drawerVisible = false;
          this.$refs.pcRef.closePcDialog();
          this.init();
          MessageSuccess(res.data.desc);
        } else {
          MessageError(res.data.desc);
        }
        this.btnLoading = false;
      });
    },
    okFormDrawDialog(){
      this.$refs['formStatic'].validate((valid) => {
        if (valid) {
          let params = {
            statName: this.formStatic.name,
            webType: this.formStatic.type,
            departmentType: this.formStatic.collegeAndDeptType,
            departmentIds: this.formStatic.collegeAndDept.length > 0 ? JSON.stringify(this.formStatic.collegeAndDept) : "",
            permissionStudentSwitch: this.formStatic.roleStudents,
            permissionTeacherSwitch: this.formStatic.roleTeachers,
            //userContent: this.formStatic.name,
            collegeContent: this.formStatic.collegeRole.length > 0 ? this.formStatic.collegeRole.join() : "",
            roleContent: this.formStatic.roleList.length > 0 ? JSON.stringify(this.formStatic.roleList) : "",
          };
          let contentArray = [];
          for (let i = 0 ; i < this.formStatic.permissionContentArray.length; i++){
            contentArray.push(this.formStatic.permissionContentArray[i].user_id);
          }
          params['userContent'] = contentArray.join();
          if (this.formStatic.id != ""){
            params['id'] = this.formStatic.id;
          }
          params = this.$qs.stringify(params);
          this.btnLoading = true;
          this.$axios.post(common.static_appinfo_form_save, params, {loading: false}).then(res => {
            if (res.data.code == 200) {
              this.drawerAddInfo = false;
              this.init();
              MessageSuccess(res.data.desc);
            } else {
              MessageError(res.data.desc);
            }
            this.btnLoading = false;
          });
        }
      });
    },
    appClick(){
      this.$refs.pcRef.h5Dialog = true;
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
