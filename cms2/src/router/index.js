import login from '@/pages/login/login'
import index from '@/pages/index'
import orderList from '@/pages/order/orderList'
import sort from '@/pages/sort/sort'
import goodsList from '@/pages/goods/list'
import createGoods from '@/pages/goods/create'
import editGoods from '@/pages/goods/edit'

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
	{
	  	path: '/',
	  	name: '菜品管理',
	  	component: index,
  		iconCls: 'iconfont icon-fa-order',
	  	children: [
			{ path: '/goodsList', component: goodsList, name: '菜品列表' },
			{ path: '/createGoods', component: createGoods, name: '添加菜品' },			
			{ path: '/editGoods/:goodsId', component: editGoods, hidden: true, name: '编辑菜品' }
		]
	},
]

export default routes;