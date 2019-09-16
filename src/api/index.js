/**
 *  Created by liangsfs on 2019-09-16
 */

import axios from './config.js'

import { http } from './servers/instance.js'

export default {
  install (_Vue) {
    Object.defineProperty(_Vue.prototype, '$http', {
      value: http(axios)
    })

    Object.keys(http(axios)).forEach((apiMethod) => {
      Object.defineProperty(_Vue.prototype, apiMethod, {
        configuerable: true,
        enumerable: true,
        get () {
          return _Vue.prototype['$http'][apiMethod]
        },
        set (newVal) {
          _Vue.prototype['$http'][apiMethod] = newVal
        }
      })
    })
  }
}
