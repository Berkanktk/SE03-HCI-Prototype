import Vue from 'vue'
import VueRouter from 'vue-router'
import create from '../views/Create.vue'
import guidePage from "@/views/GuidePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    alias: '/',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/create-form',
    name: 'Create',
    component: create
  },
  {
    path: '/guide-page',
    name: 'GuidePage',
    component: guidePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
