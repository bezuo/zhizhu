<template>
	<section>
		<el-col :span="24" class="container">
			<el-col :span="24">
				<table class="tabel">
					<tr>
						<th class="el-col-7">商品信息</th>
						<th class="el-col-3">销量</th>
						<th class="el-col-3">价格</th>
						<th class="el-col-6">时间</th>
						<th class="el-col-5">操作</th>
					</tr>
					<tr v-for="(item, index) in dishesList">						
						<td>
							<el-row :gutter="10">								
								<el-col :span="8" class="img-box">								
									<img :src="item.imgSrc" :alt="item.title" />
								</el-col>
								<el-col :span="14">
									{{ item.title }}
								</el-col>
							</el-row>
						</td>						
						<td class="item-bar">{{ item.sales }}份</td>						
						<td class="item-bar">¥{{ item.price }}元</td>
						<td>
							<el-col :span="24">添加时间：{{ item.createTime}}</el-col>
							<el-col :span="24" v-show="item.upTime">上架时间：{{ item.upTime }}</el-col>
							<el-col :span="24" v-show="item.downTime">下架时间：{{ item.downTime }}</el-col>
						</td>
						<td class="item-bar">
							<el-col :span="24" style="margin-bottom: 10px; text-align: center;">								
								<el-button type="success" size="small" icon="arrow-up"
									:disabled="item.shelves"
									@click="upFun(index)">上架
								</el-button>
								<el-button type="warning" size="small" icon="arrow-down" 
									:disabled="!item.shelves"
									@click="downFun(index)">下架
								</el-button>
							</el-col>
							<el-col :span="24" style="text-align: center;">
								<el-button type="primary" size="small" icon="edit" 
									@click="editFun(index)">编辑
								</el-button>
								<el-button type="danger" size="small" icon="delete2" 
									@click="deleteFun(index)">删除
								</el-button>
							</el-col>
						</td>
					</tr>
				</table>
			</el-col>
			
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
			
		}
	},
	props: [
		'tabIndex',
		'dishesList',
		'currentPage'
	],
	methods: {
		upFun(id) {						// 上架
			this.$confirm('此操作后用户将可以正常下单购买该商品, 您是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
	        }).then(() => {
	          	this.$message({
	            		type: 'success',
	            		message: '上架成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            		type: 'info',
	            		message: '已取消上架'
	          	});          
	        });
		},
		downFun(id) {					// 下架
			this.$confirm('此操作后用户将无法可以正常下单购买该商品, 您是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
	        }).then(() => {
	          	this.$message({
	            		type: 'success',
	            		message: '下架成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            		type: 'info',
	            		message: '已取消下架'
	          	});          
	        });
		},
		editFun(id) {
			this.$router.push('/editGoods/' + id)	
		},
		deleteFun(id) {					// 删除商品 
			this.$confirm('此操作后该商品将不再存在, 您是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
	        }).then(() => {
	          	this.$message({
	            		type: 'success',
	            		message: '删除成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            		type: 'info',
	            		message: '已取消删除'
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
.container {
	.tabel {
		width: 100%;
		border-collapse: collapse;
		th {
			float: none;
			padding: 8px 0;
			text-align: center;
			border: 1px solid #ddd;
			background-color: #faf1df;
		}
		td {
			padding: 10px;
			border: 1px solid #ddd;
			box-sizing: border-box;
			.img-box {
				max-width: 80px;
				max-height: 80px;
				img {
					display: block;
					width: 100%;
				}
			}
			&.item-bar {
				text-align: center;
			}
		}
	}
	.paging-box {
		float: right;
		padding: 10px 0 5px;
	}
}
</style>