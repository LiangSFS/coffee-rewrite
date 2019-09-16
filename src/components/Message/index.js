/**
 *  Created by liangsfs on 2019-09-16
 */

import Vue from 'vue'
import MessageVue from './Message.vue'

// 默认配置
const defaults = {
  show: false,
  text: '',
  duration: 3000
}

export default (function (_Vue) {
  const MessageVueConstructor = _Vue.extend(MessageVue)

  return (options) => {
    const parent = document.body
    console.log(0)
    options = Object.assign({}, defaults, { text: options.text }) // 用户只能传入text
    options.vm = _Vue

    const instance = new MessageVueConstructor({
      el: document.createElement('div'),
      data: options
    })
    parent.appendChild(instance)
  }
}(Vue))
