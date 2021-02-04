<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">教工信息</span>
        </div>
        <my-el-tree type="4" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="12">
              <div class="text-left">
                <tab-group-button size="small" :options='filterAuthOptions' @click="handleChange"></tab-group-button></div>
            </el-col>
            <el-col :span="12">
              <div class="text-right">
                <my-input-button size="small" plain width-class="width: 240px" type="success" :clearable="true" @click="search"></my-input-button>
              </div>
            </el-col>
          </el-row>
        </div>

        <div  class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20" @click.native="detailInfo(item)">
              <el-card :body-style="{padding: '10px 10px', height: '85px'}" style="position: relative">
                <div class="color-muted">
                  <el-row class="color-warning">
                    <el-col :span="12">
                      <i class="fa fa-id-card"></i>
                      <span>{{item.job_num}}</span>
                    </el-col>
                    <el-col :span="12">
                      <div class="text-right">
                        <!--<i class="fa fa-ellipsis-h"></i>-->
                        <my-auth-options :status="item.ai_sync_status"></my-auth-options>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="color-muted margin-top-10">
                  <el-row>
                    <el-col :span="8">
                      <div>
                        <img v-if="item.photo" :src="item.photo" key="contain" style="width: 40px; height: 40px" />
                        <el-avatar v-if="!item.photo" shape="square" :size="40" icon="el-icon-user-solid"></el-avatar>
                      </div>
                      <div class="color-success font-size-12 text-left">
                        <!--<span>
                          <label v-if="item.status">{{studentTeachStatusInfo(item.status, 'set')}}</label>
                          <label v-else>&#45;&#45;</label>
                        </span>-->
                        <span class="color-warning margin-left-10">
                          <label>{{studyTypeInfo(item.work_enjoy, 'set')}}</label>
                        </span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right">
                        <div class="moon-content-text-ellipsis-class">
                          {{item.real_name}}
                        </div>
                        <div class="moon-content-text-ellipsis-class">
                          {{item.depart_name}}
                        </div>
                        <div class="moon-content-text-ellipsis-class">
                          {{workTitleInfo(item.title, 'set')}}
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right  @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="$t('教师授权管理')" @right-close="cancelDrawDialog">
      <div slot="content" class="bg-white padding-lr-10 padding-tb-10" style="border-radius: 5px">
        <div>
          <div>
            <span class="title-tag"></span>
            <span class="color-warning" style="position: relative; top: -5px;">{{$t("人脸/卡号授权")}}</span>
          </div>
          <div class="margin-top-10">
            <div>
              <el-row>
                <el-col :span="12">
                  <span v-if="form.imgList.length == 0">&nbsp;</span>
                  <div v-else v-for="(item, index) in form.imgList" :key="index" style="height: 90px;position: relative;float: left;margin-right: 2px">
                    <i class="fa fa-window-close-o" style="position: absolute;right: 0px;top:-5px;" @click="deleteImg(index)"></i>
                    <img class="user-header-photo" :src="item" style="height:100%;">
                  </div>
                  <div class="moon-clearfix"></div>
                </el-col>
                <el-col :span="12" class="color-muted">
                  <div class="font-size-12">
                    <span>1、{{$t("请添加1-3张包含正脸的照片，且足够清晰")}}</span>
                  </div>
                  <div class="font-size-12 margin-top-5">
                    <span>2、{{$t("请确保照片为同一人")}}</span>
                  </div>
                  <div class="font-size-12 margin-top-5">
                    <span>3、{{$t("请在拍照按钮计时完成后再进行，拍照过程中请不要关闭该操作页和刷新页面")}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="margin-top-10">
              <el-row>
                <el-col :span="12">
                  <span>{{$t("授权卡号")}}</span>
                  <span>
                    <el-input size="small" v-model="form.cardNo" class="width-150"></el-input>

                    <el-popover
                      v-model="timerVisible"
                      placement="right"
                      width="500"
                      trigger="click">
                      <div style="position: relative">
                        <div class="popover-mask" v-if="maskShow">
                          <div class="text-center margin-top-30">
                            <el-progress type="circle" :percentage="loopTimerCount" :format="timerFormat"></el-progress>
                          </div>
                          <div class="text-center color-muted margin-top-10" style="font-weight: bold">
                            <span>{{$t("请将IC卡/身份证放在刷卡区域")}}</span>
                          </div>
                          <div class="text-center color-muted margin-top-20">
                            <a href="javascript:;" class="color-warning" @click="closeKeyModal">{{$t("手动关闭")}}</a>
                          </div>
                        </div>
                        <el-table height="300" :data="deviceAllData">
                          <el-table-column align="center" label="设备名称">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.name ? scope.row.name : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" prop="sn" label="序列号">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.sn ? scope.row.sn : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.sn ? scope.row.sn : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" label="类型">
                            <template slot-scope="scope">
                              <span>{{deviceTypeInfo(scope.row.type)}}</span>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" width="80" label="操作">
                            <template slot-scope="scope">
                              <div>
                                <i class="fa fa-cog color-grand margin-right-5" @click="selKeyDevice(scope.row)"></i>
                                <i v-if="keyDeviceSn == scope.row.sn" class="fa fa-check-circle-o color-success"></i>
                              </div>
                            </template>
                          </el-table-column>
                        </el-table>
                      </div>
                      <a slot="reference" href="javascript:;" class="color-warning font-size-12">
                        <i class="fa fa-cogs color-grand"></i>
                      </a>
                    </el-popover>
                  </span>
                </el-col>
                <el-col :span="12">
                  <div class="text-right layout-inline">
                    <upload-square class="layout-item" :limit="9999" :action="uploadFileUrl" max-size="2" :data="{path: 'studentPhone'}" accept=".png,.jpg,.jpeg" @success="uploadFileSuccess">
                      <el-button size="small" type="primary" icon="el-icon-upload">{{$t("本地上传")}}</el-button>
                    </upload-square>
                    <el-button :disabled="this.photoTimer != null" class="layout-item" size="small" type="warning" icon="el-icon-camera-solid" @click="photoChange">
                      <span v-if="this.photoTimer != null">({{loopTimerCount}})</span>
                      {{$t("拍照")}}
                    </el-button>

                    <el-popover
                      placement="right"
                      width="500"
                      trigger="click">
                      <div>
                        <el-table height="300" :data="deviceData">
                          <el-table-column align="center" label="设备名称">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.name ? scope.row.name : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.name ? scope.row.name : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" prop="sn" label="序列号">
                            <template slot-scope="scope">
                              <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                                <div class="text-center">{{scope.row.sn ? scope.row.sn : '--'}}</div>
                                <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                                  {{scope.row.sn ? scope.row.sn : '--'}}
                                </div>
                              </el-popover>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" label="类型">
                            <template slot-scope="scope">
                              <span>{{$t("一体机本地版")}}</span>
                            </template>
                          </el-table-column>
                          <el-table-column align="center" width="80" label="操作">
                            <template slot-scope="scope">
                              <i class="fa fa-cog color-grand margin-right-5" @click="selPhoteDevice(scope.row)"></i>
                              <i v-if="photoDeviceSn == scope.row.sn" class="fa fa-check-circle-o color-success"></i>
                            </template>
                          </el-table-column>
                        </el-table>
                      </div>
                      <a slot="reference" href="javascript:;" class="color-warning font-size-12">{{$t("选择设备")}}</a>
                    </el-popover>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <span class="color-danger">{{errorTips}}</span>
          <el-button size="small" @click="cancelDrawDialog">{{$t("取消")}}</el-button>
          <el-button size="small" type="primary" :loading="drawerLoading" @click="okDrawDialog">{{$t("设置")}}</el-button>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyInputButton from "../../../components/search/MyInputButton";
  import MySex from "../../../components/MySex";
  import DialogNormal from "../../../components/utils/dialog/DialogNormal";
  import MySelect from "../../../components/MySelect";
  import MyCascader from "../../../components/utils/select/MyCascader";
  import MyDatePicker from "../../../components/MyDatePicker";
  import MyNormalDialog from "../../../components/utils/dialog/MyNormalDialog";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import UploadSquare from "../../../components/utils/upload/UploadSquare";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import TabGroupButton from "../../../components/utils/button/TabGroupButton";
  import MyAuthOptions from "../../../components/utils/status/MyAuthOptions";
  import {
    deviceType,
    MessageError,
    MessageSuccess, MessageWarning,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo,
    workEnjoy,
    workTitle
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,UploadSquare,DrawerLayoutRight,TabGroupButton,MyAuthOptions},
    data(){
      return {
        tableData: [],
        statusList: [],
        teachList: [],
        deviceData: [],
        deviceAllData: [],
        bedData: [],
        userData: {},
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        maskShow: false,
        timerVisible: false,
        aiSyncStatus: '',
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchDormId: '',
        searchKey: '',
        searckDeviceKey: '',
        searchDeviceType: '',
        searchDept: '',
        searchStatus: '',
        searchTeach: '',
        subTitle: '',
        uploadProcess: '',
        uploadResult: {},
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        uploadFileUrl: common.upload_file,
        loopTimer: null,
        resultList: [],
        errorTips: '',
        photoDeviceSn: '',
        photoDeviceIp: '',
        photoDevicePwd: '',
        photoSign: '',
        photoTimer: null,
        keyTimer: null,
        keyDeviceSn: '',
        keySign: '',
        loopTimerCount: 60,
        selDormTips: '',
        form: {
          status: '',
          attnedType: '',
          classId: '',
          dormId: '',
          classData: [],
          dormData: [],
          cardNo: '',
          imgList: [],
          buildId: '',
          floorNum: '',
          dormId: '',
          bedId: '',
          searchDept: '',
          userId: ''
        }
      }
    },
    created() {
      this.init();
      this.initAllDevice();
      this.initDevice();
    },
    methods: {
      init(){
        let params = {
          page: this.page,
          num: this.num,
          departPath: this.searchDept,
          deleted: 0,
          aiSyncStatus: this.aiSyncStatus,
          searchKey: this.searchKey.input
        };
        //params = this.$qs.stringify(params);
        this.$axios.get(common.tearcher_info_setting_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initAllDevice(){
        let params = {
          page: 1,
          num: 9999,
          searchKey: this.searckDeviceKey,
          type: this.searchDeviceType
        };
        this.$axios.get(common.device_take_list, {params: params}).then(res => {
          if (res.data.data){
            this.deviceAllData = res.data.data;
          }
        });
      },
      initDevice(){
        let params = {
          page: 1,
          num: 9999,
          searchKey: this.searckDeviceKey,
          type: 3
        };
        this.$axios.get(common.device_take_list, {params: params}).then(res => {
          if (res.data.data){
            this.deviceData = res.data.data;
          }
        });
      },
      initBed(){
        let params = {
          page: 1,
          num: 9999,
          dormitoryId: this.searchDormId
        };
        this.$axios.get(common.bed_select_list, {params: params}).then(res => {
          if (res.data.data){
            this.bedData = res.data.data;
          }
        });
      },
      importInfo(){

      },
      exportInfo(row){

      },
      detailInfo(row){
        this.userData = row;
        this.form.cardNo = row.face_cards;
        this.form.userId = row.user_id;
        this.form.imgList = [];
        if (row.photo && row.photo != ""){
          this.form.imgList.push(row.photo);
        }
        if (row.face_photos && row.face_photos != "" && row.face_photos != "|"){
          let img = row.face_photos.split("|");
          for (let i = 0; i < img.length; i++){
            this.form.imgList.push(img[i]);
          }
        }

        this.drawerVisible = true;
      },
      nodeClick(data){
        this.searchDept = "";
        this.searchDept = data.value;
        this.init();
      },
      nodeDormClick(data){
        if (data.unit == 8){
          this.searchDormId = data.id;
          this.initBed();
        }
      },
      search(data){
        this.searchKey = data;
        this.page = 1;
        this.init();
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
      handleSelect(data, type){
        if (type == 1){
          this.form.studentInfo.status = data;
        }else if (type == 2){
          this.form.studentInfo.attendType = data;
        }
      },
      studyTypeInfo(val, type){
        if (type == 'get'){
          let arr = workEnjoy(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item].name,
              value: arr[item].code
            });
          }
          return arrItem;
        }else {
          let obj = workEnjoy(type, val);
          return obj ? obj : '--';
        }
      },
      workTitleInfo(val, type){
        if (type == 'get'){
          let arr = workTitle(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item],
              value: item
            });
          }
          return arrItem;
        }else {
          return workTitle(type, val);
        }
      },
      handleCascaderChange(data){
        this.form.studentInfo.collegeId = data[0];
        this.form.studentInfo.majorId = data[0];
        //this.form.studentInfo.grade = data[0];
        this.form.studentInfo.classz = data[0];
        this.form.classData = data;
      },
      closeDrawerDialog(event){
        this.form = {
          status: '',
          attnedType: '',
          classId: '',
          dormId: '',
          classData: [],
          dormData: [],
          cardNo: '',
          imgList: [],
          buildId: '',
          floorNum: '',
          dormId: '',
          bedId: '',
          searchDept: '',
          userId: ''
        };
        this.selDormTips = "";
        this.subTitle = "";
        this.keyDeviceSn = "";
        this.maskShow = false;
        clearTimeout(this.photoTimer);
        clearTimeout(this.keyTimer);
        this.loopTimerCount = 60;
        this.$set(this.form,'deptdata', []);
        this.resetCasadeSelector('selectorClass');
        this.resetCasadeSelector('selectorDorm');
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      okDrawDialog(event){
        let url = "";
        let imgUrl = [];
        let params = {
          cards: this.form.cardNo,
          userId: this.form.userId
        };
        params['urls']  = this.form.imgList.join();

        url = common.tearcher_info_setting;
        params = this.$qs.stringify(params);
        this.drawerLoading = true;
        this.$axios.post(url, params).then(res => {
          if (res.data.code == 200){
            this.drawerVisible = false;
            this.init();
            MessageSuccess(res.data.desc);
          }else {
            MessageError(res.data.desc);
          }
          this.drawerLoading = false;
        });
      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          if (this.form.imgList.length < 3){
            this.form.imgList.push(res.data.url);
          }else {
            MessageWarning(this.$t("头像最多只能3张"));
          }
        }else {

        }
      },
      selPhoteDevice(row){
        this.photoDeviceSn = row.sn;
        this.photoDevicePwd = row.password;
        this.photoDeviceIp = row.ip;
      },
      selKeyDevice(row){
        this.keyDeviceSn = row.sn;
        this.keySign = new Date().getTime() + Math.random();
        let params = {
          sn: this.keyDeviceSn,
          sign: this.keySign
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_take_get_card, params).then(res => {
          if (res.data.code == 200){
            clearTimeout(this.keyTimer);
            this.maskShow = true;
            this.loopKeyTime();
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      closeKeyModal(){
        clearTimeout(this.keyTimer);
        this.loopTimerCount = 60;
        this.keyDeviceSn = "";
        this.maskShow = false;
      },
      photoChange(){
        if (this.photoDeviceSn == ""){
          MessageWarning(this.$t("请选择需要拍照的设备"));
          return;
        }
        this.photoSign = new Date().getTime() + Math.random();
        let params = {
          userId: this.userData.user_id,
          sort: this.form.imgList.length + 1,
          ip: this.photoDeviceIp,
          password: this.photoDevicePwd,
          sn: this.photoDeviceSn,
          sign: this.photoSign
        };
        params = this.$qs.stringify(params);
        this.$axios.post(common.device_take_face, params).then(res => {
          if (res.data.code == 200){
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.loopPhotoTime();
          }else {
            MessageError(res.data.desc);
          }
        });
      },
      loopPhotoTime(){
        let params = {
          userId: this.userData.user_id,
          sign: this.photoSign
        };
        this.$axios.get(common.device_take_get_face, {params: params}).then(res => {
          if (res.data.code == 201){
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.photoTimer = setTimeout(() => {
              this.loopTimerCount--;
              if (this.loopTimerCount <= 0){
                clearTimeout(this.photoTimer);
                this.photoTimer = null;
                this.loopTimerCount = 60;
                return;
              }
              this.loopPhotoTime();
            },1000);
          }else if (res.data.code == 200){
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.loopTimerCount = 60;
            this.form.imgList.push(res.data.data.imgUrl)
          }else {
            clearTimeout(this.photoTimer);
            this.photoTimer = null;
            this.loopTimerCount = 60;
            MessageError(res.data.desc);
          }
        });
      },
      loopKeyTime(){
        let params = {
          sn: this.keyDeviceSn,
          sign: this.keySign
        };
        this.$axios.get(common.device_take_get_loop_card, {params: params}).then(res => {
          if (res.data.code == 202){
            clearTimeout(this.keyTimer);
            this.keyTimer = setTimeout(() => {
              this.loopTimerCount--;
              if (this.loopTimerCount <= 0){
                clearTimeout(this.keyTimer);
                this.loopTimerCount = 60;
                this.maskShow = false;
                this.timerVisible = false;
                return;
              }
              this.loopKeyTime();
            },1000);
          }else if (res.data.code == 200){
            clearTimeout(this.keyTimer);
            this.loopTimerCount = 60;
            this.form.cardNo = res.data.data.idcardNum;
            this.maskShow = false;
            this.timerVisible = false;
            this.keyDeviceSn = "";
          }else {
            clearTimeout(this.keyTimer);
            this.loopTimerCount = 60;
            this.keyDeviceSn = "";
            this.maskShow = false;
            this.timerVisible = false;
            MessageError(res.data.desc);
          }
        });
      },
      selDorm(row){
        this.form.buildId = row.build_id;
        this.form.floorNum = row.floor_num;
        this.form.dormId = row.dormitory_no;
        this.form.bedId = row.bed_id;
        this.form.studentInfo.bedNo = row.bed_no;
        this.selDormTips = row.build_name +"-"+ row.floor_num+"楼" +"-"+ row.dormitory_no +"-"+ row.bed_no+"号床";
      },
      deviceTypeInfo(val){
        return deviceType('set',val);
      },
      deleteImg(index){
        this.form.imgList.splice(index, 1);
      },
      timerFormat(val){
        return val + "s";
      },
      handleChange(type){
        this.page = 1;
        this.aiSyncStatus = type.value;
        this.init();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .title-tag{
    height:20px;
    width: 5px;
    background: #E6A23C;
    display: inline-block;
    border-radius: 5px;
  }
  .user-header-photo{
    height: 90px;
    width: 75px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-right: 5px;
  }
  .popover-mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #dddddd;
    z-index: 2
  }
</style>
