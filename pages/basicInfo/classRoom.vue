<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">教室管理</span>
        </div>
        <MyElTree type="3"></MyElTree>
      </div>

      <div slot="right">
        <div>
          <div>
            <el-row :gutter="8">
              <el-col :span="4">
                <div class="classroom-top-item">
                  <span><i class="fa fa-home"></i> {{$t("教室总数")}}: </span>
                  <span>0</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="classroom-top-item">
                  <span><i class="fa fa-home"></i> {{$t("多媒体教室")}}: </span>
                  <span>0</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="classroom-top-item">
                  <span><i class="fa fa-cubes"></i> {{$t("终端")}}: </span>
                  <span>0</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="classroom-top-item">
                  <span><i class="fa fa-mobile-phone"></i> {{$t("平板")}}: </span>
                  <span>0</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="classroom-top-item">
                  <span><i class="fa fa-video-camera"></i> {{$t("摄像头")}}: </span>
                  <span>0</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="classroom-top-item">
                  <span><i class="fa fa-id-badge"></i> {{$t("门禁")}}: </span>
                  <span>0</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="layout-right-tab margin-top-10">
          <el-row>
            <el-col :span="12">
              <el-button size="small" type="primary"  icon="el-icon-plus" @click="addClassRoom($event)">{{$t("添加教室")}}</el-button>
              <el-button size="small" type="warning" plain  icon="el-icon-notebook-2" @click="uploadClassRoom($event)">{{$t("导入教室")}}</el-button>
            </el-col>
            <el-col :span="12" class="text-right">
              <MyInputButton size="small" plain width-class="width: 150px" type="success" :clearable="true" :placeholder="$t('编号')" @click="search"></MyInputButton>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-table
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight.height"
            style="width: 100%">
            <el-table-column
              prop="date"
              :label="$t('楼层')"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              :label="$t('编号')"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              :label="$t('多媒体')">
            </el-table-column>
            <el-table-column
              fixed="right"
              :label="$t('操作')"
              width="80">
              <template slot-scope="scope">
                <i class="fa fa-edit margin-right-5 color-grand" @click="handleEdit(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="handleDelete(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <MyPagination class="layout-pagination"></MyPagination>
        </div>
      </div>
    </layout-lr>

    <dialog-normal :visible="classRoomeVisible" :title="$t('教室设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form ref="form" :model="form" label-width="140px">
          <el-form-item label="教学楼">
            <el-input v-model="form.buildName" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="楼层">
            <el-input v-model="form.floor" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="房间编号">
            <el-input v-model="form.roomNo" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="用途">
            <el-input v-model="form.use" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="多媒体">
            <el-switch
              v-model="form.video"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入教室')" action="https://jsonplaceholder.typicode.com/posts/" download-file="xxx" @right-close="cancelDrawDialog" @ok="okDrawDialog" @cancel="closeDrawDialog">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
import LayoutLr from "../../components/Layout/LayoutLr";
import MyElTree from "../../components/tree/MyElTree";
import MyInputButton from "../../components/search/MyInputButton";
import MyPagination from "../../components/MyPagination";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
import DrawerRight from "../../components/utils/dialog/DrawerRight";
import mixins from "../../utils/mixins";
import {common} from "../../utils/api/url";
export default {
  mixins: [mixins],
  components: {MyElTree,MyInputButton,MyPagination,LayoutLr,DialogNormal,MyNormalDialog,DrawerRight},
  data(){
    return {
      searchInputStyle: "width: 200px",
      classRoomeVisible: false,
      drawerVisible: false,
      visibleConfim: false,
      dialogLoading: false,
      subDetail: '',
      loading: false,
      drawerLoading: false,
      form: {
        id: '',
        buildName: '',
        floor: '',
        roomNo: '',
        areaTotal: '0',
        personTotal: '0',
        use: '',
        video: false
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {

  },
  methods: {
    addClassRoom(event){
      this.classRoomeVisible = true;
    },
    uploadClassRoom(event){
      this.drawerVisible = true;
    },
    cancelDialog(){
      this.classRoomeVisible = false;
    },
    cancelDrawDialog(){
      this.drawerVisible = false;
    },
    closeDialog(event){

    },
    closeDrawerDialog(event){
      console.log(event);
      this.drawerVisible = event;
    },
    okDialog(event){
      this.dialogLoading = true;
      setTimeout(() => {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        this.dialogLoading = false;
        this.classRoomeVisible = false;
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
      this.classRoomeVisible = true;
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
    }
  }
}
</script>

<style scoped>
.container {

}
.classroom-top-item{
  border: 1px solid #EBEEF5;
  border-radius: 2px;
  padding: 0px 10px;
  height: 40px;
  line-height: 40px;
  color: #606266;
  background: #f9f9f9;
}
</style>
