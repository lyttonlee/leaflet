import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Home,
    meta: {
      auth: true,
      icon: 'zx-map',
    }
  },
  {
    path: '/vq',
    name: 'VQ整车品质科',
    component: () => import(/* webpackChunkName: "about" */ '../views/VQ.vue'),
    meta: {
      auth: true,
      icon: 'zx-pinzhibaozhengQuality',
      role: ['admin']
    }
  },
  {
    path: '/pq',
    name: 'PQ总装品质科',
    component: () => import(/* webpackChunkName: "about" */ '../views/PA.vue'),
    meta: {
      auth: true,
      icon: 'zx-zuhejiekou',
      role: ['admin']
    }
  },
  {
    path: '/af',
    name: 'AF涂装品质科',
    component: () => import(/* webpackChunkName: "about" */ '../views/PA.vue'),
    meta: {
      auth: true,
      icon: 'zx-tongji',
      role: ['admin']
    }
  },
  {
    path: '/we',
    name: 'WE焊装品质科',
    component: () => import(/* webpackChunkName: "about" */ '../views/PA.vue'),
    meta: {
      auth: true,
      icon: 'zx-weldingmask',
      role: ['admin']
    }
  },
  {
    path: '/pa',
    name: 'PA零件品质科',
    component: () => import(/* webpackChunkName: "about" */ '../views/PA.vue'),
    meta: {
      auth: true,
      icon: 'zx-gongyejichulingjian',
      role: ['admin']
    }
  },
  {
    path: '/stat',
    name: '数据统计',
    component: () => import(/* webpackChunkName: "about" */ '../views/Stat.vue'),
    meta: {
      auth: true,
      icon: 'zx-tongji1',
      role: ['admin']
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
