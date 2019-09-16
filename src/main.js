import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

import '@/assets/icons/index.js' // svg 字体图库批量引入文件

import message from '@/plugins/message.js' // 自己封装的组件引入文件

Vue.use(message) // 绑在vue 上
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
