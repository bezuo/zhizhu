<template>
	<section>
		<!-- table head start -->
		<el-row :span="24" class="header">
			<el-col :span="5" class="title">商品信息</el-col>
			<el-col :span="3" class="title">sku信息</el-col>
			<el-col :span="3" class="title">单价/数量</el-col>
			<el-col :span="4" class="title">交易时间</el-col>
			<el-col :span="5" class="title">订单信息</el-col>
			<el-col :span="4" class="title">操作</el-col>
		</el-row>
		<!-- / table head end -->
		
		<!-- table content start -->
		<el-row :span="24" class="item-box" v-for="(item, index) in orderList">
			<el-row :span="24" class="item-number">
				<el-col :span="7">订单编号：{{ item.orderNumber }}</el-col>
				<el-col :span="7">物流单号：{{ item.LogisticsNumber }}</el-col>
				<el-col :span="5">联系人：{{ item.contactPerson }}</el-col>
				<el-col :span="5">联系电话：{{ item.contactPhone }}</el-col>
			</el-row>
			<el-row :span="24" class="item-body">
				<table cellpadding="0" cellspacing="0" border="0"
					v-if="item.orderGoodsList.length > 1">
					<tr>
						<td class="item-bar table-collapse" colspan="3"
							:class="{ 'el-col-11': item.orderGoodsList.length > 1 }">
							<table width="100%">
								<tr v-for="(arr, index) in item.orderGoodsList">
									<td width="45%" style="border-top: 0 none; border-left: 0 none;"
										:class="{ 'td-last': item.orderGoodsList.length == index+1}">
										<img :src="arr.imgSrc" />
										<p>{{ arr.goodsTitle }}</p>
									</td>
									<td width="27.5%" style="border-top: 0 none; border-left: 0 none;"
										:class="{ 'td-last': item.orderGoodsList.length == index+1}">
										{{ arr.goodsSku }}
									</td>
									<td width="27.5%" style="border-top: 0 none; border-right: 0 none;"
										:class="{ 'td-last': item.orderGoodsList.length == index+1}">
										<p>单价：{{ arr.price }}元</p>
										<p :class="{'tex-red': arr.puantity > 1}">数量：{{ arr.puantity }}</p>
									</td>
								</tr>								
							</table>
						</td>
						<td class="item-bar el-col-4">
							<p v-if="item.orderTime">下单：{{ item.orderTime }}</p>
							<p v-if="item.payTime">付款：{{ item.payTime }}</p>
							<p v-if="item.deliveryTime">发货：{{ item.deliveryTime }}</p>
							<p v-if="item.theGoodsTime">收货：{{ item.theGoodsTime }}</p>
						</td>
						<td class="item-bar el-col-5">
							<p v-if="item.orderStatus">状态：{{ item.orderStatus }}</p>
							<p v-if="item.theConsignor">发货人：{{ item.theConsignor }}</p>
							<p v-if="item.refundPeople">退款人：{{ item.refundPeople }}</p>
							<p class="tex-red" v-if="item.remark">备注：{{ item.remark }}</p>
						</td>
						<td class="item-bar el-col-4">
							<el-button type="default" size="small" class="btn" @click="remarkVisible = true">备注</el-button>
							<el-button type="success" size="small" class="btn" @click="addressVisible = true">地址</el-button>
							<el-button type="primary" size="small" class="btn" @click="invoiceVisible = true">发票</el-button>					
							<el-button type="info" size="small" class="btn" @click="deliveryVisible = true">发货</el-button>
							<el-button type="warning" size="small" class="btn" @click="deliveryVisible = true">物流</el-button>
							<el-button type="danger" size="small" class="btn" @click="consentVisible = true">退款</el-button>
							<el-button type="text" size="small" class="btn" @click="noConsent">不同意</el-button>
						</td>
					</tr>
				</table>
				<table cellpadding="0" cellspacing="0" border="0" v-else>
					<tr>
						<td class="item-bar el-col-5">
							<img :src="item.orderGoodsList[0].imgSrc" />
							<p>{{ item.orderGoodsList[0].goodsTitle }}</p>
						</td>
						<td class="item-bar el-col-3">
							{{ item.orderGoodsList[0].goodsSku }}
						</td>
						<td class="item-bar el-col-3">
							<p>单价：{{ item.orderGoodsList[0].price }}元</p>
							<p :class="{'tex-red': item.orderGoodsList[0].puantity > 1}">数量：{{ item.orderGoodsList[0].puantity }}</p>
						</td>
						<td class="item-bar el-col-4">
							<p v-if="item.orderTime">下单：{{ item.orderTime }}</p>
							<p v-if="item.payTime">付款：{{ item.payTime }}</p>
							<p v-if="item.deliveryTime">发货：{{ item.deliveryTime }}</p>
							<p v-if="item.theGoodsTime">收货：{{ item.theGoodsTime }}</p>
						</td>
						<td class="item-bar el-col-5">
							<p v-if="item.orderStatus">状态：{{ item.orderStatus }}</p>
							<p v-if="item.theConsignor">发货人：{{ item.theConsignor }}</p>
							<p v-if="item.refundPeople">退款人：{{ item.refundPeople }}</p>
							<p class="tex-red" v-if="item.remark">备注：{{ item.remark }}</p>
						</td>
						<td class="item-bar el-col-4">
							<el-button type="default" size="small" class="btn" @click="remarkVisible = true">备注</el-button>
							<el-button type="success" size="small" class="btn" @click="addressVisible = true">地址</el-button>
							<el-button type="primary" size="small" class="btn" @click="invoiceVisible = true">发票</el-button>					
							<el-button type="info" size="small" class="btn" @click="deliveryVisible = true">发货</el-button>
							<el-button type="warning" size="small" class="btn" @click="deliveryVisible = true">物流</el-button>
							<el-button type="danger" size="small" class="btn" @click="consentVisible = true">退款</el-button>
							<el-button type="text" size="small" class="btn" @click="noConsent">不同意</el-button>
						</td>
					</tr>
				</table>			
			</el-row>
			<el-col :span="24" class="item-btm" v-if="item.message">买家留言：{{ item.message }}</el-col>
		</el-row>
		<!-- / table content end -->
		
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
		
		<!-- 备注 start -->
		<el-dialog title="编辑备注信息" top="30%"
			:visible.sync="remarkVisible">
	    	
	    	<el-input type="textarea"
			  	:rows="2"
			  	placeholder="请输入内容"
			  	v-model="textarea">
			</el-input>
			
		  	<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="remarkVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="submitRemark">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / 备注 end -->
		
		<!-- 添加地址信息 start -->
		<el-dialog title="编辑用户收货地址" top="30%"
			style="padding-bottom: 0;"
			:visible.sync="addressVisible">
			
			<el-row :span="24">
				<el-col :span="24" style="border-bottom: 1px solid #ddd;">
					<el-col :span="8">张三</el-col>
					<el-col :span="16">13956431566</el-col>
					<el-col :span="24" style="padding: 10px 0 20px;">广东省深圳市南山区科苑路讯美广场2号楼</el-col>
				</el-col>
				<el-col :span="24" style="padding-top: 20px;">
					<el-form :inline="true" :label-position="labelPosition" label-width="55px" :model="deliveryAddress">
						<el-col :span="24">
							<el-form-item label="姓名：">
								<el-input size="small" style="width: 120px;" v-model="deliveryAddress.deliveryName"></el-input>
							</el-form-item>
							<el-form-item label="电话：">
								<el-input size="small" style="width: 150px;" v-model="deliveryAddress.deliveryPhone"></el-input>
							</el-form-item>
						</el-col>
						
						<el-col :span="24">							
							<el-form-item label="省份：">
								<el-input size="small" style="width: 120px;" v-model="deliveryAddress.province"></el-input>
							</el-form-item>
							<el-form-item label="城市：">
								<el-input size="small" style="width: 120px;" v-model="deliveryAddress.city"></el-input>
							</el-form-item>
							<el-form-item label="区县：">
								<el-input size="small" style="width: 120px;" v-model="deliveryAddress.region"></el-input>
							</el-form-item>
						</el-col>
						
						<el-col :span="24">
							<el-form-item label="街道：" style="margin-bottom: 0;">
								<el-input size="small" style="width: 120px;" v-model="deliveryAddress.street"></el-input>
							</el-form-item>
							<el-form-item label="地址：" style="margin-bottom: 0;">
								<el-input size="small" style="width: 310px;" v-model="deliveryAddress.detailAddress"></el-input>
							</el-form-item>
						</el-col>
					</el-form>
				</el-col>
			</el-row>
			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="addressVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="submitAddress">确 定</el-button>
			</div>
		</el-dialog>
		<!-- / 添加地址信息 end -->
		
		<!-- 添加发货、物流信息 start -->
		<el-dialog title="编辑发货信息" top="30%"
			:visible.sync="deliveryVisible">
			<el-col :span="24" style="margin-bottom: 20px;">
				<el-table style="width: 100%"
					border
					:data="orderData">
					<el-table-column
						prop="name"
				        label="商品名称"
				        width="240">
			      	</el-table-column>
			      	<el-table-column
			        	prop="goodsNumber"
			        	label="数量"
			        	width="80">
			      	</el-table-column>
			      	<el-table-column
			        	prop="sku"
			        	label="sku选择">
			  		</el-table-column>
			  		<el-table-column
			        	prop="price"
			        	label="价格"
			        	width="80">
			  		</el-table-column>
		    	</el-table>
		    	
	    		<el-row :span="24" style="margin: 20px 0;">
	    			<el-col :span="6">曹妮梅</el-col>
	    			<el-col :span="18">13799999995</el-col>
	    			<el-col :span="24" style="padding-top: 5px;"> 广东省 深圳市 南山区 讯美科技广场2号楼 </el-col>
	    		</el-row>
	    		
	    		<el-row :span="24" style="padding-top:20px; border-top: 1px solid #ddd;">
	    			<el-form :inline="true" label-width="90px">
	    				<el-form-item label="物流公司：">
	    					<el-select size="small" 
								style="width: 150px;"
								v-model="invoiceForm.value" 
								placeholder="请选择物流公司">
								<el-option v-for="item in invoiceForm.logisticsCompany"
									:key="item.value"
									:label="item.name"
									:value="item.value">
								</el-option>
							</el-select>
	    				</el-form-item>
	    				
    					<el-form-item label="快递单号：">
							<el-input size="small" v-model="invoiceForm.logisticsNumberSub"></el-input>
						</el-form-item>
						
						<el-col :span="24">
							<el-form-item label="备注信息：" style="margin-bottom: 0;">
								<el-input type="textarea" autosize v-model="invoiceForm.shipTextarea" style="width: 450px;"></el-input>
							</el-form-item>	
						</el-col>
	    			</el-form>
	    		</el-row>
			</el-col>
			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="deliveryVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="submitDelivery">确 定</el-button>
			</div>
		</el-dialog>
		<!-- / 添加发货、物流信息 end -->
		
		<!-- 添加发票信息 start -->
		<el-dialog title="添加发票信息" top="30%"
			:visible.sync="invoiceVisible">
			
			<el-row :span="24">
				<el-col :span="24" style="padding:10px; margin-bottom: 15px; background-color: #f2f2f2;">
					<el-col :span="24">发票类型：纸质发票</el-col>
					<el-col :span="24">发票抬头：深圳蜘蛛旅游科技有限公司</el-col>
					<el-col :span="24">纳税人是别号：3123213213231232</el-col>
				</el-col>
				<el-row :span="24" style="padding-bottom:20px; border-bottom: 1px solid #ddd;">
					<el-col :span="24">						
						<el-col :span="6">张三丰</el-col>
						<el-col :span="18"> 17666666677</el-col>
					</el-col>
					<el-col :span="24" style="padding-top: 10px;">
						广东省 深圳市 南山区 讯美科技广场2号楼
					</el-col>
				</el-row>
				<el-col :span="24" style="padding-top: 20px;">
					<el-form :inline="true" label-width="90px">
						<el-col :span="24">
							<el-form-item label="物流公司：">
								<el-select size="small" 
									style="width: 150px;"
									v-model="invoiceForm.value" 
									placeholder="请选择物流公司">
									<el-option v-for="item in invoiceForm.logisticsCompany"
										:key="item.value"
										:label="item.name"
										:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="快递单号：">
								<el-input size="small" v-model="invoiceForm.logisticsNumberSub"></el-input>
							</el-form-item>
						</el-col>
						
						<el-col :span="24">
							<el-form-item label="备注信息：" style="margin-bottom: 0;">
								<el-input type="textarea" autosize v-model="invoiceForm.shipTextarea" style="width: 450px;"></el-input>
							</el-form-item>	
						</el-col>
					</el-form>
				</el-col>
			</el-row>
			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="invoiceVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="submitInvoice">确 定</el-button>
			</div>
		</el-dialog>
		<!-- / 添加发票信息 end -->
		
		<!-- 添加退款信息 start -->
		<el-dialog title="退款信息" top="30%"
			:visible.sync="consentVisible">
			
			<el-col :span="24">
				<el-table style="width: 100%; margin-bottom: 20px;"
					border
					:data="orderData">
					<el-table-column
						prop="name"
				        label="商品名称">
			      	</el-table-column>
			      	<el-table-column
			        	prop="goodsNumber"
			        	label="数量"
			        	width="80">
			      	</el-table-column>
			      	<el-table-column
			        	prop="sku"
			        	width="120"
			        	label="sku选择">
			  		</el-table-column>
			  		<el-table-column
			        	prop="price"
			        	label="价格"
			        	width="80">
			  		</el-table-column>
		    	</el-table>
		    	<el-col :span="24">
		    		退款金额：12.00元
		    	</el-col>
			</el-col>
			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="consentVisible = false">取 消</el-button>
		    	<el-button type="primary" @click="submitConsent">确 定</el-button>
			</div>
		</el-dialog>
		<!-- / 添加退款信息 end -->
	</section>
</template>

<script>
export default {
	data() {
		return {
			remarkVisible: false,			// 控制备注弹出层显示隐藏
			addressVisible: false,			// 控制地址弹出层显示隐藏
			deliveryVisible: false,			// 控制发货、物流弹出层显示隐藏
			invoiceVisible: false,			// 控制发票弹出层显示隐藏
			consentVisible: false,			// 控制退款弹出层显示隐藏
			deliveryAddress: {				// 收货地址弹窗信息
				deliveryName: '',			// 收货人
				deliveryPhone: '',			// 联系电话
				province: '',				// 省份
				city: '',					// 城市
				region: '',					// 区县
				street: '',					// 街道
				detailAddress: ''			// 详细地址	
			},
			invoiceForm: {					// 发货、发票信息
				logisticsCompany: [{		// 快递公司
					name: '顺丰',
					value: 'shunfeng'
				},{
					name: '圆通',
					value: 'yuantong'
				},{
					name: '中通',
					value: 'zhongtong'
				},{
					name: '申通',
					value: 'shentong'
				}],
				value: '',					// 选中的值
				logisticsNumberSub: '',		// 快递单号
				shipTextarea: '',			// 订单备注
			},
			orderData: [{					// 订单信息(弹窗)
				name: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",
				goodsNumber: "3",
				sku: "",
				price: "26.30",
			}]
		}
	},
	props: [
		'orderList',
		'currentPage',
	],
	methods: {
		// 提交备注
		submitRemark() {
			this.remarkVisible = false;
			console.log("提交备注");
		},
		
		// 修改用户收货地址
		submitAddress() {
			this.addressVisible = false;
			console.log("编辑用户收货地址！");
		},
		
		// 添加发票信息
		submitInvoice() {
			this.invoiceVisible = false;
			console.log("添加发票信息！");
		},
		
		// 发货、物流信息
		submitDelivery() {
			this.deliveryVisible = false;
			console.log("发货、物流信息!");
		},
		
		// 退款信息
		submitConsent() {
			this.consentVisible = false;
			console.log("同意退款");
		},
		
		// 退款不同意
		noConsent(){
			this.$confirm('点击【确定】，该订单状态将变成【待发货】状态，是否点【确定】继续该操作？', '提示', {
			  	confirmButtonText: '确定',
			  	cancelButtonText: '取消',
			  	type: 'warning'
			}).then(() => {
			  	this.$message({
			    	type: 'success',
					message: '提交成功!'
			  	});
			}).catch(() => {
			  	this.$message({
			    	type: 'info',
					message: '该操作取消'
			  	});
			});
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

.ipt-text {
	width: 100px;
}
</style>