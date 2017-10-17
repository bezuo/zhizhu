<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj"></v-header>		
		<!-- / header end -->
		
		<!-- article start -->
		<article class="article">
			<!-- nav start -->
			<v-scroll class="nav" ref="wrapperNav" :scrollX="true">				
				<ul class="nav-bar">
					<li @click="">全部</li>
					<li @click="">待接单</li>
					<li @click="">用餐中</li>
					<li @click="">待买单</li>
					<li @click="">已完成</li>
				</ul>
			</v-scroll>
			<!-- / nav end -->
			
			<v-list :itemsOrder="itemsOrder"></v-list>			
		</article>
		<!-- / article end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'
import vList from './list'
import vScroll from '@/components/scroll'
import BScroll from 'better-scroll'

export default {
	data() {
		return {
			headerObj: {
				title: "订单信息",			// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
			itemsOrder: [{					// 订单数据
				orderId: '123123',
				merchantId: '1',
				orderStatus: '1',
				merchant: '飞鱼回旋寿司店',
				listsFood: [{
					foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
					foodTitle: '蒜苗肉丝',
					price: '18',
					quantity: '1',
					foodType: '大份'
				},{
					foodImg: '//gw2.alicdn.com/bao/uploaded/i1/2431040401/TB1gIINkbsTMeJjy1zbXXchlVXa_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '农家小炒肉',
					price: '22',
					quantity: '2',
					foodType: '大份'
				}],
				orderTime: '2017-09-04 18:28:31'
			},{
				orderId: 'adasdad',				
				merchantId: '2',
				orderStatus: '2',
				merchant: '飞鱼回旋寿司店',
				listsFood: [{
					foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
					foodTitle: '蒜苗肉丝',
					price: '18',
					quantity: '1',
					foodType: '大份'
				}],
				orderTime: '2017-09-04 18:28:31'
			},{
				orderId: '24234234',
				merchantId: '1',
				orderStatus: '3',
				merchant: '飞鱼回旋寿司店飞鱼回旋寿司店飞鱼回旋寿司店',
				listsFood: [{
					foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
					foodTitle: '蒜苗肉丝',
					price: '18',
					quantity: '1',
					foodType: '大份'
				}],
				orderTime: '2017-09-04 18:28:31'
			},{
				orderId: '67657575',
				merchantId: '1',
				orderStatus: '4',
				merchant: '飞鱼回旋寿司店',
				listsFood: [{
					foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
					foodTitle: '蒜苗肉丝',
					price: '18',
					quantity: '1',
					foodType: '大份'
				}],
				orderTime: '2017-09-04 18:28:31'
			},{
				orderId: '356456456',
				merchantId: '1',
				orderStatus: '5',
				merchant: '飞鱼回旋寿司店',
				listsFood: [{
					foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
					foodTitle: '蒜苗肉丝',
					price: '18',
					quantity: '1',
					foodType: '大份'
				}],
				orderTime: '2017-09-04 18:28:31'
			}]
		}
	},
	
	created() {
		
	},
	
	components: {
		vHeader,
		vList,
		vScroll
	},
	
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.container {
	padding-top: px2rem(88px);
	.article {
		padding-top: px2rem(80px);
		.nav {
			position: fixed;
			top: px2rem(88px);
			left: 0;
			z-index: 98;
			width: 100%;
			height: px2rem(80px);
			background-color: #fff;
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
			overflow: hidden;
			.nav-bar {
				display: flex;
				flex: 1;
				position: relative;
				overflow-x: hidden;
				li {
					width: px2rem(96px);
					margin: 0 px2rem(38px);
					color: $color333 * 2;
					line-height: px2rem(88px);
					font-size: px2rem(32px);
				}
			}
		}
	}
}
</style>