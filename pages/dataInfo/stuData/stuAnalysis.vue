<template>
  <div class="container">
    <layout-lr v-if="showDetail == false">
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">学生分析</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="24">
              <div class="text-right layout-inline">
                <!--<my-select width-style="100" :clearable="true" :sel-value="searchStatus" :options="studentTeachStatusInfo(null, 'get')" :placeholder="$t('学籍状态')" class="layout-item" size="small" @change="handleSelect($event, 1)"></my-select>
                <my-select width-style="100" :clearable="true" :sel-value="searchTeach" :options="studyTypeInfo(null, 'get')" :placeholder="$t('就读形式')" class="layout-item" size="small" @change="handleSelect($event, 2)"></my-select>-->
                <el-button size="small" type="warning"  icon="el-icon-medal-1" @click="topInfo($event)">{{$t("考勤排名")}}</el-button>
                <my-input-button class="layout-item" :show-select="true" :options="searchStudentType2" size="small" plain width-class="width: 240px" type="success" :clearable="true" @click="search"></my-input-button>
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
            <el-col :span="6" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-card :body-style="{padding: '10px 10px', height: '85px'}" style="position: relative">
                <div class="color-muted">
                  <el-row class="color-warning">
                    <el-col :span="12">
                      <i class="fa fa-id-card"></i>
                      <span>{{item.student_id}}</span>
                    </el-col>
                    <el-col :span="12">
                      <div class="text-right">
                        <el-popover
                          placement="bottom"
                          trigger="hover">
                          <div>
                            <ul class="custom-ul">
                              <li @click="detailInfo(item, 1)">{{$t("课堂考勤")}}</li>
                              <li @click="detailInfo(item, 2)">{{$t("归寝考勤")}}</li>
                            </ul>
                          </div>
                          <i slot="reference" class="fa fa-ellipsis-h"></i>
                        </el-popover>
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

    <layout-tb class="item-layout" v-if="showDetail == true" :style="divHeight4">
      <div slot="tab">
        <el-row>
          <el-col :span="2">
            <span class="color-warning" @click="returnMain" style="position: relative; top: 10px;">
              <label class="real_name_class moon-content-text-ellipsis-class"><i class="fa fa-chevron-left margin-right-5"></i>{{userData.real_name}}</label>
            </span>
          </el-col>
          <el-col :span="22">
            <!--<my-search-of-date ref="searchDate" size="small" :show-day="showType == 1 ? true : false" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date>-->
            <my-search-of-date-group ref="searchDate" size="small" :show-day="showType == 1 ? true : false" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date-group>
          </el-col>
        </el-row>
      </div>

      <div slot="content">
        <div>
          <el-row :gutter="16">
            <el-col :span="8">
              <el-card :body-style="{padding: '20px'}" style="height: 180px">
                <div class="color-muted">
                  <el-row>
                    <el-col :span="12">
                      <div>
                        <span style="font-weight: bold">{{showType == 1 ? staticDataBasic.lateNum : staticDataBasic.unSignNum}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-12">{{showType == 1 ? $t("迟到次数") : $t("未归次数")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div>
                        <span style="font-weight: bold">{{showType == 1 ? staticDataBasic.unSignNum : staticDataBasic.lateLongNum}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-12">{{showType == 1 ? $t("旷课次数") : $t("超长未归次数")}}</span>
                      </div>
                    </el-col>
                  </el-row>

                  <el-row class="margin-top-30">
                    <el-col :span="12">
                      <div>
                        <span style="font-weight: bold">{{showType == 1 ? staticDataBasic.leaveEarlyNum : staticDataBasic.lateNum}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-12">{{showType == 1 ? $t("早退次数") : $t("晚归次数")}}</span>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div>
                        <span style="font-weight: bold">{{staticDataBasic.leaveNum}}</span>
                      </div>
                      <div class="margin-top-5">
                        <span class="font-size-12">{{$t("请假次数")}}</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{padding: '10px'}" style="height: 180px">
                <div style="height: 160px;">
                  <radar-chart v-if="showType == 1" chart-id="radarId" radius="50" :chart-title='$t("雷达画像")' :data-key="radarDataKey" :data="radarData"></radar-chart>
                  <radar-dorm-chart v-if="showType == 2" chart-id="radarId" radius="50" :chart-title='$t("雷达画像")' :data-key="radarDataKey" :data="radarData"></radar-dorm-chart>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card :body-style="{padding: '10px'}" style="height: 180px">
                <span class="font-size-12 color-muted">{{showType == 1 ? $t("出勤率") : $t("归寝率")}}</span>
                <div class="text-center">
                  <el-progress type="circle" :percentage="staticDataBasic.actualRate" :width="150">

                  </el-progress>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div class="margin-top-20">
          <el-card :body-style="{padding: '10px'}" style="height: 300px">
            <div style="height: 300px;">
              <line-chart chart-id="lineId" :data-key="lineKeyData" :data="lineData" :data-legned="lineLegned"></line-chart>
            </div>
          </el-card>
        </div>

        <div class="margin-top-20">
          <div>
            <span class="tag-title"></span>
            <span class="color-warning tag-text">
              {{$t("考勤记录")}}
            </span>
            <span v-if="showType == 1 && (searchTimeData.timeUnit == null || searchTimeData.timeUnit == 1)">
              <el-button-group>
                <el-button size="small" :type="attendType == 1 ? 'primary' : 'default'" @click="selAttenType($event,1)">{{$t("出勤")}}</el-button>
                <el-button size="small" :type="attendType == 3 ? 'primary' : 'default'" @click="selAttenType($event,3)">{{$t("迟到")}}</el-button>
                <el-button size="small" :type="attendType == 4 ? 'primary' : 'default'" @click="selAttenType($event,4)">{{$t("早退")}}</el-button>
                <el-button size="small" :type="attendType == 0 ? 'primary' : 'default'" @click="selAttenType($event,0)">{{$t("旷课")}}</el-button>
                <el-button size="small" :type="attendType == 2 ? 'primary' : 'default'" @click="selAttenType($event,2)">{{$t("请假")}}</el-button>
              </el-button-group>
            </span>
          </div>
          <div class="margin-top-10">
            <div v-if="showType == 1">
              <el-table
                v-if="searchTimeData.timeUnit == null || searchTimeData.timeUnit == 1"
                ref="refTable"
                :data="tableClassData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">

                <el-table-column
                  align="center"
                  prop="busiTime"
                  :label="$t('日期')">
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('打卡时间')">

                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{ $moment(scope.row.rollCallTime).format("YYYY-MM-DD HH:mm") }}</div>
                      <span slot="reference" class="name-wrapper">
                      {{ $moment(scope.row.rollCallTime).format("YYYY-MM-DD HH:mm") }}
                    </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('节数')">

                  <template slot-scope="scope">
                    <span>{{$t("第")}}{{ scope.row.section  }}{{$t("节")}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="courseName"
                  :label="$t('课程')">
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('状态')">
                  <template slot-scope="scope">
                    <my-class-atten :status="scope.row.signStatus"></my-class-atten>
                  </template>
                </el-table-column>
              </el-table>

              <el-table
                v-if="searchTimeData.timeUnit && searchTimeData.timeUnit != 1"
                ref="refTable"
                :data="tableClassData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">

                <el-table-column
                  align="center"
                  prop="busiTime"
                  :label="$t('日期')">
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('课程')">

                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{ scope.row.courseName }}</div>
                      <span slot="reference" class="name-wrapper">
                      {{ scope.row.courseName }}
                    </span>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('正常')">

                  <template slot-scope="scope">
                    <span>{{scope.row.actualNum}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('迟到')">
                  <template slot-scope="scope">
                    <span>{{scope.row.lateNum}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('旷课')">
                  <template slot-scope="scope">
                    <span>{{scope.row.unSignNum}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('早退')">
                  <template slot-scope="scope">
                    <span>{{scope.row.leaveEarlyNum}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('请假')">
                  <template slot-scope="scope">
                    <span>{{scope.row.leaveNum}}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div v-if="showType == 2">
              <el-table
                ref="refTable"
                :data="tableClassData"
                header-cell-class-name="custom-table-cell-bg"
                size="medium"
                style="width: 100%">

                <el-table-column
                  align="center"
                  :label="$t('日期')">

                  <template slot-scope="scope">
                    <div>
                      <span v-if="searchTimeData.timeUnit == 5">{{$t("第")}} {{scope.row.weekNum}} {{$t("周")}}</span>
                      <span v-if="searchTimeData.timeUnit == 2">{{weekNoTextInfo(scope.row.weekNo)}}</span>
                      <span v-if="searchTimeData.timeUnit == 3">{{scope.row.busiTime}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="buildName"
                  :label="$t('宿舍楼')">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="roomNo"
                  :label="$t('寝室号')">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="actualNum"
                  :label="$t('正常')">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="lateNum"
                  :label="$t('晚归')">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="unSignNum"
                  :label="$t('未归')">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="lateLongNum"
                  :label="$t('超长未归')">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="leaveNum"
                  :label="$t('请假')">
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="layout-right-footer text-right">
            <my-pagination :total="totalClass" :current-page="pageClass" :page-size="numClass" @currentPage="currentClassPage" @sizeChange="sizeClassChange" @jumpChange="jumpClassPage" class="layout-pagination"></my-pagination>
          </div>
        </div>
      </div>
    </layout-tb>

    <!--<drawer-layout-right  @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="showText" @right-close="cancelDrawDialog">
      <div slot="content" class="bg-white padding-lr-10 padding-tb-10" style="border-radius: 5px">

      </div>
      <div slot="footer">

      </div>
    </drawer-layout-right>-->

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="750px" :title="$t('考勤排名')" @right-close="cancelDrawDialog">
      <div slot="content">
        <span tabindex="1"></span>
        <div>
          <el-row>
            <el-col :span="24">
              <span style="position: relative; top: 5px;" v-if="searchGrade == '' && searchTopLabel != ''">
                <label class="tag-title"></label>
                <label class="tag-text">{{searchTopLabel}}</label>
              </span>
              <el-button-group class="margin-left-5">
                <el-button size="small" :type="searchTopDateTimeType == 1 ? 'primary' : 'default'" @click="handleTopDateType(1)">{{$t("昨日")}}</el-button>
                <el-button size="small" :type="searchTopDateTimeType == 2 ? 'primary' : 'default'" @click="handleTopDateType(2)">{{$t("今日")}}</el-button>
                <el-button size="small" :type="searchTopDateTimeType == 3 ? 'primary' : 'default'" @click="handleTopDateType(3)">{{$t("本周")}}</el-button>
                <el-button size="small" :type="searchTopDateTimeType == 4 ? 'primary' : 'default'" @click="handleTopDateType(4)">{{$t("本月")}}</el-button>
                <el-button size="small" :type="searchTopDateTimeType == 5 ? 'primary' : 'default'" @click="handleTopDateType(5)">{{$t("本学期")}}</el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
          <el-table
            :data="studentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%">
            <el-table-column
              align="center"
              :label="$t('排名')">

              <template slot-scope="scope">
                <span class="color-warning">{{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('姓名')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.studentName}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.studentName}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('班级')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.className}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.className}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('出勤')">
              <template slot-scope="scope">
                <span class="color-success">{{scope.row.actualRate}}%</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('缺勤')">

              <template slot-scope="scope">
                <span class="color-success">{{scope.row.unSignRate}}%</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right padding-lr-10">
          <!--<el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent">
          </el-pagination>-->
          <span>{{$t("共")}}{{totalStudent}}{{$t("人")}}</span>
        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import LayoutTb from "../../../components/Layout/LayoutTb";
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
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import RadarChart from "../../../components/charts/RadarChart";
  import RadarDormChart from "../../../components/charts/RadarDormChart";
  import MyClassAtten from "../../../components/utils/status/MyClassAtten";
  import {
    deviceType,
    MessageError,
    MessageSuccess, MessageWarning,
    nationInfo,
    studentTeachStatus, studyType,
    teacherTypeInfo, weekNoText2,
    workEnjoy,
    workTitle
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,UploadSquare,DrawerLayoutRight,LayoutTb,MySearchOfDate,RadarChart,RadarDormChart,MyClassAtten},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        pageClass: 1,
        numClass: 20,
        totalClass: 0,
        tableData: [],
        studentData: [],
        statusList: [],
        teachList: [],
        deviceData: [],
        deviceAllData: [],
        bedData: [],
        userData: {},
        searchTopDateTime: '',
        searchTopDateTimeType: '2',
        searchTopLabel: '',
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        maskShow: false,
        showDetail: false,
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
        showType: '',
        showText: '',
        searchTopTime: this.$moment(new Date()).format("YYYY-MM-DD"),
        searchTimeData: {},
        staticDataBasic: {},
        radarDataKey: [],
        radarData: [],
        lineData: [],
        lineKeyData: [],
        lineLegned: [],
        currentWeekSelNo: '',
        tableClassData: [],
        attendType: 1
      }
    },
    created() {
      this.initInfo();
    },
    methods: {
      async initInfo(){
        await this.getSessionInfo();
        await this.getCurrentWeekInfo(this.campusId);
        this.init();
        this.currentWeekSelNo = this.currentWeekNum;
      },
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
      initStatic(userId){
        let url = "";
        let params = {
          userId: this.userData.user_id
        };
        this.lineLegned = [];
        this.lineData = [];
        this.lineKeyData = [];
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          params['queryDate'] = this.searchTimeData.value;
          params['timeType'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeType'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeType'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeType'] = 1;
        }else {
          if (this.showType == 1){
            let day = this.$moment(new Date()).format("YYYY-MM-DD");
            params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
            params['timeType'] = 3;
          }else if (this.showType == 2){
            params['weekNum'] = this.currentWeekSelNo;
            params['timeType'] = 2;
          }
        }
        if (this.showType == 1){
          url = common.student_analysis_static;
        }else if (this.showType == 2){
          url = common.student_analysis_bed_static;
        }
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.staticDataBasic = res.data.data.basicStat;
            if (this.showType == 1){
              this.radarData = [res.data.data.basicStat.ActualNum, res.data.data.basicStat.learEarlyNum, res.data.data.basicStat.unSignNum, res.data.data.basicStat.lateNum ,res.data.data.basicStat.leaveNum];
              this.lineKeyData = res.data.data.chartLine.key;
              this.lineLegned = [this.$t("出勤"),this.$t("旷课"),this.$t("迟到"),this.$t("早退"),this.$t("请假")];
              this.lineData = [
                {
                  name: this.$t("出勤"),
                  type: 'line',
                  data: res.data.data.chartLine.value.actualNum
                },
                {
                  name: this.$t("旷课"),
                  type: 'line',
                  data: res.data.data.chartLine.value.unSignNum
                },
                {
                  name: this.$t("迟到"),
                  type: 'line',
                  data: res.data.data.chartLine.value.lateNum
                },
                {
                  name: this.$t("早退"),
                  type: 'line',
                  data: res.data.data.chartLine.value.leaveEarlyNum
                },
                {
                  name: this.$t("请假"),
                  type: 'line',
                  data: res.data.data.chartLine.value.leaveNum
                }
              ];
            }else if (this.showType == 2){
              this.radarData = [res.data.data.basicStat.ActualNum, res.data.data.basicStat.unSignNum, res.data.data.basicStat.lateNum, res.data.data.basicStat.lateLongNum ,res.data.data.basicStat.leaveNum];
              this.lineKeyData = res.data.data.chartLine.key;
              this.lineLegned = [this.$t("已归寝"),this.$t("未归"),this.$t("晚归"),this.$t("超长未归"),this.$t("请假")];
              this.lineData = [
                {
                  name: this.$t("已归寝"),
                  type: 'line',
                  data: res.data.data.chartLine.value.actualNum
                },
                {
                  name: this.$t("未归"),
                  type: 'line',
                  data: res.data.data.chartLine.value.unSignNum
                },
                {
                  name: this.$t("晚归"),
                  type: 'line',
                  data: res.data.data.chartLine.value.lateNum
                },
                {
                  name: this.$t("超长未归"),
                  type: 'line',
                  data: res.data.data.chartLine.value.lateLongNum
                },
                {
                  name: this.$t("请假"),
                  type: 'line',
                  data: res.data.data.chartLine.value.leaveNum
                }
              ];
            }
          }
        });
      },
      initClassRecord(){
        let params = {
          page: this.pageClass,
          num: this.numClass,
          userId: this.userData.user_id,
          signStatus: this.attendType,
          orderAsc: false,
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          params['queryDate'] = this.searchTimeData.value;
          params['timeType'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeType'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeType'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeType'] = 1;
        }else {
          if (this.showType == 1){
            let day = this.$moment(new Date()).format("YYYY-MM-DD");
            params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
            params['timeType'] = 3;
          }else if (this.showType == 2){
            params['weekNum'] = this.currentWeekSelNo;
            params['timeType'] = 2;
          }
        }
        this.$axios.get(common.student_analysis_static_page, {params, params}).then(res => {
          if (res.data.data){
            this.tableClassData = res.data.data.list;
            this.totalClass = res.data.data.totalCount;
            this.numClass = res.data.data.num;
            this.pageClass = res.data.data.currentPage;
          }
        });
      },
      initClassCountRecord(){
        let params = {
          page: this.pageClass,
          num: this.numClass,
          userId: this.userData.user_id,
          signStatus: 1,
          orderAsc: false
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          params['queryDate'] = this.searchTimeData.value;
          params['timeType'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeType'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeType'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeType'] = 1;
        }else {
          if (this.showType == 1){
            let day = this.$moment(new Date()).format("YYYY-MM-DD");
            params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
            params['timeType'] = 3;
          }else if (this.showType == 2){
            params['weekNum'] = this.currentWeekSelNo;
            params['timeType'] = 2;
          }
        }
        this.$axios.get(common.student_analysis_static_count_page, {params, params}).then(res => {
          if (res.data.data){
            this.tableClassData = res.data.data.list;
            this.totalClass = res.data.data.totalCount;
            this.numClass = res.data.data.num;
            this.pageClass = res.data.data.currentPage;
          }
        });
      },
      initDormRecord(){
        let params = {
          page: this.pageClass,
          num: this.numClass,
          userId: this.userData.user_id,
          orderAsc: false,
          orderAttr: 'lateNum'
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          params['queryDate'] = this.searchTimeData.value;
          params['timeType'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeType'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeType'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeType'] = 1;
        }else {
          if (this.showType == 1){
            let day = this.$moment(new Date()).format("YYYY-MM-DD");
            params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
            params['timeType'] = 3;
          }else if (this.showType == 2){
            params['weekNum'] = this.currentWeekSelNo;
            params['timeType'] = 2;
          }
        }
        this.$axios.get(common.student_analysis_bed_static_page, {params, params}).then(res => {
          if (res.data.data){
            this.tableClassData = res.data.data.list;
            this.totalClass = res.data.data.totalCount;
            this.numClass = res.data.data.num;
            this.pageClass = res.data.data.currentPage;
          }
        });
      },
      initTop(){
        let params = {
          page: 1,
          num: 99999,
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          timeType: 3,
          orderAsc: false,
          orderAttr: 'actualRate',
        };
        if (this.searchTopDateTimeType == 1){
          params['queryDate'] = this.$moment().subtract(1, 'days').format("YYYY-MM-DD");
        }else if (this.searchTopDateTimeType == 2){
          params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
        }else if (this.searchTopDateTimeType == 3){
          params['timeType'] = 2;
        }else if (this.searchTopDateTimeType == 4){
          params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-01");
          params['timeType'] = 4;
        }else if (this.searchTopDateTimeType == 5){
          params['timeType'] = 1;
        }
        this.$axios.get(common.student_analysis_bed_static_top_page, {params: params, loading: false}).then(res => {
          if (res.data.code == 200){
            this.studentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }else {
            MessageWarning(res.data.desc);
          }
        });
        this.drawerVisible = true;
      },
      topInfo(){
        this.initTop();
      },
      detailInfo(row, type){
        this.showType = type;
        if (type == 1){
          this.showText = this.$t("课堂考勤");
          this.initClassRecord();
        }else if (type == 2){
          this.showText = this.$t("归寝考勤");
          this.initDormRecord();
        }
        this.userData = row;
        this.initStatic();
        this.showDetail = true;
      },
      returnMain(){
        this.showDetail = false;
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
        this.searchTopLabel = data.label;
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
      sizeClassChange(event){
        this.pageClass = 1;
        this.numClass = event;
        this.initClassRecord();
        this.initClassCountRecord();
        this.initDormRecord();
      },
      currentClassPage(event){
        this.pageClass = event;
        this.initClassRecord();
        this.initClassCountRecord();
        this.initDormRecord();
      },
      jumpClassPage(data){
        this.pageClass = data;
        this.initClassRecord();
        this.initClassCountRecord();
        this.initDormRecord();
      },
      handleSelect(data, type){
        if (type == 1){
          this.searchStatus = data;
        }else if (type == 2){
          this.searchTeach = data;
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
        this.form.classData = data;
      },
      closeDrawerDialog(event){
        this.showType = '';
        this.showText = '';
        this.drawerVisible = event;
      },
      cancelDrawDialog(){
        this.drawerVisible = false;
      },
      closeDrawDialog(event){
        this.drawerVisible = false;
      },
      okDrawDialog(event){

      },
      uploadFileSuccess(res, file){
        if (res.code == 200){
          this.form.imgList.push(res.data.url);
        }else {

        }
      },
      selDorm(row){
        this.form.buildId = row.build_id;
        this.form.floorNum = row.floor_num;
        this.form.dormId = row.dormitory_no;
        this.form.bedId = row.bed_id;
        this.selDormTips = row.build_name +"-"+ row.floor_num+"楼" +"-"+ row.dormitory_no +"-"+ row.bed_no+"号床";
      },
      weekNoTextInfo(val){
        return weekNoText2(val);
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.pageClass = 1;
        this.numClass = 20;
        this.totalClass = 0;
        this.initStatic();
        if (this.showType == 1 && data.timeUnit == 1){
          this.initClassRecord();
        }else if (this.showType == 1 && data.timeUnit != 1){
          this.initClassCountRecord();
        }else if (this.showType == 2){
          this.initDormRecord();
        }
      },
      searchTopType(data){

      },
      selAttenType(event, type){
        this.attendType = type;
        this.pageClass = 1;
        this.numClass = 20;
        this.initClassRecord();
      },
      handleTopDateType(type){
        this.searchTopDateTimeType = type;
        this.initTop();
      }
    }
  }
</script>

<style scoped>
  .container {

  }
  .item-layout{
    padding: 10px 15px;
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
  .custom-ul li{
    padding: 5px 15px;
    cursor: default;
  }
  .real_name_class{
    display: inline-block;
    width: 80px;
    line-height: 40px;
  }
  .tag-title{
    width: 5px;
    height: 20px;
    background: #E6A23C;
    border-radius: 5px;
    display: inline-block;
  }
  .tag-text{
    position: relative;
    top: -5px;
  }
</style>
