// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import VueRouter from 'vue-router';
import VueLazyload from 'vue-lazyload';
import ElementUI from 'element-ui';
import '@/element-ui/lib/theme-blue/index.css';
 
//import store from './store/store'
//import router from './router/router'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueLazyload);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://lottery.taolue.fm/vshop//static/images/img-placeholder.png',
  loading: 'http://lottery.taolue.fm/vshop/static/images/img-placeholder.png',
  attempt: 3
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//store,
  ...App
})
