<template>
	<section class="container">	
		<!-- header start -->
		<v-header :headerObj="headerObj"></v-header>		
		<!-- / header end -->
		
		<section class="container-top">			
			<div class="food-img">
				<img v-lazy="foodImg" alt="" />
			</div>
			<h2 class="title">{{ title }}</h2>
			<p class="top-text">销量{{ num }}份</p>
			<div class="price-buy-cart">
				<div class="price">￥{{ price | filterPrice }}</div>
				<div class="buy-car">
					<!--<v-buy-cart :foods="foods"></v-buy-cart>-->
				</div>
			</div>
		</section>
		
		<section class="container-btm">
			<h3 class="food-title">商品详情</h3>
			<p>{{ contentText }}</p>
		</section>
		
		<!-- footer start -->
		<footer class="footer">
			<div class="footer-left">
				<div class="shopping-car">
					<span class="iconfont">&#xe60b;</span>
				</div>
				<i class="quantity">2</i>
				<em class="price">￥69.00</em>
			</div>
			<div class="btn-box">
				<button class="btn" @click="pay('123123')">去结算</button>
			</div>
		</footer>
		<!-- / footer end -->
		
		<!-- mask box start -->
		<mask-box v-if="buyCartListShow | skuSelectedShow" @tapMask="tapMask"></mask-box>
		<!-- / mask box end -->
		
		<!-- sku start -->
		<v-sku class="sku-box" @skuClose="skuClose" :class="{'sku-show': skuSelectedShow}"></v-sku>
		<!-- / sku end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'
import vBuyCart from '@/components/buyCart'
import maskBox from '@/components/maskBox'
import vSku from '@/components/sku'

export default {
	data() {
		return {
			headerObj: {
				title: "商品详情",			// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
			buyCartListShow: false,			// 购物车显示
			skuSelectedShow: true,			// sku选择显示
			title: '顶辣妹麻辣萝卜干酱菜农家自制特产萝卜丁咸菜下饭菜750g瓶装包邮',
			foodImg: '//img.alicdn.com/imgextra/i1/2259601148/TB1laoRXogQMeJjy0FfXXbddXXa_!!0-item_pic.jpg_640x640Q50s50.jpg',
			num: 666,
			price: '69',
			contentText: '生产日期很新鲜，塑料包装盒干净，没有油渍。萝卜丁大小适中，口感略硬，牙口不好的就别吃了。麻辣味儿还不错，不会特别辣，再加上微麻，就粥很好吃。750g一大罐，我起码能吃一个月，很实惠。',
			foods: {
			}
		}
	},
	
	methods: {
		tapMask() {
			
		},
		
		// 关闭sku选择
		skuClose() {
			this.skuSelectedShow = false;
		}
	},
	
	components: {
		vHeader,
//		vBuyCart,
		maskBox,
		vSku
	},
	
	filters: {
		filterPrice(value) {
			if(!value) return;
			return parseInt(value).toFixed(2);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../style/global.scss';
.container {
	padding: px2rem(88px) 0 px2rem(98px);
	.container-top {
		margin-bottom: px2rem(24px);
		background-color: #fff;
		.food-img {
			width: 100%;
			img {
				display: block;
				width: 100%;
			}
		}
		.title {
			padding: px2rem(16px) px2rem(30px) 0;
			line-height: px2rem(48px);
			font-size: px2rem(34px);
			color: $color333;
		}
		.top-text {
			margin: px2rem(6px) 0 px2rem(20px) px2rem(30px);
			line-height: px2rem(34px);
			font-size: px2rem(24px);
			color: $color333 * 3;
		}
		.price-buy-cart {
			display: flex;
			padding: 0 px2rem(30px) px2rem(24px);
			.price {
				width: px2rem(300px);
				line-height: px2rem(48px);
				font-size: px2rem(34px);
				color: $colorRed;
			}
		}
	}
	.container-btm {
		padding: px2rem(14px) px2rem(30px);
		background-color: #fff;
		.food-title {
			margin-bottom: px2rem(20px);
			line-height: px2rem(42px);
			font-size: px2rem(30px);
			color: $color333;
		}
		p {
			font-size: px2rem(28px);
			color: $color333 * 2;
		}
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 111;
		display: flex;
		width: 100%;
		height: px2rem(98px);
		background-color: #fafafa;
		.footer-left {
			position: relative;
			z-index: 112;
			width: px2rem(456px);
			height: px2rem(98px);
			padding-left: px2rem(156px);
			border-top: 1px solid #eee;
			box-sizing: border-box;
			.shopping-car {
				position: absolute;
				top: px2rem(-14px);
				left: px2rem(48px);
				z-index: 113;
				width: px2rem(88px);
				height: px2rem(88px);
				line-height: px2rem(88px);
				color: #fff;
				text-align: center;
				border-radius: 50%;
				background-color: $colorYellow;
				.iconfont {
					font-size: px2rem(40px);
				}
			}
			.quantity {
				position: absolute;
				top: px2rem(-14px);
				left: px2rem(110px);
				z-index: 114;
				display: inline-block;
				height: px2rem(30px);
				padding: 0 px2rem(9px);
				line-height: px2rem(30px);
				font-size: px2rem(24px);
				text-align: center;
				color: #fff;
				border-radius: px2rem(15px);
				background-color: $colorRed;
			}
			.price {
				font-size: px2rem(36px);
				line-height: px2rem(98px);
				color: $colorRed;
			}
		}
		.btn-box {
			width: px2rem(294px);
			height: px2rem(98px);
			.btn {
				width: 100%;
				height: px2rem(98px);
				font-size: px2rem(34px);
				color: #fff;
				background-color: $colorYellow;
			}
		}
	}
	.sku-box {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 112;
		width: px2rem(600px);
		transform: translate(-50%, -50%);
		/*display: none;*/
	}
	.sku-show {
		/*display: block;*/
	}
}
</style>