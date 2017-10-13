<template>
	<header class="header">
		<div	 class="left-box" v-if="headerObj.leftShow" @click="">
			<span class=""></span>
		</div>
		<div class="right-box" v-if="headerObj.rightText">{{ headerObj.rightText }}</div>
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
		
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	width: 100%;
	height: px2rem(88px);
	margin: 0 auto;
	border-bottom: 1px solid #d8d8d8;
	background-color: #fff;
	box-sizing: border-box;
	.left-box {
		float: left;
		width: px2rem(187px);
		height: px2rem(88px);
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
	}
}
</style>