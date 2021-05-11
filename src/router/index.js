import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../pages/Tasks.vue')
  },
  {
    path: '/emails',
    name: 'Emails',
    component: () => import('../pages/Emails.vue')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('../pages/Groups.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../pages/Messages.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
