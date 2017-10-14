<template>
	<section>
		<router-link class="item-box" tag="div"
			v-for="(item, index) in itemsOrder"
			:to="{path:'/orderDetails/'+ item.orderId}"
			:key="index">
			<!-- title and status start -->
			<div class="item-top">
				<div class="item-status" v-if="item.orderStatus == '1'">用餐中</div>
				<div class="item-status" v-else-if="item.orderStatus == '2'">待接单</div>
				<div class="item-status" v-else-if="item.orderStatus == '3'">待买单</div>
				<div class="item-status" v-else-if="item.orderStatus == '4'">已取消</div>
				<div class="item-status" v-else-if="item.orderStatus == '5'">已完成</div>
				<h3 class="item-title" @click.stop="gotoMerchant(item.merchantId)">店铺名称：{{ item.merchant }}</h3>
			</div>
			<!-- / title and status end -->
			
			<!-- food list start -->
			<div class="list-food">
				<div class="item-food"
					v-for="list in item.listsFood">
					<div class="img-food">
						<img v-lazy="list.foodImg" alt="" />
					</div>
					<div class="food-content">
						<h4 class="title-food">{{ list.foodTitle }}</h4>
						<p class="price">￥{{ list.price * list.quantity | filterPrice}}</p>
					</div>
					<div class="quantity">
						<em>×{{ list.quantity }}</em>
						<i>{{ list.foodType }}</i>
					</div>
				</div>
			</div>
			<!-- / food list end -->
			
			<!-- time and button start -->
			<div class="item-btm">
				<button class="item-btn" @click.stop="btnSubmit(item.orderStatus)" v-if="item.orderStatus == '1'">加菜</button>
				<button class="item-btn" @click.stop="btnSubmit(item.orderStatus)" v-else-if="item.orderStatus == '2'">催单</button>
				<button class="item-btn" @click.stop="btnSubmit(item.orderStatus)" v-else-if="item.orderStatus == '3'">买单</button>
				<button class="item-btn" @click.stop="btnSubmit(item.orderStatus)" v-else-if="item.orderStatus == '4'">重新下单</button>
				<button class="item-btn" @click.stop="btnSubmit(item.orderStatus)" v-else-if="item.orderStatus == '5'">评价</button>
				下单：{{ item.orderTime }}
			</div>
			<!-- / time and button end -->
		</router-link>
	</section>	
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	
	props: [
		'itemsOrder'
	],
	
	methods: {
		gotoMerchant(id) {					// 跳转至店铺
			this.$router.push('/home/'+ id);
			return false;
		},
		
		btnSubmit(status) {					// 点击订单按钮
			
			switch(status) {
				case '1':					// 用餐中————加菜
					console.log("1");
					break;
				case '2':					// 待接单————催单
					console.log("2");
					break;
				case '3':					// 待买单————买单
					console.log("3");
					break;
				case '4':					// 已取消————重新下单
					console.log("4");
					break;
				case '5':					// 已完成————待评价
					this.$router.push('/createComment');
					break;
			}
		}
	},
	filters: {
		filterPrice(value) {
			return value.toFixed(2);
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.item-box {
	margin-bottom: px2rem(20px);
	background-color: #fff;
	&:last-child {
		margin-bottom: 0;
	}
	.item-top {
		padding: 0 px2rem(30px);
		line-height: px2rem(88px);
		border-bottom: 1px solid #eee;
		.item-title {
			width: px2rem(600px);
			height: px2rem(88px);
			font-size: px2rem(30px);
			color: $color333 * 2;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;			
		}
		.item-status {
			float: right;
			font-size: px2rem(28px);
			color: $color333 * 3;			
		}
	}
	.list-food {
		padding-left: px2rem(30px);
		.item-food {
			display: flex;
			padding: px2rem(20px) 0;
			border-bottom: 1px solid #eee;
			&:last-child {
				border-bottom: 0 none;
			}
			.img-food {
				position: relative;
				width: px2rem(120px);
				height: px2rem(120px);
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
			.food-content {
				width: px2rem(400px);
				padding-left: px2rem(20px);
				.title-food {
					width: 100%;
					height: px2rem(40px);
					margin-bottom: px2rem(36px);
					font-size: px2rem(28px);
					color: $color333;
					line-height: px2rem(40px);
					text-overflow: hidden;
					white-space: nowrap;
					overflow: hidden;
				}
				.price {
					font-size: px2rem(30px);
					color: $color333;
				}
			}
			.quantity {
				width: px2rem(150px);
				padding-right: px2rem(30px);
				font-size: px2rem(24px);
				color: $color333 * 3;
				em {
					float: right;
				}
				i {
					font-style: normal;
				}
			}
		}
	}
	.item-btm {
		padding: 0 px2rem(30px);
		line-height: px2rem(88px);
		font-size: px2rem(24px);
		color: $color333 * 3;
		border-top: 1px solid #eee;
		.item-btn {
			float: right;
			width: px2rem(152px);
			height: px2rem(60px);
			margin-top: px2rem(14px);
			font-size: px2rem(30px);
			color: $colorYellow;
			border: 1px solid $colorYellow;
			border-radius: px2rem(4px);
			background-color: #fff;
		}
	}
}
</style>