<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">学生信息</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <!--<el-col :span="6">
              &lt;!&ndash;<el-button size="small" type="primary"  icon="el-icon-upload" @click="importInfo($event)">{{$t("导入")}}</el-button>
              <el-button size="small" type="warning"  icon="el-icon-download" @click="exportInfo($event)">{{$t("导出")}}</el-button>&ndash;&gt;
            </el-col>-->
            <el-col :span="24">
              <div class="text-right layout-inline">
                <my-select width-style="100" :clearable="true" :sel-value="searchStatus" :options="studentTeachStatusInfo(null, 'get')" :placeholder="$t('学籍状态')" class="layout-item" size="small" @change="handleSelect($event, 1)"></my-select>
                <my-select width-style="100" :clearable="true" :sel-value="searchTeach" :options="studyTypeInfo(null, 'get')" :placeholder="$t('就读形式')" class="layout-item" size="small" @change="handleSelect($event, 2)"></my-select>
                <my-input-button class="layout-item" :show-select="true" :options="searchStudentType" size="small" plain width-class="width: 240px" type="success" :clearable="true" @click="search"></my-input-button>
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
          <el-row v-else :gutter="16">
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20" @click.native="detailInfo(item)">
              <el-card :body-style="{padding: '10px 10px', height: '85px'}" style="position: relative">
                <div class="color-muted">
                  <el-row class="color-warning">
                    <el-col :span="12">
                      <i class="fa fa-id-card"></i>
                      <span>{{item.student_id}}</span>
                    </el-col>
                    <el-col :span="12">
                      <div class="text-right">
                        <i class="fa fa-ellipsis-h"></i>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="color-muted margin-top-10">
                  <el-row>
                    <el-col :span="8">
                      <div>
                        <img v-if="item.photo_simple" :src="item.photo_simple" key="contain" style="width: 40px; height: 40px" />
                        <el-avatar v-if="!item.photo_simple" shape="square" :size="40" icon="el-icon-user-solid"></el-avatar>
                      </div>
                      <div class="color-success font-size-12 text-left">
                        <!--<span>
                          <label v-if="item.status">{{studentTeachStatusInfo(item.status, 'set')}}</label>
                          <label v-else>&#45;&#45;</label>
                        </span>-->
                        <span class="color-warning margin-left-10">
                          <label>{{studyTypeInfo(item.attend_type, 'set')}}</label>
                        </span>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="text-right">
                        <div class="moon-content-text-ellipsis-class">
                          {{item.real_name}}
                        </div>
                        <div class="moon-content-text-ellipsis-class">
                          {{item.class_name}}
                        </div>
                        <div class="moon-content-text-ellipsis-class">
                          {{item.college_name}}
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

    <drawer-layout-right  @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="$t('学生管理')" @right-close="cancelDrawDialog">
      <div slot="content" class="bg-white padding-lr-10 padding-tb-10" style="border-radius: 5px">
        <div class="color-muted" style="position: relative;">
          <el-row>
            <el-col :span="18">
              <div>
                <i class="fa fa-user-circle-o"></i>
                <span>{{$t("姓名")}}: </span>
                <span>{{userData.real_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-building"></i>
                <span>{{$t("班级")}}: </span>
                <span>{{userData.class_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-flag"></i>
                <span>{{$t("专业")}}: </span>
                <span>{{userData.major_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-home"></i>
                <span>{{$t("院系")}}: </span>
                <span>{{userData.college_name}}</span>
              </div>
              <div class="margin-top-10">
                <i class="fa fa-phone-square"></i>
                <span>{{$t("手机号")}}: </span>
                <span>{{userData.phone}}</span>
              </div>
            </el-col>
            <el-col :span="6" style="position: relative">
              <div style="position: absolute; top: 40px; right: 20px;">
                <div class="color-success">
                  <span class="font-size-25">{{userData.quality_score}}</span>
                  <span class="color-muted">{{$t("分")}}</span>
                </div>
                <div class="margin-top-5">
                  <el-popover
                    placement="left"
                    width="400"
                    trigger="click"
                    @show="userInfoDetail"
                    @hide="hideUserIndefoDetail">
                    <div v-show="showIframe == false" v-loading="showIframe == false" style="height: 600px">

                    </div>
                    <div v-show="showIframe == true">
                      <iframe :src="userInfoRul" frameborder="0" scrolling="no" style="width: 100%; height: 600px"></iframe>
                    </div>
                    <el-button slot="reference" type="success" size="mini">
                      <i class="fa fa-id-badge"></i>
                      {{$t("个人报告")}}
                    </el-button>
                  </el-popover>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="line-height"></div>
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
        <div class="line-height"></div>
        <div>
          <div>
            <span class="title-tag"></span>
            <span class="color-warning" style="position: relative; top: -5px;">{{$t("其他管理")}}</span>
          </div>
          <div class="margin-top-5">
            <el-form :model="form" ref="form" label-width="80px">
              <el-form-item :label="$t('学籍状态')" prop="status">
                <my-select width-style="260" :clearable="true" :sel-value="form.studentInfo.status" :options="studentTeachStatusInfo(null, 'get')" :placeholder="$t('学籍状态')" class="layout-item" @change="handleSelect($event, 1)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('就读形式')" prop="attnedType">
                <my-select width-style="260" :clearable="true" :sel-value="form.studentInfo.attendType" :options="studyTypeInfo(null, 'get')" :placeholder="$t('就读形式')" class="layout-item" @change="handleSelect($event, 2)"></my-select>
              </el-form-item>
              <el-form-item :label="$t('班级分配')">
                <my-cascader ref="selectorClass" :sel-value="form.classData" type="1" sub-type="4" width-style="260" @change="handleCascaderChange($event, 1)"></my-cascader>
              </el-form-item>
              <el-form-item :label="$t('宿舍分配')">
                <!--<my-cascader ref="selectorDorm" :sel-value="form.dormData" type="2" sub-type="3" width-style="260" @change="handleCascaderChange($event, 2)"></my-cascader>-->
                <el-popover
                  placement="top"
                  width="500"
                  trigger="click">

                  <div>
                    <el-row>
                      <el-col :span="6">
                        <div style="height: 350px;overflow-y: auto;border-right: 1px solid #dddddd">
                          <my-el-tree type="2" sub-type="3" @node-click="nodeDormClick"></my-el-tree>
                        </div>
                      </el-col>
                      <el-col :span="18">
                        <div style="height: 350px;overflow-y: auto;">
                          <el-table :data="bedData">
                            <el-table-column align="center" prop="bed_no" label="床号"></el-table-column>
                            <el-table-column align="center" label="分配">
                              <template slot-scope="scope">
                                <span class="color-success" v-if="scope.row.user_id == null">{{$t("未分配")}}</span>
                                <span class="color-warning" v-else>{{$t("已分配")}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column align="center" prop="bedNo" label="状态">
                              <template slot-scope="scope">
                                <span class="color-success" v-if="scope.row.enable">{{$t("启用")}}</span>
                                <span class="color-warning" v-else>{{$t("禁用")}}</span>
                              </template>
                            </el-table-column>
                            <el-table-column align="center" width="80" label="操作">
                              <template slot-scope="scope">
                                <span v-if="scope.row.user_id != null">--</span>
                                <i v-else class="fa fa-cog color-grand" @click="selDorm(scope.row)"></i>
                              </template>
                            </el-table-column>
                          </el-table>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <el-button slot="reference" type="warning" size="small">{{$t("选择")}}</el-button>
                </el-popover>
                <span class="color-warning">{{selDormTips}}</span>
              </el-form-item>
            </el-form>
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
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,UploadSquare,DrawerLayoutRight},
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
        showIframe: false,
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
        userInfoRul: '',
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
          studentInfo: {
            attendType: "",
            bedNo: '',
            birthday: "",
            certificateNum: "",
            certificateType: "",
            className: "",
            clasz: '',
            claszDate: "",
            collegeId: '',
            dormId: '',
            email: "",
            majorId: '',
            nation: "",
            nativePlace: "",
            nickName: "",
            parentContactInfo: "",
            parentName: "",
            phone: "",
            realName: "",
            schoolInTime: "",
            sex: '',
            status: "",
            studentId: "",
            userId: ""
          }
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
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          clasz: this.searchClass,
          deleted: 0
        };
        if (this.searchStatus != ''){
          params['status'] = this.searchStatus;
        }
        if (this.searchTeach != ''){
          params['attendType'] = this.searchTeach;
        }
        params[this.searchKey['select']] = this.searchKey['input'];
        params = this.$qs.stringify(params);
        this.$axios.post(common.student_list, params).then(res => {
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
        this.form.status = row.status;
        this.form.attnedType = row.attend_type;
        this.form.classData = [row.college_id, row.major_id, row.grade, row.class_id];
        this.form.dormData = [row.build_id, row.floor_num, row.drom_id];
        this.form.cardNo = row.face_cards;
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
        if (row.floor_num){
          this.selDormTips = row.build_name +"-"+ row.floor_num+"楼" +"-"+ row.dormitory_no +"-"+ row.bed_no+"号床";
        }
        this.form.studentInfo = {
          attendType: row.attend_type,
          bedNo: row.bed_no,
          birthday: row.birthday ? this.$moment(row.birthday).format("YYYY-MM-DD") : '',
          certificateNum: row.certificate_num,
          certificateType: row.certificate_type,
          className: row.class_name,
          clasz: row.clasz,
          claszDate: this.$moment(row.clasz_date).format("YYYY-MM-DD"),
          collegeId: row.college_id,
          dormId: row.dorm_id,
          majorId: row.major_id,
          nation: row.nation,
          nativePlace: row.natice_place,
          nickName: row.nick_name,
          parentContactInfo: row.parent_contact_info,
          parentName: row.parent_name,
          phone: row.phone ? row.phone : '',
          realName: row.real_name,
          schoolInTime: this.$moment(row.school_in_time).format("YYYY-MM-DD"),
          sex: row.sex,
          status: row.status,
          studentId: row.student_id,
          userId: row.user_id
        };
        if (row.email){
          this.form.studentInfo['email'] = row.email;
        }

        this.drawerVisible = true;
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        if (data.unit == 1){
          this.searchCollege = data.id;
        }else if (data.unit == 2){
          this.searchCollege = data.college_id;
          this.searchMajor = data.id;
        }else if (data.unit == 3){
          this.searchMajor = data.major_id;
          this.searchGrade = data.grade;
        }else if (data.unit == 4){
          this.searchClass = data.id;
        }
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
          let arr = studyType(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item].name,
              value: arr[item].code
            });
          }
          return arrItem;
        }else {
          let obj = studyType(type, val);
          return obj ? obj.name : '--';
        }
      },
      studentTeachStatusInfo(val, type){
        if (type == 'get'){
          let arr = studentTeachStatus(type, val);
          let arrItem = [];
          for (let item in arr){
            arrItem.push({
              label: arr[item],
              value: item
            });
          }
          return arrItem;
        }else {
          return studentTeachStatus(type, val);
        }
      },
      handleCascaderChange(data){
        this.form.studentInfo.collegeId = data[0];
        this.form.studentInfo.majorId = data[1];
        //this.form.studentInfo.grade = data[0];
        this.form.studentInfo.clasz = data[3];
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
          studentInfo: {
            attendType: "",
            bedNo: '',
            birthday: "",
            certificateNum: "",
            certificateType: "",
            className: "",
            clasz: '',
            claszDate: "",
            collegeId: '',
            dormId: '',
            email: "",
            majorId: '',
            nation: "",
            nativePlace: "",
            nickName: "",
            parentContactInfo: "",
            parentName: "",
            phone: "",
            realName: "",
            schoolInTime: "",
            sex: '',
            status: "",
            studentId: "",
            userId: ""
          }
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
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let params = {
              cards: this.form.cardNo != '' ? [this.form.cardNo] : [],
              userId: this.form.studentInfo.userId
            };

            for (let i = 0; i < this.form.imgList.length; i++){
              imgUrl.push({
                cache: true,
                url: this.form.imgList[i]
              });
            }
            params['urlList']  = imgUrl;
            params['studentInfo'] = this.form.studentInfo;

            url = common.student_info_setting;
            //params = this.$qs.stringify(params);
            this.drawerLoading = true;
            this.$axios.post(url, JSON.stringify(params), {dataType: 'stringfy'}).then(res => {
              if (res.data.code == 200){
                this.drawerVisible = false;
                this.init();
                MessageSuccess(res.data.desc);
              }else {
                MessageError(res.data.desc);
              }
              this.drawerLoading = false;
            });
          }
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
      userInfoDetail(){
        let authCookie = "";
        let host = window.location.host;
        host = "http://" + host.split(":")[0];
        let hostEncodeURIComponent = encodeURIComponent(host+":10201");
        this.showIframe = false;
        this.$axios(common.userinfo_cookie_auth).then(res => {
          if (res.data.data){
            authCookie = res.data.data.cookie;
            let url = 'http://campus.9451.com:9999/userDetail?userId='+ this.userData.user_id + "&campusUrl="+ hostEncodeURIComponent + "&campusType="+ "jump" + "&cookie=" + authCookie;
            this.userInfoRul = url;
            setTimeout(() => {
              this.showIframe = true;
            }, 2000);
          }
        });
      },
      hideUserIndefoDetail(){
        this.userInfoRul = "";
        this.showIframe = false;
      },
      timerFormat(val){
        return val + "s";
      },
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
  margin-right: 0px;
}
.popover-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #dddddd;
  z-index: 2
}
</style>
