<template>
  <div id="app">
		<transition name="slide-left">
			<router-view/>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/global.scss';

html {
	background-color: #eee;
	#app {
		max-width: px2rem(750px);
		margin: 0 auto;
		font-family: 'PingFangSC-Regular', 'Avenir',Helvetica,Arial,sans-serif;
		-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	}
}

.slide-left-enter-active {
	animation: slideLeft .1s;
}

@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
