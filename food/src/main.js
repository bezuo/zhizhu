// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueLazyload)
 
// or with options 
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: '../static/img/img-placeholder.png',
	loading: '../static/img/img-placeholder.png',
	attempt: 3
})

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
