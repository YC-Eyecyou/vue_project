import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//02 公共资源 css本身会暴露
import './assets/css/amazeui.min.css'
import './assets/css/wap.css?2'

import './assets/js/font'//自执行脚本

import axios from './plugins/axios'
Vue.use(axios);

// import $ from './assets/js/jquery.min.js'
// import Amazeui from './assets/js/amazeui.min.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
