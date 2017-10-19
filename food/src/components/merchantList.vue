<template>
	<section>
		<router-link class="item-box" tag="div"
			v-for="(item, index) in itemsMerchant"
			:to="{path:'/home/' + item.id}"
			:key="index">
			<div class="img-box">
				<img v-lazy="item.merchantLogo" />
			</div>
			<div class="container">
				<h4 class="title">{{ item.merchantName }}</h4>
				<div class="center-box">
					<em class="quantity">月销{{ item.volume }}笔</em>
					<div class="star-box">
						<span>商家评分</span>
						<i class="iconfont" v-for="(value, index) in 5" :class="{'star': index < Math.round(item.star)}">&#xe6e2;</i>
					</div>
				</div>
				<p>简介：{{ item.merchantDesc }}</p>
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
		background-color: $color333 * 3;
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
			.star-box {
				.iconfont {
					vertical-align: px2rem(-2px);
					font-size: px2rem(32px);
					color: #eee;
					&.star {
						color: $colorYellow;
					}
				}
			}
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