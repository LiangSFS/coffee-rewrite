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
  debounce (func, delay) {
    let timer
    return function () {
      clearTimeout(timer)

      timer = setTimeout(func, delay)
    }
  },
  scrollTop () {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  }

}
