<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">部门信息</template>

      <div slot="tab">
        <el-row>
<!--          <el-col :span="12">-->
<!--            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInitData($event, 'main')">{{$t("添加组织")}}</el-button>-->
<!--            <el-button size="small" type="warning" plain  icon="el-icon-notebook-2" @click="uploadOrganization($event)">{{$t("导入组织")}}</el-button>-->
<!--          </el-col>-->
          <el-col :span="24" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('部门名称')" @click="search"></MyInputButton>
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
            prop="department_no"
            :label="$t('编号')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_name"
            :label="$t('名称')">
          </el-table-column>
          <el-table-column
            align="center"
            prop="department_no"
            :label="$t('角色管理')">

            <template slot-scope="scope">
              <span v-if="scope.row.userList && scope.row.userList.length == 0">--</span>
              <div class="color-text-default moon-content-text-ellipsis-class" v-for="(item, index) in scope.row.userList" :key="index" v-if="scope.row.userList.length > 0">
                <label>{{item.role_name}}</label>
                <el-popover
                  placement="left"
                  width="150"
                  trigger="click">

                  <div style="max-height: 300px;overflow-y: auto">
                    <template v-if="item.real_name != '' && item.real_name != null">
                      <div v-for="(itemList, indexList) in item.real_name.split(',')" :key="indexList" class="margin-bottom-5">
                        <el-tag size="mini">
                          <div class="moon-content-text-ellipsis-class" style="max-width: 100px;">{{itemList}}</div>
                        </el-tag>
                      </div>
                    </template>
                  </div>
                  <span slot="reference" class="color-muted font-size-12 moon-content-text-ellipsis-class" style="display: inline-block; max-width: 100px; position: relative; top: 7px;cursor: default">({{item.real_name}})</span>
                </el-popover>
                <span @click="editInfo($event,item, scope.row)"><i class="fa fa-edit color-success"></i></span>
                <span @click="delInfo($event,item, scope.row)"><i class="fa fa-trash color-danger"></i></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-plus-circle margin-right-5 color-success" @click="addInitData(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-tb>

    <drawer-layout-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible"  size="600px" :title="$t('角色设置')">
      <div slot="content">
        <div>
          <div class="color-muted margin-top-5">
          <span>
            <label class="title-block-tag"></label>
            <label class="title-block-text color-warning">{{$t("服务设置")}}</label>
          </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-form label-width="120px">
              <el-form-item :label="$t('部门编号')">
                <span class="color-muted">{{form.no}}</span>
              </el-form-item>
              <el-form-item :label="$t('部门名称')">
                <span class="color-muted">{{form.name}}</span>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="margin-top-10">
          <div class="color-muted">
            <span>
              <label class="title-block-tag"></label>
              <label class="title-block-text color-warning">{{$t("角色设置")}}</label>
            </span>
          </div>
          <div class="block-item-bg font-size-12">
            <el-form :model="form" :rules="rules" ref="form" label-width="120px">
              <el-form-item :label="$t('角色名称')" prop="roleName">
                <el-input v-model="form.roleName" size="small" class="width-300"></el-input>
              </el-form-item>
              <el-form-item :label="$t('选择老师')">
                <el-popover
                  popper-class="custom-popper-class-form"
                  placement="left"
                  width="700"
                  trigger="click"
                  @show="handleShowTeacher(1)">
                  <div>
                    <teacher-tree-and-list ref="popverTeacherRef" user-type="user" :sel-arr="teacherArray" set-type="check" @select="handleSelUser($event, 1)"></teacher-tree-and-list>
                  </div>
                  <el-button slot="reference" type="success" plain size="small" @click="loadingShow(1)">
                    <i v-if="refreshTeacherStatus == true" class="fa fa-refresh fa-spin"></i>
                    {{$t("添加老师")}}
                  </el-button>
                </el-popover>
                <span>{{$t("人数")}}: {{approverUsers.length}}</span>
                <div><span class="color-danger font-size-12">{{errorTeacher}}</span></div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>

      <div slot="footer">
        <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
        <el-button size="small" type="primary" @click="okDrawDialog()">
          <i class="el-icon-loading" v-if="dialogLoading"></i>
          {{$t("确定")}}
        </el-button>
      </div>
    </drawer-layout-right>


    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

  </div>
</template>

<script>
import mixins from "../../utils/mixins";
import LayoutTb from "../../components/Layout/LayoutTb";
import MyInputButton from "../../components/search/MyInputButton";
import MyPagination from "../../components/MyPagination";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
import DrawerRight from "../../components/utils/dialog/DrawerRight";
import {common} from "../../utils/api/url";
import {setChildren, MessageSuccess, MessageError, MessageWarning} from "../../utils/utils";
import DrawerLayoutRight from "~/components/utils/dialog/DrawerLayoutRight";
import deptInfoValidater from "~/utils/validater/deptInfoValidater";

export default {
  mixins: [mixins, deptInfoValidater],
  components: {DrawerLayoutRight, LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight},
  data(){
    return {
      drawerVisible: false,
      drawerLoading: false,
      visibleConfim: false,
      dialogLoading: false,
      refreshTeacherStatus: false,
      tableData: [],
      searchKey: '',
      teacherArray: [],
      approverUsers: [],
      errorTeacher: '',
      form: {
        id: '',
        name: '',
        no: '',
        oldRoleName: '',
        deptId: '',
        roleName: '',
        userList: '',
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
        departmentName: this.searchKey
      };
      this.$axios.get(common.organize_role_page, {params: params}).then(res => {
        if (res.data.data){
          let array = [];
          for (let i = 0; i < res.data.data.list.length; i++){
            if (res.data.data.list[i].department_path != ""){
              array.push(res.data.data.list[i]);
            }
          }
          this.tableData = array;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    addInitData(item){
      this.form = {
        name: item.department_name,
        no: item.department_no,
        deptId: item.id
      };
      this.drawerVisible = true;
    },
    editInfo(event, item, row){
      let userArr = item.user_id ? item.user_id.split(",") : [];
      let teacherArray = [];
      for (let i = 0; i < userArr.length; i++){
        teacherArray.push({
          user_id: userArr[i]
        });
      }
      this.form = {
        id: row.id,
        no: item.department_no,
        deptId: row.id,
        oldRoleName: item.role_name,
        roleName: item.role_name,
        userList: teacherArray,
      };
      this.approverUsers = teacherArray;
      this.teacherArray = teacherArray;
      this.drawerVisible = true;
    },
    delInfo(event, item, row){
      this.form.deptId = row.id;
      this.form.roleName = item.role_name;
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
    handleShowTeacher(type){
      setTimeout(()=>{
        if (type == 1){
          this.$refs.popverTeacherRef._handleOpen();
        }
      },800);
    },
    handleSelUser(data, type){
      if (type == 1){
        this.teacherArray = data;
      }
      this.approverUsers = this.teacherArray;
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
        no: '',
        oldRoleName: '',
        deptId: '',
        roleName: '',
        userList: '',
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
        deptId: this.form.deptId,
        roleName: this.form.roleName
      }
      url = common.organize_role_del;
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
      this.errorTeacher = '';
      this.$refs['form'].validate((valid) => {
        if (valid) {
          let array = [];
          if (this.teacherArray.length == 0){
            this.errorTeacher = this.$t("请选择老师");
            return;
          }
          for (let i = 0; i < this.teacherArray.length; i++){
            array.push(this.teacherArray[i].user_id);
          }

          let params = {
            oldRoleName: '',
            deptId: this.form.deptId,
            roleName: this.form.roleName,
            userIds: array.join(),
          }

          if (this.form.id != ""){
            params['oldRoleName'] = this.form.oldRoleName
          }

          this.dialogLoading = true;
          params = this.$qs.stringify(params)
          this.$axios.post(common.organize_role_save, params, {loading: false}).then(res => {
            if (res.data.code == 200){
              this.drawerForm = false;
              this.init();
              this.closeDialog();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.dialogLoading = false;
            this.drawerVisible = false;
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
