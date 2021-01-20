<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">宿舍设置</span>
        </div>
        <my-el-tree type="2" sub-type="2" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-top-tab margin-top-5">
          <el-row>
            <el-col :span="24">
              <div class="text-right">
                <my-input-button size="small" plain width-class="width: 200px" type="success" :clearable="true" :placeholder="$t('房间号')" @click="search"></my-input-button>
              </div>
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
                <i class="fa fa-cog margin-right-5 color-grand" @click="setInfo(scope.row)"></i>
                <i class="fa fa-edit margin-right-5 color-grand" @click="editInfo(scope.row)"></i>
                <i class="fa fa-trash color-danger" @click="deleteInfo(scope.row)"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <dialog-normal top="10vh" :visible="modalVisible" :title="$t('教室设置')" @close="closeDialog" @right-close="cancelDialog">
      <div class="margin-top-10">
        <el-form ref="form" :rules="rules" :model="form" label-width="140px">
          <el-form-item label="宿舍朝向">
            <el-input v-model="form.arrow" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="宿舍单价" prop="price">
            <el-input v-model="form.price" class="width-260"></el-input>
          </el-form-item>
          <el-form-item label="关闭线上选房" prop="price">
            <el-switch v-model="form.choseLimit" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label="户型图" prop="price">
            <div class="layout-inline">
              <div class="layout-item" style="height: 50px;">
                <span class="room-photo" style="position: relative;margin-right: 10px" v-for="(item, index) in form.imgList" :key="index">
                  <i class="fa fa-close color-muted" style="position: absolute; right: -8px; top: -8px;" @click="delPhotos($event, index)"></i>
                  <img :src="item" class="img-class">
                </span>
              </div>
              <div class="layout-item" style="position: relative; top: -25px;">
                <upload-square class="layout-item" :action="uploadFileUrl" max-size="4" :data="{path: 'dormPhone'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                  <el-button size="small" type="primary" icon="el-icon-upload">{{$t("本地上传")}}</el-button>
                </upload-square>
              </div>
            </div>
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

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" :loading="drawerLoading" size="550px" :title="$t('管理员设置')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div>
          <my-input-button ref="teacher" size="small" plain width-class="width: 120px" type="success" :clearable="true" :placeholder="$t('老师名称')" @click="searchTeacher"></my-input-button>
        </div>
        <table class="custom-table margin-top-10">
          <tr>
            <th width="15%"></th>
            <th width="40%">{{$t("姓名")}}</th>
            <th width="10%">{{$t("工号")}}</th>
            <th width="20%">{{$t("手机")}}</th>
            <th width="15%">{{$t("性别")}}</th>
          </tr>
          <tbody v-loading="loadingList" :element-loading-text="$t('加载中...')" element-loading-spinner="el-icon-loading">
          <tr v-for="(item, index) in tableTeacherData" :key="item.id">
            <td>
              <my-check :sel-value="item._teacherId" @change="handleBoxChange($event, item, 1)"></my-check>
            </td>
            <td>{{item.real_name}}</td>
            <td>{{item.job_num}}</td>
            <td>{{item.phone}}</td>
            <td>
              <my-sex :sex="item.sex" tag="text"></my-sex>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <span class="color-danger">{{errorTips}}</span>
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>

    <my-normal-dialog :visible.sync="visibleConfim" :loading="dialogLoading" title="提示" content="确认需要删除该信息？" :detail="subDetail" @ok-click="handleOkChange" @cancel-click="handleCancelChange" @close="closeDialog"></my-normal-dialog>
  </div>
</template>

<script>
  import {common} from "../../../utils/api/url";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MySelect from "../../../components/MySelect";
  import {dormTypeText, inArray, MessageError, MessageSuccess, paddingChecked} from "../../../utils/utils";
  import mixins from "../../../utils/mixins";
  import dormroomValidater from "../../../utils/validater/dormroomValidater";
  import MyElTree from "../../../components/tree/MyElTree";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import MyInputButton from "../../../components/search/MyInputButton";

  export default {
    mixins: [mixins, dormroomValidater],
    components: {MyElTree, DialogNormal,MyNormalDialog,DrawerRight,MyCascader,MySelect,UploadSquare,MyInputButton},
    data(){
      return {
        tableData: [],
        tableTeacherData: [],
        searchBuildId: '',
        searchFloorNum: '',
        modalVisible: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        loadingList: false,
        subTitle: '',
        subDetail: '',
        errorTips: '',
        searchTeacherName: '',
        searchKey: '',
        uploadFileUrl: common.upload_file,
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
          teacherId: [],
          choseLimit: false,
          switch: true,
          imgList: [],
          roomPhotos: ""
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
        if (this.searchKey !== ""){
          params['dormitoryNo'] = this.searchKey;
        }
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
      setInfo(row){
        this.form.id = row.id;
        let teacher_id = !row.teacher_id ? [] : row.teacher_id.split(",");
        let photos = row.room_photos ? row.room_photos.split("|") : [];
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
          teacherId: teacher_id,
          choseLimit: row.chose_limit == 0 ? true : false,
          imgList: photos,
          roomPhotos: ""
        };
        this.tableTeacherData = [];
        setTimeout(() => {
          this.initTeacher();
        },800);
        this.drawerVisible = true;
      },
      initTeacher(){
        let params = {
          page: 1,
          num: 9999
        };
        params['realName'] = this.searchTeacherName;
        this.loadingList = true;
        this.$axios(common.teacher_list, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.page.list.length; i++){
              res.data.data.page.list[i]['_teacherId'] = false;
              paddingChecked(this.form.teacherId, res.data.data.page.list[i], 'user_id', '_teacherId');
            }
            this.tableTeacherData = res.data.data.page.list;
          }
          this.loadingList = false;
        });
      },
      editInfo(row){
        let teacher_id = !row.teacher_id ? [] : row.teacher_id.split(",");
        let photos = row.room_photos ? row.room_photos.split("|") : [];
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
          teacherId: teacher_id,
          choseLimit: row.chose_limit == 0 ? true : false,
          imgList: photos,
          roomPhotos: ""
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
      search(data){
        this.page = 1;
        this.searchKey = data.input;
        this.init();
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
            let arr = "";
            for (let i = 0; i < this.form.imgList.length; i++){
              if (i != this.form.imgList.length -1 ){
                arr += this.form.imgList[i] + "|";
              }else {
                arr += this.form.imgList[i];
              }
            }

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
              choseLimit: this.form.choseLimit == true ? 0 : 1,
              teacherId: this.form.teacherId.join(),
              roomPhotos: arr
            };
            if (this.form.id != ""){
              url = common.dormroom_update;
              params['dormitoryId'] = this.form.id;
            }else {
              url = common.dormroom_add;
            }
            params = this.$qs.stringify(params);
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
      okDrawDialog(event){
        let url = "";
        this.dialogLoading = true;
        let arr = "";
        for (let i = 0; i < this.form.imgList.length; i++){
          if (i != this.form.imgList.length -1 ){
            arr += this.form.imgList[i] + "|";
          }else {
            arr += this.form.imgList[i];
          }
        }
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
          choseLimit: this.form.choseLimit == true ? 1 : 0,
          teacherId: this.form.teacherId.join(),
          roomPhotos: arr
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
            this.drawerVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.dialogLoading = false;
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
          choseLimit: false,
          switch: true,
          imgList: [],
          roomPhotos: ""
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
          teacherId: [],
          choseLimit: false,
          switch: true,
          roomPhotos: ""
        };
        this.drawerVisible = event;
      },
      handleChangeSelect(data){
        this.form.type = data;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
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
      },
      searchTeacher(data){
        this.searchTeacherName = data.input;
        this.initTeacher();
      },
      handleBoxChange(event, item, type) {
        switch (type) {
          case 1:
            if (event) {//选中
              this.form.teacherId.push(item.user_id);
            } else {//取消选中
              let checked = inArray(item.user_id, this.form.teacherId);
              this.form.teacherId.splice(checked, 1);
            }
            break;
          case 2:
            this.form.choseLimit = event;
            break;
        }
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.imgList.push(res.data.url);
        }else {

        }
      },
      delPhotos(event, index){
        this.form.imgList.splice(index,1);
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .room-photo{
    height: 50px;
    width: 45px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-right: 5px;
    display: inline-block;
  }
</style>
