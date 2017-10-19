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
				:to="{path:'/categery/' + item.id}">
				<div class="nav-img">					
					<img v-lazy="item.catImg"/>
				</div>
				<em>{{ item.catName }}</em>
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
import api from '@/util/api'

export default {
	data() {
		return {
			headerObj: {
				title: "点餐首页",			// 头部标题
				leftShow: false,				// 返回按钮
				rightText: "订单"			// 右上角文字
			},
			itemsBanner: [{					// banner数据
				banner_url: '#',
				banner_img: '../static/img/banner.png'
			},{
				banner_url: '#',
				banner_img: '../static/img/banner.png'
			}],
			itemsCategery: [],				// 商家分类
			itemsMerchant: [],				// 商家列表
		}
	},
	
	components: {
		vHeader,
		vBanner,
		vList
	},
	
	created() {
		this.getMerchantCategery();
		this.getMerchantList();
	},
	
	methods: {
		// 获取商家分类列表
		getMerchantCategery() {
			api.getMerchantCategery().then((res) => {
				if(res.code != "0") return;
				this.itemsCategery = res.page.list;
			});
		},
		
		// 获取商家列表
		getMerchantList() {
			api.getMerchantList().then((res) => {
				if(res.code != "0") return;
				this.itemsMerchant = res.page.list;
			});
		},
		
		// 跳转至订单列表
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