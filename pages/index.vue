<template>
  <div class="container">
    <div>
      <el-row :gutter="16">
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}" style="height: 260px">
            <div class="padding-lr-10 padding-tb-10 color-muted">
              <el-row>
                <el-col :span="12">
                  <span class="font-size-25 color-grand">0</span>
                  <span>{{$t("人")}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="collegeData" type="1" sub-type="4" @change="handleCascaderChange($event,1)"></my-cascader>
                </el-col>
              </el-row>
            </div>
            <div class="top-content">
              <div v-if="sexTotal == 0" class="text-center color-muted">{{$t("暂无数据")}}</div>
              <sex-pie-chart v-if="sexTotal != 0" chart-id="studentPie" :total="sexTotal" :male="maleTotal" :famale="famaleTotal"></sex-pie-chart>
            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-mortar-board"></i>
                    <span>{{$t("学生人数")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}" style="height: 260px" v-if="userType == 2">
            <div class="padding-lr-10 padding-tb-10 color-muted">
              <el-row>
                <el-col :span="12">
                  <span class="font-size-25 color-grand">0</span>
                  <span>{{$t("人")}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="deptData" type="4" sub-type="4" @change="handleCascaderChange($event, 2)"></my-cascader>
                </el-col>
              </el-row>
            </div>
            <div class="top-content">
              <div v-if="sexTeacherTotal == 0" class="text-center color-muted">{{$t("暂无数据")}}</div>
              <sex-pie-chart v-if="sexTeacherTotal != 0" chart-id="teacherPie" :total="sexTeacherTotal" :male="maleTeacherTotal" :famale="famaleTeacherTotal"></sex-pie-chart>
            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-user"></i>
                    <span>{{$t("教工人数")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>

          <el-card :body-style="{padding: '0px'}" style="height: 260px" v-if="userType == 4">
            <div class="padding-lr-10 padding-tb-10 color-muted">
              <el-row>
                <el-col :span="12">
                  <span class="font-size-25 color-grand">{{levelTypeTotal}}</span>
                  <span>{{$t("人")}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                  <my-cascader ref="SelectorLevelType" width-style="180" :clearable="true" size="small" :sel-value="collegeLevelTypeData" type="1" sub-type="4" @change="handleCascaderChange($event, 5)"></my-cascader>
                </el-col>
              </el-row>
            </div>
            <div class="top-content">
              <div v-if="levelTypeTotal == 0" class="text-center color-muted">{{$t("暂无数据")}}</div>
              <sex-pie-more-chart v-if="levelTypeTotal != 0" chart-id="teacherPie" :total="levelTypeTotal" :data="leaveAttendData"></sex-pie-more-chart>
            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-user"></i>
                    <span>{{$t("教工人数")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{padding: '0px'}" style="height: 260px">
            <div class="top-table-content color-muted">
              <table class="custom-table-white margin-top-10">
                <tbody>
                  <tr>
                    <td width="30%">{{$t("系统版本")}}</td>
                    <td>V0.0.1</td>
                  </tr>
                  <tr>
                    <td width="30%">{{$t("当前学年")}}</td>
                    <td>{{year}}</td>
                  </tr>
                  <tr>
                    <td width="30%">{{$t("当前学期")}}</td>
                    <td>{{$t("第")}}{{weekNum}}{{$t("周")}}</td>
                  </tr>
                  <tr>
                    <td width="30%">{{$t("当前学周")}}</td>
                    <td>{{weekToText(week)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bottom-content">
              <div class="padding-lr-10 color-muted">
                <el-row>
                  <el-col :span="12">
                    <i class="fa fa-cog"></i>
                    <span>{{$t("系统信息")}}</span>
                  </el-col>
                  <el-col :span="12" class="text-right">
                    <i class="fa fa-flag"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="margin-top-20 custom-card-layout">
      <el-row :gutter="16">
        <el-col :span="16">
          <el-card :body-style="{padding: '0px'}" style="height: 240px">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("院系统计")}}</span>
              </span>
              <span class="pull-right">
                <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="collegeTabData" type="1" sub-type="4" @change="handleCascaderChange($event,3)"></my-cascader>
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <div class="item-attend-line-ver" style="position: absolute; left: 50%;top: 0px;"></div>

              <el-row :gutter="16">
                <el-col :span="12">
                  <el-row :gutter="16">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("应出勤人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{classAttendData.shouldNum}}</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("已出勤人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{classAttendData.actualNum}}</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("旷课人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{classAttendData.unSignNum}}</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16" class="margin-top-10">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("迟到人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{classAttendData.lateNum}}</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("早退人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{classAttendData.leaveEarlyNum}}</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <el-row :gutter="16">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("应归寝人次")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{dormAttendData.shouldNum}}</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("已归寝人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{dormAttendData.actualNum}}</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("未归人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{dormAttendData.unSignNum}}</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row :gutter="16" class="margin-top-10">
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("晚归人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{dormAttendData.lateNum}}</span>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item-attend-block">
                        <div>{{$t("超长未归人数")}}</div>
                        <div>
                          <span class="font-size-25 color-grand">{{dormAttendData.lateLongNum}}</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <div>
            <el-tabs :active-name="activeName" type="border-card" class="margin-top-20" style="height: 38px" @tab-click="changeNotice">
              <el-tab-pane label="通知" name="1"></el-tab-pane>
              <el-tab-pane label="公告" name="2"></el-tab-pane>
            </el-tabs>
            <el-card :body-style="{padding: '0px'}" style="height: 320px;border-radius: 0 !important;">
              <el-table
                ref="refTable"
                :data="noticeData"
                size="mini"
                max-height="320">
                <el-table-column
                  align="center"
                  :label="$t('标题')">

                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.title ? scope.row.title : '--'}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.title ? scope.row.title : '--'}}
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('日期')">

                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{$moment(scope.row.push_time).format("YYYY-MM-DD hh:mm:ss")}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{$moment(scope.row.push_time).format("YYYY-MM-DD hh:mm:ss")}}
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('发布人')">

                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                      <div class="text-center">{{scope.row.sender_name ? scope.row.sender_name : '--'}}</div>
                      <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                        {{scope.row.sender_name ? scope.row.sender_name : '--'}}
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="$t('操作')">

                  <template slot-scope="scope">
                    <i class="fa fa-list-alt color-grand" @click="detailMsg(scope.row)"></i>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
            <div class="index-right-footer text-right">
              <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" class="layout-pagination"></my-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="8" v-if="userType == 2">
          <el-card :body-style="{padding: '0px'}" style="height: 140px">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 0px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("设备统计")}}</span>
              </span>
              <span class="pull-right color-grand">
                {{deviceTotal}}{{$t("台")}}
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-row :gutter="16">
                <el-col :span="8">
                  <div class="item-attend-block">
                    <div>{{$t("一体机本地版")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">{{padLocalTotal}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="item-attend-block">
                    <div>{{$t("一体机云端版")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">{{padWoTotal}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="item-attend-block">
                    <div>{{$t("门禁控制器")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">{{doorTotal}}</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <el-card :body-style="{padding: '0px'}" class="margin-top-20" style="height: 500px;overflow-y: auto">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("设备状态")}}</span>
              </span>

              <span class="pull-right">
                <my-select size="small" :options="filtersDeviceType" :sel-value="deviceTypeVal" @change="handleChangeDevice"></my-select>
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-timeline>
                <el-timeline-item :hide-timestamp="true" timestamp="2018/4/12" placement="top" v-for="(item, index) in deviceTypeList" :key="index">
                  <span slot="dot">
                    <img src="~/static/img/timelist-icon-title.png" alt="" style="height: 20px;width: 20px;position: relative;right:5px;">
                  </span>
                  <el-card class="font-size-12" :body-style="{padding: '10px'}">
                    <div class="color-muted">
                      <span class="color-grand">{{item.name ? item.name : item.sn}}</span>
                      <el-tag size="mini" type="danger" class="margin-left-5" v-if="item.online == false">{{$t("离线")}}</el-tag>
                      <el-tag size="mini" type="success" class="margin-left-5" v-if="item.online == true">{{$t("在线")}}</el-tag>
                      <el-tag size="mini" type="info" class="margin-left-5">{{$t("一体机本地版")}}</el-tag>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-disabeld">{{$t("SN")}}: {{item.sn}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-muted">{{$t("位置")}}: {{item.location_name ? item.location_name : '--'}}</span>
                    </div>
                    <div class="margin-top-5">
                      <i class="fa fa-times-circle"></i>
                      <span class="color-disabeld">{{$moment(item.uptime).format("YYYY-MM-DD hh:mm:ss")}}</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8" v-if="userType == 4">
          <el-card :body-style="{padding: '0px'}" style="height: 140px">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 0px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("素质学分统计")}}</span>
              </span>
              <span class="pull-right color-grand">
                <my-cascader ref="SelectorBuild" width-style="180" :clearable="true" size="small" :sel-value="collegeCreditData" type="1" sub-type="4" @change="handleCascaderChange($event,4)"></my-cascader>
              </span>
              <div class="moon-clearfix"></div>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-row :gutter="16">
                <el-col :span="12">
                  <div class="item-attend-block">
                    <div>{{$t("加分人数")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">{{creditAttendData.add ? creditAttendData.add.value : 0}}</span>
                    </div>

                    <div class="pull-right">
                      <div class="credit-title add">
                        {{$t("加")}}
                      </div>
                    </div>
                    <div class="moon-clearfix"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="item-attend-block">
                    <div>{{$t("减分人数")}}</div>
                    <div>
                      <span class="font-size-25 color-grand">{{creditAttendData.minus ? creditAttendData.minus.value : 0}}</span>
                    </div>

                    <div class="pull-right">
                      <div class="credit-title minus">
                        {{$t("减")}}
                      </div>
                    </div>
                    <div class="moon-clearfix"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <el-card :body-style="{padding: '0px'}" class="margin-top-20" style="height: 500px;overflow-y: auto" v-if="userType == 4">
            <div slot="header" class="moon-clearfix padding-tb-10 padding-lr-10">
              <span class="color-muted" style="font-weight: bold;position: relative; top: 5px;">
                <i class="fa fa-line-chart"></i>
                <span>{{$t("素质学分动态")}}</span>
              </span>
            </div>
            <div class="color-muted padding-tb-10 padding-lr-10" style="position: relative">
              <el-timeline>
                <el-timeline-item :hide-timestamp="true" timestamp="2018/4/12" placement="top" v-for="(item, index) in creditData" :key="index">
                  <el-card class="font-size-12" :body-style="{padding: '10px'}">
                    <div class="color-muted">
                      <span class="color-grand">{{item.real_name}}</span>
                      <el-tag size="mini" type="success" class="margin-left-5" v-if="item.str1 == '加分'">{{$t("加分")}}</el-tag>
                      <el-tag size="mini" type="danger" class="margin-left-5" v-if="item.str1 == '减分'">{{$t("加分")}}</el-tag>
                      <el-tag size="mini" type="danger" class="margin-left-5" v-if="item.str1 == '减分'">
                        <i class="fa fa-tag"></i>
                        {{item.double1}}{{$t("分")}}
                      </el-tag>
                      <el-tag size="mini" type="success" class="margin-left-5" v-if="item.str1 == '加分'">
                        <i class="fa fa-tag"></i>
                        {{item.double1}}{{$t("分")}}
                      </el-tag>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-disabeld">{{item.class_name}}</span>
                    </div>
                    <div class="margin-top-5">
                      <span class="color-muted">{{item.des}}</span>
                    </div>
                    <div class="margin-top-5 color-disabeld">
                      <i class="fa fa-clock-o"></i>
                      <span>{{$moment(item.apply_time).format("YYYY-MM-DD hh:mm:ss")}}</span>
                    </div>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--消息中心使用的右侧层-->
    <drawer-layout-right @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="550px" :title="$t('消息详细')" @right-close="cancelDrawDialog">
      <div slot="content">
        <div class="text-center font-size-18" style="font-weight: bold">
          <span>{{noticeContentDetail.message ? noticeContentDetail.message.title : ''}}</span>
        </div>
        <div class="line-height"></div>
        <div class="ql-editor" v-html="noticeContentDetail.message ? noticeContentDetail.message.content : ''">

        </div>
      </div>
    </drawer-layout-right>
  </div>
</template>

<script>
  import LineChart from "../components/charts/LineChart";
  import MySelect from "../components/MySelect";
  import MyCascader from "../components/utils/select/MyCascader";
  import SexPieChart from "../components/charts/SexPieChart";
  import SexPieMoreChart from "../components/charts/SexPieMoreChart";
  import mixins from "../utils/mixins";
  import {common} from "../utils/api/url";
  import {deviceType, weekNoText} from "../utils/utils";
  export default {
    name: 'index',
    mixins: [mixins],
    components: {MyCascader, MySelect,LineChart,SexPieChart,SexPieMoreChart},
    data(){
      return {
        userTypeList: [],
        classList: [],
        collegeData: [],
        collegeTabData: [],
        collegeCreditData: [],
        deptData: [],
        tableData: [],
        creditData: [],
        collegeLevelTypeData: [],
        userType: '5',
        activeName: '1',
        searchSex: '',
        searchCollege: '',
        searchMajor: '',
        searchClass: '',
        searchGrade: '',
        searchDept: '',
        sexTotal: 0,
        maleTotal: 0,
        famaleTotal: 0,
        sexTeacherTotal: 0,
        maleTeacherTotal: 0,
        famaleTeacherTotal: 0,
        padLocalTotal: 0,
        padWoTotal: 0,
        doorTotal: 0,
        deviceTotal: 0,
        levelTypeTotal: 0,
        year: '',
        weekNum: '',
        week: '',
        deviceTypeDate: [],
        deviceTypeList: [],
        filtersDeviceType: [],
        deviceTypeVal: '3',
        timelineIcon: '~/static/img/timelist-icon-title.png',
        leaveAttendData: [],
        classAttendData: {},
        creditAttendData: {},
        dormAttendData: {},
        noticeData: [],
        circularData: [],
        drawerVisible: false,
        noticeContentDetail: '',
        format(percentage) {
          return percentage === 100 ? '' : `${percentage}%`;
        }
      }
    },
    created() {
      this.layoutInit();
      this.init();
    },
    methods: {
      layoutInit(){
        this.$parent.$parent.layout = 'full';
      },
      async init(){
        await this.getSessionInfo();
        await this.getCurrentWeekInfo(this.campusId);
        this.initStudentSex();
        this.initTeacherSex();
        this.initDeviceType();
        this.initDeviceList(this.deviceTypeVal);
        this.deviceTypeGetInfo();
        this.initAttendStatic();
        this.initLevelStatic();
        this.initNotice(1);
        this.initCreditStatic();
        this.initCreditList();
        this.userType = this.loginUserType;
        this.year = this.currentYear;
        this.weekNum = this.currentWeekNum;
        this.week = this.currentWeekNo;
      },
      initStudentSex(){
        let total = 0;
        let params = {
          collegeIdList: this.collegeData[0],
          majorIdList: this.collegeData[1],
          classIdList: this.collegeData[3]
        };
        this.sexTotal = 0;
        this.maleTotal = 0;
        this.famaleTotal = 0;
        this.$axios.get(common.index_sex, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.length; i++){
              total += res.data.data[i].count;
              this.sexTotal = total;
              if (res.data.data[i].sex == 1){
                this.maleTotal = res.data.data[i].count;
              }else if (res.data.data[i].sex == 2){
                this.famaleTotal = res.data.data[i].count;
              }
            }
          }
        });
      },
      initTeacherSex(){
        let total = 0;
        let params = {
          //collegeIdList: this.campusId,
          departmentIdList: this.deptData[this.deptData.length - 1]
        };
        this.sexTeacherTotal = 0;
        this.maleTeacherTotal = 0;
        this.famaleTeacherTotal = 0;
        this.$axios.get(common.index_ter_sex, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            for (let i = 0; i < res.data.data.length; i++){
              total += res.data.data[i].count;
              if (res.data.data[i].sex == 1){
                this.maleTeacherTotal = res.data.data[i].count;
              }else if (res.data.data[i].sex == 2){
                this.famaleTeacherTotal = res.data.data[i].count;
              }
            }
            this.sexTeacherTotal = total;
          }
        });
      },
      initDeviceType(){
        let total = 0;
        let params = {

        };
        this.deviceTypeDate = 0;
        this.padLocalTotal = 0;
        this.padWoTotal = 0;
        this.doorTotal = 0;
        this.deviceTotal = 0;
        this.$axios.get(common.index_device_type).then(res => {
          if (res.data.data){
            console.log(res);
            this.deviceTypeDate = res.data.data;
            for (let i = 0; i < res.data.data.length; i++){
              total += res.data.data[i].count;
              if (res.data.data[i].type == 3){
                this.padLocalTotal = res.data.data[i].count;
              }else if (res.data.data[i].type == 4){
                this.padWoTotal = res.data.data[i].count;
              }else if (res.data.data[i].type == 5){
                this.doorTotal = res.data.data[i].count;
              }
            }
            this.deviceTotal = total;
          }
        });
      },
      initDeviceList(type){
        let url = "";
        let params = {
          page: 1,
          num: 10
        };
        if (type == 4){
          url = common.wo_pad_page;
        }else if (type == 3){
          url = common.local_pad_page;
        }else if (type == 6){
          url = common.dormaccess_control_device_page;
        }
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(res);
            this.deviceTypeList = res.data.data.list;
          }
        });
      },
      initAttendStatic(){
        let params = {
          collegeIdList: this.collegeTabData[0],
          majorIdList: this.collegeTabData[1],
          classIdList: this.collegeTabData[3]
        };
        //this.initLevelStatic(params);
        this.initClassStatic(params);
        //this.initCreditStatic(params);
        this.initDormStatic(params);
      },
      initLevelStatic(){
        let url = common.index_level_static;
        let params = {
          collegeIdList: this.collegeLevelTypeData[0],
          majorIdList: this.collegeLevelTypeData[1],
          classIdList: this.collegeLevelTypeData[3]
        };
        let total = 0;
        this.leaveAttendData = [];
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(1111,res);
            for (let i = 0; i < res.data.data.length; i++){
              total += res.data.data[i].count;
            }
            this.levelTypeTotal = total;
            this.leaveAttendData = res.data.data;
          }
        });
      },
      initClassStatic(params){
        let url = common.index_class_static;
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(2222,res);
            this.classAttendData = res.data.data;
          }
        });
      },
      initCreditStatic(){
        let url = common.index_credit_static;
        let credit = {
          add: {
            label: '加分',
            value: 0
          },
          minus: {
            label: '减分',
            value: 0
          }
        };
        let params = {
          collegeIdList: this.collegeCreditData[0],
          majorIdList: this.collegeCreditData[1],
          classIdList: this.collegeCreditData[3]
        };
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(333,res);
            for (let i = 0; i < res.data.data.length; i++){
              if (res.data.data[i].str1 == "加分"){
                credit['add'] = {
                  label: res.data.data[i].str1,
                  value: res.data.data[i].count
                };
              }
              if (res.data.data[i].str1 == "减分"){
                credit['minus'] = {
                  label: res.data.data[i].str1,
                  value: res.data.data[i].count
                };
              }
            }
            this.creditAttendData = credit;
            console.log(this.creditAttendData);
          }
        });
      },
      initDormStatic(params){
        let url = common.index_dorm_static;
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(444,res);
            this.dormAttendData = res.data.data;
          }
        });
      },
      initNotice(type){
        let url = common.circular_page;
        let params = {
          page: 1,
          num: this.num,
          type: 0,
          actionType: type,
          draft: false,
        };
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.noticeData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initCreditList(){
        let url = common.audit_page;
        let params = {
          page: 1,
          num: 20,
          collegeId: this.collegeCreditData[0],
          majord: this.collegeCreditData[1],
          classId: this.collegeCreditData[3],
          applyTypeCode: 'ScoreApply'
        };
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(666, res.data.data.list);
            this.creditData = res.data.data.list;
          }
        });
      },
      detailNoticeInfo(msgId){
        let url = common.msg_detail;
        let params = {
          msgId: msgId,
          needComment: true,
          hemlType: 'userinfo'
        };
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            console.log(res.data.data);
            this.noticeContentDetail = res.data.data;
          }
        });
      },
      handleCascaderChange(data, type){
        switch (type) {
          case 1:
            this.collegeData = data;
            this.initStudentSex();
            break;
          case 2:
            this.deptData = data;
            this.initTeacherSex();
            break;
          case 3:
            this.collegeTabData = data;
            this.initAttendStatic();
            break;
          case 4:
            this.collegeCreditData = data;
            this.initCreditStatic();
            this.initCreditList();
            break;
          case 5:
            this.collegeLevelTypeData = data;
            this.initLevelStatic();
            break;
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      weekToText(val){
        return weekNoText(val);
      },
      deviceTypeInfo(val){
        return deviceType('set', val);
      },
      handleChangeDevice(data){
        this.deviceTypeVal = data;
        this.initDeviceList(data);
      },
      deviceTypeGetInfo(type, val){
        let arr = [];
        let deviceList = deviceType('get', val);
        for (let i in deviceList){
          if (i == 3 || i == 4 || i == 6){
            arr.push({
              value: i,
              text: deviceList[i],
              label: deviceList[i],
            });
          }
        }
        this.filtersDeviceType = arr;
      },
      changeNotice(data){
        this.activeName = data.name;
        this.initNotice(data.name);
      },
      sizeChange(event){
        this.page = 1;
        this.num = event;
        this.initNotice(this.activeName);
      },
      currentPage(event){
        this.page = event;
        this.initNotice(this.activeName);
      },
      closeDrawerDialog(event){
        this.noticeContentDetail = "";
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.noticeContentDetail = "";
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.noticeContentDetail = "";
        this.drawerVisible = false;
      },
      detailMsg(row){
        console.log(row);
        this.detailNoticeInfo(row.id);
        this.drawerVisible = true;
      },
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.top-content{
  padding: 10px;
  height: 150px;
}
.top-table-content{
  padding: 10px;
  height: 202px;
}
.bottom-content{
  height: 35px;
  line-height: 35px;
  border-top: 1px solid #dddddd;
}
.item-attend-block{
  background: #f2f2f2;
  height: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  position: relative;
}
.item-attend-line-ver{
  background: #f2f2f2;
  height:220px;
  width: 1px;
}
.credit-title{
  font-size: 20px;
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  padding: 10px;
}
.add{
  background: rgb(160, 207, 255);
}
.minus{
  background: rgb(253, 226, 226);
}
.index-right-footer{
  background: #FFFFFF;
  border: 1px solid #EBEEF5;
  border-top: 0px solid #dddddd;
  padding: 0px 0px 5px 0px;
}
</style>
