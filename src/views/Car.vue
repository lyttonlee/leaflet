<template>
  <div class="page">
    <div class="page-title">
      {{$route.name}}
    </div>
    <div class="layout">
      <h2>车辆列表</h2>
    </div>
  </div>
</template>
<script>
// import echarts from 'echarts'
export default {
  methods: {
    createChart () {
      // ..
    }
  },
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
      height: 85%;
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
        grid-row-start: 1;
        grid-row-end: 3;
      }

      .item-3 {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
  }

</style>
