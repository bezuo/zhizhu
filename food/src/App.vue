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

@font-face {
  font-family: 'iconfont';  /* project id 440419 */
  src: url('//at.alicdn.com/t/font_440419_e5n05kutwb62mx6r.eot');
  src: url('//at.alicdn.com/t/font_440419_e5n05kutwb62mx6r.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_440419_e5n05kutwb62mx6r.woff') format('woff'),
  url('//at.alicdn.com/t/font_440419_e5n05kutwb62mx6r.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_440419_e5n05kutwb62mx6r.svg#iconfont') format('svg');
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 18px;
	font-style: normal;
}

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
