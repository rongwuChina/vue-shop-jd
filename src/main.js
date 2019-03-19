// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// ./   本目录
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/fonts.css'
import './assets/css/base.css'
import loading from '@/components/global/loading'
import footer from '@/components/global/footer'
import store from '@/vuex/index.js'

Vue.config.productionTip = false;

//定义全局组件
Vue.use(loading);
Vue.use(footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})