import login from '@/pages/login/login'
import index from '@/pages/index'
import orderList from '@/pages/order/orderList'
import categery from '@/pages/categery/categery'
import goodsList from '@/pages/goods/list'
import createGoods from '@/pages/goods/create'
import editGoods from '@/pages/goods/edit'
import deskList from '@/pages/desk/deskList'
import billList from '@/pages/bill/list'
import billDetails from '@/pages/bill/detailed'
import setting from '@/pages/setting/setting'

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
  		iconCls: 'iconfont icon-fa-fenlei',
	  	leaf: true,
	  	children: [
			{ path: '/categery', component: categery, name: '分类管理' }
		]
	},
	{
	  	path: '/',
	  	name: '菜品管理',
	  	component: index,
  		iconCls: 'iconfont icon-fa-caipin',
	  	children: [
			{ path: '/goodsList', component: goodsList, name: '菜品列表' },
			{ path: '/createGoods', component: createGoods, name: '添加菜品' },
			{ path: '/editGoods/:goodsId', component: editGoods, hidden: true, name: '编辑菜品' }
		]
	},
	{
	  	path: '/',
	  	name: '',
	  	component: index,
  		iconCls: 'iconfont icon-fa-canzhuo',
	  	leaf: true,
	  	children: [
			{ path: '/deskList', component: deskList, name: '餐桌管理' }
		]
	},
	{
	  	path: '/',
	  	name: '',
	  	component: index,
  		iconCls: 'iconfont icon-fa-bill',
	  	leaf: true,
	  	children: [
			{ path: '/billList', component: billList, name: '财务对账' },
			{ path: '/billDetails/:id', component: billDetails, hidden: true, name: '查看明细', }
		]
	},
	{
	  	path: '/',
	  	name: '',
	  	component: index,
  		iconCls: 'el-icon-setting',
	  	leaf: true,
	  	children: [
			{ path: '/setting', component: setting, name: '商户资料设置' }
		]
	},
]

export default routes;