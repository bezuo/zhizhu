import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import index from '@/pages/index'
import orderList from '@/pages/order/orderList'
import goodsList from '@/pages/goods/goodsList'
import addGoods from '@/pages/goods/addGoods'
import modifyGoods from '@/pages/Goods/modifyGoods'
import log from '@/pages/log/log'
import statistics from '@/pages/statistics/statistics'
import Bill from '@/pages/Bill/Bill'
import site from '@/pages/site/site'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/', 
			component: index,
			redirect: '/orderList',
      hidden: true
  	},
  	{
      path: '/login',
      name: '登录',
      component: login,
      hidden: true
    },
    {
      path: '/',
      name: '',
      component: index,
      iconCls: 'iconfont icon-fa-order',
      leaf: true,
      children: [
				{ path: '/orderList', component: orderList, name: '订单管理' }
			]
    },
    {
      path: '/',
      name: '仓库商品',
      component: index,
      iconCls: 'iconfont icon-fa-goods',
      children: [
				{ path: '/goodsList', component: goodsList, name: '商品列表' },
				{ path: '/addGoods', component: addGoods, name: '添加商品' },
				{ path: '/modifyGoods/:goodsId', component: modifyGoods, name: '修改商品', hidden: true }
			]
    },
    {
      path: '/',
      name: '',
      component: index,
      iconCls: 'iconfont icon-fa-log',
      leaf: true,
      children: [
				{ path: '/log', component: log, name: '操作日志' }
			]
    },
    {
      path: '/',
      name: '',
      component: index,
      iconCls: 'iconfont icon-fa-statistics',
      leaf: true,
      children: [
				{ path: '/statistics', component: statistics, name: '销售统计' }
			]
    },
    {
      path: '/',
      name: '',
      component: index,
      iconCls: 'iconfont icon-fa-bill',
      leaf: true,
      children: [
				{ path: '/Bill', component: Bill, name: '财务对账' }
			]
    },
    {
      path: '/',
      name: '商户资料设置',
      component: index,
      iconCls: 'el-icon-setting',
      children: [
				{ path: '/site', component: site, name: '商户资料修改'},
				{ path: '/site', component: site, name: '子账号管理' }
			]
    },
  ]
})
