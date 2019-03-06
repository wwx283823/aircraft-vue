// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import router from './router/index.js'
import $ from 'jquery'
import '../node_modules/popper.js/dist/umd/popper.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'
// Vue.prototype.$http=axios
// 导入 css
import 'vue-easytable/libs/themes-base/index.css'

// 导入组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
// Vue.component(VPagination.name, VPagination)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
