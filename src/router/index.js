import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes.js'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      // path: '/coffee-rewrite/',   //github 下
      // redirect: '/coffee-rewrite/home'
      path: '/', // 开发环境 下
      redirect: '/home'
    },
    ...routes
  ]
})
