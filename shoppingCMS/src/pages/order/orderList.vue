<template>
	<section>
		<el-col class="toolbar" style="padding-top: 20px;">
			<el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="formId">
				<el-form-item label="商品名称">
					<el-input size="small" v-model="formId.goodsName"></el-input>
				</el-form-item>
			
				<el-form-item label="收货人">
					<el-input size="small" v-model="formId.consignee"></el-input>
				</el-form-item>
			
				<el-form-item label="联系电话">
					<el-input size="small" v-model="formId.phone"></el-input>
				</el-form-item>

				<el-form-item label="订单编号">
					<el-input size="small" v-model="formId.orderId"></el-input>
				</el-form-item>
				
				<el-col :span="24">
					<el-col :span="12">						
						<el-form-item label="物流单号">
							<el-input size="small" v-model="formId.logisticsNumber"></el-input>
						</el-form-item>
					
						<el-form-item label="订单备注">
							<el-input size="small" v-model="formId.remarks"></el-input>
						</el-form-item>					
					</el-col>
					
					<el-col :span="12">
						<el-form-item>
							<el-upload class="upload-demo" style="float: left; margin-right: 10px;"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :inline="true" 
							  :on-preview="handlePreview"
							  :on-remove="handleRemove"
							  :file-list="fileList">
							  <el-button type="default" size="small"><i class="el-icon-upload2" style="margin-right: 5px;"></i>订单导入</el-button>
							  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
							</el-upload>
							<el-button type="default" size="small" style="float: left; margin-top: 3px;"><i class="iconfont icon-fa-download" style="margin-right: 5px;"></i>订单导出</el-button>
							<el-button type="primary" size="small" icon="search" style="float: left; margin-top: 3px;">订单查询</el-button>
						</el-form-item>
					</el-col>
				</el-col>
			</el-form>
		</el-col>
		
		<el-col :span="24">
			<el-tabs type="border-card" 
				v-model="tabIndex"
				@tab-click="toggleTabFun()">
				<el-tab-pane v-for="(item, index) in tabTitle" 
				    :key="item.name"
				    :name="index"
					:label="item.name">
					<order-table v-if="tabIndex == index" :orderList="orderList" :currentPage="currentPage"></order-table>
				</el-tab-pane>
			</el-tabs>
		</el-col>
	</section>
</template>

<script>
import orderTable from '@/components/orderTable'

export default {
	data() {
		return {
			formId: {				
				goodsName: "",				// 商品名称
				consignee: "",				// 收货人
				phone: "",					// 联系电话
				orderId: "",				// 订单编号
				logisticsNumber: "",		// 物流单号
				remarks: "",				// 订单备注
			},
			tabIndex: 1,					// 指定显示的tab具体哪一项，从0开始(0表示第一项)
			tabTitle: [{					// 订单tab栏
				name:"待付款"
			},{
				name:"待发货"
			},{
				name:"已发货"
			},{
				name:"已收货"
			},{
				name:"退款未审核"
			},{
				name:"退款中"
			},{
				name:"已退款"
			},{
				name:"已关闭"
			}],
			currentPage: 4,					// 当前分页
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
	components: {
		orderTable
	},
	methods: {
		
		toggleTabFun() {
			console.log("撒旦撒旦撒旦")
		}
	}
}
</script>

<style scoped>
.icon-fa-download {
	width: 14px;
	height: 14px;
	font-size: 14px;
}
</style>