// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/icon.css'
import { get, post } from './util/http'
import api from './util/api'
import util from './util/util'

Vue.config.productionTip = false
Vue.use(ElementUI)

// Vue.use(axios)
Vue.prototype.$axios = axios
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$api = api
Vue.prototype.$util = util
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
