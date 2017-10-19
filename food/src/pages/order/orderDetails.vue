<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj"></v-header>		
		<!-- / header end -->
			
		<!-- container start -->
		<article class="article">
			<h2 class="title">餐桌：09A</h2>
			<section class="content-box">
				<h3>点餐信息</h3>
				<div class="item-food" v-for="(item, index) in itemsFood">
					<div class="food-box">
						<h4 class="food-title">{{ item.foodTitle }}</h4>
						<p>{{ item.introduction }}</p>
					</div>
					<div class="price-and-quantity">
						<em class="price">￥{{ item.price | filterPrice }}</em>
						<i class="quantity">×{{ item.quantity }}</i>
					</div>
				</div>				
				<div class="items-total">
					合计：<em class="items-price">￥{{ totalPrice | filterPrice }}</em>
				</div>
			</section>
			
			<section class="content-box">
				<div class="item-btm">
					<div class="item-label">用餐人数</div>
					<div class="item-right">
						<div class="people-quantity">							
							<span class="iconfont" @click="count('-1')">&#xe672;</span>
							<em class="people">{{ people }}</em>
							<span class="iconfont" @click="count('1')">&#xe688;</span>
						</div>
					</div>
				</div>
				<div class="item-btm">
					<div class="item-label">口味偏好：</div>
					<div class="item-right">
						<input type="text" class="ipt-text" placeholder="订单补充说明..." value="" />
					</div>
				</div>
			</section>
		</article>
		<!-- / container end -->
		
		<!-- footer start -->
		<footer class="footer">
			<div class="left-box">
				总计：<em class="total-pirce">￥{{ totalPrice | filterPrice }}</em>
			</div>
			<div class="btn-box">
				<button class="btn" @click="pay">支付</button>
			</div>
		</footer>
		<!-- / footer end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'

export default {
	data() {
		return {
			headerObj: {
				title: "订单详情",			// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
			people: 1,
			itemsFood: [{
				foodTitle: '墨鱼卷寿司',
				introduction: '三文鱼含有大量优质蛋白质',
				price: '39',
				quantity: '1'
			},{
				foodTitle: '蒜苗肉丝',
				introduction: '三文鱼含有大量优质蛋白质',
				price: '21',
				quantity: '2'
			}]
		}
	},
	
	created() {
		
	},
	
	computed: {
		totalPrice() {			// 计算订单总金额
			
			let total = 0;
			this.itemsFood.forEach((item, index) => {
				total += item.price * item.quantity;				
			})
			return total;
		}
	},
	
	components: {
		vHeader,
	},
	
	methods: {
		count(i) {				// 增减用餐人数
			
			let x = parseInt(this.people);			
			if(i != '-1') {
				this.people = x + parseInt(i);
			} else {
				if(x != 1) {					
					this.people = x + parseInt(i);
				}
			}
		},
		
		pay() {					// 订单支付
			this.$router.push('/success');
		}
	},
	
	filters: {
		filterPrice(value) {
			if(!value) return;
			return parseInt(value).toFixed(2);
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.container {
	padding: px2rem(88px) 0 px2rem(98px);
	.article {
		.title {
			line-height: px2rem(88px);			
			font-size: px2rem(36px);
			font-weight: normal;
			text-align: center;
			color: $color333;
		}
		.content-box {
			margin-bottom: px2rem(20px);
			padding-left: px2rem(30px);
			background-color: #fff;
			h3 {
				padding: px2rem(20px) 0;
				line-height: px2rem(44px);
				font-size: px2rem(32px);
				color: $color333 * 2;
			}
			.item-food {
				display: flex;
				width: 100%;
				height: px2rem(120px);
				border-bottom: 1px solid #eee;
				.food-box {					
					width: px2rem(500px);
					padding-top: px2rem(20px);
					.food-title {
						padding-bottom: px2rem(4px);
						font-size: px2rem(30px);
						line-height: px2rem(42px);
						color: $color333;
					}
					p {
						line-height: px2rem(34px);
						font-size: px2rem(24px);
						color: $color333 * 3;
					}
				}
				.price-and-quantity {
					width: px2rem(220px);
					padding: px2rem(32px) px2rem(30px) 0 0;
					line-height: px2rem(42px);
					color: $color333;
					.price {
						float: right;						
						font-size: px2rem(30px);
					}
					.quantity {
						font-size: px2rem(24px);
						font-style: normal;
					}
				}
			}
			.items-total {
				padding-right: px2rem(30px);
				line-height: px2rem(88px);
				font-size: px2rem(24px);
				color: $color333 * 2;
				text-align: right;
				.items-price {
					font-size: px2rem(36px);
					color: $color333;
				}
			}
			.item-btm {
				display: flex;
				height: px2rem(88px);
				border-top: 1px solid #eee;
				&:first-child {
					border: 0 none;
				}
				.item-label {
					width: px2rem(140px);
					line-height: px2rem(88px);
					font-size: px2rem(28px);
					color: $color333 * 2;
				}
				.item-right {
					width: px2rem(580px);
					padding-right: px2rem(30px);
					box-sizing: border-box;
					.people-quantity {
						line-height: px2rem(88px);
						text-align: right;
						color: $colorYellow;
						.iconfont {
							font-size: px2rem(40px);							
						}
						.people {
							margin: 0 px2rem(24px);
							vertical-align: px2rem(4px);
							font-size: px2rem(30px);
						}
					}
					.ipt-text {
						width: 100%;
						height: px2rem(88px);
						font-size: px2rem(28px);
						line-height: px2rem(88px);
						color: $color333 * 3;
						overflow: hidden;
						border: 0 none;
					}
				}
			}
		}
	}	
	.footer {
		position: fixed;
		bottom: 0;
		left: 50%;
		display: flex;
		width: px2rem(750px);
		height: px2rem(98px);
		background-color: #fff;
		transform: translateX(-50%);
		.left-box {
			width: px2rem(450px);
			padding-left: px2rem(30px);
			line-height: px2rem(98px);
			font-size: px2rem(32px);
			color: $color333 * 2;
			box-sizing: border-box;
			.total-pirce {
				font-size: px2rem(36px);
				color: $colorRed;
			}
		}
		.btn-box {
			width: px2rem(300px);
			text-align: center;
			.btn {
				display: block;
				width: 100%;
				height: px2rem(98px);
				line-height: px2rem(98px);
				color: #fff;
				font-size: px2rem(36px);
				background-color: $colorYellow;
			}
		}
	}
}
</style>