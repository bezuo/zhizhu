<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj" @callBackFun="parentLisen"></v-header>		
		<!-- / header end -->
		
		<!-- banner start -->
		<v-banner :itemsBanner="itemsBanner" class="banner"></v-banner>
		<!-- / banner end -->
		
		<!-- navbar start -->
		<section class="nav-bar">
			<router-link tag="div" class="nav-item"
				v-for="(item, index) in itemsCategery"
				:key="index"
				:to="{path:'/categery/' + item.categeryId}">
				<div class="nav-img">					
					<img v-lazy="item.categeryImg"/>
				</div>
				<em>{{ item.categeryName }}</em>
			</router-link>
		</section>
		<!-- / navbar end -->
		
		<!-- list start -->
		<section class="list-container">
			<div class="title">
				<h3>附件的餐厅</h3>
			</div>
			<v-list :itemsMerchant="itemsMerchant" class="items-container"></v-list>
		</section>
		<!-- / list end -->		
	</section>
</template>

<script>
import vHeader from '@/components/header'
import vBanner from '@/components/banner'
import vList from '@/components/merchantList'

export default {
	data() {
		return {
			headerObj: {
				title: "点餐首页",			// 头部标题
				leftShow: false,			// 返回按钮
				rightText: "订单"			// 右上角文字
			},
			itemsBanner: [{					// banner数据
				banner_url: '#',
				banner_img: '../static/img/banner.png'
			},{
				banner_url: '#',
				banner_img: '../static/img/banner.png'
			}],
			itemsCategery: [{
				categeryId: "11",
				categeryName: '正餐',
				categeryImg: '../static/img/nav-01.png'
			},{
				categeryId: "12",
				categeryName: '汉堡',
				categeryImg: '../static/img/nav-02.png'
			},{
				categeryId: "13",
				categeryName: '夜市',
				categeryImg: '../static/img/nav-03.png'
			},{
				categeryId: "14",
				categeryName: '饮品',
				categeryImg: '../static/img/nav-04.png'
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
		vBanner,
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
	.banner {
		width: px2rem(750px);
		height: px2rem(300px);
		overflow: hidden;
	}
	.nav-bar {
		display: flex;
		width: px2rem(750px);
		height: px2rem(208px);
		margin-bottom: px2rem(20px);
		padding: 0 px2rem(12px);
		background-color: #fff;
		box-sizing: border-box;
		.nav-item {
			flex: 1;
			padding-top: px2rem(32px);
			font-size: px2rem(28px);
			text-align: center;
			color: $color333;
			.nav-img {
				position: relative;
				width: px2rem(88px);
				height: px2rem(88px);
				margin: 0 auto px2rem(20px);
				overflow: hidden;
				img {
					position: absolute;
					top: 50%;
					left: 50%;
					display: block;
					width: 100%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
	.list-container {
		background-color: #fff;
		.title {
			position: relative;
			width: 100%;
			height: px2rem(42px);
			padding: px2rem(30px) 0 px2rem(12px);
			text-align: center;
			&:before {
				position: absolute;
				z-index: 2;
				top: px2rem(30px) + px2rem(21px);
				left: 50%;
				content: "";
				display: block;
				width: px2rem(360px);
				height: 2px;
				background-color: #d8d8d8;
				transform: translateX(-50%);
			}
			h3 {
				position: absolute;
				z-index: 3;
				top: px2rem(30px);
				left: 50%;
				padding: 0 px2rem(10px);
				font-size: px2rem(30px);
				line-height: px2rem(42px);
				font-weight: normal;
				color: $color333 * 2;
				transform: translateX(-50%);
				background-color: #fff;
			}
		}
		.items-container {
			padding-left: px2rem(30px);
		}
	}
}
</style>