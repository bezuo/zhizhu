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
  src: url('//at.alicdn.com/t/font_440419_qfm6zt5fdz7d5cdi.eot');
  src: url('//at.alicdn.com/t/font_440419_qfm6zt5fdz7d5cdi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_440419_qfm6zt5fdz7d5cdi.woff') format('woff'),
  url('//at.alicdn.com/t/font_440419_qfm6zt5fdz7d5cdi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_440419_qfm6zt5fdz7d5cdi.svg#iconfont') format('svg');
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 18px;
	font-style: normal;
}

/* 指定文本的可选择性 否则全部取消可选择性将会导致无法获取焦点,从而无法输入 */
input, select, textarea {
  -webkit-user-select: text; 
  -moz-user-select: text; 
  user-select: text;
}

/* 让链接在 hover 状态下不显示下划线 */
a:hover { text-decoration: none; }

/* 去除默认边框 */
fieldset, img { border: 0; }

/* 1.去除android a/button/input标签被点击时产生的边框 2.去除ios a标签被点击时产生的半透明灰色背景 */
a, button, input { -webkit-tap-highlight-color: rgba(255, 0, 0, 0); }

/* 改变i的斜体 */
i { font-style: normal; }

input[type="button"], input[type="submit"], input[type="reset"] { -webkit-appearance: none; }

button, input, select, textarea { border: 0 none; }

/*图片加载中*/
img[lazy=loading] {
	background-image: url(../static/img/img-placeholder.png);
	background-size: cover;
}

/*图片加载出错*/
/*img[lazy=error] {
	background-image: url(../../static/images/timg.gif);
	background-size: cover;
}*/

/*图片加载成功*/
/*img[lazy=loaded] {

}*/

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
