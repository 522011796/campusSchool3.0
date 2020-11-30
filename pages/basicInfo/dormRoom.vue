<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">宿舍信息</span>
        </div>
        <MyElTree type="2" sub-type="2" @node-click="nodeClick"></MyElTree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="12">
              <el-col :span="12">
                <el-button size="small" type="primary"  icon="el-icon-plus" @click="addInfo($event)">{{$t("添加宿舍")}}</el-button>
                <el-button size="small" type="warning" plain  icon="el-icon-notebook-2" @click="uploadClassRoom($event)">{{$t("导入宿舍")}}</el-button>
              </el-col>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-10">
          <el-table
            :data="tableData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            :max-height="tableHeight2.height"
            style="width: 100%">
            <el-table-column
              prop="dormitory_no"
              :label="$t('编号')"
              align="center">
            </el-table-column>
            <el-table-column
              prop="floor_num"
              :label="$t('楼层')"
              align="center">
            </el-table-column>
            <el-table-column
              :label="$t('类型')"
              align="center">

              <template slot-scope="scope">
                <span>{{dormTypeInfo(scope.row.type)}}</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('人数')"
              align="center">
              <template slot-scope="scope">
                <span>{{scope.row.has_people_num}}</span>
                /
                <span>{{scope.row.people_num}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              :label="$t('操作')"
              align="center"
              width="80">
              <template slot-scope="scope">
                <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('教室设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form ref="form" :rules="rules" :model="form" label-width="140px">
          <el-form-item label="宿舍楼/楼层" prop="buildData">
            <my-cascader ref="SelectorBuild" :disabled="form.id != ''" width-style="260" :sel-value="form.buildData" type="2" sub-type="2" @change="handleCascaderChange($event)"></my-cascader>
          </el-form-item>
          <el-form-item label="房间编号" prop="roomNo">
            <el-input v-model="form.roomNo" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="宿舍类型" prop="type">
            <my-select width-style="260" :sel-value="form.type" :options="dormroomType" @change="handleChangeSelect($event)"></my-select>
          </el-form-item>
          <el-form-item label="宿舍人数" prop="personTotal">
            <el-input v-model="form.personTotal" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="宿舍朝向">
            <el-input v-model="form.arrow" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="宿舍单价" prop="price">
            <el-input v-model="form.price" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remarks" class="width-260"></el-input>
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

    <drawer-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" :hide-footer="true" size="400px" :title="$t('导入宿舍')" action="https://jsonplaceholder.typicode.com/posts/" download-file="xxx" @right-close="cancelDrawDialog" @ok="okDrawDialog" @cancel="closeDrawDialog">

    </drawer-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
import {common} from "../../utils/api/url";
import DialogNormal from "../../components/utils/dialog/DialogNormal";
import MyNormalDialog from "../../components/utils/dialog/MyNormalDialog";
import DrawerRight from "../../components/utils/dialog/DrawerRight";
import MyCascader from "../../components/utils/select/MyCascader";
import MySelect from "../../components/MySelect";
import {dormTypeText, MessageError, MessageSuccess} from "../../utils/utils";
import mixins from "../../utils/mixins";
import dormroomValidater from "../../utils/validater/dormroomValidater";

export default {
  mixins: [mixins, dormroomValidater],
  components: {DialogNormal,MyNormalDialog,DrawerRight,MyCascader,MySelect},
  data(){
    return {
      tableData: [],
      searchBuildId: '',
      searchFloorNum: '',
      modalVisible: false,
      modalVisible: false,
      dialogLoading: false,
      visibleConfim: false,
      drawerVisible: false,
      drawerLoading: false,
      subTitle: '',
      subDetail: '',
      form: {
        id: '',
        buildName: '',
        buildData: [],
        floor: '',
        roomNo: '',
        areaTotal: '0',
        personTotal: '',
        type: '',
        video: false,
        buildId: "",
        buildingName: "",
        floorNum: "",
        arrow: '',
        price: '',
        reamrks: '',
        goodsNum: '',
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
        buildId: this.searchBuildId,
        floorNum: this.searchFloorNum
      };
      this.$axios.get(common.dormroom_page, {params: params}).then(res => {
        if (res.data.data){
          this.tableData = res.data.data.list;
          this.total = res.data.data.totalCount;
          this.num = res.data.data.num;
          this.page = res.data.data.currentPage;
        }
      });
    },
    addInfo(){
      this.modalVisible = true;
    },
    editInfo(row){
      this.form = {
        id: row.id,
        buildName: row.build_name,
        buildData: [row.build_id, row.floor_num],
        floor: '',
        roomNo: row.dormitory_no,
        areaTotal: '0',
        personTotal: row.people_num,
        type: ''+row.type,
        video: false,
        buildId: row.build_id,
        buildingName: row.build_name,
        floorNum: row.floor_num,
        arrow: row.room_orient,
        price: row.room_price,
        remarks: row.room_des,
        goodsNum: row.people_num,
      };
      this.modalVisible = true;
    },
    deleteInfo(row){
      this.form.id = row.id;
      this.subDetail = row.dormitory_no;
      this.visibleConfim = true;
    },
    nodeClick(data){
      this.searchBuildId = "";
      this.searchFloorNum = "";
      if (data.unit == 6){
        this.searchBuildId = data.id;
        this.searchFloorNum = data.floorNum;
      }else if (data.unit == 7){
        this.searchBuildId = data.buildId;
        this.searchFloorNum = data.floorNum;
      }
      this.init();
    },
    search(){

    },
    dormTypeInfo(val){
      return dormTypeText(val);
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
    okDialog(event){
      let url = "";
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogLoading = true;
          let params = {
            dormitoryNo: this.form.roomNo,
            area: this.form.areaTotal,
            type: this.form.type,
            peopleNum: this.form.personTotal,
            goodsNum: this.form.personTotal,
            status: 1,
            roomPrice: this.form.price,
            roomOrient: this.form.arrow,
            roomDes: this.form.remarks,
            floorNum: this.form.buildData[1],
            buildId: this.form.buildData[0],
          };
          if (this.form.id != ""){
            url = common.dormroom_update;
            params['dormitoryId'] = this.form.id;
          }else {
            url = common.dormroom_add;
          }
          params = this.$qs.stringify(params);
          this.$axios.post(url, params).then(res => {
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
    closeDialog(event) {
      this.form = {
        id: '',
        buildName: '',
        buildData: [],
        floor: '',
        roomNo: '',
        areaTotal: '0',
        personTotal: '',
        type: '',
        video: false,
        buildId: "",
        buildingName: "",
        floorNum: "",
        arrow: '',
        price: '',
        reamrks: '',
        goodsNum: '',
      };
      this.subTitle = "";
      this.$set(this.form, 'buildData', []);
      this.resetCasadeSelector('SelectorBuild');
      if (this.$refs['form']) {
        this.$refs['form'].resetFields();
      }
    },
    cancelDialog(){
      this.modalVisible = false;
    },
    cancelDrawDialog(){
      this.drawerVisible = false;
    },
    closeDrawerDialog(event){
      this.drawerVisible = event;
    },
    handleChangeSelect(data){
      this.form.type = data;
    },
    closeDrawDialog(event){
      this.drawerVisible = false;
    },
    okDrawDialog(event){
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
    handleOkChange(data) {
      this.dialogLoading = true;
      let url = "";
      let params = {
        dormitoryId: this.form.id
      };
      url = common.dormroom_delete;
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
    handleCascaderChange(data){
      this.form.buildName = this.$refs.SelectorBuild.$refs.cascaderSelector.getCheckedNodes()[0].pathLabels[0];
      this.form.buildData = data;
    },
    uploadClassRoom(row){
      this.drawerVisible = true;
    }
  }
}
</script>

<style scoped>
.container {

}
</style>
