<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj"></v-header>		
		<!-- / header end -->
		
		<!-- article start -->
		<article class="article">
			<!-- nav start -->
			<div class="nav">				
				<swiper class="nav-bar" :options="navSwiperOption">
					<swiper-slide class="nav-item"
						v-for="(value, index) in itemNav"
						:class="{'nav-item-other': value == '全部'}"
						:key="index">
						<span @click="toggleStatus(index)"
							:class="{'cur': index == indexStatus}">
							{{ value }}
						</span>
					</swiper-slide>
				</swiper>
				
				<!--<ul class="nav-bar">
					<li v-for="(value, index) in itemNav">
						<span @click="toggleStatus(index)"
							:class="{'cur': index == indexStatus}">
							{{ value }}
						</span>
					</li>
				</ul>-->
			</div>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data() {
		return {
			headerObj: {
				title: "订单信息",			// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
			indexStatus: 0,
			navSwiperOption: {
	          	slidesPerView: 'auto',
	          	paginationClickable: true,
	          	spaceBetween: 0
			},
			itemNav: ['全部', '待接单', '用餐中', '待买单', '已完成'],
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
		vScroll,		
		swiper,
		swiperSlide
	},
	
	methods: {
		toggleStatus(id) {
			this.indexStatus = id;
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';
@import '../../style/swiper-3.4.2.min.css';

.container {
	padding-top: px2rem(88px);
	.article {
		padding-top: px2rem(80px);
		.nav {
			position: fixed;
			top: px2rem(88px);
			left: 50%;
			z-index: 98;
			width: px2rem(750px);
			height: px2rem(80px);
			border-bottom: 1px solid #eee;
			background-color: #fff;
			box-sizing: border-box;
			transform: translateX(-50%);
			/*overflow: hidden;*/
			.nav-bar {
				display: flex;
				flex: 1;
				/*flex-direction: row;*/
				/*overflow-x: scroll;
				li {
					height: px2rem(80px);
					padding: 0 px2rem(38px);
					color: $color333 * 2;
					line-height: px2rem(80px);
					font-size: px2rem(32px);
					white-space: nowrap;
				}*/
				.nav-item {
					width: px2rem(100px);
					height: px2rem(80px);
					padding: 0 px2rem(38px);
					color: $color333 * 2;
					line-height: px2rem(80px);
					font-size: px2rem(32px);
					white-space: nowrap;
					&.nav-item-other {
						width: px2rem(64px);
					}
					span {
						display: block;
						&.cur {
							position: relative;
							color: $color333;
							z-index: 99;
							&:before {
								content: "";
								position: absolute;
								bottom: 0;
								left: 0;
								z-index: 111;
								width: 100%;
								height: 2px;
								background-color: $colorYellow;
							}
						}
					}
				}
			}
		}
	}
}
</style>