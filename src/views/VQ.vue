<template>
  <div class="page">
    <!-- <div v-if="true" class="page-title">
      {{$route.name}}
      <ShowTime />
    </div> -->
    <div class="layout">
      <div class="item item-row-1-3">
        <h2>今日入荷车辆: 18</h2>
        <h2>今日待修车辆: 17</h2>
        <h2>今日已出荷车辆: 5</h2>
        <h2>今日复检未通过车辆: 1</h2>
        <h2>今日待复检车辆: 2</h2>
        <h2>昨日班后在库车辆: 7</h2>
      </div>
      <div class="item item-row-1-3 item-col-2-4">地图</div>
      <div class="item item-col-1-4 item-row-3-5" id="repair-num-chart">总返修在库出荷趋势图(小时)</div>
      <div class="item">告警列表</div>
      <div class="item">各类违规操作比例图</div>
      <div class="item item-row-3-5" id="repaired-percent-chart">出荷率时间比例图</div>
    </div>
  </div>
</template>
<script>
// import ShowTime from '@/components/showTime'
import echart from 'echarts'
import bus from '@/bus/bus'
import { baseChartOption } from '../config/chartConfig'
export default {
  data () {
    return {}
  },
  components: {
    // ShowTime
  },
  mounted () {
    const legend = []
    for (let i = 0; i < 24; i++) {
      if (i % 3 === 0) {
        legend.push(i.toString() + '点')
      }
    }
    const repairNum = echart.init(document.getElementById('repair-num-chart'))
    const repairedPercentChart = echart.init(document.getElementById('repaired-percent-chart'))
    repairNum.setOption({
      title: {
        text: '当日在库在修出荷趋势图',
        textStyle: {
          color: '#999'
        },
        // textAlign: 'center',
        left: '30%',
        top: 10,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      textStyle: {
        color: '#999'
      },
      legend: {
        // type: 'scroll',
        orient: 'vertical',
        left: '2%',
        top: '25%',
        data: ['总在库车辆', '入荷车辆', '出荷车辆', 'PQ总装在库车辆', 'AF涂装在库车辆', 'WE焊装在库车辆', 'PA零件在库车辆'],
        textStyle: {
          color: '#999'
        }
      },
      toolbox: {
        feature: {
          // saveAsImage: {}
          magicType: {
            type: ['line', 'bar', 'tiled']
          }
        }
      },
      grid: {
        left: '15%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: legend,
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'AF涂装在库车辆',
          type: 'line',
          // areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '入荷车辆',
          type: 'line',
          // areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '出荷车辆',
          type: 'line',
          // areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410],
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
        },
        {
          name: 'PQ总装在库车辆',
          type: 'line',
          // areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'WE焊装在库车辆',
          type: 'line',
          // areaStyle: {},
          data: [120, 32, 351, 34, 90, 320, 220]
        },
        {
          name: 'PA零件在库车辆',
          type: 'line',
          // areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '总在库车辆',
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          // areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    })
    const customRepairedOption = {
      title: {
        text: 'pie chart'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: '出荷率',
          type: 'pie',
          radius: '60%',
          // center: ['30%', '60%'],
          label: {
            normal: {
              formatter: '{b} \n {c} : ({d}%)',
            }
          },
          data: [
            { name: '1.5小时内', value: 7 },
            { name: '1.5-4小时', value: 25 },
            { name: '4-8小时', value: 58 },
            { name: '大于8小时', value: 14 },
          ]
        }
      ]
    }
    const repairedOption = Object.assign(baseChartOption, customRepairedOption)
    repairedPercentChart.setOption(repairedOption)
    window.addEventListener('resize', () => {
      repairNum.resize()
    })
    bus.$on('menuSizeChanged', (statu) => {
      console.log('resize')
      setTimeout(() => {
        repairNum.resize()
        repairedPercentChart.resize()
      }, 1500)
    })
  },
  beforeDestroy () {
    bus.$off('menuSizeChanged')
  }
}
</script>
<style lang="less" scoped>
.page {
    .page-title {
      margin: 20px 0;
      padding: 30px 0;
      background: rgba(53, 51, 51, 0.322);
      border-radius: 30px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .layout {
      height: 95%;
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 20px;
      grid-auto-flow: column dense;

      .item {
        background: rgba(53, 51, 51, 0.322);
        border-radius: 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        // height: 200px;
      }
    }
  }
</style>
