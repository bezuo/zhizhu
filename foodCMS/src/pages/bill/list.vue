<template>
	<section>
		<el-col :span="24" class="container">
			<el-form>
				<el-form-item label="选择日期：">
					<el-date-picker
						@change="changeFun"
				      	v-model="time"
				      	size="small"
				      	type="datetimerange"
			      		placeholder="选择时间范围">
				    </el-date-picker>
				    <el-button type="primary" size="small" icon="search" style="margin-left: 8px;">查询</el-button>
				</el-form-item>
			</el-form>
			
			<el-col :span="24">
				<table class="table">
					<tr>
						<th>类型</th>
						<th>数量</th>
						<th>金额</th>
						<th>操作</th>
					</tr>
					<tr v-for="(item, index) in tableData">
						<td>{{ item.typeName }}</td>
						<td>{{ item.quantity }}份</td>
						<td>￥{{ item.totalAmount }}元</td>
						<td>
							<el-button type="primary" 
								size="small" 
								icon="view"
								@click="detailedFun(item.typeName)">
								查看详细
							</el-button>
						</td>
					</tr>
				</table>
			</el-col>
		</el-col>
	</section>
</template>

<script>
export default {
	data() {
		return {
			time: "",
			tableData: [{
				typeName: "全部订单",
				quantity: "600",
				totalAmount: "12000",
			},{
				typeName: "完成订单",
				quantity: "500",
				totalAmount: "11000",
			},{
				typeName: "取消订单",
				quantity: "100",
				totalAmount: "1000",
			}]
		}
	},
	methods: {
		detailedFun(name) {
			console.log(name);
			this.$router.push("/billDetails/"+ name)
		},
		
		changeFun () {
			console.log(this.time);
		}
	}
}
</script>

<style scoped lang="scss">
.container {	
	min-height: 580px;
	margin-top: 20px;
	padding: 40px 30px 30px;
	border: 1px solid #eaeefb;
	border-radius: 4px;
	background-color: #fff;
	/*transition: .2s;*/
	/*&:hover {*/
		box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
	/*}*/
	.table {
		width: 100%;
		margin-top: 10px;
		border-collapse: collapse;
		th {
			padding: 8px 0;
			font-size: 14px;
			text-align: center;
			color: #1f243d;
			border: 1px solid rgb(223, 225, 236);
			background-color: rgb(238, 239, 246)
		}
		td {
			padding: 10px 0;
			text-align: center;
			border: 1px solid #ddd;
		}
	}
}
</style>