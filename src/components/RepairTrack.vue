<template>
  <el-dialog
    :visible="visible"
    :destroy-on-close="true"
    width="60%"
    title="车辆详情"
    :show-close="false"
  >
    <div class="track">
      <div class="map-track">
        <h2>地图和轨迹</h2>
      </div>
      <div class="info">
        <h2>车辆基本信息</h2>
        <h2>告警信息</h2>
        <h2>返修流转信息</h2>
      </div>
    </div>
    <div slot="footer">
      <el-button @click="closeDialog">Close</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    closeDialog () {
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
.track {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
