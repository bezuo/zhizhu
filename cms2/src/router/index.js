import login from '@/pages/login/login'
import index from '@/pages/index'
import orderList from '@/pages/order/orderList'
import sort from '@/pages/sort/sort'

let routes = [
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
	  	name: '',
	  	component: index,
  		iconCls: 'iconfont icon-fa-order',
	  	leaf: true,
	  	children: [
			{ path: '/sort', component: sort, name: '分类管理' }
		]
	},
]

export default routes;
