/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import App from './App.vue'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
