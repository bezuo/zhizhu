<template>
	<section>
		<el-row :span="24">
			<el-col :span="24" class="body-head">
				<el-col :span="6" class="title">商品信息</el-col>
				<el-col :span="4" class="title">sku信息</el-col>
				<el-col :span="4" class="title">单价/数量</el-col>
				<el-col :span="5" class="title">交易时间</el-col>
				<el-col :span="5" class="title">操作</el-col>
			</el-col>
			<el-col :span="24" 
				:key="index"
				class="order-item"
				v-for="(item, index) in orderList">
				<el-col :span="24" class="item-top">
					<el-col :span="10">订单编号：{{ item.orderId }}</el-col>
					<el-col :span="7">餐桌号：{{ item.diningTable }}号桌 </el-col>
					<el-col :span="7">用餐人数：{{ item.people }}人 </el-col>
				</el-col>
				<table class="el-col-24 table" v-if="item.orderGoods.length > 1">
					<tr>
						<td class="el-col-14" colspan="3" valign="top">
							<table class="goods-table">
								<tr v-for="(goodsItem, _number) in item.orderGoods">
									<td width="43%" class="no-border1 padding10" :class="{'no-border4': item.orderGoods.length-1 == _number}">
										<el-col :span="8" class="img-box">
											<img :src="goodsItem.ImgSrc" alt="goodsItem.goodsTitle" />
										</el-col>
										<el-col :span="16">{{ goodsItem.goodsTitle }}</el-col>	
									</td>
									<td width="28.5%" class="no-border2 padding10" :class="{'no-border4': item.orderGoods.length-1 == _number}">
										{{ goodsItem.goodsSku }}
									</td>
									<td width="28.5%" class="no-border3 padding10" :class="{'no-border4': item.orderGoods.length-1 == _number}">
										<el-col :span="24">单价：¥{{ goodsItem.price }}元</el-col>
										<el-col :span="24" :class="{'text-red': goodsItem.quantity > 1}">数量：{{ goodsItem.quantity }}份</el-col>
										<el-col :span="24">总价：¥{{ goodsItem.price * goodsItem.quantity }}元</el-col>
									</td>
								</tr>
							</table>
						</td>
						<td class="el-col-5 padding10">
							<p v-show="item.submitTime">下单：{{ item.submitTime }}</p>
							<p v-show="item.confirmTime">接单：{{ item.confirmTime }}</p>
							<p v-show="item.completeTime">完成：{{ item.completeTime }}</p>
							<p v-show="item.cancelTime">取消：{{ item.cancelTime }}</p>
						</td>
						<td class="el-col-5 padding10">&nbsp;&nbsp;</td>
					</tr>
				</table>
				<table class="table" v-else>
					<tr>
						<td class="el-col-6 padding10">		
							<el-col :span="8" class="img-box">
								<img :src="item.orderGoods[0].ImgSrc" alt="item.orderGoods[0].goodsTitle" />
							</el-col>
							<el-col :span="16">{{ item.orderGoods[0].goodsTitle }}</el-col>	
						</td>
						<td class="el-col-4 padding10">{{ item.orderGoods[0].goodsSku }}</td>
						<td class="el-col-4 padding10">
							<el-col :span="24">单价：¥{{ item.orderGoods[0].price }}元</el-col>
							<el-col :span="24" :class="{'text-red': item.orderGoods[0].quantity > 1}">数量：{{ item.orderGoods[0].quantity }}份</el-col>
							<el-col :span="24">总价：¥{{ item.orderGoods[0].price * item.orderGoods[0].quantity }}元</el-col>
						</td>
						<td class="el-col-5 padding10">
							<p v-show="item.submitTime">下单：{{ item.submitTime }}</p>
							<p v-show="item.confirmTime">接单：{{ item.confirmTime }}</p>
							<p v-show="item.completeTime">完成：{{ item.completeTime }}</p>
							<p v-show="item.cancelTime">取消：{{ item.cancelTime }}</p>
						</td>
						<td class="el-col-5 padding10"></td>
					</tr>
				</table>
				<el-col :span="24" class="item-btm" v-show="item.message">
					买家留言：{{ item.message }}
				</el-col>
			</el-col>
		</el-row>

		<!-- paging start -->
		<el-row :span="24" class="paging-box">
			<el-pagination
				@size-change="handleSizeChange"
			  	@current-change="handleCurrentChange"
			  	:current-page="currentPage"
			  	:page-sizes="[20, 30, 40, 50]"
			  	:page-size="30"
			  	layout="total, sizes, prev, pager, next, jumper"
			  	:total="400">
			</el-pagination>
  		</el-row>
		<!-- / paging end -->
	</section>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: [
		'orderList',
		'currentPage',
	],
	methods: {
		handleSizeChange(val) {
        		console.log("每页 "+ val +"条数据");
      	},
      	handleCurrentChange(val) {
        		console.log("当前页: "+ val);
      	}
	}
}
</script>

<style scoped lang="scss">
.body-head {
	margin-bottom: 10px;
	border: solid #ddd;
	border-width: 1px 1px 1px 0;
	background-color: #faf1df;
	.title {
		padding: 10px 0;
		text-align: center;
		border-left: 1px solid #ddd;
	}
}
.item-top {
	padding: 8px 0;
	text-indent: 20px;
	border: solid #ddd;
	border-width: 1px 1px 0 1px;
	background-color: #f2f2f2;
}
.order-item {
	margin-bottom: 10px;
	.table {
		border: 0 none;
		border-collapse: collapse;
		&:hover {
			td {
				background-color: #f9f9f9;
			}
		}
		td {
			float: none;
			border: 1px solid #ddd;
			&.padding10 {
				padding: 10px;
			}
			.text-red {
				color: #e82121;
			}
			.img-box {
				max-width: 60px;
				max-height: 60px;
				margin-right: 10px;
				overflow: hidden;
				img {
					display: block;
					width: 100%;
				}
			}
			.goods-table {
				width: 100%;			
				.no-border1 {
					border-width: 0 0 1px;
				}
				.no-border2 {
					border-width: 0 1px 1px;
				}
				.no-border3 {
					border-width: 0 0 1px 0;
				}
				.no-border4 {
					border-bottom: 0 none;
				}
			}
		}
	}
	.item-btm {
		padding: 8px 10px;
		color: #e82121;
		border: solid #ddd;
		border-width: 0 1px 1px;
		background-color: #eeeff6;
	}
}
.paging-box {
	float: right;
	padding: 10px 0 5px;
}
</style>