<template>
  <div class="container">
    <layout-tb>
      <template slot="tag">学年学期</template>

      <div slot="tab">
        <el-row>
          <el-col :span="12">
            <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInitData($event, 'main')">{{$t("添加学年")}}</el-button>
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
          style="width: 100%"
          @cell-click="cellClick">
          <el-table-column
            prop="year"
            :label="$t('学年/学期')"
            width="180">
          </el-table-column>
          <el-table-column
            prop="beginTime"
            :label="$t('开始时间')"
            width="180">
          </el-table-column>
          <el-table-column
            prop="endTime"
            :label="$t('结束时间')">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-plus-circle margin-right-5 color-success" @click="addInitData(scope.row)"></i>
              <i class="fa fa-edit margin-right-5 color-grand" @click="addInitData(scope.row)"></i>
              <i class="fa fa-trash color-danger" @click="handleDelete(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>

        <div class="layout-right-footer text-right">
          <MyPagination class="layout-pagination"></MyPagination>
        </div>
      </div>
    </layout-tb>

    <dialog-normal :visible="modalVisible" :title="$t('学年设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form ref="form" :model="form" label-width="140px">
          <el-form-item :label="$t('学年名称')">
            <el-input v-model="form.name" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('开始时间')">
            <el-input v-model="form.no" class="width-260"></el-input>
          </el-form-item>
          <el-form-item :label="$t('结束时间')">
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
  export default {
    mixins: [mixins],
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
        form: {
          oprType: '',
          id: '',
          name: '',
          no: '',
          realName: ''
        },
        tableData: []
      }
    },
    created() {
      for(let i = 0; i < 30; i++){
        this.tableData.push(
          {
            id: i+1,
            year: '2016-05-02',
            beginTime: '王小虎',
            endTime: '上海市普陀区金沙江路 1518 弄',
            children: [{
              id: "item" + (i +1),
              year: '2016-05-01',
              beginTime: '王小虎',
              endTime: '上海市普陀区金沙江路 1519 弄'
            }]
          }
        );
      }
    },
    methods: {
      addInitData(event, type){
        this.form.oprType = '';
        if (type && type == "main"){
          this.form.oprType = 'main';
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
        this.drawerVisible = false;
      },
      closeDialog(event){
        console.log(this.modalVisible);
        console.log(this.drawerVisible);
      },
      okDialog(event){
        this.dialogLoading = true;
        setTimeout(() => {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
          this.dialogLoading = false;
          this.modalVisible = false;
        },2000)
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
        console.log(111,this.drawerVisible);
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
        this.subDetail = row.name;
        this.visibleConfim = true;
      },
      handleOkChange(data) {
        this.dialogLoading = true;
        setTimeout(() => {
          this.visibleConfim = false;
          this.dialogLoading = false;
        },2000)
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
        if (column.property == 'year'){
          this.$refs.refTable.toggleRowExpansion(row);
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
</style>
