import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhatView from '../views/WhatView.vue'
import WhereView from '../views/WhereView.vue'
import WhoView from '../views/WhoView.vue'
import 'animate.css'

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        enterClass: 'animate__animated animate__fadeInDown',
        leaveClass: 'animate__animated animate__fadeOut ',
      },
    },
    {
      path: '/what',
      name: 'what',
      component: WhatView,
      meta: {
        enterClass: 'animate__animated animate__fadeInRight',
        leaveClass: 'animate__animated animate__fadeOut',
      },
    },
    {
      path: '/where',
      name: 'where',
      component: WhereView,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOut',
      },
    },
    {
      path: '/who',
      name: 'who',
      component: WhoView,
      meta: {
        enterClass: 'animate__animated animate__fadeInUp',
        leaveClass: 'animate__animated animate__fadeOut',
      },
    },
  ],
})

export default router
