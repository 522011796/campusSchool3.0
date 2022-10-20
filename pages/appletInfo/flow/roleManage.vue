<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">权限管理</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInitData($event)">{{$t("添加权限组")}}</el-button>
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
            prop="id"
            :label="$t('编号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="permission_name"
            :label="$t('名称')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.permission_name}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.permission_name}}</span>
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
            :label="$t('描述')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.des ? scope.row.des : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.des ? scope.row.des : '--'}}</span>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('被引用表单')">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                <div class="text-center">{{scope.row.form_name ? scope.row.form_name : '--'}}</div>
                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                  <span>{{scope.row.form_name ? scope.row.form_name : '--'}}</span>
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

    <drawer-layout-right @changeDrawer="closeDrawerDialog" @opened="openedDialog" :visible="drawerVisible"  size="450px" :title="$t('角色设置')">
      <div slot="content">
        <div>
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("权限设置")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-form :model="form" :rules="rules" ref="formRole" label-width="60px">
              <el-form-item :label="$t('名称')" prop="name">
                <el-input v-model="form.name" size="small" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('描述')">
                <el-input v-model="form.des" type="textarea" row="3" size="small" class="width-300"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("权限类型")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative;padding:20px 10px !important;">
            <div>
              <el-radio-group v-model="form.roleType" @change="changeFormType">
                <el-radio :label="0">{{$t("表单使用")}}</el-radio>
                <el-radio :label="1">{{$t("数据统计")}}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>

        <div class="margin-top-20" v-if="form.roleType === 1">
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("操作权限")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative">
            <div>
              <el-checkbox v-model="form.roleOprLook" @change="changeFormOprLook"><span class="font-size-12">{{$t("查看")}}</span></el-checkbox>
              <el-checkbox v-model="form.roleOprDel" @change="changeFormOprDel"><span class="font-size-12">{{$t("删除")}}</span></el-checkbox>
              <el-checkbox v-model="form.roleOprImOrEx" @change="changeFormOprSubmit"><span class="font-size-12">{{$t("导入导出")}}</span></el-checkbox>
            </div>
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
            <div>
              <div>
                <span>{{$t("成员范围")}}: </span>
              </div>
              <div class="margin-top-5">
                <el-checkbox v-model="form.roleStudents" @change="changeFormStudent"><span class="font-size-12">{{$t("所有学生")}}</span></el-checkbox>
                <el-checkbox v-model="form.roleTeachers" @change="changeFormTeacher"><span class="font-size-12">{{$t("所有老师")}}</span></el-checkbox>
              </div>
            </div>
            <div class="margin-top-10">
              <div>
                <span>{{$t("组织范围")}}: </span>
              </div>
              <div class="margin-top-10">
                <!--                <el-button size="mini"><span class="font-size-12">{{$t("组织部门")}}(0)</span></el-button>-->
                <!--                <el-button size="mini"><span class="font-size-12">{{$t("班级")}}(0)</span></el-button>-->
                <el-popover
                  popper-class="custom-popper-class-form"
                  placement="top"
                  width="700"
                  trigger="click"
                  @show="handleShowTeacher(1)">
                  <div>
                    <teacher-tree-and-list-no-page ref="popverTeacherRef" user-type="user" :group-id="form.id" :sel-arr="form.permissionContentArray" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list-no-page>
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
                    <student-tree-and-list-no-page ref="popverStudentRef" :group-id="form.id" :sel-arr="form.permissionContentArray" set-type="check" @select="handleSelUser($event, 2)"></student-tree-and-list-no-page>
                  </div>
                  <el-button slot="reference" type="success" plain size="small" @click="loadingShow(2)">
                    <i v-if="refreshStudentStatus == true" class="fa fa-refresh fa-spin"></i>
                    {{$t("学生")}}
                  </el-button>
                </el-popover>

                <span>{{$t("人数")}}: {{approverUsers.length}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="margin-top-20">
          <div class="color-muted margin-top-5">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("角色选择")}}</label>
            </span>
          </div>
          <div class="block-item-bg font-size-12" style="position: relative;">
            <my-cascader class="layout-item" :clearable="true" ref="SelectorDept" :props="{multiple: true}" size="small" width-style="300" :sel-value="form.roleList" type="5" sub-type="" @change="handleCascaderChange($event)"></my-cascader>
          </div>
        </div>
      </div>

      <div slot="footer">
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

export default {
  mixins: [mixin, appFormSetValidater],
  components: {
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
      teacherArray: [],
      approverUsers: [],
      roleList: [],
      errorTeacher: '',
      roleOptions: [],
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
        searchKey: this.searchKey
      };
      this.$axios.get(common.server_form_template_permission_list, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    addInitData(item){
      this.drawerVisible = true;
    },
    editInfo(data){
      this.form = {
        id: data.id,
        name: data.permission_name,
        des: data.des,
        roleType: data.permission_type,
        roleOprLook: data.permission_condition1,
        roleOprDel: data.permission_condition2,
        roleOprSubmit: false,
        roleOprImOrEx: data.permission_condition3,
        roleTeachers: data.permission_teacher_switch,
        roleStudents: data.permission_student_switch,
        roleUsers: [],
        roleUserGroup: [],
        enable: true,
        permissionContent: data.permission_content,
        roleList: (data.role_content && data.role_content != "") ? JSON.parse(data.role_content) : []
      };

      let permissionUserIds = [];
      this.form.permissionContentArray = [];
      this.approverUsers = [];
      if (data.permission_content != ""){
        this.approverUsers = data.permission_content.split(",");
        permissionUserIds = data.permission_content.split(",");
        for (let i = 0; i < permissionUserIds.length; i++){
          this.form.permissionContentArray.push({
            user_id: permissionUserIds[i]
          });
        }
      }

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
      this.approverUsers = [];
      this.form.permissionContentArray = [];
      this.form.roleUsers = [];
      this.form.approverTeacherId = [];
      this.form.approverStudentId = [];
      this.form.roleType = data;
    },
    changeFormOprLook(data){
      this.form.roleOprLook = data;
    },
    changeFormOprDel(data){
      this.form.roleOprDel = data;
    },
    changeFormOprSubmit(data){
      this.form.roleOprSubmit = data;
    },
    changeFormTeacher(data){
      this.form.roleTeachers = data;
    },
    changeFormStudent(data){
      this.form.roleStudents = data;
    },
    handleCascaderChange(data){
      console.log(data);
      this.form.roleList = data;
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
        this.form.approverTeacherId = data;
        let studentArr = this.form.approverStudentId ? this.form.approverStudentId : [];
        this.form.roleUsers = studentArr.concat(this.form.approverTeacherId);
      }else if (type == 2){
        this.form.approverStudentId = data;
        let tesacherArr = this.form.approverTeacherId ? this.form.approverTeacherId : [];
        this.form.roleUsers = tesacherArr.concat(this.form.approverStudentId);
      }
      this.form.roleUsers = [...new Set(this.form.roleUsers)];
      //console.log(this.form.roleUsers);
      this.approverUsers = this.form.roleUsers;
    },
    openedDialog(){
      console.log(this.$refs.SelectorDept);
      if (this.$refs['SelectorDept']){
        this.$refs.SelectorDept.initInfo();
      }
    },
    closeDrawerDialog(event){
      this.closeDialog();
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
      this.resetCasadeSelector('selectorDept');
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
      url = common.server_form_template_permission_del;
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
