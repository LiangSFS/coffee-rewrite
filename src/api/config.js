/**
 *  Created by liangsfs on 2019-09-16
 */
import axios from 'axios'
import lockr from 'lockr'
import router from 'vue-router'

import constants from './resource.js'

axios.defaults.timeout = constants.TIME_OUT // 请求超时
axios.default.baseURL = process.env.NODE_ENV === 'production' ? constants.PROD_BASE_URL : constants.DEVL_BASE_URL // 请求api链接

axios.interceptors.request.use((config) => {
  let pathname = location.pathname
  let token = constants.AUTH_TOKEN
  // console.log(token, pathname)
  if (token) {
    if (pathname !== '/' && pathname !== '/login') {
      config.headers.common['token'] = token
    }
  }
  return config
}, (error) => {
  // console.log(error)
  return Promise.reject(error) // 对请求错误做些什么
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401: // 返回401，清除token信息并跳转到登录页面
        lockr.rm('token')
        router.replace({
          path: '/login'
          // 登录成功后跳入浏览的当前页面
          // query: {redirect: router.currentRoute.fullPath}
        })
        break
    }

    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
})

export default axios
