<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">WEB权限</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加角色")}}</el-button>
          </el-col>
          <!--<el-col :span="12" class="text-right">
            <my-input-button size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('学院名称')" @click="search"></my-input-button>
          </el-col>-->
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
            prop="role_no"
            :label="$t('编号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="role_name"
            :label="$t('名称')">
          </el-table-column>
          <el-table-column
            align="center"
            :label="$t('状态')">
            <template slot-scope="scope">
              <span v-if="scope.row.enabled" class="color-success">{{$t("启用")}}</span>
              <span v-if="!scope.row.enabled" class="color-danger">{{$t("禁用")}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-cog margin-right-5 color-grand" @click="setInfo(scope.row)"></i>
              <i class="fa fa-users margin-right-5 color-warning" @click="userInfo(scope.row)"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <!--<my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>-->
          <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('权限设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <div v-if="oprType != 'set'">
            <el-form-item :label="$t('角色编号')" prop="roleNo">
              <el-input v-model="form.roleNo" class="width-260"></el-input>
            </el-form-item>
            <el-form-item :label="$t('角色名称')" prop="roleName">
              <el-input v-model="form.roleName" class="width-260"></el-input>
            </el-form-item>
          </div>
          <el-form-item v-if="oprType == 'add' || oprType == 'set'" :label="$t('权限')">
            <div class="web-auth-tree-border">
              <el-tree
                ref="customRoleMenuRef"
                class="margin-left-20"
                :data="roleGourpMenuList"
                show-checkbox
                node-key="id">
              </el-tree>
            </div>
          </el-form-item>
          <el-form-item v-if="oprType == 'edit'" :label="$t('状态')">
            <el-switch v-model="form.enable" active-color="#13ce66" inactive-color="#ff4949" @change="handleChangeEnable($event)"></el-switch>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" size="550px" :title="$t('成员设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <el-popover
            placement="top"
            width="700"
            trigger="click"
            @show="handleShowTeacher(1)">
            <div>
              <teacher-tree-and-list ref="popverPartRef" :sel-arr="form.partUserIds" set-type="check" @select="handleSelUser($event,1)"></teacher-tree-and-list>
            </div>
            <el-button slot="reference" size="small" type="primary"  icon="el-icon-user">{{$t("添加成员")}}</el-button>
          </el-popover>
          <span>
            <el-button size="small" type="warning" :disabled="form.partUserIds.length == 0" @click="saveRoleEmployee">
              <span class="color-white">{{$t("保存成员设置")}}</span>
            </el-button>
          </span>
        </div>
        <table class="custom-table margin-top-10">
          <tr>
            <th width="30%">{{$t("姓名")}}</th>
            <th width="20%">{{$t("工号")}}</th>
            <th width="20%">{{$t("手机")}}</th>
            <th width="20%">{{$t("部门 ")}}</th>
            <th width="10%">{{$t("操作 ")}}</th>
          </tr>
          <tbody v-loading="drawerLoading" :element-loading-text="$t('加载中...')" element-loading-spinner="el-icon-loading">
            <tr v-for="(item, index) in tableTeacherData" :key="item.id">
              <td>
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{item.real_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{item.real_name}}
                  </div>
                </el-popover>
              </td>
              <td>
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{item.job_num}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{item.job_num}}
                  </div>
                </el-popover>
              </td>
              <td>
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{item.phone}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{item.phone}}
                  </div>
                </el-popover>
              </td>
              <td>
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{item.depart_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{item.depart_name}}
                  </div>
                </el-popover>
              </td>
              <td>
                <i class="fa fa-trash color-danger" @click="deleteEmployee(item)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
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
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="删除操作将会自动解除拥有该角色的用户的操作权限。是否继续删除？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
    <my-normal-dialog :visible.sync="visibleEmployeeConfim" :loading="dialogLoading" title="提示" content="移除后用户将无法继续操作该角色权限的菜单。是否继续移除？" @ok-click="handleEmployeeOkChange" @cancel-click="handleCancelChange" @close="closeVisibleDialog"></my-normal-dialog>

  </div>
</template>

<script>
  import {common} from "../../utils/api/url";
  import mixins from "../../utils/mixins";
  import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
  import DialogNormal from "../../components/utils/dialog/DialogNormal";
  import {insterestText, MessageError, MessageSuccess, MessageWarning, paddingChecked} from "../../utils/utils";
  import buildValidater from "../../utils/validater/buildValidater";
  import webAuthValidater from "../../utils/validater/webAuthValidater";
  export default {
    mixins: [mixins, webAuthValidater],
    components: {MyNormalDialog,DialogNormal},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        tableData: [],
        tableTeacherData: [],
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        visibleEmployeeConfim: false,
        subTitle: '',
        roleList: [],
        roleGourpMenuList: [],
        roleSetRoleList: [],
        oprType: '',
        form: {
          id: '',
          roleId: '',
          enable: true,
          roleNo: '',
          roleName: '',
          partUserIds: []
        },
        employeeId: ''
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num
        };
        this.$axios.get(common.web_auth_group_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initTeacher(id){
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          roleId: id
        };

        this.$axios(common.web_auth_group_role_user_list, {params: params}).then(res => {
          if (res.data.data){
            this.tableTeacherData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }
          this.drawerLoading = false;
        });
      },
      initRoleMenu(){
        let params = {
          campusName: this.campusName
        };
        this.roleGourpMenuList = [];
        let roleGroupArr = [];
        this.$axios.get('http://campus.9451.com/campusmanage/appapi/system-menu', {params: params}).then(res => {
          let menuArr = [];
          if (res.data.data) {
            for (let i = 0; i < res.data.data.length; i++) {
              menuArr.push(res.data.data[i].key);
            }

            let params = {
              menuNo: menuArr.join()
            };
            //获取角色拥有的所有列表
            this.$axios.get(common.menuno_role_list3, {params: params}).then(resSub => {
              if (resSub.data.data){
                for (let i = 0; i < res.data.data.length; i++) {
                  roleGroupArr.push({
                    key: res.data.data[i].key,
                    name: res.data.data[i].name,
                    label: res.data.data[i].name,
                    children: []
                  });
                  for (let j = 0; j < resSub.data.data.length; j++){
                    if (resSub.data.data[j].menu_no == res.data.data[i].key && resSub.data.data[j].level == 1){
                      roleGroupArr[i]['children'].push({
                        key: resSub.data.data[j].menu_no,
                        name: resSub.data.data[j].title,
                        label: resSub.data.data[j].title,
                        id: resSub.data.data[j].id,
                        children: []
                      });
                    }
                  }
                }

                for (let i = 0; i < roleGroupArr.length; i++) {
                  for (let z = 0; z < roleGroupArr[i].children.length; z++) {
                    for (let j = 0; j < resSub.data.data.length; j++){
                      if (resSub.data.data[j].pId == roleGroupArr[i].children[z].id && resSub.data.data[j].level == 2){
                        roleGroupArr[i].children[z]['children'].push({
                          key: resSub.data.data[j].menu_no,
                          name: resSub.data.data[j].title,
                          label: resSub.data.data[j].title,
                          id: resSub.data.data[j].id,
                          pId: resSub.data.data[j].pId
                        });
                      }
                    }
                  }
                }
                this.roleGourpMenuList = roleGroupArr;

                if (this.oprType == 'set'){
                  this.initRoleSetMenu();
                }
              }
            });
          }
        });
      },
      initRoleSetMenu(){
        let roleMenuArr = [];
        let params = {
          id: this.form.id
        };
        //获取角色拥有的所有列表
        this.$axios.get(common.web_auth_group_role_menu_list, {params: params}).then(res => {
          if (res.data.data) {
            for (let i = 0; i < res.data.data.length; i++){
              roleMenuArr.push(res.data.data[i].menu_id);
              if (this.$refs.customRoleMenuRef){
                this.$refs.customRoleMenuRef.setChecked(res.data.data[i].menu_id, true, false);
              }
            }
            /*if (this.$refs.customRoleMenuRef){
              this.$refs.customRoleMenuRef.setCheckedKeys(roleMenuArr, false);
            }*/
          }
        });
      },
      userInfo(row){
        this.drawerLoading = true;
        this.form.id = row.id;
        this.pageStudent = 1;
        this.totalStudent = 20;
        setTimeout(() => {
          this.initTeacher(row.id);
        },800);
        this.drawerVisible = true;
      },
      addInfo(){
        this.oprType = 'add';
        setTimeout(() => {
          this.initRoleMenu();
        },800);
        this.modalVisible = true;
      },
      setInfo(row){
        this.oprType = 'set';
        this.form['id'] = row.id;
        setTimeout(() => {
          this.initRoleMenu();
        },800);
        this.modalVisible = true;
      },
      editInfo(row){
        this.oprType = 'edit';
        this.form = {
          id: row.id,
          roleNo: row.role_no,
          roleName: row.role_name,
          enable: row.enabled,
          partUserIds: []
        };
        this.modalVisible = true;
      },
      deleteInfo(row){
        this.form.id = row.id;
        //this.subTitle = row.role_name;
        this.visibleConfim = true;
      },
      deleteEmployee(row){
        this.employeeId = row.user_id;
        this.form.roleId =row.user_role_id ;
        this.visibleEmployeeConfim = true;
      },
      insterestInfo(val){
        return insterestText(val);
      },
      okDialog(event){
        let url = "";
        let menuIds = [];
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              roleNo: this.form.roleNo,
              roleName: this.form.roleName
            };
            if (this.oprType == 'edit' && this.form.id != ""){
              url = common.web_auth_group_edit;
              params['id'] = this.form.id;
              params['enabled'] = this.form.enable;
            }else{
              if (this.oprType == 'add'){
                url = common.web_auth_group_add;
              }else if (this.oprType == 'set'){
                params['id'] = this.form.id;
                url = common.web_auth_group_edit_role;
              }
              let customRoleMenu = this.$refs.customRoleMenuRef.getCheckedNodes(false, true);
              if (customRoleMenu.length == 0){
                MessageWarning(this.$t("请选择权限"));
                return;
              }
              for (let i = 0; i < customRoleMenu.length; i++){
                if (customRoleMenu[i].id){
                  menuIds.push(customRoleMenu[i].id);
                }
              }
              params['menuIds'] = menuIds.join();
            }
            params = this.$qs.stringify(params);
            this.dialogLoading = true;
            this.$axios.post(url, params, {loading: false}).then(res => {
              if (res.data.code == 200){
                this.modalVisible = false;
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
          roleId: '',
          enable: true,
          roleNo: '',
          roleName: '',
          partUserIds: []
        };
        this.subTitle = "";
        this.roleGourpMenuList = [];
        this.employeeId = "";
        this.pageStudent = 1;
        this.totalStudent = 20;
        if (this.$refs['form']){
          this.$refs['form'].resetFields();
        }
      },
      closeVisibleDialog(event){
        this.subTitle = "";
        this.employeeId = "";
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        let url = "";
        let params = {
          id: this.form.id
        };
        url = common.web_auth_group_del;
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
      handleEmployeeOkChange(){
        let url = "";
        let params = {
          id: this.form.roleId,
          userId: this.employeeId
        };
        url = common.web_auth_group_role_user_del;
        //params = this.$qs.stringify(params);
        this.dialogLoading = true;
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.code == 200){
            this.initTeacher(this.form.id);
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleEmployeeConfim = false;
          this.dialogLoading = false;
        });
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
        this.visibleEmployeeConfim = false;
      },
      handleChangeEnable(data){
        this.form.enable = data;
      },
      cancelDrawDialog(){
        this.form = {
          id: '',
          enable: true,
          roleNo: '',
          roleName: '',
          partUserIds: []
        };
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        this.drawerVisible = false;
      },
      closeDrawerDialog(event){
        this.form = {
          id: '',
          enable: true,
          roleNo: '',
          roleName: '',
          partUserIds: []
        };
        if (this.$refs['popverPartRef']){
          this.$refs.popverPartRef._handleResetChange();
        }
        this.drawerVisible = event;
      },
      handleShowTeacher(type){
        if (type == 1){
          this.$refs.popverPartRef._handleOpen();
        }
      },
      handleSelUser(data, type){
        if (type == 1){
          this.form.partUserIds = data;
        }
      },
      saveRoleEmployee(){
        let userIds = [];
        if (this.form.partUserIds.length == 0){
          return;
        }
        for (let i = 0; i < this.form.partUserIds.length; i++){
          userIds.push(this.form.partUserIds[i].user_id);
        }
        let params = {
          roleId: this.form.id,
          userIds: userIds.join()
        };
        let url = common.web_auth_group_role_user_add;
        params = this.$qs.stringify(params);
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.initTeacher(this.form.id);
            this.form.partUserIds = [];
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.visibleConfim = false;
          this.dialogLoading = false;
        });
      },
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initTeacher(this.form.id);
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initTeacher(this.form.id);
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .web-auth-tree-border{
    border-radius: 5px;
    border: 1px solid #DCDFE6;
    padding: 10px 0px;
  }
</style>
