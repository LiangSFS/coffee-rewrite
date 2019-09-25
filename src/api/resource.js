/**
 *  Created by liangsfs on 2019-09-16
 */
import lockr from 'lockr'

const TIME_OUT = 4000 // 请求超时时间
const PROD_BASE_URL = 'https://liangsfs.github.io' // 线上请求api
const DEVL_BASE_URL = '' // 模拟api

const AUTH_TOKEN = lockr.get('token')

export default {
  TIME_OUT,
  PROD_BASE_URL,
  DEVL_BASE_URL,
  AUTH_TOKEN
}
