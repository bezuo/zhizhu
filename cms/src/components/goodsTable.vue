<template>		
	<el-col :span="24">
		<table border="0" cellspacing="0" cellpadding="0" class="table">
			<tr>
				<th width="21%">商品信息</th>
				<th width="10%">数量</th>
				<th width="14%">价格信息</th>
				<th width="8%">是否特价</th>
				<th width="20">时间信息</th>
				<th width="12%">操作人</th>
				<th width="15%">操作</th>
			</tr>
			<tr class="item" 
				v-for="(item, index) in goodsList">
				<td class="item-img">
					<img :src="item.goodsImg" />
					<p>{{ item.goodsTitle }}</p>
				</td>
				<td>
					<p>销量：{{ item.salesVolume }}</p>
					<p>库存：{{ item.stock }}</p>
				</td>
				<td>
					<p>零售价：￥{{ item.retailPrice }}元</p>
					<p>经销价：￥{{ item.originalPrice }}元</p>
				</td>
				<td v-if="item.specialOffer" class="item-center"><span class="red-text">是</span></td>
				<td v-else class="item-center">否</td>
				<td>
					<p>添加：{{ item.createTime }}</p>
					<p>修改：{{ item.ModifyTime }}</p>
				</td>
				<td>
					<p>添加人：{{ item.createPeople }}</p>
					<p>修改人：{{ item.ModifyPeople }}</p>
				</td>
				<td>
					<el-col style="margin-bottom: 10px; text-align: center;">						
						<el-button size="small" type="success" :disabled="item.shelves" @click="shelvesFun(index)">
							<i class="el-icon-arrow-up" style="margin-right: 5px;"></i>上架
						</el-button>
						<el-button size="small" type="warning" :disabled="!item.shelves" @click="soldOutFun(index)">
							<i class="el-icon-arrow-down" style="margin-right: 5px;"></i>下架
						</el-button>
					</el-col>
					<el-col style="text-align: center;">						
						<el-button size="small" icon="edit" type="info" @click="editFun(index)">编辑</el-button>
						<el-button size="small" icon="delete" type="danger" @click="deleteFun(index)">删除</el-button>
					</el-col>
				</td>
			</tr>
		</table>
		
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
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: [
		'goodsList',
	],
	methods: {
		
		shelvesFun(id) {			// 上架商品
			this.$confirm('此操作将上架该商品，上架后可供用户购买，是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
        	}).then(() => {
	          	this.$message({
	            	type: 'success',
	            	message: '第'+(id+1)+'条数据上架成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            	type: 'info',
	            	message: '已取消删除'
	          	});          
	        });
		},
		
		soldOutFun(id) {			// 下架商品
			this.$confirm('此操作将下架该商品，下架后该商品将不再用户端显示， 是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
        		}).then(() => {
	          	this.$message({
	            	type: 'success',
	            	message: '第'+(id+1)+'条数据下架成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            	type: 'info',
	            	message: '已取消删除'
	          	});          
	        });
		},
		
		editFun(id){
			this.$router.push("/modifyGoods/"+id)
		},
		
		deleteFun(id) {				// 删除数据
			this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
        	}).then(() => {
	          	this.$message({
	            	type: 'success',
	            	message: '删除第'+(id+1)+'条数据成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            	type: 'info',
	            	message: '已取消删除'
	          	});          
	        });
      	}
	}
}
</script>

<style scoped lang="scss">
.table {
	font-size: 14px;
	border-collapse: collapse;
	tr {
		&:hover {
			background-color: #fafafa;
		}
		th {
			padding: 10px 0;
			text-align: center;
			border: 1px solid #ddd;
			background-color: #faf1df;
		}
		td {
			padding: 10px;
			line-height: 20px;
			border: 1px solid #ddd;
			&.item-center {
				text-align: center;
			}
			&.item-img {
				img {
					float: left;
					width: 60px;
					height: 60px;
					margin-right: 10px;
				}
			}
			.red-text {
				color: #e82121;
			}
		}
	}
}

.paging-box {
	float: right;
	padding: 10px 0 5px;
}
</style>