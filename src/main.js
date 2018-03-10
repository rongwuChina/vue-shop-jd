// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// ./   本目录
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/fonts.css'
import './assets/css/base.css'
import loading from './components/loading'


Vue.config.productionTip = false;

Vue.use(loading);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
