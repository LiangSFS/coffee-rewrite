/**
 *  Created by liangsfs on 2019-09-19
 */

export default {
  throttle (func, delay) {
    let timer
    return function () {
      clearTimeout(timer)

      timer = setTimeout(func, delay)
    }
  },
  debounce (func) {
    let flag = false //  true 表示已经触发
    return function (...rest) {
      if (flag) {
        return false
      }

      flag = true
      return new Promise(func(...rest)).then(() => {
        flag = false
      })
    }
  },
  scrollTop () {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  }

}
