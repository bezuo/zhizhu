<template>
    <section>
    		<header class="header">
			<span class="header-right" @click="deleteBuyCart">
				<span class="iconfont">&#xe677;</span>
				清空
			</span>
			<h3 class="title">已选商品</h3>
    		</header>
    		
    		<article class="list-cart">
	    		<ul>
	    			<li v-for="(item, index) in itemsCart">
	    				<div class="food-name">
						{{ item.foodTitle }}
						<p>{{ item.skuInfo }}</p>
	    				</div>
	    				
	    				<div class="total-price">￥{{ item.price * item.quantity | filterPrice }}</div>
	    				
	    				<div class="count-box">
						<span class="iconfont fn-left" @click="count('-1', item, index)">&#xe672;</span>
						<div class="quantity fn-left">{{ item.quantity }}</div>
						<span class="iconfont fn-left" @click="count('1', item, index)">&#xe688;</span>
	    				</div>
	    			</li>
	    		</ul>
    		</article>
    </section>
</template>

<script>
export default {
	data() {
		return {
			itemsCart: [{
				foodTitle: '干锅手撕鸡干锅手撕鸡干锅手撕鸡干锅手撕鸡',
				skuInfo: '麻辣',
				price: 45,
				quantity: 2
			},{
				foodTitle: '酸菜鱼火锅',
				skuInfo: '',
				price: 120,
				quantity: 1
			}]		
		}
	},
	
	created() {
		
	},
	
	watch: {
		itemsCart: function(val) {
			console.log(val);
		}
	},
	
	props: [
//		'itemsCart'
	],
	
	methods: {
		// 清空购物车
		deleteBuyCart() {
			
		},
		
		// 增删商品数量
		count(type, item, index) {
			
			const num = item.quantity;
			item.quantity = num + parseInt(type);
			
			if(item.quantity == 0) {
				this.itemsCart.splice(index, 1)
			}
		}
	},
	
	filters: {
		// 过滤商品价格，保留2位小数
		filterPrice(val) {
			if(!val) return;
			return val.toFixed(2);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.header {
	width: 100%;
	height: px2rem(64px);
	padding: 0 px2rem(30px);
	line-height: px2rem(64px);
	box-sizing: border-box;
	background-color: #eee;
	.header-right {
		float: right;
		font-size: px2rem(24px);
		color: $color333 * 3;
		.iconfont {
			vertical-align: px2rem(-2px);
		}
	}
	.title {
		font-size: px2rem(30px);
		color: $color333 * 3;
	}
}

.list-cart {
	padding-bottom: px2rem(10px);
	li {
		display: flex;
		width: 100%;
		height: px2rem(88px);
		padding: 0 px2rem(20px) 0 px2rem(30px);
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		&:last-child {
			border-bottom: 0 none;
		}
		.food-name {
			position: relative;
			width: px2rem(396px);
			height: px2rem(88px);
			font-size: px2rem(30px);
			line-height: px2rem(88px);
			color: $color333;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			p {
				position: absolute;
				top: px2rem(58px);
				left: 0;
				width: 100%;
				line-height: px2rem(28px);
				font-size: px2rem(20px);
				color: $color333 * 3;
			}
		}
		.total-price {
			width: px2rem(160px);
			padding-right: px2rem(30px);
			font-size: px2rem(28px);
			line-height: px2rem(88px);
			text-align: right;
			color: $colorRed;
			box-sizing: border-box;
		}
		.count-box {
			width: px2rem(144px);
			padding: px2rem(24px) 0;
			height: px2rem(40px);
			.iconfont {
				font-size: px2rem(40px);
				color: $colorYellow;
			}
			.fn-left {
				float: left;
			}
			.quantity {
				width: px2rem(60px);
				line-height: px2rem(42px);
				text-align: center;
				font-size: px2rem(30px);
				color: $colorYellow;
			}
		}
	}
}
</style>