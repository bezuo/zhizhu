<template>
	<section>
		<el-col :span="24" class="container">
			<el-form>
				<el-form-item label="选择日期：">
					<el-date-picker
				      	v-model="time"
				      	size="small"
				      	type="datetimerange"
			      		placeholder="选择时间范围">
				    </el-date-picker>
				    <el-button type="primary" size="small" icon="search" style="margin-left: 8px;">查询</el-button>
					<el-button type="default" size="small"><i class="iconfont icon-fa-download"></i>导出Excel</el-button>
				</el-form-item>
			</el-form>
			
			<el-row :span="24" class="title-box">
				<el-col :span="6" class="title-bar">商品信息</el-col>
				<el-col :span="4" class="title-bar">sku信息</el-col>
				<el-col :span="4" class="title-bar">单价/数量</el-col>
				<el-col :span="6" class="title-bar">交易时间</el-col>
				<el-col :span="4" class="title-bar">餐桌名称</el-col>
			</el-row>
			
			<el-row :span="24">				
				<el-col :span="24" class="order-item"
					:key="index"
					v-for="(item, index) in orderList">
					<el-col :span="24" class="item-top">
						订单编号：2017091311031821333
					</el-col>
					<table class="el-col-24 table" v-if="item.orderGoods.length > 1">
						<tr>
							<td class="el-col-14" colspan="3" valign="top">
								<table class="goods-table">
									<tr v-for="(goodsItem, _number) in item.orderGoods">
										<td width="43%" class="no-border1 padding10" :class="{'no-border4': item.orderGoods.length-1 == _number}">
											<el-row :gutter="10">
												<el-col :span="8" class="img-box">
													<img :src="goodsItem.ImgSrc" alt="goodsItem.goodsTitle" />
												</el-col>
												<el-col :span="16">{{ goodsItem.goodsTitle }}</el-col>	
											</el-row>
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
							<td class="el-col-6 padding10">
								<p v-show="item.submitTime">下单：{{ item.submitTime }}</p>
								<p v-show="item.confirmTime">接单：{{ item.confirmTime }}</p>
								<p v-show="item.completeTime">完成：{{ item.completeTime }}</p>
								<p v-show="item.cancelTime">取消：{{ item.cancelTime }}</p>
							</td>
							<td class="el-col-4 padding10" style="text-align: center;">
								
							</td>
						</tr>
					</table>
					<table class="table" v-else>
						<tr>
							<td class="el-col-6 padding10">
								<el-row :gutter="10">								
									<el-col :span="8" class="img-box">
										<img :src="item.orderGoods[0].ImgSrc" alt="item.orderGoods[0].goodsTitle" />
									</el-col>
									<el-col :span="16">{{ item.orderGoods[0].goodsTitle }}</el-col>	
								</el-row>
							</td>
							<td class="el-col-4 padding10">{{ item.orderGoods[0].goodsSku }}</td>
							<td class="el-col-4 padding10">
								<el-col :span="24">单价：¥{{ item.orderGoods[0].price }}元</el-col>
								<el-col :span="24" :class="{'text-red': item.orderGoods[0].quantity > 1}">数量：{{ item.orderGoods[0].quantity }}份</el-col>
								<el-col :span="24">总价：¥{{ item.orderGoods[0].price * item.orderGoods[0].quantity }}元</el-col>
							</td>
							<td class="el-col-6 padding10">
								<p v-show="item.submitTime">下单：{{ item.submitTime }}</p>
								<p v-show="item.confirmTime">接单：{{ item.confirmTime }}</p>
								<p v-show="item.completeTime">完成：{{ item.completeTime }}</p>
								<p v-show="item.cancelTime">取消：{{ item.cancelTime }}</p>
							</td>
							<td class="el-col-4 padding10" style="text-align: center;">
							</td>
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
		</el-col>
	</section>
</template>

<script>
export default {
	data() {
		return {
			time: "",
			currentPage: 3,
			orderList: [{
				orderId: "20170910182533001",		// 订单ID
				orderGoods: [{
					ImgSrc: 'http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg',
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",	
					goodsSku: '尺码L大；红色',
					price: "14.5",
					quantity: "1"
				},{
					ImgSrc: 'http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg',
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",	
					goodsSku: '尺码L小；红色',
					price: "10.5",
					quantity: "2"
				}],
				diningTable: "5",					// 餐桌号码
				people: "2",							// 用餐人数
				message: "多上点米饭",				// 买家留言
				submitTime: "2017-09-17 12:31:22",	// 下单时间
				confirmTime: "2017-09-17 12:35:01",	// 接单时间
				completeTime: "2017-09-17 13:03:30",	// 完成时间
			},{
				orderId: "20170910182533003",
				orderGoods: [{
					ImgSrc: 'http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg',
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",	
					goodsSku: '尺码L大；红色',
					price: "10.5",
					quantity: "2"
				}],
				diningTable: "5",
				people: "2",
				submitTime: "2017-09-17 12:31:22",
				confirmTime: "2017-09-17 12:35:01",
				completeTime: "2017-09-17 13:03:30",
				cancelTime: "2017-09-17 12:32:22",
			}],
		}
	},
	computed: {
		totalPrice: function() {
			let x = 0;
			if(this.dialogData) {
				this.dialogData.forEach((item, index) => {
					x += item.quantity * item.price;
				});
			}
			return x.toFixed(2)
		},
	},
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
.container {	
	margin-top: 20px;
	padding: 40px 30px 30px;
	border: 1px solid #eaeefb;
	border-radius: 4px;
	background-color: #fff;
	/*transition: .2s;*/
	/*&:hover {*/
		box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
	/*}*/
	.icon-fa-download {
		margin-right: 5px;
		font-size: 12px;
	}
	.title-box {
		margin-bottom: 10px;
		border: solid #ddd;
		border-width: 1px 0 1px 1px;
		background-color: #faf1df;
		.title-bar {
			padding: 10px 0;
			font-size: 14px;
			text-align: center;
			border-right: 1px solid #ddd;
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
}
</style>