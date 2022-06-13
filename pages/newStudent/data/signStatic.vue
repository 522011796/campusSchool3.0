<template>
  <div class="container" :style="divHeight4">
    <div class="layout-inline text-right">
      <my-select class="layout-item width-150" size="small" :placeholder="$t('选择年度')" :sel-value="searchYear" :options="yearOptions" :clearable="true" @change="handleSearchChange($event, 1)"></my-select>
      <my-select class="layout-item width-150" size="small" :placeholder="$t('流程名称')" :sel-value="searchName" :options="flowOptions" :clearable="true" @change="handleSearchChange($event, 2)"></my-select>
      <el-button size="small" type="success" @click="search">{{$t("搜索")}}</el-button>
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
                    <label>0</label>
                  </span>
                  <span>
                    {{$t("女")}}
                    <label>0</label>
                  </span>
                </div>
                <div>
                  <span class="font-size-18 font-bold">1000</span>
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
                    <label>0%</label>
                  </span>
                </div>
                <div>
                  <span class="font-size-18 font-bold">1000</span>
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
                    <label>0%</label>
                  </span>
                </div>
                <div>
                  <span class="font-size-18 font-bold">1000</span>
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
          <span class="title-block-tag"></span>
          <span class="title-block-text">{{$t("报道趋势")}}</span>
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
  export default {
    mixins: [mixins],
    data(){
      return {
        yearOptions: [],
        flowOptions: [],
        searchYear: '',
        searchName: '',
        lineData: [],
        lineKeyData: [],
        lineLegned: [],
        barDataKey: [],
        barData: [],
        barDataLegned: []
      }
    },
    created() {
      this.initStatic();
      this.initLine();
    },
    methods: {
      handleSearchChange(event, type){
        if (type == 1){
          this.searchYear = event;
        }else if (type == 2){
          this.searchName = event;
        }
      },
      search(){

      },
      initStatic(){
        let params = {
          termId: this.currentTermId,
        };
        this.barDataLegned = [this.$t("未完成"),this.$t("已完成"),this.$t("总人数")];
        this.barDataKey = ['学院1','学院2','学院3','学院4','学院5','学院6','学院7','学院8','学院9','学院10','学院11','学院12'];
        this.barData = [
          {
            name:this.$t("未完成"),
            type:'bar',
            barWidth:10,
            data:[1,4,3,3,4,5,6,7,8,9,5,7]
          }, {
            name:this.$t("已完成"),
            type:'bar',
            barWidth:10,
            data:[1,4,3,3,4,5,6,7,8,9,5,7]
          },{
            name:this.$t("总人数"),
            type:'bar',
            barWidth:10,
            data:[1,4,3,3,4,5,6,7,8,9,5,7]
          },
        ];
        // this.$axios.get(common.school_static_pic, {params: params}).then(res => {
        //   if (res.data.data){
        //     this.barDataLegned = [this.$t("迟到"),this.$t("旷课"),this.$t("请假"),this.$t("早退")];
        //     this.barDataKey = res.data.data.key;
        //     this.barData = [
        //       {
        //         name:'迟到',
        //         type:'bar',
        //         stack: '迟到',
        //         barWidth:25,
        //         data:res.data.data.lateValue
        //       },
        //       {
        //         name:'旷课',
        //         type:'bar',
        //         stack: '迟到',
        //         barWidth:25,
        //         data:res.data.data.unSignValue
        //       },
        //       {
        //         name:'请假',
        //         type:'bar',
        //         stack: '迟到',
        //         barWidth:25,
        //         data:res.data.data.leaveValue
        //       },
        //       {
        //         name:'早退',
        //         type:'bar',
        //         stack: '迟到',
        //         barWidth:25,
        //         data:res.data.data.leaveEarlyValue
        //       }
        //     ];
        //   }
        // });
      },
      initLine(){
        let params = {};
        this.lineLegned = [];
        this.lineData = [];
        this.lineKeyData = [];
        this.lineLegned = [this.$t("已报道"),this.$t("未报道"),this.$t("总人数")];
        this.lineData = [
          {
            name: this.$t("已报道"),
            type: 'line',
            data: [1,2,3]
          },
          {
            name: this.$t("未报道"),
            type: 'line',
            data: [4,5,3]
          },
          {
            name: this.$t("总人数"),
            type: 'line',
            data: [5,6,7]
          }
        ];
        // this.$axios.get(common.school_static_line, {params: params}).then(res => {
        //   if (res.data.data){
        //     this.lineKeyData = res.data.data.key;
        //     this.lineLegned = [this.$t("已报道"),this.$t("未报道"),this.$t("总人数")];
        //     this.lineData = [
        //       {
        //         name: this.$t("已报道"),
        //         type: 'line',
        //         data: []
        //       },
        //       {
        //         name: this.$t("未报道"),
        //         type: 'line',
        //         data: []
        //       },
        //       {
        //         name: this.$t("总人数"),
        //         type: 'line',
        //         data: []
        //       }
        //     ];
        //   }
        // });
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
