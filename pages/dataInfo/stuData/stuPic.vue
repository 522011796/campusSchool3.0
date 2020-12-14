<template>
  <div class="container" :style="divHeight4">
    <div>
      <my-search-of-date size="small" :show-year="false" :sel-date-time="searchTopTime" @click="searchTopDate" @type-click="searchTopType"></my-search-of-date>
    </div>
    <div class="margin-top-20">
      <div>
        <div>
          <span class="title-tag"></span>
          <span class="color-warning title-text">{{$t("考勤占比/画像")}}</span>
        </div>
        <el-row class="margin-top-5" :gutter="16">
          <el-col :span="8">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("考勤占比")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <circle-chart chart-id="attendId" legend-right="0" :center="centerTop" :chart-title='$t("考勤占比")' :data-key="attendDataKey" :data="attendData"></circle-chart>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("雷达画像")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <radar-chart chart-id="radarId" :chart-title='$t("雷达画像")' :data-key="radarDataKey" :data="radarData"></radar-chart>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("院系画像(出勤率)")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <pop-chart chart-id="collegeId" legend-right="0" :center="centerTop" :chart-title='$t("院系出勤")' :data-key="collegeDataKey" :data="collegeData"></pop-chart>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="margin-top-20">
      <div>
        <div>
          <span class="title-tag"></span>
          <span class="color-warning title-text">{{$t("考勤详细")}}</span>
        </div>
        <el-row class="margin-top-5" :gutter="16">
          <el-col :span="6">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("迟到")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <circle-chart chart-id="lateId" legend-right="0" :center="centerAttend" :chart-title='$t("迟到")' :data-key="lateDataKey" :data="lateData"></circle-chart>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("早退")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <circle-chart chart-id="earlyId" legend-right="0" :center="centerAttend" :chart-title='$t("早退")' :data-key="earlyDataKey" :data="earlyData"></circle-chart>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("旷课")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <circle-chart chart-id="unsignId" legend-right="0" :center="centerAttend" :chart-title='$t("旷课")' :data-key="unsignDataKey" :data="unsignData"></circle-chart>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{padding: '10px'}" style="height: 240px">
              <div class="color-muted">
                <span>{{$t("请假")}}</span>
              </div>
              <div class="margin-top-5" style="height: 200px">
                <circle-chart chart-id="leaveId" legend-right="0" :center="centerAttend" :chart-title='$t("请假")' :data-key="leaveDataKey" :data="leaveData"></circle-chart>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="margin-top-20">
      <div>
        <div>
          <span class="title-tag"></span>
          <span class="color-warning title-text">{{$t("柱状分析")}}</span>
        </div>
        <el-card class="margin-top-5" :body-style="{padding: '10px'}" style="height: 340px">
          <div style="height: 300px">
            <bar-chart chart-id="barId" :chart-title='$t("柱状分析")' :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></bar-chart>
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
import RadarChart from "../../../components/charts/RadarChart";
import BarChart from "../../../components/charts/BarChart";
export default {
  mixins: [mixins],
  components: {CircleChart,MySearchOfDate,LineChart,RadarChart,BarChart},
  data(){
    return {
      searchTimeData: {},
      searchTopTime: this.$moment(new Date()).format("YYYY-MM-DD"),
      centerTop: ['40%', '50%'],
      centerAttend: ['40%', '50%'],
      attendDataKey: [],
      attendData: [],
      collegeDataKey: [],
      collegeData: [],
      radarDataKey: [],
      radarData: [],
      lateDataKey: [],
      lateData: [],
      unsignDataKey: [],
      unsignData: [],
      earlyDataKey: [],
      earlyData: [],
      leaveDataKey: [],
      leaveData: [],
      barDataKey: [],
      barData: [],
      barDataLegned: []
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init(){
      await this.getSessionInfo();
      this.initStatic();
    },
    initStatic(){
      let actualList = [];
      let actualKeyList = [];
      let radarList = [];
      let lateKeyList = [];
      let unsignKeyList = [];
      let earlyKeyList = [];
      let leaveKeyList = [];
      let barKeyList = [];
      let params = {
        termId: this.currentTermId,
      };
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
        params['queryDate'] = this.searchTimeData.value+"-01";
        params['timeUnit'] = 4;
      }else if (this.searchTimeData.timeUnit == 5){
        params['timeUnit'] = 1;
      }else {
        let day = this.$moment(new Date()).format("YYYY-MM-DD");
        params['year'] = day.split("-")[0];
        params['month'] = day.split("-")[1];
        params['day'] = day.split("-")[2];
        params['timeUnit'] = 3;
      }
      this.$axios.get(common.school_static_pic, {params: params}).then(res => {
        if (res.data.data){
          for (let i = 0; i < res.data.data.actualList.length; i ++){
            actualList.push({name: res.data.data.actualList[i].name, value: res.data.data.actualList[i].value, rate: res.data.data.actualList[i].rate});
            actualKeyList.push(res.data.data.actualList[i].name);
          }
          this.attendData = actualList;
          this.attendDataKey = actualKeyList;
          this.radarData = res.data.data.schoolValue;
          this.collegeData = res.data.data.actualValue;
          this.collegeDataKey = res.data.data.key;

          for (let i = 0; i < res.data.data.lateList.length; i ++){
            lateKeyList.push(res.data.data.lateList[i].name);
          }
          this.lateData = res.data.data.lateList;
          this.lateDataKey = lateKeyList;

          for (let i = 0; i < res.data.data.leaveList.length; i ++){
            leaveKeyList.push(res.data.data.leaveList[i].name);
          }
          this.leaveData = res.data.data.leaveList;
          this.leaveDataKey = lateKeyList;

          for (let i = 0; i < res.data.data.leaveEarlyList.length; i ++){
            earlyKeyList.push(res.data.data.leaveEarlyList[i].name);
          }
          this.earlyData = res.data.data.leaveEarlyList;
          this.earlyDataKey = earlyKeyList;

          for (let i = 0; i < res.data.data.unSignList.length; i ++){
            unsignKeyList.push(res.data.data.unSignList[i].name);
          }
          this.unsignData = res.data.data.unSignList;
          this.unsignDataKey = unsignKeyList;

          this.barDataLegned = [this.$t("迟到"),this.$t("旷课"),this.$t("请假"),this.$t("早退")];
          this.barDataKey = res.data.data.key;
          this.barData = [
            {
              name:'迟到',
              type:'bar',
              stack: '迟到',
              barWidth:25,
              data:res.data.data.lateValue
            },
            {
              name:'旷课',
              type:'bar',
              stack: '迟到',
              barWidth:25,
              data:res.data.data.unSignValue
            },
            {
              name:'请假',
              type:'bar',
              stack: '迟到',
              barWidth:25,
              data:res.data.data.leaveValue
            },
            {
              name:'早退',
              type:'bar',
              stack: '迟到',
              barWidth:25,
              data:res.data.data.leaveEarlyValue
            }
          ];
        }
      });
    },
    searchTopDate(data){
      this.searchTimeData = data;
      this.initStatic();
    },
    searchTopType(data){

    }
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 15px;
  }
  .title-tag{
    height:20px;
    width: 5px;
    background: #E6A23C;
    display: inline-block;
    border-radius: 5px;
  }
  .title-text{
    position: relative;
    top: -5px;
  }
</style>
