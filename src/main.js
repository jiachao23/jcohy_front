// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import {formatDate} from './utils/TimeUtils'

Vue.use(ElementUI)
Vue.filter('format',formatDate)
new Vue({
  el: '#app',
  render:h =>h(App),
  router,
  store
})
