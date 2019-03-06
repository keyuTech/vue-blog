// 主js文件，引入Vue、Vue-Router、Vuex组件，定义ElementUI，
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import Util from '@/handlers/utils'

// 使用elementUI
Vue.use(ElementUI)
// 使用自己写的util工具
Vue.use(Util)
Vue.config.productionTip = false

/* eslint-disable no-new */
// 新建一个vue项目
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
