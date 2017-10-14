<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj" @callBackFun="parentLisen"></v-header>		
		<!-- / header end -->
		
		<!-- merchant list start -->
		<section class="content-box">			
			<v-list :itemsMerchant="itemsMerchant" class="items-container"></v-list>
		</section>
		<!-- / merchant list end -->
	</section>
</template>

<script type="text/javascript">
import vHeader from '@/components/header'
import vList from '@/components/merchantList'

export default {
	data() {
		return {
			headerObj: {
				title: "正餐",				// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
			itemsBanner: [{					// banner数据
				banner_url: '#',
				banner_img: '../static/img/banner.602c0dc.png'
			},{
				banner_url: '#',
				banner_img: '../static/img/banner.602c0dc.png'
			}],
			itemsMerchant: [{				// 餐厅列表数据
				merchantId: 1,
				title: '回旋鱼寿司店',
				merchantImg: '//img.alicdn.com/imgextra/i3/2203256980/TB1QPQcdGigSKJjSsppXXabnpXa_!!0-item_pic.jpg_640x640Q50s50.jpg',
				quantity: 118,
				introduction: '蔬菜是指可以做菜、烹饪成为食品的一类植物'
			},{
				merchantId: 2,
				title: '铂爵婚纱摄影 厦门三亚深圳青岛大连丽江海南杭州大理婚纱照伯爵',
				merchantImg: '//img.alicdn.com/imgextra/i3/1057559553/TB1RiqiSFXXXXXgXFXXXXXXXXXX_!!0-item_pic.jpg_640x640Q50s50.jpg',
				quantity: 9482,
				introduction: '蔬菜是指可以做菜、烹饪成为食品的一类植物'
			},{
				merchantId: 3,
				title: '钟爱一生婚纱摄影三亚厦门丽江大理桂林香格里拉海景拍婚纱照团购',
				merchantImg: '//img.alicdn.com/imgextra/i4/TB1Zo68RVXXXXbkaXXXXXXXXXXX_!!0-item_pic.jpg_640x640Q50s50.jpg',
				quantity: 7199,
				introduction: '蔬菜是指可以做菜、烹饪成为食品的一类植物'
			},{
				merchantId: 4,
				title: '铂爵旅拍婚纱摄影三亚厦门丽江青岛巴厘岛普吉岛拍婚纱照团购伯爵',
				merchantImg: '//img.alicdn.com/imgextra/i2/TB1DLwrRVXXXXaVXFXXXXXXXXXX_!!0-item_pic.jpg_640x640Q50s50.jpg',
				quantity: 12537,
				introduction: '蔬菜是指可以做菜、烹饪成为食品的一类植物'
			}],
		}
	},
	
	components: {
		vHeader,
		vList
	},
	
	created() {
		
	},
	
	methods: {
		parentLisen(evtValue) {
			this.$router.push('/order');
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.container {
	padding-top: px2rem(88px);
	background-color: #fff;
	.content-box {
		padding-left: px2rem(30px);
	}
}
</style>