import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'									// 网站首页
import home from '@/pages/home/home'											// 商家首页
import order from '@/pages/order/order'									// 全部订单
import categery from '@/pages/categery/categery'					// 商家分类页
import orderDetails from '@/pages/order/orderDetails'			// 订单详情
import createComment from '@/pages/comment/comment'				// 添加评论
import success from '@/pages/pay/success'								// 支付成功

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/home/:merchantId',
      name: 'home',
      component: home
    },
    {
			path: '/categery/:categeryId',
      name: 'categery',
      component: categery
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
    },
    {
			path: '/createComment',
			name: 'createComment',
			component: createComment
    },
    {
			path: '/success',
			name: 'success',
			component: success
    }
  ]
})
