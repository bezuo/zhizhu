<template>
	<header class="header">
		<div	 class="left-box" v-if="headerObj.leftShow" @click="backtrackFun">
			<span class="iconfont backtrack">&#xe624;</span>
		</div>
		<div class="right-box" v-if="headerObj.rightText" @click="chilCall">{{ headerObj.rightText }}</div>
		<h1 class="title">{{ headerObj.title }}</h1>
	</header>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	
	props: [
		'headerObj'
	],
	
	methods: {
		
		backtrackFun() {					// 返回上一页
			this.$router.back(-1);
		},
		
		chilCall() {
			this.$emit('callBackFun')
		}		
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.header {
	position: fixed;
	top: 0;
	left: 50%;
	z-index: 99;
	width: px2rem(750px);
	height: px2rem(88px);
	border-bottom: 1px solid #d8d8d8;
	background-color: #fff;
	transform: translateX(-50%);
	box-sizing: border-box;
	.left-box {
		float: left;
		width: px2rem(187px);
		height: px2rem(88px);
		.backtrack {
			padding-left: px2rem(22px);
			font-size: px2rem(32px);
			line-height: px2rem(88px);
			color: $color333 * 3;
			font-weight: bold;			
		}
	}
	.title {
		margin: 0 px2rem(187px);
		line-height: px2rem(88px);
		font-size: px2rem(36px);
		text-align: center;
		font-weight: normal;
		color: $color333;
	}
	.right-box {
		float: right;
		width: px2rem(187px);
		padding-right: px2rem(40px);
		line-height: px2rem(88px);
		text-align: right;
		font-size: px2rem(30px);
		color: $color333 * 3;
		box-sizing: border-box;
	}
}
</style>