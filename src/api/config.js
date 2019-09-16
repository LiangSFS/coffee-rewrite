/**
 *  Created by liangsfs on 2019-09-16
 */
import axios from 'axios'

import constants from './resource.js'

axios.defaults.timeout = constants.TimeOut // 请求超时
axios.default.baseURL = process.env.NODE_ENV === 'production' ? constants.ProdBASEURL : constants.DEVLBASEURL // 请求api链接

export default axios
