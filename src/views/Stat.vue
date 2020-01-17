<template>
  <div class="page stat">
    <div
      class="item item-2-2"
      id="stat"
    >1</div>
    <div class="item">2</div>
    <div class="item item-3">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>

  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  methods: {
    createChart () {
      // ..
    }
  },
  mounted () {
    const option = {
      textStyle: {
        color: '#999'
      },
      grid: {
        left: 50,
        right: 30
      },
      dataset: {
        dimensions: ['product', 'count', 'score'],
        source: [{
          'product': 'Matcha Latte',
          'count': 823,
          'score': 95.8
        },
        {
          'product': 'Milk Tea',
          'count': 235,
          'score': 81.4
        },
        {
          'product': 'Cheese Cocoa',
          'count': 1042,
          'score': 91.2
        },
        {
          'product': 'Walnut Brownie',
          'count': 988,
          'score': 76.9
        }
        ]
      },
      xAxis: {
        // type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      // yAxis: {
      //   type: 'value'
      // },
      series: [{
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
      },
      // { type: 'bar' }
      ]
    }
    this.chart = echarts.init(document.getElementById('stat'))
    this.chart.setOption(option)
  }
}

</script>
<style
  lang="less"
  scoped
>
  .stat {
    // margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-flow: row dense;

    .item {
      background: rgba(53, 51, 51, 0.322);
      border-radius: 20px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      // height: 200px;
    }

    .item-2-2 {
      // grid-row: 1/3;
      // grid-column: 1;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .item-3 {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }

</style>
