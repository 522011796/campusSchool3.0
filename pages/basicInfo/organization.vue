<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">组织机构</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInitData($event, 'main')">{{$t("添加组织")}}</el-button>
            <el-button size="small" type="warning" plain  icon="el-icon-notebook-2" @click="uploadOrganization($event)">{{$t("导入组织")}}</el-button>
          </el-col>
          <!--<el-col :span="12" class="text-right">
            <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('名称/编号')" @click="search"></MyInputButton>
          </el-col>-->
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
          style="width: 100%"
          @cell-click="cellClick">
          <el-table-column
            prop="department_name"
            :label="$t('名称')">
          </el-table-column>
          <el-table-column
            prop="dept_short_name"
            :label="$t('简称')">
          </el-table-column>
          <el-table-column
            prop="department_no"
            :label="$t('编号')">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-plus-circle margin-right-5 color-success" @click="addInitData(scope.row, 'sub')"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="addInitData(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="handleDelete(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <!--<MyPagination class="layout-pagination"></MyPagination>-->
          <span class="margin-right-10">{{$t("共")}} {{tableData.length}} {{$t("条")}}</span>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('组织设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form :model="form" :rules="rules" ref="form" label-width="140px">
          <el-form-item label="上级部门" v-if="form.oprType != 'main'">
            <span>{{form.superName}}</span>
          </el-form-item>
          <el-form-item label="组织名称" prop="name">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="组织编号" prop="no">
            <el-input v-model="form.no" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="组织简称" prop="realName">
            <el-input v-model="form.realName" class="width-260"></el-input>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" accept=".xls,.xlsx" :data="{all: true}" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入教室')" :action="uploadAction" :download-file="uploadFile" :result="uploadResult" :process="uploadProcess" @right-close="cancelDrawDialog" @success="uploadSuccess" @error="uploadError">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>

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
import {setChildren,MessageSuccess, MessageError} from "../../utils/utils";
import organizationValidater from "../../utils/validater/organizationValidater";

export default {
  mixins: [mixins, organizationValidater],
  components: {LayoutTb,MyInputButton,MyPagination,DialogNormal,MyNormalDialog,DrawerRight},
  data(){
    return {
      modalVisible: false,
      drawerVisible: false,
      visibleConfim: false,
      dialogLoading: false,
      loading: false,
      drawerLoading: false,
      subDetail: '',
      uploadFile: common.organization_file,
      uploadAction: common.organization_upload,
      uploadResult: {},
      uploadProcess: '',
      g_superId: '',
      tableData: [],
      form: {
        oprType: '',
        id: '',
        deptSuperId: '',
        superName: '',
        name: '',
        no: '',
        realName: ''
      },
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      let groupArr = [];
      let params = {
        superDeptId: 0
      };
      this.$axios.get(common.organization_url, {params: params}).then(res => {
        if (res.data.data){
          this.g_superId = res.data.data[0].id;;
          this.form.deptSuperId = res.data.data[0].id;
          this.tableData = setChildren(res.data.data[0].child_list, groupArr, 'child_list', 'children');
        }
      });
    },
    addInitData(event, type){
      this.form.oprType = '';
      if (type && type == "main"){
        this.form.deptSuperId = this.g_superId;
        this.form.oprType = 'main';
      }else if(type && type == "sub"){
        this.form = {
          deptSuperId: event.id,
          superName: event.department_name
        };
      }else {
        this.form = {
          oprType: '',
          id: event.id,
          deptSuperId: event.id,
          superName: event.department_name,
          name: event.department_name,
          no: event.department_no,
          realName: event.dept_short_name,
        };
      }
      this.modalVisible = true;
    },
    uploadOrganization(event){
      this.drawerVisible = true;
    },
    cancelDialog(){
      this.modalVisible = false;
    },
    cancelDrawDialog(){
      this.uploadProcess = '';
      this.uploadResult = {};
      this.drawerVisible = false;
    },
    closeDialog(event){
      this.form = {
        oprType: '',
        id: '',
        deptSuperId: '',
        name: '',
        departmentName: '',
        no: '',
        realName: '',
      };
      this.$refs['form'].resetFields();
    },
    closeDrawerDialog(event){
      this.uploadProcess = '';
      this.uploadResult = {};
      this.drawerVisible = event;
    },
    okDialog(event){
      let url = "";
      let params = {
        departmentNo: this.form.no,
        departmentName: this.form.name,
        deptShortName: this.form.realName,
        superDeptId: this.form.deptSuperId
      };
      if (this.form.id && this.form.id != ""){
        url = common.organization_update;
        params['organizeId'] = this.form.id;
      }else {
        url = common.organization_add;
      }
      params = this.$qs.stringify(params);

      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogLoading = true;
          this.$axios.post(url, params).then(res=>{
            if (res.data.code == 200){
              this.init();
              MessageSuccess(res.data.desc);
            }else {
              MessageError(res.data.desc);
            }
            this.dialogLoading = false;
            this.modalVisible = false;
          });
        }
      });
    },
    closeDrawDialog(event){
      this.drawerVisible = false;
    },
    okDrawDialog(event){
      console.log(222,this.drawerVisible);
      this.drawerLoading = true;
      setTimeout(() => {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        this.drawerLoading = false;
        this.drawerVisible = false;
      },2000)
    },
    handleEdit(row){
      this.modalVisible = true;
    },
    handleDelete(row){
      this.subDetail = row.department_name;
      this.form.id = row.id;
      this.visibleConfim = true;
    },
    handleOkChange(data) {
      this.dialogLoading = true;
      let params = {
        organizeId: this.form.id
      };
      params = this.$qs.stringify(params);
      this.$axios.post(common.organization_delete, params).then(res => {
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
    search(event){
      let params = {
        keys:'campusId,userType,campusType,userId,username,campusName,campusLogo,realName,externalSystemName,externalSystem,termId,externalSystemName,externalSystem'
      };
      this.$axios.get(common.session_url, {params: params}).then(res => {
        console.log(1);
      });
    },
    cellClick(row, column, cell, event){
      if (column.property == 'department_name'){
        this.$refs.refTable.toggleRowExpansion(row);
      }
    },
    uploadSuccess(res, file){
      this.uploadProcess = res.desc;
      if (res.data){
        this.uploadResult = res.data;
      }
    },
    uploadError(res, file){
      this.uploadProcess = res.data.data;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
</style>
