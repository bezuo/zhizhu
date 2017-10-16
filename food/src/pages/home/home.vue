<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj" @callBackFun="parentLisen"></v-header>		
		<!-- / header end -->
		
		<!-- merchant start -->
		<section class="merchant">
			<div class="img-box">
				<img src="//img.alicdn.com/imgextra/i2/TB10k3uOVXXXXbuapXXXXXXXXXX_!!0-item_pic.jpg" />
			</div>
			<div class="title-box">
				<h2 class="title">飞鱼回转寿司店（景区店）</h2>
				<p>营业时间：09:00-22:00</p>
			</div>
		</section>
		<!-- / merchant end -->
		
		<!-- proclamation start -->
		<section class="proclamation">
			<div class="iconfont">&#xe640;</div>
			<div class="text">
				<p>公告：本店承诺所有寿司都是新鲜食材如食用过程中发现</p>
			</div>
		</section>
		<!-- / proclamation end -->
		
		<!-- tab bar start -->
		<section class="tab-bar">
			<div class="tab-item">
				<span class="tab-name" :class="{'cur': tabIndex == 1}" @click="tabIndex=1">商品</span>
			</div>
			<div class="tab-item">
				<span class="tab-name" :class="{'cur': tabIndex == 2}" @click="tabIndex=2">评论</span>
			</div>
			<div class="tab-item">
				<span class="tab-name" :class="{'cur': tabIndex == 3}" @click="tabIndex=3">商家</span>
			</div>
		</section>
		<!-- / tab bar end -->
		
		<!-- food start -->
		<v-food v-if="tabIndex == 1" :menuList="menuList"></v-food>
		<!-- / food end-->
		
		<!-- comment start -->
		<v-comment v-else-if="tabIndex == 2"></v-comment>
		<!-- / comment end -->
		
		<!-- merchant start -->
		<v-merchant v-else-if="tabIndex == 3"></v-merchant>
		<!-- / merchant end -->
	
		<!-- footer start -->
		<footer class="footer">
			<div class="footer-left">
				<div class="shopping-car">
					<span class="iconfont">&#xe60b;</span>
				</div>
				<i class="quantity">2</i>
				<em class="price">￥69.00</em>
			</div>
			<div class="btn-box">
				<button class="btn" @click="pay('123123')">去结算</button>
			</div>
		</footer>
		<!-- / footer end -->
	</section>
</template>

<script>
import vHeader from '@/components/header'
import vFood from './food'
import vComment from './comment'
import vMerchant from './merchant'

export default {
	data() {
		return {
			headerObj: {
				title: "点餐",				// 头部标题
				leftShow: true,				// 返回按钮
				rightText: "订单"			// 右上角文字
			},
			tabIndex: 1,
			menuList: [{
				name: '热销',
				itemsFood: [{
					foodId: '13123213',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '400克X5袋包邮重庆黔江特产虫草宝塔菜阿蓬江地牯牛泡菜山椒味',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				},{
					foodId: '13123213',
					foodImg: '//gw3.alicdn.com/bao/uploaded/i2/42621403/TB2lB.ejUUIL1JjSZFrXXb3xFXa_!!42621403.png_210x210.jpg',
					foodTitle: '栖息园雪菜笋丝梅菜酱咸菜榨菜 早餐下饭菜配粥拌饭下酒小菜158*6',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				},{
					foodId: '13123213',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i1/2431040401/TB1gIINkbsTMeJjy1zbXXchlVXa_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '正宗乌江涪陵榨菜清爽清淡88g*100包整箱特价整件特产鲜脆菜丝',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				},{
					foodId: '13123213',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '优惠套餐',
				itemsFood: [{
					foodId: '31231313',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '特色荷叶饭特色荷叶饭特色荷叶饭',
				itemsFood: [{
					foodId: '678667868',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '新品推荐',
				itemsFood: [{
					foodId: '2423434645',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '饭食',
				itemsFood: [{
					foodId: '678678654',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '小吃',
				itemsFood: [{
					foodId: '345346456',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '饮料',
				itemsFood: [{				
					foodId: '242353445',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '汤',
				itemsFood: [{
					foodId: '9789789',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '凑单',
				itemsFood: [{
					foodId: '35345677',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '乱七八糟',
				itemsFood: [{
					foodId: '5675677',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			},{
				name: '嘻嘻哈哈',
				itemsFood: [{
					foodId: '3453455',
					foodImg: '//gw2.alicdn.com/bao/uploaded/i3/TB1d1b.HXXXXXbbXFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
					foodTitle: '欢聚比萨3人餐',
					foodText: '套餐内含：环球培根四拼芝心比萨*1；意式肉酱面*1；傲椒红火翅2块*2；北美特色枫香烤翅2块*2；香酥鸡米花*1；柠檬三兄弟茶饮*2',
					price: '39'
				}]
			}]
		}
	},
	
	created() {
		
	},
	
	components: {
		vHeader,
		vFood,
		vComment,
		vMerchant
	},
	
	methods: {
		parentLisen(evtValue) {				// 顶部订单按钮跳转
			this.$router.push('/order');
		},
		
		pay(id) {							// 去结算
			this.$router.push('/orderDetails/'+ id)
		}
	},
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';
	
.container {
	padding: px2rem(88px) 0 px2rem(98px);
	.merchant {
		display: flex;
		padding: px2rem(30px);
		background-color: #fff;
		.img-box {
			position: relative;
			z-index: 9;
			width: px2rem(120px);
			height: px2rem(120px);
			margin-right: px2rem(20px);
			img {
				position: absolute;
				top: 50%;
				left: 50%;
				display: block;
				width: 100%;
				transform: translate(-50%, -50%);
			}
		}
		.title-box {
			width: px2rem(550px);
			.title {
				width: 100%;
				height: px2rem(50px);
				margin-bottom: px2rem(28px);
				line-height: px2rem(50px);
				font-size: px2rem(36px);
				color: $color333;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			p {
				line-height: px2rem(42px);
				font-size: px2rem(30px);
				color: $color333 * 2;
			}
		}
	}
	.proclamation {
		display: flex;
		width: 100%;
		height: px2rem(80px);
		padding-left: px2rem(30px);
		line-height: px2rem(80px);
		box-sizing: border-box;
		background-color: #565656;
		.iconfont {
			width: px2rem(56px);
			height: px2rem(80px);
			color: $colorYellow;
		}
		.text {
			width: px2rem(664px);
			height: px2rem(80px);
			font-size: px2rem(28px);
			color: #fff;
			overflow: hidden;
		}
	}
	.tab-bar {
		display: flex;
		width: 100%;
		height: px2rem(88px);
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		background-color: #fff;
		.tab-item {
			flex: 1;
			text-align: center;
			.tab-name {
				display: inline-block;
				line-height: px2rem(88px);
				font-size: px2rem(34px);
				/*font-weight: bold;*/
				color: $color333 * 2;
				&.cur {
					position: relative;					
					color: $color333;
					&:after {
						content: "";
						position: absolute;
						bottom: 0;
						left: 0;
						display: block;
						width: 100%;
						height: px2rem(4px);
						background-color: $colorYellow;
					}
				}
			}
		}
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 111;
		display: flex;
		width: 100%;
		height: px2rem(98px);
		background-color: #fafafa;
		.footer-left {
			position: relative;
			z-index: 112;
			width: px2rem(456px);
			height: px2rem(98px);
			padding-left: px2rem(156px);
			border-top: 1px solid #eee;
			box-sizing: border-box;
			.shopping-car {
				position: absolute;
				top: px2rem(-14px);
				left: px2rem(48px);
				z-index: 113;
				width: px2rem(88px);
				height: px2rem(88px);
				line-height: px2rem(88px);
				color: #fff;
				text-align: center;
				border-radius: 50%;
				background-color: $colorYellow;
				.iconfont {
					font-size: px2rem(40px);
				}
			}
			.quantity {
				position: absolute;
				top: px2rem(-14px);
				left: px2rem(110px);
				z-index: 114;
				display: inline-block;
				height: px2rem(30px);
				padding: 0 px2rem(9px);
				line-height: px2rem(30px);
				font-size: px2rem(24px);
				text-align: center;
				color: #fff;
				border-radius: px2rem(15px);
				background-color: $colorRed;
			}
			.price {
				font-size: px2rem(36px);
				line-height: px2rem(98px);
				color: $colorRed;
			}
		}
		.btn-box {
			width: px2rem(294px);
			height: px2rem(98px);
			.btn {
				width: 100%;
				height: px2rem(98px);
				font-size: px2rem(34px);
				color: #fff;
				background-color: $colorYellow;
			}
		}
	}
}
</style>