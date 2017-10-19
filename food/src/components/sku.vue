<template>
	<section class="sku-container">
		<header class="sku-title">
			<h3>健康营养高时蔬菜</h3>
			<span class="iconfont" @click="skuClose">&#xe63c;</span>
		</header>
		
		<article class="sku-article">
			<section class="sku-item">
				<h4>口味：</h4>
				<ul class="">
					<li class="selected" @click="">麻辣</li>
					<li @click="">香辣</li>
					<li @click="">超辣</li>
					<li @click="">中辣</li>
					<li @click="">微辣</li>
					<li @click="">不辣</li>
				</ul>
			</section>
		</article>
		
		<footer class="sku-footer">
			<button class="sku-btn" @click="">加入购物车</button>
			<span class="sku-price">￥19.00</span>
		</footer>
	</section>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	
	props: [
		
	],
	
	methods: {
		skuClose() {
			this.$emit('skuClose')
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

<style lang="scss" scoped>
@import '../style/global.scss';

.sku-container {
	border-radius: px2rem(4px);
	background-color: #fff;
	.sku-title {
		position: relative;
		padding-top: px2rem(20px);
		line-height: px2rem(42px);
		h3 {
			width: px2rem(480px);
			margin: 0 auto;
			font-size: px2rem(30px);
			text-align: center;
			color: $color333;
		}
		.iconfont {
			position: absolute;
			top: px2rem(20px);
			right: px2rem(30px);
			font-size: px2rem(14px);
			color: $color333 * 3;
		}
	}
	.sku-article {
		padding: 0 px2rem(30px) px2rem(60px);
		.sku-item {
			h4 {
				padding-top: px2rem(34px);
				font-size: px2rem(24px);
				line-height: px2rem(34px);
				color: $color333 * 2;
			}
			ul {
				&:after {
					content: "";
					display: block;
					width: 100%;
					height: 0;
					clear: both;	
					overflow: hidden;
				}
				li {
					float: left;
					margin: px2rem(20px) px2rem(20px) 0 0;
					width: px2rem(156px);
					font-size: px2rem(24px);
					line-height: px2rem(52px);
					text-align: center;
					color: $color333 * 3;
					border-radius: px2rem(4px);
					background-color: #eee;
					&.selected {
						color: #fff;
						background-color: $colorYellow;
					}
				}
			}
		}
	}
	.sku-footer {
		width: 100%;
		height: px2rem(90px);
		padding: px2rem(12px) px2rem(30px);
		border-top: 1px solid #eee;
		box-sizing: border-box;
		.sku-btn {
			float: right;
			width: px2rem(176px);
			height: px2rem(64px);
			color: #fff;
			font-size: px2rem(28px);
			background-color: $colorYellow;
		}
		.sku-price {
			line-height: px2rem(64px);
			font-size: px2rem(36px);
			color: $colorRed;
		}
	}
}
</style>