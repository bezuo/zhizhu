import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'									// 网站首页
import home from '@/pages/home/home'											// 商家首页
import order from '@/pages/order/order'									// 全部订单
import orderDetails from '@/pages/order/orderDetails'			// 订单详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home/:merchantId',
      name: 'home',
      component: home
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderDetails/:merchantId',
      name: 'orderDetails',
      component: orderDetails
    }
  ]
})
