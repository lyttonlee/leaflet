<template>
  <div id="app">
    <TestVoice />
    <ToggleMenu @toggleMenu="toggleMenu" />
    <el-container>
      <transition
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutLeft"
        >
        <el-aside v-if="show">
          <Side />
        </el-aside>
      </transition>
      <el-main>
        <transition
          mode="out-in"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
        >
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TestVoice from '@/components/TestVoice'
import Side from '@/components/Side'
import ToggleMenu from '@/components/ToggleMenu'
import bus from '@/bus/bus'
export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    TestVoice,
    Side,
    ToggleMenu
  },
  methods: {
    toggleMenu (isShow) {
      console.log(isShow)
      this.show = isShow
      bus.$emit('menuSizeChanged', isShow)
    }
  },
  mounted () {
    // ..
  }
}
</script>

<style lang="less">
@import './assets/less/main.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @font-color;
  // background: #eee;
  .el-container {
    width: 100vw;
    height: 100vh;
    background: @back-color;
    overflow: hidden;
    .el-aside {
      width: 200px !important;
      height: 100vh;
      background: @aside-color;
      overflow: hidden;
      // box-shadow: 1px 0 5px rgb(121, 121, 121);
    }
    .el-main {
      width: 100%;
      // height: 100vh;
      background: @page-color;
      padding: 10px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
}
</style>
