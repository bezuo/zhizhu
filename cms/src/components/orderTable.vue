<template>
	<section>
		<!-- table head start -->
		<el-row :span="24" class="header">
			<el-col :span="4" class="title">商品信息</el-col>
			<el-col :span="3" class="title">sku信息</el-col>
			<el-col :span="3" class="title">单价/数量</el-col>
			<el-col :span="2" class="title">收货人/电话</el-col>
			<el-col :span="4" class="title">交易时间</el-col>
			<el-col :span="4" class="title">订单信息</el-col>
			<el-col :span="4" class="title">操作</el-col>
		</el-row>
		<!-- / table head end -->
		
		<!-- table content start -->
		<el-row :span="24" class="item-box">
			<!--v-for="(item, index) in ">-->			
			<el-col :span="24" class="item-number">
				<el-col :span="12">订单编号：201708251820214620052</el-col>
				<el-col :span="12">物流单号：201708251820214620052</el-col>
			</el-col>
			<el-row :span="24" class="item-body">
				<table cellpadding="0" cellspacing="0" border="0">
					<tr>
						<td class="item-bar el-col-4">
							<table border="" cellspacing="" cellpadding="">
								<tr>
									<td>
										<img lazy="http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg" />
										<p>煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料</p>
									</td>									
								</tr>
								<tr>
									<td>
										<img lazy="http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg" />
										<p>煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料</p>
									</td>									
								</tr>
							</table>
						</td>
						<td class="item-bar el-col-3">
							尺码L大；红色
						</td>
						<td class="item-bar el-col-3">
							<p>单价：18.60元</p>
							<p>数量：<em>1</em></p>
						</td>
						<td class="item-bar el-col-2">
							<p>王大锤</p>
							<p>13711111111</p>
						</td>
						<td class="item-bar el-col-4">
							<p>下单：2017-05-11 18:05:32</p>
							<p>付款：2017-05-11 18:05:32</p>
							<p>发货：2017-05-11 18:05:32</p>
							<p>收货：2017-05-11 18:05:32</p>
						</td>
						<td class="item-bar el-col-4">
							<p>状态：待收货</p>
							<p>发货人：张益达</p>
							<p>退款人：李达叶</p>
							<p class="tex-red">备注：缺货，跟买家协商换成了红色！</p>
						</td>
						<td class="item-bar el-col-4">
							<el-button type="default" size="small" class="btn">备注</el-button>
							<el-button type="success" size="small" class="btn">地址</el-button>
							<el-button type="primary" size="small" class="btn">发票</el-button>					
							<el-button type="info" size="small" class="btn">发货</el-button>
							<el-button type="warning" size="small" class="btn">物流</el-button>
							<el-button type="danger" size="small" class="btn">退款</el-button>
							<el-button type="text" size="small" class="btn">不同意</el-button>
						</td>
					</tr>
				</table>
				<!--<el-col :span="4" class="item-bar item-bar-last">					
				</el-col>-->
			</el-row>
			<el-col :span="24" class="item-btm">买家留言：拍错了，换成黑色！谢谢！</el-col>
		</el-row>
		<!-- / table content end -->
	</section>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: [
		'tabIndex'
	]
}
</script>

<style scoped lang="scss">
.header {
	margin-bottom: 10px;
	font-size: 14px;
	border: solid #ddd;
	border-width: 1px 0 1px 1px;
	background-color: #f2f2f2;
	.title {
		padding: 10px 0;
		text-align: center;
		border-right: 1px solid #ddd;		
	}	
}

.item-box {
	font-size: 14px;
	.item-number {
		padding: 8px 0;
		text-indent: 20px;
		border: solid #ddd;
		border-width: 1px 1px 0 1px;
	}
	.item-body {
		border-collapse: collapse;
		.item-bar {
			float: none;
			padding: 10px;
			border: 1px solid #ddd;		
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
</style>