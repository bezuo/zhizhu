<template>
	<section class="mask-container" @click="tapMask">
		
	</section>
</template>

<script>
export default {
	methods: {
		tapMask() {
			this.$emit('tapMask')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.mask-container {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	width: px2rem(750px);
	height: 100%;
	background-color: rgba(0,0,0,.3);
}
</style>