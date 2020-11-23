<template>
  <div id="_lineChartId" style="height: 100%">

  </div>
</template>

<script>
export default {
  props: {
    chartId: ''
  },
  data(){
    return {

    }
  },
  mounted() {
    this.lineChart();
  },
  created() {

  },
  methods: {
    lineChart(){
      let _self=this;
      console.log();
      let lineId = document.getElementById("_lineChartId"); //找到绘制的区域,强烈推荐使用refs
      let myChart = this.$echarts.init(lineId); //初始化
      myChart.setOption({ //官网例子
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问']
        },
        grid: {
          top: '10%',
          left: '2%',
          right: '2%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#DCDFE6',//左边线的颜色
              width:'1'//坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#333333',//坐标值得具体的颜色

            }
          },
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:true,
            lineStyle:{
              type:'dashed',
              color: '#eeeeee'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#DCDFE6',//左边线的颜色
              width:'1'//坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#333333',//坐标值得具体的颜色

            }
          },
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      });
    }
  }
}
</script>

<style scoped>

</style>
