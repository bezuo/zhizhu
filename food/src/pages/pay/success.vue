<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj"></v-header>		
		<!-- / header end -->
		
		<!-- article start -->
		<article class="article">
			<span class="iconfont confirm">&#xe6af;</span>
			<h2 class="title">下单成功</h2>
			<p>请耐心等待~切勿随意更换餐桌</p>
			<div class="btn-box">
				<button class="btn btn-left" @click="backOrder">查看订单</button>
				<button class="btn btn-right" @click="backHome">返回首页</button>
			</div>
		</article>
		<!-- / article end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'

export default {
	data() {
		return {
			headerObj: {
				title: "订单支付成功",		// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
		}
	},
	
	components: {
		vHeader,
	},
	
	methods: {
		backOrder() {						//返回订单
			this.$router.push('/order')
		},
		backHome() {							// 返回首页
			this.$router.push('/index');
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.container {
	padding-top: px2rem(88px);
	.article {
		padding-top: px2rem(140px);
		text-align: center;
		.confirm {
			display: block;
			width: px2rem(194px);
			margin: 0 auto px2rem(64px);
			font-size: px2rem(194px);
			color: $colorYellow;
		}
		.title {
			margin-bottom: px2rem(30px);
			font-size: px2rem(36px);
			color: $color333;
		}
		p {
			font-size: px2rem(30px);
			color: $color333 * 3;
		}
		.btn-box {
			padding-top: px2rem(80px);
			text-align: center;
			.btn {
				width: px2rem(240px);
				height: px2rem(80px);
				margin: 0 px2rem(24px);
				font-size: px2rem(30px);
				border-radius: px2rem(4px);
				background-color: transparent;
				box-sizing: border-box;
				&.btn-left {
					color: $colorYellow;
					border: 1px solid $colorYellow;
				}
				&.btn-right {
					color: $color333 * 3;
					border: 1px solid $color333 * 3;
				}
			}
		}
	}
}
</style>