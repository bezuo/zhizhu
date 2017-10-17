<template>
	<section>
		<v-scroll class="wrapper">
			<section>			
				<div class="top-box">
					<h3 class="title">本店公告</h3>
					<p>蔬菜是指可以做菜、烹饪成为食品的一类植物或菌类，蔬菜是人们日常饮食中必不可少的食物之一。蔬菜可提供人体所必需的多种维生素和矿物质等营养物质。</p>
				</div>
				
				<div class="bottom">
					<h3 class="title">商家信息</h3>
					<ul>
						<li>飞鱼回转寿司店（景区店）</li>
						<li>
							<a href="tel:18745632586" class="fn-right">18745632586</a>
							<span>商家电话</span>
						</li>
						<li>
							<em class="fn-right">九寨沟景点主路12号</em>
							<span>商家地址</span>
						</li>
						<li>
							<em class="fn-right">09:00-22:00</em>
							<span>营业时间</span>
						</li>
					</ul>
				</div>
			</section>
		</v-scroll>
	</section>
</template>

<script>
import vScroll from '@/components/scroll'
import BScroll from 'better-scroll'

export default {
	data() {
		return {
			commentScroll: null,  	// 评论列表scroll
		}
	},
	
	created() {
		
	},
	
	components: {
		vScroll,
	},
	
	methods: {
		
	},	
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.top-box {
	margin: px2rem(20px) 0;
	padding: px2rem(20px) px2rem(30px);
	background-color: #fff;
	.title {
		margin-bottom: px2rem(18px);
		font-size: px2rem(30px);
		line-height: px2rem(42px);
		color: $color333 * 2;
		font-weight: bold;
	}
	p {
		font-size: px2rem(28px);
		line-height: px2rem(42px);
		color: $color333 * 2;
	}
}

.bottom {
	padding: px2rem(20px) 0 0 px2rem(30px);
	background-color: #fff;
	.title {
		font-size: px2rem(30px);
		font-weight: bold;
		line-height: px2rem(42px);
		color: $color333 * 2;
	}
	li {
		width: 100%;
		height: px2rem(88px);
		padding-right: px2rem(42px);
		line-height: px2rem(88px);
		font-size: px2rem(30px);
		color: $color333 * 2;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		&:last-child {
			border: 0 none;
		}
		.fn-right {
			float: right;
		}
		a {
			color: $color333 * 2;
		}
	}
}
</style>