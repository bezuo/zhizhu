<template>
	<section>
		<el-col :span="24" class="container">
			<el-row :span="24">
				<el-form label-width="100">
					<el-form-item label="时间选择：">
						
					 	<el-date-picker type="datetimerange"
				      		v-model="dataTime"
				      		:picker-options="pickerOptions"
				      		placeholder="选择时间范围">
				    	</el-date-picker>
				    	
				    	<el-button type="primary" @click="onSubmit" icon="search" :loading="search" style="margin: 0 10px;">查询</el-button>
				    	<el-button type="info" @click="downloadFun" :loading="download">导出Excel</el-button>
					</el-form-item>
				</el-form>
			</el-row>
			
			<el-row :span="24">
				<el-col :span="24" class="count-box">
					<el-col :span="12">订单总数：</el-col>
					<el-col :span="12">订单总额：</el-col>
				</el-col>
				
				<el-col :span="24" class="header">
					<el-col :span="6" class="title">商品信息</el-col>
					<el-col :span="4" class="title">sku信息</el-col>
					<el-col :span="3" class="title">单价/数量</el-col>
					<el-col :span="5" class="title">交易时间</el-col>
					<el-col :span="6" class="title">订单信息</el-col>
				</el-col>
			</el-row>
			
			<el-row :span="24" class="item-box" v-for="(item, index) in orderList">
				<el-row :span="24" class="item-number">
					<el-col :span="7">订单编号：{{ item.orderNumber }}</el-col>
					<el-col :span="7">物流单号：{{ item.LogisticsNumber }}</el-col>
					<el-col :span="5">收货人：{{ item.contactPerson }}</el-col>
					<el-col :span="5">联系电话：{{ item.contactPhone }}</el-col>
				</el-row>
				<el-row :span="24" class="item-body">
					<table cellpadding="0" cellspacing="0" border="0" width="100%"
						v-if="item.orderGoodsList.length > 1">
						<tr>
							<td class="item-bar table-collapse" colspan="3"
								:class="{ 'el-col-13': item.orderGoodsList.length > 1 }">
								<table width="100%">
									<tr v-for="(arr, index) in item.orderGoodsList">
										<td width="46.2%" style="border-top: 0 none; border-left: 0 none;"
											:class="{ 'td-last': item.orderGoodsList.length == index+1}">
											<img :src="arr.imgSrc" />
											<p>{{ arr.goodsTitle }}</p>
										</td>
										<td width="30.7%" style="border-top: 0 none; border-left: 0 none;"
											:class="{ 'td-last': item.orderGoodsList.length == index+1}">
											{{ arr.goodsSku }}
										</td>
										<td width="23.1%" style="border-top: 0 none; border-right: 0 none;"
											:class="{ 'td-last': item.orderGoodsList.length == index+1}">
											<p>单价：{{ arr.price }}元</p>
											<p :class="{'tex-red': arr.puantity > 1}">数量：{{ arr.puantity }}</p>
										</td>
									</tr>								
								</table>
							</td>
							<td class="item-bar el-col-5">
								<p v-if="item.orderTime">下单：{{ item.orderTime }}</p>
								<p v-if="item.payTime">付款：{{ item.payTime }}</p>
								<p v-if="item.deliveryTime">发货：{{ item.deliveryTime }}</p>
								<p v-if="item.theGoodsTime">收货：{{ item.theGoodsTime }}</p>
							</td>
							<td class="item-bar el-col-6">
								<p v-if="item.orderStatus">状态：{{ item.orderStatus }}</p>
								<p v-if="item.theConsignor">发货人：{{ item.theConsignor }}</p>
								<p v-if="item.refundPeople">退款人：{{ item.refundPeople }}</p>
								<p class="tex-red" v-if="item.remark">备注：{{ item.remark }}</p>
							</td>
						</tr>
					</table>
					<table cellpadding="0" cellspacing="0" border="0" v-else>
						<tr>
							<td class="item-bar el-col-6">
								<img :src="item.orderGoodsList[0].imgSrc" />
								<p>{{ item.orderGoodsList[0].goodsTitle }}</p>
							</td>
							<td class="item-bar el-col-4">
								{{ item.orderGoodsList[0].goodsSku }}
							</td>
							<td class="item-bar el-col-3">
								<p>单价：{{ item.orderGoodsList[0].price }}元</p>
								<p :class="{'tex-red': item.orderGoodsList[0].puantity > 1}">数量：{{ item.orderGoodsList[0].puantity }}</p>
							</td>
							<td class="item-bar el-col-5">
								<p v-if="item.orderTime">下单：{{ item.orderTime }}</p>
								<p v-if="item.payTime">付款：{{ item.payTime }}</p>
								<p v-if="item.deliveryTime">发货：{{ item.deliveryTime }}</p>
								<p v-if="item.theGoodsTime">收货：{{ item.theGoodsTime }}</p>
							</td>
							<td class="item-bar el-col-6">
								<p v-if="item.orderStatus">状态：{{ item.orderStatus }}</p>
								<p v-if="item.theConsignor">发货人：{{ item.theConsignor }}</p>
								<p v-if="item.refundPeople">退款人：{{ item.refundPeople }}</p>
								<p class="tex-red" v-if="item.remark">备注：{{ item.remark }}</p>
							</td>
						</tr>
					</table>			
				</el-row>
				<el-col :span="24" class="item-btm" v-if="item.message">买家留言：{{ item.message }}</el-col>
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
			search: false,					// 搜索提交状态
			download: false,				// 下载excel提交状态
			dataTime: '',					// 选择时间段
			currentPage: 1,					// 当前分页
			pickerOptions: {				// 带快捷选择时间
	        	shortcuts: [{
	        		text: '最近一周',
		            onClick(picker) {
		              	const end = new Date();
		              	const start = new Date();
		              	start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		              	picker.$emit('pick', [start, end]);
		            }
	          	}, {
		            text: '最近一个月',
		            onClick(picker) {
		              	const end = new Date();
		              	const start = new Date();
		              	start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
		              	picker.$emit('pick', [start, end]);
		            }
	          	}, {
		            text: '最近三个月',
		            onClick(picker) {
		              	const end = new Date();
		              	const start = new Date();
		              	start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
		              	picker.$emit('pick', [start, end]);
		            }
	          	}]
	        },
	        
	        orderList:[{
				orderNumber: '201708251820214620052',
				LogisticsNumber: "20170814565713445221",
				contactPerson: "王大锤",
				contactPhone: "13999988888",
				orderGoodsList:[{
					imgSrc: "http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg",
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",
					goodsSku: "尺码L大；红色",
					price: "10.5",
					puantity: "1",
				},{
					imgSrc: "http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg",
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",					
					goodsSku: "尺码M小；黑色",
					price: "36.3",
					puantity: "2",
				}],
				orderTime: "2017-08-20 18:05:32",
				payTime: "2017-08-20 18:06:01",
				deliveryTime: "2017-08-21 08:05:12",
				theGoodsTime: "2017-08-24 11:05:29",
				orderStatus: "待收货",
				theConsignor: "张益达",
				refundPeople: "李达叶",
				remark: "缺货，跟买家协商换成了红色！"
			},{
				orderNumber: '201708251820214620052',
				LogisticsNumber: "20170814565713445221",
				contactPerson: "大鹏",
				contactPhone: "13999955555",
				orderGoodsList:[{
					imgSrc: "http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg",
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",
					goodsSku: "尺码L大；红色",
					price: "10.5",
					puantity: "1",
				}],				
				orderTime: "2017-08-21 18:05:32",
				payTime: "2017-08-21 18:06:01",
				deliveryTime: "2017-08-22 08:05:12",
				theGoodsTime: "2017-08-25 11:05:29",
				orderStatus: "待收货",
				theConsignor: "张益达",
				refundPeople: "",
				remark: "",
				message: "拍错了，换成黑色！谢谢！"
			}]
		}
	},
	methods: {
		onSubmit() {					// 查询方法
			this.search = true;		 	// 提交loading状态
			
			setTimeout(()=> {			// 提交成功后的回调
				this.search = false;
			}, 2000);
		},
		
		downloadFun() {					// 下载excel
			this.download = true;		// 提交loading状态
			
			setTimeout(()=> {			// 提交成功后的回调
				this.download = false;
			}, 2000)
		},
		
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
    padding: 30px 30px 50px;
    font-size: 14px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    background-color: #fff;
    &:hover {
    	box-shadow: 0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)
    }
    
    .count-box {
    	margin-bottom: 20px;
    	line-height: 30px;
    }
    
    .header {
		margin-bottom: 10px;
		font-size: 14px;
		border: solid #ddd;
		border-width: 1px 0 1px 1px;
		background-color: #faf1df;
		.title {
			padding: 10px 0;
			text-align: center;
			border-right: 1px solid #ddd;		
		}	
	}
	
	.item-box {
		margin-bottom: 10px;
		font-size: 14px;
		.item-number {
			padding: 8px 0;
			text-indent: 20px;
			border: solid #ddd;
			border-width: 1px 1px 0 1px;
			background-color: #f2f2f2;
		}
		.item-body {
			&:hover {
				background-color: #fafafa;
			}
			border-collapse: collapse;
			.item-bar {
				float: none;
				padding: 10px;
				border: 1px solid #ddd;
				box-sizing: border-box;
				&.table-collapse {
					padding: 0;
					vertical-align: top;
					td {
						padding: 10px;
						border: 1px solid #ddd;
						&.td-last {
							border-bottom: 0 none;
						}
					}
				}
				img {
					float: left;
					width: 60px;
					height: 60px;
					margin-right: 10px;
				}
				.tex-red {
					color: #e82121;
				}
				.btn {
					margin: 0 10px 10px 0;
				}
			}
		}
		.item-btm {
			padding: 5px 10px;
			color: #e82121;
			border: solid #ddd;
			border-width: 0 1px 1px 1px;
			background-color: #eeeff6;
		}
	}
	
	.paging-box {
		float: right;
		padding: 10px 0 5px;
	}
}
</style>