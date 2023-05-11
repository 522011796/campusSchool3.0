<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">考勤分析</span>
        </div>
        <my-el-tree type="1" sub-type="4" @node-click="nodeClick" @all-click="nodeClick"></my-el-tree>
      </div>

      <div slot="right">
        <div>
          <!--<my-search-of-date size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">

          </my-search-of-date>-->
          <my-search-of-date-group size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date-group>
        </div>
        <div :style="divHeight5">
          <div class="margin-top-10">
            <el-row :gutter="8">
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 120px">
                  <div class="color-muted">
                    <span>
                      {{$t("已出勤")}}/{{$t("应出勤")}}
                    </span>
                  </div>
                  <div class="margin-top-10 color-muted">
                  <span>
                    {{topData.actualNum}}/{{topData.shouldNum}}
                  </span>
                  </div>
                  <div class="margin-top-10">
                    <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.actualRate" :show-text="false"></el-progress>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <span>{{$t("日均出勤")}}</span>
                    <span class="margin-left-5">{{topData.actualAver}}</span>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 120px">
                  <div>
                    <div>
                      <div class="color-muted">
                        <span>{{$t("迟到")}} {{topData.lateNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.lateRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-10">
                      <div class="color-muted">
                        <span>{{$t("早退")}} {{topData.leaveEarlyNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.leaveEarlyRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <el-row>
                      <el-col :span="12">
                        <span>{{$t("日均迟到")}}</span>
                        <span class="margin-left-5">{{topData.lateAver}}</span>
                      </el-col>
                      <el-col :span="12" class="text-right">
                        <span>{{$t("日均早退")}}</span>
                        <span class="margin-left-5">{{topData.leaveEarlyAver}}</span>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 120px">
                  <div>
                    <div>
                      <div class="color-muted">
                        <span>{{$t("请假")}} {{topData.leaveNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.leaveRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-10">
                      <div class="color-muted">
                        <span>{{$t("旷课")}} {{topData.notSignNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.notSignNum" :show-text="false"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <el-row>
                      <el-col :span="12">
                        <span>{{$t("日均旷课")}}</span>
                        <span class="margin-left-5">{{topData.notSignAver}}</span>
                      </el-col>
                      <el-col :span="12" class="text-right">
                        <span>{{$t("日均请假")}}</span>
                        <span class="margin-left-5">{{topData.leaveAver}}</span>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 120px">
                  <div class="color-muted">
                  <span>
                    {{$t("出勤率")}}
                  </span>
                  </div>
                  <div class="margin-top-10 color-muted">
                    <span>
                      {{topData.actualRate}}%
                    </span>
                  </div>
                  <div class="margin-top-10">
                    <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.actualRate" :show-text="false"></el-progress>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>

          <div class="margin-top-20">
            <el-card :body-style="{padding: '10px'}">
              <div>
                <span>{{$t("状态分析")}}</span>
                <span>
                <!--<el-button-group>
                  <el-button size="small" :type="searchStatus == 'actualNum' ? 'primary' : 'default'" @click="changeStatus('actualNum')">{{$t("已归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'unSignNum' ? 'primary' : 'default'" @click="changeStatus('unSignNum')">{{$t("未归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'lateNum' ? 'primary' : 'default'" @click="changeStatus('lateNum')">{{$t("晚归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'lateLongNum' ? 'primary' : 'default'" @click="changeStatus('lateLongNum')">{{$t("超长未归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'leaveNum' ? 'primary' : 'default'" @click="changeStatus('leaveNum')">{{$t("请假")}}</el-button>
                </el-button-group>-->
              </span>
              </div>
              <div style="height: 300px">
                <line-chart chart-id="lineBaseId" :data-key="lineBaseKeyData" :data="lineBaseData" :data-legned="lineBaseLegned"></line-chart>
              </div>
            </el-card>
          </div>

          <div class="margin-top-20">
            <el-card :body-style="{padding: '10px'}">
              <div>
                <span>{{$t("学生排名")}}</span>
                <span>
                <el-button-group>
                  <el-button size="small" :type="searchStatus == 'actualNum' ? 'primary' : 'default'" @click="changeStatus('actualNum')">{{$t("出勤")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'lateNum' ? 'primary' : 'default'" @click="changeStatus('lateNum')">{{$t("迟到")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'leaveEarlyNum' ? 'primary' : 'default'" @click="changeStatus('leaveEarlyNum')">{{$t("早退")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'unSignNum' ? 'primary' : 'default'" @click="changeStatus('notSignNum')">{{$t("旷课")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'leaveNum' ? 'primary' : 'default'" @click="changeStatus('leaveNum')">{{$t("请假")}}</el-button>
                </el-button-group>
              </span>
              </div>
              <div class="margin-top-5" style="height: 300px">
                <el-table
                  ref="refTable"
                  :data="tableData"
                  height="300"
                  header-cell-class-name="custom-table-cell-bg"
                  size="medium"
                  style="width: 100%">
                  <el-table-column
                    align="center"
                    :label="$t('排名')">

                    <template slot-scope="scope">
                      <span class="color-warning">{{scope.$index + 1}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('姓名')">

                    <template slot-scope="scope">
                      <span class="color-warning">{{scope.row.studentName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('院系')">

                    <template slot-scope="scope">
                      <span class="color-warning">{{scope.row.collegeName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('专业')">

                    <template slot-scope="scope">
                      <span class="color-warning">{{scope.row.majorName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('班级')">

                    <template slot-scope="scope">
                      <span class="color-warning">{{scope.row.className}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('次数')">

                    <template slot-scope="scope">
                      <span class="color-warning" v-if="searchStatus == 'actualNum'">{{scope.row.actualNum}}</span>
                      <span class="color-warning" v-if="searchStatus == 'lateNum'">{{scope.row.lateNum}}</span>
                      <span class="color-warning" v-if="searchStatus == 'leaveEarlyNum'">{{scope.row.leaveEarlyNum}}</span>
                      <span class="color-warning" v-if="searchStatus == 'unSignNum'">{{scope.row.unSignNum}}</span>
                      <span class="color-warning" v-if="searchStatus == 'leaveNum'">{{scope.row.leaveNum}}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>

          <div class="margin-top-20">
            <el-card :body-style="{padding: '10px'}">
              <div>
                <span>{{$t("课程分析")}}</span>
                <span>
                  <my-course-select ref="courseSelect" :filterable="true" size="small" :clearable="true" :sel-value="searchCourseId" @change="handleCourseChange"></my-course-select>
                </span>
              </div>
              <div class="margin-top-5">
                <span class="font-size-12 color-muted">{{$t("趋势图")}}</span>
              </div>
              <div style="height: 300px">
                <line-chart chart-id="lineId" :data-key="lineKeyData" :data="lineData" :data-legned="lineLegned"></line-chart>
              </div>
              <div class="line-height"></div>
              <div class="margin-top-5">
                <span class="font-size-12 color-muted">{{$t("散点图")}}</span>
              </div>
              <div style="height: 300px">
                <line-class-pop-chart chart-id="popId" :data-key="popKeyData" :data="popData"></line-class-pop-chart>
              </div>
            </el-card>
          </div>

          <div class="margin-top-20">
            <el-card :body-style="{padding: '10px'}">
              <div>
                <span>{{$t("统计信息")}}</span>
              </div>
              <div class="margin-top-10">
                <el-table
                  ref="refTable"
                  :data="tableData"
                  header-cell-class-name="custom-table-cell-bg"
                  size="medium"
                  @sort-change="sortTable"
                  style="width: 100%">
                  <el-table-column
                    align="center"
                    :label="$t('日期')">

                    <template slot-scope="scope">
                      <span v-if="scope.row.timeUnit == 1">{{$t("当前学期")}}</span>
                      <span v-if="scope.row.timeUnit == 2">{{$t("第")}}{{scope.row.weekNum}}{{$t("周")}}</span>
                      <span v-if="scope.row.timeUnit == 3">{{scope.row.busiTime}}</span>
                      <span v-if="scope.row.timeUnit == 4">{{scope.row.month}}{{$t("月")}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('姓名')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.studentName ? scope.row.studentName : '--'}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.studentName ? scope.row.studentName : '--'}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('应出勤')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.shouldNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.shouldNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    sortable="custom"
                    prop="actualNum"
                    :label="$t('已出勤')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.actualNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.actualNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    sortable="custom"
                    prop="lateNum"
                    :label="$t('迟到')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.lateNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.lateNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    sortable="custom"
                    prop="unSignNum"
                    :label="$t('旷课')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.notSignNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.notSignNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    sortable="custom"
                    prop="leaveEarlyNum"
                    :label="$t('早退')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.leaveEarlyNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.leaveEarlyNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    sortable="custom"
                    prop="leaveNum"
                    :label="$t('请假')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.leaveNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.leaveNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                </el-table>

                <div class="layout-right-footer text-right">
                  <my-pagination :total="total" :current-page="page" :page-size="num" @currentPage="currentPage" @sizeChange="sizeChange" @jumpChange="jumpPage" class="layout-pagination"></my-pagination>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </layout-lr>
  </div>
</template>

<script>
  import mixins from "../../../utils/mixins";
  import {common} from "../../../utils/api/url";
  import LayoutLr from "../../../components/Layout/LayoutLr";
  import MyElTree from "../../../components/tree/MyElTree";
  import MyPagination from "../../../components/MyPagination";
  import MyInputButton from "../../../components/search/MyInputButton";
  import DrawerRight from "../../../components/utils/dialog/DrawerRight";
  import MySearchOfDate from "../../../components/search/MySearchOfDate";
  import LineChart from "../../../components/charts/LineChart";
  import LineClassPopChart from "../../../components/charts/LineClassPopChart";
  import MyCourseSelect from "../../../components/utils/MyCourseSelect";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,DrawerRight,MySearchOfDate,LineChart,LineClassPopChart,MyCourseSelect},
    data(){
      return {
        searchCourseId: '',
        topData: {},
        searchTimeData: {},
        tableData: [],
        tableTopData: [],
        tableDetailData: [],
        searchDate: [],
        lineKeyData: [],
        lineData: [],
        lineBaseKeyData: [],
        lineBaseData: [],
        lineLegned: [],
        lineBaseLegned: [],
        popKeyData: [],
        popData: [],
        searchStatus: 'actualNum',
        searchRateStatus: 'actualNum',
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
        searchUnit: '1',
        searchKey: '',
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
        paramsData: {},
        sortField: 'actualNum',
        sortType: 'asc',
        paramsData: {},
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        let params = {
          collegeId: this.searchCollege,
          majorId: this.searchMajor,
          grade: this.searchGrade,
          classId: this.searchClass,
          userUnit: this.searchUnit
        };
        await this.getCurrentGDateInfo();
        await this.getSessionInfo();
        //时间类型
        if (this.searchTimeData.timeUnit == 1){
          let day = this.searchTimeData.value;
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }else if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          let month = this.searchTimeData.value;
          params['year'] = month.split("-")[0];
          params['month'] = month.split("-")[1];
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          let day = this.$moment(new Date).format("YYYY-MM-DD");
          params['year'] = day.split("-")[0];
          params['month'] = day.split("-")[1];
          params['day'] = day.split("-")[2];
          params['timeUnit'] = 3;
        }
        params['termId'] = this.currentTermId;
        this.initStatic(params);
        this.initLineStatic(params);
        this.initLinePopStatic(params);
        this.initData(params);
        this.initStudentTop(params);
      },
      initStudentTop(params){
        params['sortField'] = this.searchStatus;
        this.paramsData = params;
        this.$axios.get(common.classattend_student_sort, {params: params}).then(res => {
          if (res.data.data){
            this.tableTopData = res.data.data;
          }
        });
      },
      initStatic(params){
        params['page'] = this.page;
        params['num'] = this.num;
        this.$axios.get(common.attend_class_static_base, {params: params}).then(res => {
          if (res.data.data && res.data.data.value){
            this.topData = res.data.data.baseInfo;
            this.lineBaseKeyData = res.data.data.key;
            this.lineBaseLegned = [this.$t("出勤"),this.$t("迟到"),this.$t("早退"),this.$t("旷课"),this.$t("请假")];
            this.lineBaseData = [
              {
                name: '出勤',
                type: 'line',
                data: res.data.data.value.actualNum
              },{
                name: '迟到',
                type: 'line',
                data: res.data.data.value.lateNum
              },{
                name: '早退',
                type: 'line',
                data: res.data.data.value.leaveEarlyNum
              },{
                name: '旷课',
                type: 'line',
                data: res.data.data.value.notSignNum
              },{
                name: '请假',
                type: 'line',
                data: res.data.data.value.leaveNum
              }
            ];
          }
        });
      },
      initLineStatic(params){
        params['page'] = this.page;
        params['num'] = this.num;
        params['chartType'] = 1;
        params['courseId'] = this.searchCourseId;
        params['barChartAttr'] = this.searchStatus;
        this.$axios.get(common.attend_class_static_chart_base, {params: params}).then(res => {
          if (res.data.data && res.data.data.value){
            this.lineKeyData = res.data.data.key;
            this.lineLegned = [this.$t("出勤"),this.$t("迟到"),this.$t("早退"),this.$t("旷课"),this.$t("请假")];
            this.lineData = [
              {
                name: '出勤',
                type: 'line',
                data: res.data.data.value.actualNum
              },{
                name: '迟到',
                type: 'line',
                data: res.data.data.value.lateNum
              },{
                name: '早退',
                type: 'line',
                data: res.data.data.value.leaveEarlyNum
              },{
                name: '旷课',
                type: 'line',
                data: res.data.data.value.notSignNum
              },{
                name: '请假',
                type: 'line',
                data: res.data.data.value.leaveNum
              }
            ];
          }
        });
      },
      initLinePopStatic(params){
        params['page'] = this.page;
        params['num'] = this.num;
        params['userUnit'] = this.showType == 1 ? '4' : '6';
        params['chartType'] = 3;
        params['barChartAttr'] = this.searchStatus;
        this.$axios.get(common.attend_class_static_chart_base, {params: params}).then(res => {
          if (res.data.data && res.data.data.courseList){
            let popDataList = [];
            let popKey = res.data.key;
            let itemStyle = {
              normal: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
              }
            };
            for(var i = 0; i < res.data.data.courseList.length; i++){
              let dataName = res.data.data.courseList[i].data;
              popDataList.push({
                name: res.data.data.courseList[i].courseName,
                type: 'scatter',
                itemStyle: itemStyle,
                data: res.data.data.bubble[res.data.data.courseList[i].data]
              });
            }
            this.popData = popDataList;
            this.popKeyData = res.data.data.key;
          }
        });
      },
      initData(params){
        this.paramsData = params;
        params['page'] = this.page;
        params['num'] = this.num;
        params['userUnit'] = 5;
        params['chartType'] = 3;
        params['type'] = 'actualNum';
        params['searchStaticType'] = this.showType == 1 ? 2 : 1;
        params['sortField'] = this.sortField;
        params['sortType'] = this.sortType;
        this.$axios.get(common.attend_class_static_analyse_page, {params: params}).then(res => {
          if (res.data.data){
            this.tableData = res.data.data.list;
            this.total = res.data.data.totalCount;
            this.num = res.data.data.num;
            this.page = res.data.data.currentPage;
          }
        });
      },
      nodeClick(data){
        this.searchCollege = "";
        this.searchMajor = "";
        this.searchGrade = "";
        this.searchClass = "";
        this.searchBuild = "";
        this.searchFloor = "";

        if (this.mainType == 1){
          if (data.unit == 1){
            this.searchCollege = data.id;
            this.$refs.courseSelect.initSelect(this.searchCollege, this.searchMajor, this.searchClass);
          }else if (data.unit == 2){
            this.searchCollege = data.college_id;
            this.searchMajor = data.id;
            this.$refs.courseSelect.initSelect(this.searchCollege, this.searchMajor, this.searchClass);
          }else if (data.unit == 3){
            this.searchMajor = data.major_id;
            this.searchGrade = data.grade;
          }else if (data.unit == 4){
            this.searchClass = data.id;
            this.$refs.courseSelect.initSelect(this.searchCollege, this.searchMajor, this.searchClass);
          }

          if (!data.unit){
            this.$refs.courseSelect.initSelect();
          }
        }else if (this.mainType == 2){
          if (data.unit == 6){
            this.searchBuild = data.id;
          }else if (data.unit == 7){
            this.searchBuild = data.buildId;
            this.searchFloor = data.id;
          }
        }
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
      searchTopDate(data){
        this.searchTimeData = data;
        this.page = 1;
        this.init();
      },
      searchTopType(data){

      },
      dormStatusInfo(val){
        return dormStatus('set', val);
      },
      fliterTable(value, row, column){
        for (let item in value){
          if (item == 'status'){
            this.searchType = value[item][0];
          }
        }
        this.init();
      },
      handleChange(data){
        this.searchDate = data;
      },
      search(data){
        this.searchKey = data.input;
        this.page = 1;
        this.init();
      },
      changeStatus(type){
        this.searchStatus = type;
        this.initStudentTop(this.paramsData);
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
      handleCourseChange(data){
        this.searchCourseId = data;
        this.init();
      },
      sortTable(data){
        this.sortField = data.prop;
        if (data.order == 'descending'){
          this.sortType = 'desc';
        }else if (data.order == 'ascending'){
          this.sortType = 'asc';
        }
        this.initData(this.paramsData);
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
