<template>
  <div class="container">
    <layout-lr>
      <div slot="left">
        <div class="color-muted font-size-12 padding-tb-5 margin-top-10">
          <!--<span class="layout-left-menu-tag"></span>-->
          <span class="layout-left-menu-title">考勤分析</span>
        </div>
        <my-el-tree :type="mainType" :sub-type="subType" @node-click="nodeClick">
          <div slot="top" class="text-center">
            <el-button :type="showType == 1 ? 'primary' : 'default'" size="mini" @click="changeTree(1,4, 1)">{{$t("院系")}}</el-button>
            <el-button :type="showType == 2 ? 'primary' : 'default'" size="mini" @click="changeTree(2,2, 2)">{{$t("宿舍楼")}}</el-button>
          </div>
        </my-el-tree>
      </div>

      <div slot="right">
        <div>
          <my-search-of-date size="small" :show-day="false" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType">

          </my-search-of-date>
        </div>
        <div :style="divHeight5">
          <div class="margin-top-10">
            <el-row :gutter="8">
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 120px">
                  <div class="color-muted">
                    <span>
                      {{$t("已归寝")}}/{{$t("应归寝")}}
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
                    <span>{{$t("日均归寝")}}</span>
                    <span class="margin-left-5">{{topData.actualAver}}</span>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{padding: '10px'}" style="height: 120px">
                  <div>
                    <div>
                      <div class="color-muted">
                        <span>{{$t("未归")}} {{topData.unSignNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.unSignRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-10">
                      <div class="color-muted">
                        <span>{{$t("晚归")}} {{topData.lateNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.lateRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <el-row>
                      <el-col :span="12">
                        <span>{{$t("日均未归")}}</span>
                        <span class="margin-left-5">{{topData.unSignAver}}</span>
                      </el-col>
                      <el-col :span="12" class="text-right">
                        <span>{{$t("日均晚归")}}</span>
                        <span class="margin-left-5">{{topData.lateAver}}</span>
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
                        <span>{{$t("超长未归")}} {{topData.lateLongNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.lateLongRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                    <div class="margin-top-10">
                      <div class="color-muted">
                        <span>{{$t("请假")}} {{topData.leaveNum}}</span>
                      </div>
                      <div>
                        <el-progress :text-inside="true" :stroke-width="10" :percentage="topData.leaveRate" :show-text="false"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div class="margin-top-10 color-muted font-size-12">
                    <el-row>
                      <el-col :span="12">
                        <span>{{$t("日均超长")}}</span>
                        <span class="margin-left-5">{{topData.lateLongAver}}</span>
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
                    {{$t("归寝率")}}
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

          <!--<div class="margin-top-20">
            <el-card :body-style="{padding: '10px'}">
              <div>
                <span>{{$t("状态分析")}}</span>
                <span>
                <el-button-group>
                  <el-button size="small" :type="searchStatus == 'actualNum' ? 'primary' : 'default'" @click="changeStatus('actualNum')">{{$t("已归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'unSignNum' ? 'primary' : 'default'" @click="changeStatus('unSignNum')">{{$t("未归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'lateNum' ? 'primary' : 'default'" @click="changeStatus('lateNum')">{{$t("晚归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'lateLongNum' ? 'primary' : 'default'" @click="changeStatus('lateLongNum')">{{$t("超长未归")}}</el-button>
                  <el-button size="small" :type="searchStatus == 'leaveNum' ? 'primary' : 'default'" @click="changeStatus('leaveNum')">{{$t("请假")}}</el-button>
                </el-button-group>
              </span>
              </div>
              <div style="height: 300px">
                <line-chart chart-id="lineId" :data-key="lineKeyData" :data="lineData" :data-legned="lineLegned"></line-chart>
              </div>
            </el-card>
          </div>-->

          <div class="margin-top-20">
            <el-card :body-style="{padding: '10px'}">
              <div>
                <span>{{$t("状态分析")}}</span>
                <!--<span>
                  <el-button-group>
                    <el-button size="small" :type="searchRateStatus == '-1' ? 'primary' : 'default'">{{$t("全部")}}</el-button>
                    <el-button size="small" :type="searchRateStatus == 'actualNum' ? 'primary' : 'default'">{{$t("归寝率")}}</el-button>
                    <el-button size="small" :type="searchRateStatus == 'unSignNum' ? 'primary' : 'default'">{{$t("未归率")}}</el-button>
                    <el-button size="small" :type="searchRateStatus == 'lateNum' ? 'primary' : 'default'">{{$t("晚归率")}}</el-button>
                    <el-button size="small" :type="searchRateStatus == 'lateLongNum' ? 'primary' : 'default'">{{$t("超长未归率")}}</el-button>
                    <el-button size="small" :type="searchRateStatus == 'leaveNum' ? 'primary' : 'default'">{{$t("请假率")}}</el-button>
                  </el-button-group>
                </span>-->
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
                <line-pop-chart chart-id="popId" :data-key="popKeyData" :data="popData"></line-pop-chart>
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
                    :label="$t('寝室号')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.roomNo ? scope.row.roomNo : '--'}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.roomNo ? scope.row.roomNo : '--'}}
                        </div>
                      </el-popover>
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
                    :label="$t('应归寝')">

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
                    :label="$t('正常归寝')">

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
                    :label="$t('未归')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.unSignNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.unSignNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    :label="$t('晚归')">

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
                    :label="$t('超长未归')">

                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top" popper-class="custom-table-popover">
                        <div class="text-center">{{scope.row.lateLongNum}}</div>
                        <div slot="reference" class="name-wrapper moon-content-text-ellipsis-class">
                          {{scope.row.lateLongNum}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
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
  import LinePopChart from "../../../components/charts/LinePopChart";
  import {
    clearData, deviceType,
    dormStatus
  } from "../../../utils/utils";
  export default {
    mixins: [mixins],
    components: {LayoutLr,MyElTree,MyPagination,MyInputButton,DrawerRight,MySearchOfDate,LineChart,LinePopChart},
    data(){
      return {
        topData: {},
        searchTimeData: {},
        tableData: [],
        tableDetailData: [],
        searchDate: [],
        lineKeyData: [],
        lineData: [],
        lineLegned: [],
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
        searchTopTime: this.$moment(new Date).format("YYYY-MM-DD")
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init(){
        let params = {};
        await this.getCurrentGDateInfo();
        if (this.showType == 1){
          params = {
            collegeId: this.searchCollege,
            majorId: this.searchMajor,
            grade: this.searchGrade,
            classId: this.searchClass,
            userUnit: this.searchUnit,
          }
        }else if (this.showType == 2){
          params = {
            buildId: this.searchBuild,
            floorNum: this.searchFloor,
            userUnit: this.searchUnit,
          }
        }
        //时间类型
        if (this.searchTimeData.timeUnit == 2){
          params['weekNum'] = this.searchTimeData.value;
          params['timeUnit'] = 2;
        }else if (this.searchTimeData.timeUnit == 3){
          params['queryDate'] = this.searchTimeData.value+"-01";
          params['timeUnit'] = 4;
        }else if (this.searchTimeData.timeUnit == 5){
          params['timeUnit'] = 1;
        }else {
          params['weekNum'] = this.g_currentDate.currentWeekNum;
          params['timeUnit'] = 2;
        }
        this.initStatic(params);
        this.initLineStatic(params);
        this.initLinePopStatic(params);
        this.initData(params);
      },
      initStatic(params){
        params['page'] = this.page;
        params['num'] = this.num;
        this.$axios.get(common.attend_dorm_static_base, {params: params}).then(res => {
          if (res.data.data){
            this.topData = res.data.data;
          }
        });
      },
      initLineStatic(params){
        params['page'] = this.page;
        params['num'] = this.num;
        params['chartType'] = 1;
        params['barChartAttr'] = this.searchStatus;
        this.$axios.get(common.attend_dorm_static_line, {params: params}).then(res => {
          if (res.data.data && res.data.data.value){
            this.lineKeyData = res.data.data.key;
            this.lineLegned = [this.$t("已归寝"),this.$t("未归"),this.$t("晚归"),this.$t("超长未归"),this.$t("请假")];
            this.lineData = [
              {
                name: '已归寝',
                type: 'line',
                data: res.data.data.value.actualNum
              },{
                name: '未归',
                type: 'line',
                data: res.data.data.value.unSignNum
              },{
                name: '晚归',
                type: 'line',
                data: res.data.data.value.lateNum
              },{
                name: '超长未归',
                type: 'line',
                data: res.data.data.value.lateLongNum
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
        this.$axios.get(common.attend_dorm_static_line, {params: params}).then(res => {
          if (res.data.data){
            let popDataList = [];
            let popKey = res.data.key;
            let itemStyle = {
              normal: {
                opacity: 0.8,
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
              }
            };
            for(var i = 0; i < res.data.data.value[0].length; i++){
              popDataList.push({
                name: res.data.data.value[0][i].name,
                type: 'scatter',
                itemStyle: itemStyle,
                data: res.data.data.value[0][i].data
              });
            }
            this.popData = popDataList;
            this.popKeyData = res.data.data.key;
          }
        });
      },
      initData(params){
        params['page'] = this.page;
        params['num'] = this.num;
        params['userUnit'] = 5;
        params['chartType'] = 3;
        params['type'] = 'actualNum';
        params['searchStaticType'] = this.showType == 1 ? 2 : 1;
        params['orderAttr'] = 'shouldNum';
        params['orderAsc'] = false;
        this.$axios.get(common.attend_dorm_static_analyse_page, {params: params}).then(res => {
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
          }else if (data.unit == 2){
            this.searchCollege = data.college_id;
            this.searchMajor = data.id;
          }else if (data.unit == 3){
            this.searchMajor = data.major_id;
            this.searchGrade = data.grade;
          }else if (data.unit == 4){
            this.searchClass = data.id;
          }
        }else if (this.mainType == 2){
          if (data.unit == 6){
            this.searchBuild = data.id;
          }else if (data.unit == 7){
            this.searchBuild = data.buildId;
            this.searchFloor = data.id;
          }
        }
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
        this.init();
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
      }
    }
  }
</script>

<style scoped>
  .container {

  }
</style>
