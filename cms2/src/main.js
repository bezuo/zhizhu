// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import routes from '@/router/index';
import '@/element-ui/lib/theme-blue/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueLazyload);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://lottery.taolue.fm/vshop//static/images/img-placeholder.png',
  loading: 'http://lottery.taolue.fm/vshop/static/images/img-placeholder.png',
  attempt: 3
});

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
