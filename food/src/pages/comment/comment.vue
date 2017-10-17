<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj"></v-header>		
		<!-- / header end -->
		
		<!-- order details start -->
		<section class="item-box">
			<!-- title and status start -->
			<div class="item-top">
				<h3 class="item-title" @click.stop="gotoMerchant(merchantId)">店铺名称：{{ merchant }}</h3>
			</div>
			<!-- / title and status end -->
			
			<!-- food list start -->
			<div class="list-food">
				<div class="item-food"
					v-for="list in listsFood">
					<div class="img-food">
						<img v-lazy="list.foodImg" alt="" />
					</div>
					<div class="food-content">
						<h4 class="title-food">{{ list.foodTitle }}</h4>
						<p class="price">￥{{ list.price * list.quantity | priceFilter}}</p>
					</div>
					<div class="quantity">
						<em>×{{ list.quantity }}</em>
						<i>{{ list.foodType }}</i>
					</div>
				</div>
			</div>
			<!-- / food list end -->			
		</section>		
		<!-- / order details end -->
					
		<!-- comment start -->
		<section class="comment-content">
			<div class="comment-top">
				<h3>总体评价</h3>
				<div class="star-box">
					<span class="iconfont" 
						v-for="(value, index) in 5" 
						:class="{'star': index < star}" 
						@click="star = index + 1">&#xe6e2;
					</span>
				</div>
			</div>
			<h3 class="comment-title">发表评论</h3>
			<textarea class="comment-text" placeholder="请输入您对菜品的意见"></textarea>
			<div class="btn-box">				
				<button class="comment-btn">提交</button>
			</div>
		</section>
		<!-- / comment end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'

export default {
	data() {
		return {
			headerObj: {
				title: "添加评论",			// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},			
			star: 0,							// 用于评论打分
			orderId: '356456456',
			merchantId: '1',
			merchant: '飞鱼回旋寿司店',
			listsFood: [{
				foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
				foodTitle: '蒜苗肉丝',
				price: '18',
				quantity: '1',
				foodType: '大份'
			}],
		}
	},
	
	created() {
		
	},
	
	components: {
		vHeader
	},
	
	methods: {
		
	},
	
	filters: {
		priceFilter(value) {
			return value.toFixed(2);
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.container {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9;
	width: px2rem(750px);
	height: 100%;
	padding-top: px2rem(88px);
	background-color: #fff;
	box-sizing: border-box;
	.item-box {
		border-bottom: px2rem(20px) solid #eee;
		.item-top {
			padding: 0 px2rem(30px);
			line-height: px2rem(88px);
			border-bottom: 1px solid #eee;
			.item-title {
				width: px2rem(600px);
				height: px2rem(88px);
				font-size: px2rem(30px);
				color: $color333 * 2;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;			
			}
		}
		.list-food {
			padding-left: px2rem(30px);
			.item-food {
				display: flex;
				padding: px2rem(20px) 0;
				border-bottom: 1px solid #eee;
				&:last-child {
					border-bottom: 0 none;
				}
				.img-food {
					position: relative;
					width: px2rem(120px);
					height: px2rem(120px);
					overflow: hidden;
					img {
						position: absolute;
						top: 50%;
						left: 50%;
						display: block;
						width: 100%;
						transform: translate(-50%, -50%);
					}
				}
				.food-content {
					width: px2rem(400px);
					padding-left: px2rem(20px);
					.title-food {
						width: 100%;
						height: px2rem(40px);
						margin-bottom: px2rem(36px);
						font-size: px2rem(28px);
						color: $color333;
						line-height: px2rem(40px);
						text-overflow: hidden;
						white-space: nowrap;
						overflow: hidden;
					}
					.price {
						font-size: px2rem(30px);
						color: $color333;
					}
				}
				.quantity {
					width: px2rem(150px);
					padding-right: px2rem(30px);
					font-size: px2rem(24px);
					color: $color333 * 3;
					em {
						float: right;
					}
					i {
						font-style: normal;
					}
				}
			}
		}
	}
	.comment-content {
		padding-left: px2rem(30px);
		.comment-top {
			display: flex;
			width: 100%;
			border-bottom: 1px solid #efefef;
			.star-box {
				width: px2rem(500px);
				line-height: px2rem(100px);
				.iconfont {
					font-size: px2rem(44px);
					color: #eee;
					&.star {
						color: $colorYellow;
					}
				}
			}
			h3 {
				width: px2rem(150px);
				line-height: px2rem(100px);
				font-size: px2rem(30px);
				color: $color333 * 2;
			}
		}
		.comment-title {			
			padding: px2rem(30px) 0 px2rem(20px);
			line-height: px2rem(42px);
			font-size: px2rem(30px);
			color: $color333 * 2;
		}
		.comment-text {
			width: px2rem(690px);
			height: px2rem(286px);
			margin-bottom: px2rem(60px);
			padding: px2rem(24px);
			line-height: px2rem(42px);
			font-size: px2rem(30px);
			color: $color333 * 3;
			border: 0 none;
			border-radius: px2rem(4px);
			resize: vertical;
			background-color: #eee;
			box-sizing: border-box;
		}
		.btn-box {
			padding-right: px2rem(30px);
			.comment-btn {
				display: block;
				width: px2rem(332px);
				height: px2rem(88px);
				margin: 0 auto;
				font-size: px2rem(30px);
				color: #fff;
				border: 0 none;
				border-radius: px2rem(4px);
				background-color: $colorYellow;
			}
		}
	}
}
</style>