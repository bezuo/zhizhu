<template>
	<section class="menu_container" v-if="!showLoading">		
		<v-scroll class="wrapper menu_left" :pulldown="pulldown">
			<ul>
                <li v-for="(item, index) in menuList" 
                	:key="index" class="menu_left_li" 
                	:class="{'activity_menu': index == menuIndex}" 
                	@click="chooseMenu(index)">
                    <span>{{item.name}}</span>
                </li>
            </ul>
		</v-scroll>
	
		<v-scroll class="menu_right" :pulldown="pulldown">
			<ul>
				<li v-for="(item,index) in menuList" :key="index">
					<p class="top-box"><b>{{item.name}}</b>大家都喜欢吃的才是好的</p>
					<router-link tag="div"
						class="food-container"
						v-for="(foods, foodIndex) in item.itemsFood"
						:to="{path:'/foodDetails/' + merchantId +'/'+ foods.foodId}"
						:key="foodIndex">
						<div class="food-img-box">
							<img v-lazy="foods.foodImg" alt="" />
						</div>
						<div class="food-content">
							<h3 class="food-title">{{ foods.foodTitle }}</h3>
							<p>{{ foods.foodText }}</p>
							<div class="price-quantity">
								<div class="price">
									￥{{ foods.price | filterPrice }}
								</div>
								<div class="quantity">
									
								</div>
							</div>
						</div>
					</router-link>
				</li>
			</ul>			
		</v-scroll>
	</section>
</template>

<script>
import vScroll from '@/components/scroll'	
import BScroll from 'better-scroll'

export default {
	data() {
		return {
			pulldown: true,		// 
			showLoading: false,	// 显示加载动画
			menuIndex: 0,		// 已选菜单索引值，默认为0	
			merchantId: '',		// 店铺id          
            menuList: [{			// 商品列表数据	
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
	
	components: {
		vScroll,
	},
	
	created() {
		this.merchantId = this.$route.params.merchantId;
	},
	
	methods: {
		//点击左侧食品列表标题，相应列表移动到最顶层
        chooseMenu(index){
            this.menuIndex = index;            
        },
        
        loadData() {
        	
        },
	},
	
	filters: {
		filterPrice(value) {
			if(!value) return;
			return parseInt(value).toFixed(2);
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.menu_container {
	display: flex;
	flex: 1;
	position: relative;
	overflow-y: hidden;
	background-color: #fff;
	.menu_left {
		width: px2rem(176px);
		background-color: #f4f4f3;
		li {
			width: 100%;
			height: px2rem(88px);
			font-size: px2rem(28px);
			text-align: center;
			color: $color333 * 3;
			line-height: px2rem(88px);
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;			
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
			&.activity_menu {
				color: $color333;
				border: 0 none;
				background-color: #fff;
			}
		}
	}
	.menu_right {
		width: px2rem(574px);
		padding-left: px2rem(30px);
		box-sizing: border-box;		
		li {
			.top-box {
				width: 100%;
				height: px2rem(60px);
				line-height: px2rem(60px);
				color: $color333 * 3;
				font-size: px2rem(24px);
				border-bottom: 1px solid #eee;
				box-sizing: border-box;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				b {
					margin-right: px2rem(10px);
					font-weight: normal;
					color: $color333;
				}
			}
			.food-container {
				display: flex;
				width: 100%;
				height: px2rem(176px);
				padding: px2rem(30px) 0;
				border-bottom: 1px solid #eee;	
				.food-img-box {
					height: px2rem(176px);
					img {
						width: px2rem(176px);
						height: px2rem(176px);
						border-radius: px2rem(4px);
					}
				}
				.food-content {
					width: px2rem(368px);
					padding: 0 px2rem(30px) 0 px2rem(20px);
					overflow: hidden;
					.food-title {
						width: 100%;
						height: px2rem(42px);
						font-size: px2rem(30px);
						color: $color333;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
					}
					p {
						width: 100%;
						height: px2rem(68px);
						line-height: px2rem(34px);
						color: $color333 * 3;
						overflow: hidden;
					}
					.price-quantity {
						display: flex;
						width: 100%;
						padding-top: px2rem(10px);
						.price {
							width: px2rem(176px);
							font-size: px2rem(36px);
							line-height: px2rem(50px);
							color: $colorRed;
						}
						.quantity {
							width: px2rem(142px);
						}
					}
				}
			}
			&:last-child {
				.food-container {
					border: 0 none;
				}
			}
		}
	}
}
</style>