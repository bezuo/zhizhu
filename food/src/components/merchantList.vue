<template>
	<section>
		<router-link class="item-box" 
			v-for="item in itemsMerchant"
			:to="{path:'/home/' + item.merchantId}"
			:key="item.merchantId">
			<div class="img-box">
				<img v-lazy="item.merchantImg" />
			</div>
			<div class="container">
				<h4 class="title">{{ item.title }}</h4>
				<div class="center-box">
					<em class="quantity">月销{{ item.quantity }}笔</em>
					<div class="star-box">
						<span>商家评分</span>
						<i class=""></i>
						<i class=""></i>
						<i class=""></i>
						<i class=""></i>
						<i class=""></i>
					</div>
				</div>
				<p>简介：{{ item.introduction }}</p>
			</div>
		</router-link>
	</section>	
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	
	props: [
		'itemsMerchant'
	],
	
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
@import '../style/global.scss';

.item-box {
	display: flex;
	padding: px2rem(30px) 0 px2rem(26px);
	border-top: 1px solid #eee;
	&:first-child {
		border-top: 0 none;
	}
	.img-box {
		position: relative;
		width: px2rem(160px);
		height: px2rem(160px);
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			display: block;
			width: 100%;
			transform: translate(-50%, -50%);
		}
	}
	.container {
		width: px2rem(510px);
		padding: 0 px2rem(30px) 0 px2rem(20px);
		.title {
			width: 100%;
			height: px2rem(44px);
			line-height: px2rem(44px);
			font-size: px2rem(32px);
			font-weight: normal;
			color: $color333;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.center-box {
			padding: px2rem(8px) 0 px2rem(12px);
			line-height: px2rem(34px);
			color: $color333 * 3;
			font-size: px2rem(24px);
			.quantity {
				float: right;
			}
		}
		p {
			width: 100%;
			height: px2rem(68px);
			line-height: px2rem(34px);
			font-size: px2rem(24px);
			color: $color333 * 3;
			overflow: hidden;
		}
	}
}
</style>