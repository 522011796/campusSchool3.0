<template>
  <div class="container" :style="divHeight4">
    <div class="layout-inline text-right">
<!--      <my-select class="layout-item width-150" size="small" :placeholder="$t('选择年度')" :sel-value="searchYear" :options="yearOptions" :clearable="true" @change="handleSearchChange($event, 1)"></my-select>-->
      <my-select class="layout-item width-150" size="small" :placeholder="$t('流程名称')" :sel-value="searchName" :options="flowOptions" :clearable="true" @change="handleSearchChange($event, 2)"></my-select>
    </div>

    <div class="margin-top-10">
      <div class="top-block">
        <div class="padding-tb-10 padding-lr-10">
          <span class="title-block-tag"></span>
          <span class="title-block-text">{{$t("总统计")}}</span>
        </div>
        <el-row>
          <el-col :span="8">
            <div class="text-center" style="margin-top: 10px">
              <div style="display: inline-block">
                <div>
                  <img src="~static/img/user_icon.png" style="height: 40px;width: 40px">
                </div>
                <div>
                  <span class="font-size-12">{{$t("录取总数")}}</span>
                </div>
              </div>
              <div style="display: inline-block">
                <div class="top-text-block font-size-12 color-muted">
                  <span>
                    {{$t("男")}}
                    <label>{{maleCount}}</label>
                  </span>
                  <span>
                    {{$t("女")}}
                    <label>{{famaleCount}}</label>
                  </span>
                </div>
                <div>
                  <span class="font-size-18 font-bold">{{ studentCount }}</span>
                  <span>{{$t("人")}}</span>
                </div>
              </div>
              <div class="moon-clearfix"></div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text-center" style="margin-top: 10px">
              <div style="display: inline-block">
                <div>
                  <img src="~static/img/file_edit_icon.png" style="height: 40px;width: 40px">
                </div>
                <div>
                  <span class="font-size-12">{{$t("已报道")}}</span>
                </div>
              </div>
              <div style="display: inline-block">
                <div class="top-text-block font-size-12 color-muted">
                  <span>
                    <label>{{signRate}}%</label>
                  </span>
                </div>
                <div>
                  <span class="font-size-18 font-bold">{{ signCount }}</span>
                  <span>{{$t("人")}}</span>
                </div>
              </div>
              <div class="moon-clearfix"></div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="text-center" style="margin-top: 10px">
              <div style="display: inline-block">
                <div>
                  <img src="~static/img/file_disabled_icon.png" style="height: 40px;width: 40px">
                </div>
                <div>
                  <span class="font-size-12">{{$t("未报道")}}</span>
                </div>
              </div>
              <div style="display: inline-block">
                <div class="top-text-block font-size-12 color-muted">
                  <span>
                    <label>{{unSignRate}}%</label>
                  </span>
                </div>
                <div>
                  <span class="font-size-18 font-bold">{{ unSignCount }}</span>
                  <span>{{$t("人")}}</span>
                </div>
              </div>
              <div class="moon-clearfix"></div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="bar-block margin-top-20">
        <div class="padding-tb-10 padding-lr-10">
          <span class="title-block-tag"></span>
          <span class="title-block-text">{{$t("各院系报道统计")}}</span>
        </div>
        <div style="height: 500px">
          <h-bar-chart chart-id="barId" :chart-title='$t("柱状分析")' :data-legned="barDataLegned" :data-key="barDataKey" :data="barData"></h-bar-chart>
        </div>
      </div>

      <div class="content-block margin-top-20">
        <div class="padding-tb-10 padding-lr-10">
          <el-row>
            <el-col :span="12">
              <span class="title-block-tag"></span>
              <span class="title-block-text">{{$t("报道趋势")}}</span>
            </el-col>
            <el-col :span="12">
              <div class="layout-inline text-right">
                <my-select class="layout-item width-150" size="small" :placeholder="$t('选择月份')" :sel-value="searchMonth" :options="monthOptions" :clearable="false" @change="handleSearchChange($event, 3)"></my-select>
                <my-cascader class="layout-item" size="small" ref="SelectorCollege" :sel-value="searchCascader" :clearable="true" type="1" sub-type="1" width-style="150" @change="handleCascaderChange($event)"></my-cascader>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="height: 300px">
          <line-chart chart-id="lineId" :data-key="lineKeyData" :data="lineData" :data-legned="lineLegned"></line-chart>
        </div>
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
  import HBarChart from "~/components/charts/HBarChart";
  export default {
    components: {HBarChart},
    mixins: [mixins],
    data(){
      return {
        yearOptions: [],
        monthOptions: [],
        flowOptions: [],
        searchYear: '',
        searchName: '',
        searchMonth: '',
        searchCollege: '',
        searchCascader: [],
        selMonth: '',
        lineData: [],
        lineKeyData: [],
        lineLegned: [],
        barDataKey: [],
        barData: [],
        barDataLegned: [],
        maleCount: 0,
        famaleCount: 0,
        studentCount: 0,
        signRate: 0,
        signCount: 0,
        unSignRate: 0,
        unSignCount: 0,
        year: '',
        college: ''
      }
    },
    created() {
      let year = this.$moment().format("YYYY-MM");
      let college = '';
      this.initProcess(year, college);

    },
    methods: {
      handleSearchChange(event, type){
        if (type == 1){
          this.searchYear = event;
        }else if (type == 2){
          this.searchName = event;
          this.initCount();
          this.initStatic();
          this.initSearch(this.searchMonth,this.collegeId);
        }else if (type == 3){
          this.searchMonth = event;
          this.initSearch(this.searchMonth, this.collegeId);
        }
      },
      handleCascaderChange(data){
        this.searchCascader = data;
        this.collegeId = data[0];
        this.initSearch(this.searchMonth, this.collegeId);
      },
      search(){

      },
      initProcess(year, college){
        let params = {
          page: 1,
          num: 9999
        };
        this.$axios.get(common.enroll_process_page, {params: params}).then(res => {
          if (res.data.data){
            let arr = [];
            for (let i = 0; i < res.data.data.list.length; i++){
              arr.push({
                label: res.data.data.list[i].processName,
                value: res.data.data.list[i].id,
                text: res.data.data.list[i].processName,
              });
            }
            this.flowOptions= arr;
            this.searchName = arr[0].value;
            this.initMonth();
            this.initCount();
            this.initStatic();
            this.initSearch(year,college);
          }
        });
      },
      initMonth(){
        let year = this.$moment().format("YYYY");
        let month = [];
        for (let i = 0 ; i < 12; i++){
          month.push({
            label: year + "-" + (i+1),
            value: year + "-" + (i+1),
            text: year + "-" + (i+1)
          });
        }
        this.monthOptions = month;
        this.searchMonth = this.$moment().format("YYYY-MM");
      },
      initSearch(year, college){
        this.year = year;
        this.searchCollege = college;
        this.initLine(year, this.searchCollege);
      },
      initCount(){
        let params = {
          processId: this.searchName,
        };
        this.$axios.get(common.enroll_stat_student_general,{params:params}).then(res => {
          if (res.data.data) {
            this.maleCount = res.data.data.sexMaleCount;
            this.famaleCount = res.data.data.sexFemaleCount;
            this.studentCount = res.data.data.totalCount;
            this.signCount = res.data.data.checkedCount;
            this.signRate = (parseInt(res.data.data.checkedCount) / res.data.data.totalCount) * 100;
            this.unSignCount = res.data.data.uncheckCount;
            this.unSignRate = (parseInt(res.data.data.uncheckCount) / res.data.data.totalCount) * 100;
          }
        });
      },
      initStatic(){
        let params = {
          processId: this.searchName,
        };
        this.$axios.get(common.enroll_stat_checkin_by_college, {params: params}).then(res => {
          if (res.data.data){
            let legned = [];
            let key = [];
            let data1 = [];
            let data2 = [];
            for (let item in res.data.data){
              key.push(res.data.data[item].collegeName);
              data1.push(res.data.data[item].checkedCount);
              data2.push(res.data.data[item].uncheckCount);
            }
            this.barDataLegned = [this.$t("未完成"),this.$t("已完成")];
            this.barDataKey = key;
            this.barData = [
              {
                name:this.$t("未完成"),
                type:'bar',
                barWidth:10,
                data:data1
              }, {
                name:this.$t("已完成"),
                type:'bar',
                barWidth:10,
                data:data2
              }
            ];
          }
        });
      },
      initLine(year, college){
        let params = {
          month: year,
          collegeId: college,
          processId: this.searchName
        };
        this.$axios.get(common.enroll_stat_checkin_by_time, {params: params}).then(res => {
          if (res.data.data){
            let lineData = [];
            let lineKeyData = [];
            this.lineLegned = [this.$t("已报道")];
            for (let i = 0; i < res.data.data.length; i++){
              lineKeyData.push(res.data.data[i].day);
              lineData.push(res.data.data[i].num);
            }
            this.lineData = [
              {
                name: this.$t("已报道"),
                type: 'line',
                data: lineData
              }
            ];
            this.lineKeyData = lineKeyData;
          }
        });
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 10px 15px;
}
.top-block{
  height: 150px;
  background: #FFFFFF;
}
.bar-block{
  height: 550px;
  background: #FFFFFF;
}
.content-block{
  height: 350px;
  background: #FFFFFF;
}
.title-block-tag{
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #E6A23C;
  font-weight: bold;
  border-radius: 3px;
}
.title-block-text{
  font-weight: bold;
  position: relative;
  top: -5px;
}
.top-text-block{
  position: relative;
  top: -10px
}
</style>
