<template>
	<v-scroll class="wrapper"
		:data="itemsComment"
		:pulldown="pulldown"
		@pulldown="loadData">
	    <section class="comment-content">
			<header class="title">全部评价（{{ itemsComment.length }}）</header>
			<ul>
				<li class="item-box" v-for="(item, index) in itemsComment">
					<div class="item-top">
						<span class="item-time">{{ item.commentTime }}</span>
						<span class="user-img">
							<img v-lazy="item.commentUserImg" />
						</span>
						<em class="user-name">{{ item.userName }}</em>
						<i class="iconfont" v-for="(value, index) in 5" :class="{'star': index < item.starNum}">&#xe6e2;</i>
					</div>
					<p class="item-content">{{ item.commentContent }}</p>
				</li>
			</ul>		
		</section>
    		<div class="loading-wrapper"></div>
  	</v-scroll>
</template>

<script>
import vScroll from '@/components/scroll'
import BScroll from 'better-scroll'

export default {
	data() {
		return {
			pulldown: true,
			commentScroll: null,  	// 评论列表scroll
			itemsComment: [{			// 评论列表数据
				commentTime: '2017-09-31 08:11:31',
				starNum: 5,
				commentUserImg: '//img.alicdn.com/imgextra/i2/TB10k3uOVXXXXbuapXXXXXXXXXX_!!0-item_pic.jpg',
				userName: '名字就叫王二小',
				commentContent: '我是一段评价不得不说这家餐厅的菜真的是棒，朋友们都很喜欢下回还要来来吃，最后一句。老板特别漂亮',
			},{
				commentTime: '2017-09-28 08:11:31',
				starNum: 3,
				commentUserImg: '//img.alicdn.com/imgextra/i2/1208106030066710941/TB2J2ZunMxlpuFjSszbXXcSVpXa_!!0-saturn_solar.jpg_210x210.jpg',
				userName: '骑着乌龟看日出',
				commentContent: '宝贝收到了，迫不及待的就打开了，实物和图片一模一样。设计精美，做工精致，大容量，一次可以放6-7碗，方便简单易操作，材料不错，无气味，最重要是可以防护各种小飞虫飞进碗里了，非常满意，真是物美价廉，物超所值啊！',
			},{
				commentTime: '2017-09-28 08:11:31',
				starNum: 4,
				commentUserImg: '//gw3.alicdn.com/bao/uploaded/i3/2313219139/TB2vAkGdm3PL1JjSZFtXXclRVXa_!!2313219139.jpg_210x210.jpg',
				userName: '骑着乌龟看日出',
				commentContent: '我是一段评价不得不说这家餐厅的菜真的是棒，朋友们都很喜欢下回还要来来吃，最后一句。老板特别漂亮',
			},{
				commentTime: '2017-09-28 08:11:31',
				starNum: 1,
				commentUserImg: '//gw3.alicdn.com/bao/uploaded/i1/2396691918/TB1cu9FOpXXXXXbaFXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
				userName: '骑着乌龟看日出',
				commentContent: '我是一段评价不得不说这家餐厅的菜真的是棒，朋友们都很喜欢下回还要来来吃，最后一句。老板特别漂亮',
			},{
				commentTime: '2017-09-28 08:11:31',
				starNum: 2,
				commentUserImg: '//img.alicdn.com/imgextra/i2/TB10k3uOVXXXXbuapXXXXXXXXXX_!!0-item_pic.jpg',
				userName: '骑着乌龟看日出',
				commentContent: '我是一段评价不得不说这家餐厅的菜真的是棒，朋友们都很喜欢下回还要来来吃，最后一句。老板特别漂亮',
			}]
		}
	},
	
	
	created() {
	},	
	
	components: {
		vScroll,
	},
	
	props: [
		
	],
	
	methods: {
		loadData() {
			
		}
	},	
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.comment-content {	
	padding-top: px2rem(20px);
	.title {
		padding: px2rem(18px) 0 px2rem(8px) px2rem(30px);
		line-height: px2rem(42px);
		font-size: px2rem(30px);
		font-weight: bold;
		color: $color333 * 2;
		background-color: #fff;
	}
	.item-box {
		padding: px2rem(20px) px2rem(30px);
		border-bottom: 1px solid #eee;
		background-color: #fff;
		&:last-child {
			border: 0 none;
		}
		.item-top {
			width: 100%;
			height: px2rem(48px);
			.item-time {
				float: right;
				line-height: px2rem(48px);
				color: $color333 * 3;
			}
			.user-img {
				position: relative;
				float: left;
				width: px2rem(48px);
				height: px2rem(48px);
				border-radius: 50%;
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
			.user-name {
				float: left;
				width: px2rem(86px);
				height: px2rem(48px);
				margin: 0 px2rem(20px);
				line-height: px2rem(48px);
				font-size: px2rem(24px);
				color: $color333 * 3;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			.iconfont {
				float: left;
				line-height: px2rem(48px);
				color: #eee;
				&.star {
					color: $colorYellow;
				}
			}
		}
		.item-content {
			padding-top: px2rem(20px);
			font-size: px2rem(24px);
			line-height: px2rem(36px);
			color: $color333 * 2;
		}
	}
}
</style>