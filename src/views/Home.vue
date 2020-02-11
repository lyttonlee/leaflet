<template>
  <div class="page" id="map">
  </div>
</template>

<script>
/* eslint-disable no-undef */
import imgMap from '../assets/img/car-map.png'
import car from '../assets/img/car.png'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  mounted () {
    // eslint-disable-next-line no-undef
    const map = L.map('map', {
      center: [2, 2],
      zoom: 3,
      zoomControl: false, // 默认不显示缩放按钮
      attributionControl: false // 不显示leaflet 图标logo

    })
    // console.log(map)
    const imgUrl = imgMap
    const imgBounds = [[-60, -100], [60, 100]]
    // eslint-disable-next-line no-undef
    L.imageOverlay(imgUrl, imgBounds).addTo(map)
    // map.removeControl()
    // 添加车
    // eslint-disable-next-line no-undef
    const carIcon = L.icon({
      iconUrl: car,
      iconSize: [20, 20],
      iconAnchor: [1, 1],
    })
    // eslint-disable-next-line no-undef
    const carMarker = L.marker([15, 25], { icon: carIcon, autoPan: true, draggable: true })
    carMarker.bindPopup(`<h3>我就是一辆车</h3>`).openPopup()
    carMarker.addTo(map)
    console.log(map)
    let [x, y] = [20, 30]
    // requestAnimationFrame(() => {
    //   carMarker.setLatLng([x + 1, y + 1])
    // })
    this.cartime = setInterval(() => {
      // console.log(i)
      console.log(x)
      carMarker.setLatLng([x++, y++])
    }, 500)
    console.log(L.latLng([25, 40]).toBounds(2))
    console.log(window.WebSocket)
  },
  beforeDestroy () {
    this.cartime && clearInterval(this.cartime)
    this.cartime = null
  }
}
</script>
