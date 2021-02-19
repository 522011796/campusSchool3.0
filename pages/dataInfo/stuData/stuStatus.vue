<template>
  <div class="container" :style="divHeight4">
    <div class="color-muted">
      <el-row :gutter="8">
        <el-col :span="6">
          <el-card :body-style="{padding: '10px'}" class="card-item">
            <div>
              <span>{{$t("学生数据(人)")}}</span>
            </div>
            <div class="margin-top-5">
              <span class="font-size-15 color-grand" v-if="searchData.sexList">
                {{(searchData.sexList[0] ? searchData.sexList[0].size : 0) + (searchData.sexList[1] ? searchData.sexList[1].size : 0) + (searchData.sexList[2] ? searchData.sexList[2].size : 0)}}
              </span>
            </div>

            <div class="margin-top-20 color-muted">
              <div>
                <span>{{$t("男生")}}</span>
                <span class="margin-left-10">
                  <i class="fa fa-male margin-right-5" v-for="n in 5" :key="n"></i>
                </span>
                <span class="margin-left-10" v-if="searchData.sexList">{{searchData.sexList[0] ? searchData.sexList[0].size : 0}}</span>
              </div>
              <div class="margin-top-5">
                <span>{{$t("女生")}}</span>
                <span class="margin-left-10">
                  <i class="fa fa-female margin-right-5" v-for="n in 5" :key="n"></i>
                </span>
                <span class="margin-left-10" v-if="searchData.sexList">{{searchData.sexList[1] ? searchData.sexList[1].size : 0}}</span>
              </div>
              <div class="margin-top-5">
                <span>{{$t("未知")}}</span>
                <span class="margin-left-10">
                  <i class="fa fa-male margin-right-5" v-for="n in 5" :key="n"></i>
                </span>
                <span class="margin-left-10" v-if="searchData.sexList">{{searchData.sexList[2] ? searchData.sexList[2].size : 0}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{padding: '10px'}" class="card-item">
            <div>
              <span>{{$t("男女比例")}}</span>
            </div>
            <div class="margin-top-5">

            </div>

            <div class="margin-top-10 color-muted">
              <div style="height: 140px" class="text-center">
                <circle-chart chart-id="personId" legend-right="0" :center="center" :chart-title='$t("男女比例")' :data-key="personDataKey" :data="personData"></circle-chart>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{padding: '10px'}" class="card-item">
            <div>
              <span>{{$t("专业比例")}}</span>
            </div>
            <div class="margin-top-5">

            </div>

            <div class="margin-top-10 color-muted">
              <div style="height: 140px" class="text-center">
                <circle-chart chart-id="majorId" legend-right="0" :center="centerOther" :chart-title='$t("专业比例")' :data="majorData"></circle-chart>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{padding: '10px'}" class="card-item">
            <div>
              <span>{{$t("院系比例")}}</span>
            </div>
            <div class="margin-top-5">

            </div>

            <div class="margin-top-10 color-muted">
              <div style="height: 140px" class="text-center">
                <circle-chart chart-id="collegeId" legend-right="0" :center="centerOther" :chart-title='$t("院系比例")' :data-key="collegeDataKey" :data="collegeData"></circle-chart>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="margin-top-20">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-card :body-style="{padding: '10px'}">
            <el-row>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本周迟到人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.week">{{searchSummaryData.week.lateNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.week">{{$t("迟到率")}} {{searchSummaryData.week.lateRate}}%</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本月迟到人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.month">{{searchSummaryData.month.lateNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.month">{{$t("迟到率")}} {{searchSummaryData.month.lateRate}}%</span>
                </div>
              </el-col>
            </el-row>
            <div class="line-height"></div>
            <el-row>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本周旷课人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.week">{{searchSummaryData.week.unSignNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.month">{{$t("旷课率")}} {{searchSummaryData.week.unSignRate}}%</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本月旷课人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.month">{{searchSummaryData.month.unSignNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.month">{{$t("旷课率")}} {{searchSummaryData.month.unSignRate}}%</span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{padding: '10px'}">
            <el-row>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本周请假人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.week">{{searchSummaryData.week.leaveNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.week">{{$t("请假率")}} {{searchSummaryData.week.leaveRate}}%</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本月请假人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.month">{{searchSummaryData.month.leaveNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.month">{{$t("请假率")}} {{searchSummaryData.month.leaveRate}}%</span>
                </div>
              </el-col>
            </el-row>
            <div class="line-height"></div>
            <el-row>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本周早退人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.week">{{searchSummaryData.week.leaveEarlyNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.week">{{$t("早退率")}} {{searchSummaryData.week.leaveEarlyRate}}%</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="color-muted">
                  <span>{{$t("本月早退人次")}}</span>
                </div>
                <div class="margin-top-10 color-muted">
                  <span v-if="searchSummaryData.month">{{searchSummaryData.month.leaveEarlyNum}}</span>
                </div>
                <div class="margin-top-10 font-size-12 color-disabeld">
                  <span v-if="searchSummaryData.month">{{$t("早退率")}} {{searchSummaryData.month.leaveEarlyRate}}%</span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="margin-top-20">
      <div>
        <!--<my-search-of-date size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date>-->
        <my-search-of-date-group size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date-group>
      </div>
      <div class="margin-top-10">
        <el-card :body-style="{padding: '10px'}">
          <div>
            <div class="color-muted font-size-12">
              <span>{{$t("课堂趋势图")}}</span>
            </div>
            <div style="height: 300px">
              <line-chart chart-id="lineId" :data-key="lineKeyData" :data="lineData" :data-legned="lineLegned"></line-chart>
            </div>
          </div>

          <div>
            <div class="color-muted font-size-12">
              <span>{{$t("考勤排名")}}</span>
              <span>
                <el-button-group>
                  <el-button size="small" :type="searchType == 'lateNum' ? 'primary': 'default'" @click="searchAttenType('lateNum')">{{$t("迟到")}}</el-button>
                  <el-button size="small" :type="searchType == 'unSignNum' ? 'primary': 'default'" @click="searchAttenType('unSignNum')">{{$t("旷课")}}</el-button>
                  <el-button size="small" :type="searchType == 'leaveEarlyNum' ? 'primary': 'default'" @click="searchAttenType('leaveEarlyNum')">{{$t("早退")}}</el-button>
                  <el-button size="small" :type="searchType == 'leaveNum' ? 'primary': 'default'" @click="searchAttenType('leaveNum')">{{$t("请假")}}</el-button>
                  <el-button size="small" :type="searchType == 'actualNum' ? 'primary': 'default'" @click="searchAttenType('actualNum')">{{$t("正常")}}</el-button>
                </el-button-group>
              </span>
            </div>
            <div class="margin-top-10">
              <el-row>
                <el-col :span="12">
                  <div class="padding-tb-5 font-size-12 margin-left-20 color-warning">
                    <span>{{$t("学生TOP10")}}</span>
                  </div>
                  <div style="height: 240px">
                    <circle-chart chart-id="attendStuId" legend-right="50" :center="centerTop" :chart-title='$t("学生TOP10")' :data-key="stuDataKey" :data="stuData"></circle-chart>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="padding-tb-5 font-size-12 margin-left-20 color-warning">
                    <span>{{$t("班级TOP10")}}</span>
                  </div>
                  <div style="height: 240px">
                    <circle-chart chart-id="attendClassId" legend-right="50" :center="centerTop" :chart-title='$t("班级TOP10")' :data-key="classDataKey" :data="classData"></circle-chart>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <div class="padding-tb-5 font-size-12 margin-left-20 color-warning">
                    <span>{{$t("课程TOP10")}}</span>
                  </div>
                  <div style="height: 240px">
                    <circle-chart chart-id="courseAttendId" legend-right="50" :center="centerTop" :chart-title='$t("课程TOP10")' :data-key="courseDataKey" :data="courseData"></circle-chart>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="padding-tb-5 font-size-12 margin-left-20 color-warning">
                    <span>{{$t("院系TOP10")}}</span>
                  </div>
                  <div style="height: 240px">
                    <circle-chart chart-id="collegeAttendId" legend-right="50" :center="centerTop" :chart-title='$t("院系TOP10")' :data-key="collegeTopDataKey" :data="collegeTopData"></circle-chart>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "../../../utils/mixins";
import {common} from "../../../utils/api/url";
import CircleChart from "../../../components/charts/CircleChart";
import LineChart from "../../../components/charts/LineChart";
import MySearchOfDate from "../../../components/search/MySearchOfDate";
export default {
  mixins: [mixins],
  components: {CircleChart,MySearchOfDate,LineChart},
  data(){
    return {
      searchTopTime: this.$moment(new Date()).format("YYYY-MM-DD"),
      searchData: {},
      searchTimeData: {},
      searchSummaryData: {},
      studentTotal: 0,
      maleTotal: 0,
      femaleTotal: 0,
      unknowTotal: 0,
      center: ['33%', '50%'],
      centerTop: ['40%', '50%'],
      centerOther: ['50%', '50%'],
      personDataKey: ["test"],
      personData: [],
      majorDataKey: ["test"],
      majorData: [],
      collegeDataKey: ["test"],
      collegeData: [],
      latePersonTotal: 0,
      latePersonRate: 0,
      collegeTopData: [],
      collegeTopDataKey: [],
      stuData: [],
      stuDataKey: [],
      classData: [],
      classDataKey: [],
      courseData: [],
      courseDataKey: [],
      searchType: 'lateNum',
      lineData: [],
      lineKeyData: [],
      lineLegned: []
    }
  },
  created() {
    this.init();
    this.initLine();
    this.initTop('lateNum');
  },
  methods: {
    init(){
      this.initStatic();
      this.initSummary();
    },
    async initTop(type){
      await this.initTop10(1, type);
      await this.initTop10(2, type);
      await this.initTop10(3, type);
      await this.initTop10(4, type);
    },
    initStatic(){
      let personDataArr = [];
      let personDataKeyArr = [];
      let majorDataArr = [];
      let majorDataKeyArr = [];
      let collegeDataArr = [];
      let collegeDataKeyArr = [];
      this.$axios.get(common.school_static_top).then(res => {
        if (res.data.data){
          /*for (let i = 0; i < res.data.data.sexList.length; i++){
            if (i == 0){
              res.data.data.sexList[i] = {
                campus_id: res.data.data.sexList[i].campus_id,
                sex: res.data.data.sexList[i].sex,
                size: res.data.data.sexList[i].size
              };
            }else {
              res.data.data.sexList[i] = {
                campus_id: 0,
                sex: 0,
                size: 0
              };
            }
            if (i == 1){
              res.data.data.sexList[i] = {
                campus_id: res.data.data.sexList[i].campus_id,
                sex: res.data.data.sexList[i].sex,
                size: res.data.data.sexList[i].size
              };
            }
            if (i == 2){
              res.data.data.sexList[i] = {
                campus_id: res.data.data.sexList[i].campus_id,
                sex: res.data.data.sexList[i].sex,
                size: res.data.data.sexList[i].size
              };
            }
          }*/
          this.searchData = res.data.data;
          personDataArr[0] = {
            name: this.$t("男生"),
            value: res.data.data.sexList[0] ? res.data.data.sexList[0].size : 0,
            rate: res.data.data.sexRate[0]
          };
          personDataArr[1] = {
            name: this.$t("女生"),
            value: res.data.data.sexList[1] ? res.data.data.sexList[1].size : 0,
            rate: res.data.data.sexRate[1]
          };
          personDataArr[2] = {
            name: this.$t("未知"),
            value: res.data.data.sexList[2] ? res.data.data.sexList[2].size : 0,
            rate: res.data.data.sexRate[2]
          };
          personDataKeyArr[0] =this.$t("男生");
          personDataKeyArr[1] =this.$t("女生");
          personDataKeyArr[2] =this.$t("未知");

          this.personData = personDataArr;
          this.personDataKey = personDataKeyArr;

          for (let i = 0; i < res.data.data.majorList.length; i++){
            majorDataArr.push({
              name: res.data.data.majorList[i].major_name,
              value: res.data.data.majorList[i].size
            });
            majorDataKeyArr.push(res.data.data.majorList[i].major_name);
          }
          this.majorData = majorDataArr;
          this.majorDataKey = majorDataKeyArr;

          for (let i = 0; i < res.data.data.collegeList.length; i++){
            collegeDataArr.push({
              name: res.data.data.collegeList[i].college_name,
              value: res.data.data.collegeList[i].size
            });
            collegeDataKeyArr.push(res.data.data.majorList[i].major_name);
          }
          this.collegeData = collegeDataArr;
          this.collegeDataKey = collegeDataKeyArr;
        }
      });
    },
    initSummary() {
      this.$axios.get(common.school_static_summary).then(res => {
        if (res.data.data){
          this.searchSummaryData = res.data.data;
        }
      });
    },
    initLine(){
      let params = {};
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
        params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
        params['timeType'] = 3;
      }
      this.$axios.get(common.school_static_line, {params: params}).then(res => {
        if (res.data.data){
          this.lineKeyData = res.data.data.key;
          this.lineLegned = [this.$t("旷课"),this.$t("迟到"),this.$t("早退"),this.$t("请假")];
          this.lineData = [
            {
              name: this.$t("旷课"),
              type: 'line',
              data: res.data.data.value.unSignNum
            },
            {
              name: this.$t("迟到"),
              type: 'line',
              data: res.data.data.value.lateNum
            },
            {
              name: this.$t("早退"),
              type: 'line',
              data: res.data.data.value.leaveEarlyNum
            },
            {
              name: this.$t("请假"),
              type: 'line',
              data: res.data.data.value.leaveNum
            }
          ];
        }
      });
    },
    async initTop10(type, orderAttr){
      let params = {
        queryType: type,
        orderAttr: orderAttr
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
        params['queryDate'] = this.$moment(new Date()).format("YYYY-MM-DD");
        params['timeType'] = 3;
      }

      if (type == 1){
        this.stuData = [];
        this.stuDataKey = [];
      }else if (type == 2){
        this.classData = [];
        this.classDataKey = [];
      }else if (type == 3){
        this.courseData = [];
        this.courseDataKey = [];
      }else if (type == 4) {
        this.collegeTopData = [];
        this.collegeTopDataKey = [];
      }
      await this.$axios.get(common.school_static_pie, {params: params}).then(res => {
        if (res.data.data){
          for (let i = 0; i < res.data.data.length; i++){
            if (type == 1){
              this.stuDataKey.push(res.data.data[i].name);
            }else if (type == 2){
              this.classDataKey.push(res.data.data[i].name);
            }else if (type == 3){
              this.courseDataKey.push(res.data.data[i].name);
            }else if (type == 4) {
              this.collegeTopDataKey.push(res.data.data[i].name);
            }
          }
          if (type == 1){
            this.stuData = res.data.data;
          }else if (type == 2){
            this.classData = res.data.data;
          }else if (type == 3){
            this.courseData = res.data.data;
          }else if (type == 4) {
            this.collegeTopData = res.data.data;
          }
        }
      });
    },
    searchTopDate(data){
      this.searchTimeData = data;
      this.initLine();
      this.initTop(this.searchType);
    },
    searchTopType(data){

    },
    searchAttenType(type){
      this.searchType = type;
      this.initTop(type);
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.card-item{
  height: 180px;
}
</style>
