<template>
	<section class="container">		
		<!-- header start -->
		<v-header :headerObj="headerObj" @callBackFun="parentLisen"></v-header>		
		<!-- / header end -->
		
		<!-- merchant start -->
		<section class="merchant">
			<div class="img-box">
				<img src="//img.alicdn.com/imgextra/i2/TB10k3uOVXXXXbuapXXXXXXXXXX_!!0-item_pic.jpg" />
			</div>
			<div class="title-box">
				<h2 class="title">飞鱼回转寿司店（景区店）</h2>
				<p>营业时间：09:00-22:00</p>
			</div>
		</section>
		<!-- / merchant end -->
		
		<!-- proclamation start -->
		<section class="proclamation">
			<div class="iconfont">&#xe640;</div>
			<div class="text">
				<p>公告：本店承诺所有寿司都是新鲜食材如食用过程中发现</p>
			</div>
		</section>
		<!-- / proclamation end -->
		
		<!-- tab bar start -->
		<section class="tab-bar">
			<div class="tab-item">
				<span class="tab-name" :class="{'cur': tabIndex == 1}" @click="tabIndex=1">商品</span>
			</div>
			<div class="tab-item">
				<span class="tab-name" :class="{'cur': tabIndex == 2}" @click="tabIndex=2">评论</span>
			</div>
			<div class="tab-item">
				<span class="tab-name" :class="{'cur': tabIndex == 3}" @click="tabIndex=3">商家</span>
			</div>
		</section>
		<!-- / tab bar end -->
		
		<!-- food start -->
		<v-food v-if="tabIndex == 1"></v-food>
		<!-- / food end-->
		
		<!-- comment start -->
		<v-comment v-else-if="tabIndex == 2"></v-comment>
		<!-- / comment end -->
		
		<!-- merchant start -->
		<v-merchant v-else-if="tabIndex == 3"></v-merchant>
		<!-- / merchant end -->
	
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
				<button class="btn">去结算</button>
			</div>
		</footer>
		<!-- / footer end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'
import vFood from './food'
import vComment from './comment'
import vMerchant from './merchant'

export default {
	data() {
		return {
			headerObj: {
				title: "点餐",				// 头部标题
				leftShow: true,				// 返回按钮
				rightText: "订单"			// 右上角文字
			},
			tabIndex: 1,
		}
	},
	
	created() {
		
	},
	
	components: {
		vHeader,
		vFood,
		vComment,
		vMerchant
	},
	
	methods: {
		parentLisen(evtValue) {				// 顶部订单按钮跳转
			this.$router.push('/order');
		}
	},
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';
	
.container {
	padding: px2rem(88px) 0 px2rem(98px);
	.merchant {
		display: flex;
		padding: px2rem(30px);
		background-color: #fff;
		.img-box {
			position: relative;
			z-index: 9;
			width: px2rem(120px);
			height: px2rem(120px);
			margin-right: px2rem(20px);
			img {
				position: absolute;
				top: 50%;
				left: 50%;
				display: block;
				width: 100%;
				transform: translate(-50%, -50%);
			}
		}
		.title-box {
			width: px2rem(550px);
			.title {
				width: 100%;
				height: px2rem(50px);
				margin-bottom: px2rem(28px);
				line-height: px2rem(50px);
				font-size: px2rem(36px);
				color: $color333;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			p {
				line-height: px2rem(42px);
				font-size: px2rem(30px);
				color: $color333 * 2;
			}
		}
	}
	.proclamation {
		display: flex;
		width: 100%;
		height: px2rem(80px);
		padding-left: px2rem(30px);
		line-height: px2rem(80px);
		box-sizing: border-box;
		background-color: #565656;
		.iconfont {
			width: px2rem(56px);
			height: px2rem(80px);
			color: $colorYellow;
		}
		.text {
			width: px2rem(664px);
			height: px2rem(80px);
			font-size: px2rem(28px);
			color: #fff;
			overflow: hidden;
		}
	}
	.tab-bar {
		display: flex;
		width: 100%;
		height: px2rem(88px);
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		background-color: #fff;
		.tab-item {
			flex: 1;
			text-align: center;
			.tab-name {
				display: inline-block;
				line-height: px2rem(88px);
				font-size: px2rem(34px);
				/*font-weight: bold;*/
				color: $color333 * 2;
				&.cur {
					position: relative;					
					color: $color333;
					&:after {
						content: "";
						position: absolute;
						bottom: 0;
						left: 0;
						display: block;
						width: 100%;
						height: px2rem(4px);
						background-color: $colorYellow;
					}
				}
			}
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
}
</style>