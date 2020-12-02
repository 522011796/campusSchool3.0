<template>
  <div :id="chartId" style="height: 100%">

  </div>
</template>

<script>
  export default {
    props: {
      chartId: '',
      chartTitle: '',
      dataKey: {
        default: function(){
          return [];
        },
        type: Array
      },
      data: {
        default: function(){
          return [];
        },
        type: Array
      }
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
        let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs
        let myChart = this.$echarts.init(lineId); //初始化
        myChart.setOption({ //官网例子
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 50,
            itemWidth: 15,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: '#909399'
            },
            data: this.dataKey
          },
          series: [
            {
              name: this.chartTitle ? this.chartTitle : '信息',
              type: 'pie',
              radius: ['50%', '80%'],
              center: ['30%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '10',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: this.data
            }
          ]
        });
      }
    },
    watch: {
      data: function (newQuestion, oldQuestion) {
        this.lineChart();
      }
    }
  }
</script>

<style scoped>

</style>
