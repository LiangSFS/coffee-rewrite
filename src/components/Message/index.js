/**
 *  Created by liangsfs on 2019-09-16
 */

import Vue from 'vue'
import MessageVue from './Message.vue'

// 默认配置
const defaults = {
  show: false,
  text: '请求超时，请检查网络',
  duration: 3000
}

export default (function (_Vue) {
  const MessageVueConstructor = _Vue.extend(MessageVue)
  MessageVueConstructor.prototype.close = function () {
    const vm = this
    vm.$on('after-leave', () => {
      if (vm.$el && _Vue.$el.parentNode) {
        vm.$el.parentNode.removeChild(vm.$el)
      }
      vm.$destroy()
    })
    vm.show = false
  }
  function isNotNumber (val) {
    let newVal = Number(val)
    return isNaN(newVal)
  }

  return (options) => {
    const parent = document.body
    if (options instanceof Object) {
      options = Object.assign({}, defaults, options)

      // 传入值作校验
      if (isNotNumber(options.duration) || !options.text.charAt) throw new TypeError()
    } else {
      options = Object.assign({}, defaults)
    }

    const instance = new MessageVueConstructor({
      el: document.createElement('div'),
      data: options
    })
    parent.appendChild(instance.$el)
    instance.show = true
    _Vue.nextTick(() => {
      setTimeout(() => {
        instance.close()
      }, options.duration)
    })
  }
}(Vue))
