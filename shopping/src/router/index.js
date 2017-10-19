import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'									// 首页
import goodsDetails from '@/pages/goods/goodsDetails'			// 商品详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: goodsDetails
    }
  ]
})
