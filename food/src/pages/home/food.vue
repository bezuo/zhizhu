<template>
	<section class="menu_container">		
		<section class="menu_left" id="wrapper_menu" ref="wrapperMenu">
			<ul>
                <li v-for="(item, index) in menuList" 
                	:key="index" class="menu_left_li" 
                	:class="{'activity_menu': index == menuIndex}" 
                	@click="chooseMenu(index)">
                    <span>{{item.name}}</span>
                </li>
            </ul>
		</section>
	
		<section class="menu_right" ref="menuFoodList">
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
		</section>
	</section>
</template>

<script>
export default {
	data() {
		return {
			menuIndex: 0,
			merchantId: ''
		}
	},
	
	created() {
		this.merchantId = this.$route.params.merchantId;
	},
	
	props: [
		'menuList',
	],
	
	methods: {
		chooseMenu(index) {
			this.menuIndex = index;
		}
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
	}
}
</style>