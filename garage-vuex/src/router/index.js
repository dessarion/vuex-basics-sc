import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/parking',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Parking.vue')
  },
  {
    path: '/garage',
    meta: {
      layout: 'nav'
    },
    component: () => import('@/views/Garage.vue')
  },    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
