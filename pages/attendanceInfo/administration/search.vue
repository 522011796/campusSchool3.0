<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">考勤查询</span>
        </div>
        <my-el-tree type="4" sub-type="4" @node-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div class="layout-right-tab">
          <el-row>
            <el-col :span="24">
              <!--<my-search-of-date size="small" :show-week="false" :show-term="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
                <span slot="opr" class="layout-inline">
                  <my-select :sel-value="searchAttendType" class="layout-item" :clearable="false" size="small" width-style="150" :options="filterAttendTypes" @change="handleChange"></my-select>
                </span>
                <span slot="other">
                  <el-input size="small" class="width-150" v-model="searchKey" :clearable="true" :placeholder="$t('姓名/工号')"></el-input>
                </span>
              </my-search-of-date>-->
              <my-search-of-date-group size="small" :show-week="false" :show-term="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">
                <span slot="opr" class="layout-inline">
                  <my-select :sel-value="searchAttendType" class="layout-item" :clearable="false" size="small" width-style="150" :options="filterAttendTypes" @change="handleChange"></my-select>
                </span>
                <span slot="other">
                  <el-input size="small" class="width-150" v-model="searchKey" :clearable="true" :placeholder="$t('姓名/工号')"></el-input>
                </span>
              </my-search-of-date-group>
            </el-col>
          </el-row>
        </div>

        <div class="bg-white border-bottom-1 padding-lr-5 padding-tb-5" :style="divHeight">
          <div v-if="tableData.length <= 0">
            <div class="text-center padding-tb-10">
              <span class="color-disabeld">{{$t("暂无数据")}}</span>
            </div>
          </div>
          <el-row v-else :gutter="32">
            <el-col :span="12" v-for="(item, index) in tableData" :key="index" class="margin-bottom-20">
              <el-tabs type="border-card" v-model="item.attendType">
                <el-tab-pane :label="$t('行政考勤')" name="attend" style="height: 150px">
                  <div>
                    <div class="color-grand font-size-17">
                      <span>{{item.realName}}</span>
                      <span>|</span>
                      <span>{{item.jobNum}}</span>
                      <span>|</span>
                      <el-tag size="mini" type="warning" @click="recordDetail(item, 1)">
                        <i class="fa fa-search"></i>
                        {{$t("记录查询")}}
                      </el-tag>
                    </div>
                    <div class="color-muted font-size-14 margin-top-5">
                      <span>{{item.departName}}</span>
                    </div>
                  </div>

                  <div class="margin-top-20 color-sub-grand">
                    <el-row :gutter="16">
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("应出勤")}}</span>
                          <span>{{item.workAttendMap.shouldDays}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="success">
                          <span>{{$t("正常")}}</span>
                          <span>{{item.workAttendMap.normal}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("旷工")}}</span>
                          <span>{{item.workAttendMap.abs}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                    <el-row :gutter="16" class="margin-top-10">
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("迟到")}}</span>
                          <span>{{item.workAttendMap.late}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="error">
                          <span>{{$t("早退")}}</span>
                          <span>{{item.workAttendMap.early}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("请假")}}</span>
                          <span>{{item.workAttendMap.leave}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("出差")}}</span>
                          <span>{{item.workAttendMap.travel}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('会议考勤')" name="meeting" style="height: 150px">
                  <div>
                    <div class="color-grand font-size-17">
                      <span>{{item.realName}}</span>
                      <span>|</span>
                      <span>{{item.jobNum}}</span>
                      <span>|</span>
                      <el-tag size="mini" type="warning" @click="recordDetail(item, 3)">
                        <i class="fa fa-search"></i>
                        {{$t("记录查询")}}
                      </el-tag>
                    </div>
                    <div class="color-muted font-size-14 margin-top-5">
                      <span>{{item.departName}}</span>
                    </div>
                  </div>

                  <div class="margin-top-20 color-sub-grand">
                    <el-row :gutter="16">
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("应出勤")}}</span>
                          <span>{{item.meetingMap.shouldNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="success">
                          <span>{{$t("正常")}}</span>
                          <span>{{item.meetingMap.actualNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                    <el-row :gutter="16" class="margin-top-10">
                      <el-col :span="6">
                        <el-tag type="warning">
                          <span>{{$t("请假")}}</span>
                          <span>{{item.meetingMap.leaveNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="error">
                          <span>{{$t("缺席")}}</span>
                          <span>{{item.meetingMap.unSignNum}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('日常请假')" name="leave" style="height: 150px">
                  <div>
                    <div class="color-grand font-size-17">
                      <span>{{item.realName}}</span>
                      <span>|</span>
                      <span>{{item.jobNum}}</span>
                      <span>|</span>
                      <el-tag size="mini" type="warning" @click="recordDetail(item, 4)">
                        <i class="fa fa-search"></i>
                        {{$t("记录查询")}}
                      </el-tag>
                    </div>
                    <div class="color-muted font-size-14 margin-top-5">
                      <span>{{item.departName}}</span>
                    </div>
                  </div>

                  <div class="margin-top-20 color-sub-grand">
                    <el-row :gutter="16">
                      <el-col :span="6">
                        <el-tag>
                          <span>{{$t("总次数")}}</span>
                          <span>{{item.leaveMap.totalLeaveCount}}{{$t("次")}}</span>
                        </el-tag>
                      </el-col>
                      <el-col :span="6">
                        <el-tag type="success">
                          <span>{{$t("总天数")}}</span>
                          <span>{{item.leaveMap.count}}{{$t("天")}}</span>
                        </el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
        </div>
        <div class="layout-right-footer text-right">
          <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
        </div>
      </div>
    </layout-lr>

    <drawer-layout-right tabindex="0" @changeDrawer="closeDrawerDialog" :visible="drawerVisible" size="750px" :title="$t('个人记录')" @right-close="cancelDrawDialog">
      <div slot="content" v-loading="studentLoading">
        <span tabindex="1"></span>
        <div>
          <el-row>
            <el-col :span="24">
              <div class="text-right">
                <my-date-picker :sel-value="searchDate" :clearable="true" type="daterange" size="small" width-style="240" @change="handleDetialChange" style="position: relative; top: 1px;"></my-date-picker>
                <el-button size="small" type="success" plain @click="searchStudent()">{{$t("搜索")}}</el-button>
                <el-button size="small" type="warning" icon="el-icon-download" @click="expandStudentInfo()">{{$t("导出")}}</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="margin-top-10">
          <el-table
            v-if="userType == 1"
            :data="studentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.current_time}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.current_time}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('班次时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.should_upper_time ? $moment(scope.row.should_upper_time).format("HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.should_upper_time ? $moment(scope.row.should_upper_time).format("HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('上班打卡时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.upper_time ? $moment(scope.row.upper_time).format("HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.upper_time ? $moment(scope.row.upper_time).format("HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('上班打卡结果')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <my-admin-atten :status="scope.row.upper_status"></my-admin-atten>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.upper_status"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('下班打卡时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.lower_time ? $moment(scope.row.lower_time).format("HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.lower_time ? $moment(scope.row.lower_time).format("HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('下班打卡结果')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <my-admin-atten :status="scope.row.lower_status"></my-admin-atten>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.lower_status"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              :label="$t('考勤状态')">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <my-admin-atten :status="scope.row.status"></my-admin-atten>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-admin-atten :status="scope.row.status"></my-admin-atten>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>

          <el-table
            v-if="userType == 3"
            :data="studentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('开始时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.begin_time ? $moment(scope.row.begin_time).format("YYYY-MM-DD HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.begin_time ? $moment(scope.row.begin_time).format("YYYY-MM-DD HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('结束时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.end_time ? $moment(scope.row.end_time).format("YYYY-MM-DD HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.end_time ? $moment(scope.row.end_time).format("YYYY-MM-DD HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('会议名称')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.meeting_name}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.meeting_name}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('会议议题')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.meeting_title}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.meeting_title}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('签到时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.sign_time ? $moment(scope.row.sign_time).format("YYYY-MM-DD HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.sign_time ? $moment(scope.row.sign_time).format("YYYY-MM-DD HH:mm") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('考勤状态')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{meetingJoinStatusInfo(scope.row.sign_status)}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{meetingJoinStatusInfo(scope.row.sign_status)}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>

          <el-table
            v-if="userType == 4"
            :data="studentData"
            header-cell-class-name="custom-table-cell-bg"
            size="medium"
            style="width: 100%"
            @filter-change="fliterTable">
            <el-table-column
              align="center"
              :label="$t('时间')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.apply_time ? $moment(scope.row.apply_time).format("YYYY-MM-DD") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.apply_time ? $moment(scope.row.apply_time).format("YYYY-MM-DD") : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('请假时长')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.sign_time ? $moment(scope.row.sign_time).format("YYYY-MM-DD HH:mm") : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <div>
                      <div v-if="scope.row.apply_type_sub_code == 'TeacherLeaveApplyClass'">
                        <span class="title-class color-disabeld" style="position: relative; top: 0px">{{$t("时长")}}:</span>
                        <span class="moon-content-text-ellipsis-class">{{scope.row.num1}}{{$t("节课")}}</span>
                        <el-tooltip class="item" effect="dark" placement="top-start">
                          <div slot="content">
                            <div v-if="scope.row.str3" v-for="(item, index) in JSON.parse(scope.row.str3)">
                              <span>{{$t("第")}}{{item.section}}{{$t("节课")}}</span>
                              :
                              <span>{{scope.row.courseName}}</span>
                            </div>
                          </div>
                          <i class="el-icon-info"></i>
                        </el-tooltip>
                      </div>
                      <div v-if="scope.row.apply_type_sub_code == 'TeacherLeaveApplyTime'">
                        <span class="title-class color-disabeld font-size-12" style="position: relative; top: 0px">{{$t("时长")}}:</span>
                        <span class="moon-content-text-ellipsis-class">{{scope.row.double1}}天</span>
                      </div>
                    </div>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('请假类型')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <span v-if="scope.row.apply_type_code == 'TeacherLeaveApply'">{{$t("请假")}}</span>
                    <span v-if="scope.row.apply_type_code == 'TeacherBusiTripApply'">{{$t("出差")}}</span>
                    <span v-if="scope.row.apply_type_code == 'TeacherAmendSignApply'">{{$t("补卡")}}</span>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <span v-if="scope.row.apply_type_code == 'TeacherLeaveApply'">{{$t("请假")}}</span>
                    <span v-if="scope.row.apply_type_code == 'TeacherBusiTripApply'">{{$t("出差")}}</span>
                    <span v-if="scope.row.apply_type_code == 'TeacherAmendSignApply'">{{$t("补卡")}}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('请假事由')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">{{scope.row.des ? scope.row.des : '--'}}</div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    {{scope.row.des ? scope.row.des : '--'}}
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :label="$t('请假状态')">

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                  <div class="text-center">
                    <my-audit-status :status="scope.row.status"></my-audit-status>
                  </div>
                  <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                    <my-audit-status :status="scope.row.status"></my-audit-status>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div slot="footer">
        <div class="text-right">
          <el-pagination
            background
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next"
            :total="totalStudent"
            :current-page="pageStudent"
            :page-size="numStudent"
            @size-change="sizeStudentChange"
            @current-change="currentStudentPage">
          </el-pagination>
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
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import DrawerLayoutRight from "../../../components/utils/dialog/DrawerLayoutRight";
  import MyAuditStatus from "../../../components/utils/MyAuditStatus";
  import {
    clearData, deviceType,
    dormStatus, meetingStatusText
  } from "../../../utils/utils";
  import MyAdminAtten from "../../../components/utils/status/MyAdminAtten";
  export default {
    mixins: [mixins],
    components: {
      MyAdminAtten,
      LayoutLr,MyElTree,MyPagination,MyInputButton,MySex,DialogNormal,MySelect,MyCascader,MyDatePicker,MyNormalDialog,DrawerRight,MySearchOfDate,DrawerLayoutRight,MyAuditStatus},
    data(){
      return {
        pageStudent: 1,
        numStudent: 20,
        totalStudent: 0,
        searchTimeData: {},
        tableData: [],
        studentData: [],
        tableDetailData: [],
        searchDate: [],
        filtersDeviceType: [],
        studentLoading: false,
        modalVisible: false,
        dialogLoading: false,
        visibleConfim: false,
        drawerVisible: false,
        drawerLoading: false,
        searchCollege: '',
        searchMajor: '',
        searchGrade: '',
        searchClass: '',
        searchBuild: '',
        searchFloor: '',
        searchKey: '',
        searchStaticType: '',
        searchDeviceType: '',
        searchDept: '',
        subTitle: '',
        uploadProcess: '',
        searchType: -1,
        searchDetailType: -1,
        uploadResult: {},
        showType: 1,
        mainType: "1",
        subType: "4",
        uploadFile: common.teacher_file + "?fileName=" + encodeURIComponent(this.$t("学生导入模板20180130_v2.xls")),
        uploadAction: common.student_upload,
        loopTimer: null,
        resultList: [],
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD"),
        attendType: 'attend',
        searchAttendType: 'attend',
        userType: 1,
        detailData: {},
      }
    },
    created() {
      this.initInfo();
      this.deviceTypeGetInfo();
    },
    methods: {
      async initInfo() {
        await this.getSessionInfo();
        this.init();
      },
      init(){
        let params = {
          page: this.page,
          num: this.num,
          keyWord: this.searchKey,
          staticType: this.searchStaticType,
          termId: this.currentTermId
        };
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['busiTime'] = day;
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let month = this.searchTimeData.value;
          params['year'] = month.split("-")[0];
          params['month'] = month.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 4){
          params['year'] = this.searchTimeData.value;
          params['timeUnit'] = 6;
        }else {
          let day = this.$moment(new Date()).format("YYYY-MM-DD");
          params['busiTime'] = this.$moment(new Date()).format("YYYY-MM-DD");
          params['timeUnit'] = 3;
        }
        params['departmentPath'] = this.searchDept.value;
        params = this.clearDataInfo(params);
        this.$axios.get(common.attend_teacher_static_list_page, {params: params}).then(res => {
          if (res.data.data){
            for (let i = 0; i < res.data.data.list.length; i++){
              res.data.data.list[i]['attendType'] = this.attendType;
            }
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      initDetail(data, type){
        let url = '';
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          userId: this.detailData.userId,
          userType: this.userType
        };
        if (this.userType == 1){
          url = common.attend_admin_setting_admin;
          params['time1'] = this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '';
          params['time2'] = this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '';
        }else if (this.userType == 3){
          url = common.attend_admin_setting_meeting;
          params['beginTime'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00') : '';
          params['endTime'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 59:59') : '';
        }else if (this.userType == 4){
          url = common.attend_admin_setting_leave;
          params['applyTypeCode'] = 'TeacherLeaveApply';
          params['applyTimeBegin'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00') : '';
          params['applyTimeEnd'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 59:59') : '';
          params['applyUserId'] = this.detailData.userId;
        }
        params = this.clearDataInfo(params);
        this.studentLoading = true;
        this.$axios.get(url, {params: params}).then(res => {
          if (res.data.data){
            this.studentData = res.data.data.list;
            this.totalStudent = res.data.data.totalCount;
            this.numStudent = res.data.data.num;
            this.pageStudent = res.data.data.currentPage;
          }
          this.studentLoading = false;
        });
      },
      recordDetail(data, type){
        setTimeout(() => {
          this.initDetail(data, type);
        },800);
        this.detailData = data;
        this.userType = type;
        this.drawerVisible = true;
      },
      nodeClick(data){
        this.searchDept = data;
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
      sizeStudentChange(event){
        this.pageStudent = 1;
        this.numStudent = event;
        this.initDetail();
      },
      currentStudentPage(event){
        this.pageStudent = event;
        this.initDetail();
      },
      cancelDialog(){
        this.modalVisible = false;
      },
      handleChangeTime(data, type){
        switch (type) {
          case 1:
            this.form.borthday = data;
            break;
          case 2:
            this.form.innerTime = data;
            break;
          case 3:
            this.form.workTime = data;
            break;
        }
      },
      handleCancelChange(data) {
        this.visibleConfim = false;
      },
      closeDrawerDialog(event){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchUserId = "";
        this.userType = "";
        this.detailData = {};
        this.searchDate = [];
        this.studentData = [];
        this.drawerVisible = event;
      },
      closeDrawDialog(event){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchUserId = "";
        this.userType = "";
        this.detailData = {};
        this.searchDate = [];
        this.studentData = [];
        this.drawerVisible = false;
      },
      cancelDrawDialog(){
        this.pageStudent = 1;
        this.numStudent = 20;
        this.searchUserId = "";
        this.userType = "";
        this.detailData = {};
        this.searchDate = [];
        this.studentData = [];
        this.drawerVisible = false;
      },
      searchTopDate(data){
        this.searchTimeData = data;
        this.init();
      },
      searchTopType(data){

      },
      dormStatusInfo(val){
        return dormStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'deviceType'){
            this.searchDeviceType = value[item][0];
          }
        }
        this.init();
      },
      handleChange(data){
        this.attendType = data;
        this.init();
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      clearDataInfo(data){
        return clearData(data);
      },
      deviceTypeInfo(type, val){
        return deviceType(type, val);
      },
      deviceTypeGetInfo(type, val){
        let arr = [];
        let deviceList = deviceType('get', val);
        for (let i in deviceList){
          arr.push({
            value: i,
            text: deviceList[i]
          });
        }
        this.filtersDeviceType = arr;
      },
      changeTree(mainType, subType, type){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";
        this.mainType = ''+mainType;
        this.subType = ''+subType;
        this.showType = type;
        this.init();
      },
      handleDetialChange(data){
        this.searchDate = data;
      },
      searchStudent(){
        this.pageStudent = 1;
        this.initDetail();
      },
      expandStudentInfo(){
        let url = '';
        let params = {
          page: this.pageStudent,
          num: this.numStudent,
          userId: this.detailData.userId,
          userType: this.userType
        };
        if (this.userType == 1){
          url = common.attend_teacher_static_list_admin_detail_export;
          params['time1'] = this.searchDate && this.searchDate.length > 0 ? this.searchDate[0] : '';
          params['time2'] = this.searchDate && this.searchDate.length > 0 ? this.searchDate[1] : '';
        }else if (this.userType == 3){
          url = common.attend_teacher_static_list_meeting_detail_export;
          params['beginTime'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00') : '';
          params['endTime'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 59:59') : '';
        }else if (this.userType == 4){
          url = common.attend_teacher_static_list_leave_detail_export;
          params['applyTypeCode'] = 'TeacherLeaveApply';
          params['applyTimeBegin'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[0] + ' 00:00') : '';
          params['applyTimeEnd'] = this.searchDate && this.searchDate.length > 0 ? (this.searchDate[1] + ' 59:59') : '';
          params['applyUserId'] = this.detailData.userId;
        }
        params = this.clearDataInfo(params);
        params = this.$qs.stringify(params);
        window.open(url+"?"+params, "_self");
      },
      meetingJoinStatusInfo(val){
        return meetingStatusText('set', val);
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
