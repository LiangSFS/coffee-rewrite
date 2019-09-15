import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from './plugins/axios.js'

import 'swiper/dist/css/swiper.css'

// import './assets/js/iconfont.js';

Vue.use(VueAwesomeSwiper)
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
