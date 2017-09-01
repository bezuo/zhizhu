<template>
	<section>
		<el-col class="toolbar" style="padding-top: 20px;">
			<el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
				<el-form-item label="商品名称">
					<el-input v-model="goodsName"></el-input>
				</el-form-item>
			
				<el-form-item label="收货人">
					<el-input v-model="consignee"></el-input>
				</el-form-item>
			
				<el-form-item label="联系电话">
					<el-input v-model="phone"></el-input>
				</el-form-item>

				<el-form-item label="订单编号">
					<el-input v-model="orderId"></el-input>
				</el-form-item>
				
				<el-col :span="24">
					<el-col :span="12">						
						<el-form-item label="物流单号">
							<el-input v-model="logisticsNumber"></el-input>
						</el-form-item>
					
						<el-form-item label="订单备注">
							<el-input v-model="remarks"></el-input>
						</el-form-item>					
					</el-col>
					
					<el-col :span="12">
						<el-form-item>
							<el-upload class="upload-demo" style="float: left;"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :inline="true" 
							  :on-preview="handlePreview"
							  :on-remove="handleRemove"
							  :file-list="fileList">
							  <el-button type="default"><i class="el-icon-upload2" style="margin-right: 5px;"></i>订单导入</el-button>
							  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
							</el-upload>
							<el-button type="default" style="margin-left: 10px;"><i class="iconfont icon-fa-download" style="margin-right: 5px;"></i>订单导出</el-button>
							<el-button type="primary" icon="search" style="float: right; margin-right: 20px;">订单查询</el-button>
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
					<order-table v-if="tabIndex == index" :tabIndex="tabIndex"></order-table>
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
			goodsName: "",				// 商品名称
			consignee: "",				// 收货人
			phone: "",					// 联系电话
			orderId: "",				// 订单编号
			logisticsNumber: "",		// 物流单号
			remarks: "",				// 订单备注
			tabIndex: 1,				// 指定显示的tab具体哪一项，从0开始(0表示第一项)
			tabTitle: [{
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
</style>