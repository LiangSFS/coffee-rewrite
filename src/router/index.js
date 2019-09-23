import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes.js'

const Login = () => import(/* webpackChunkName: "login" */'@/views/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */'@/views/Register.vue')

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
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    ...routes
  ]
})
