<template>
	<section>
		<el-col :span="24" class="container">
			<el-col :span="24" style="margin-bottom: 20px;">
				<el-col :span="12" style="line-height: 28px;">分类列表信息</el-col>
				<el-col :span="12" style="text-align: right;">
					<el-button size="small" icon="plus" type="success" @click="addSortFun">添加分类</el-button>						
				</el-col>
			</el-col>
			<table class="table">
				<tr>
					<th class="el-col-6">排序</th>
					<th class="el-col-10">分类名称</th>
					<th class="el-col-8">操作</th>
				</tr>
				<tr v-for="(item, index) in sortList" :key="index">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>
						<el-button size="mini" icon="edit" type="primary"
							@click="editFun(item.id)">编辑
						</el-button>
						<el-button size="mini" icon="delete2" type="danger"
							@click="deleteFun(item.id)">删除
						</el-button>
					</td>
				</tr>
			</table>
		</el-col>
		
		<!-- add sort start -->
		<el-dialog title="添加分类" :visible.sync="addSortDialog" top="30%" size="tiny">
			<el-form :model="addForm" label-width="90px">
				<el-form-item label="分类名称：" style="margin-right: 10px;">
					<el-input size="small" v-model="addForm.name"></el-input>
				</el-form-item>				
				<el-form-item label="分类排序：" style="margin: 0 10px 0 0;">
					<el-input-number size="small" v-model="addForm.id" :min="1"></el-input-number>
				</el-form-item>
			</el-form>			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    		<el-button size="small" icon="circle-close" @click="addSortDialog = false">取 消</el-button>
		    		<el-button size="small" icon="circle-check" type="primary" @click="addSortDialog = false">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / add sort end -->
		
		<!-- edit sort start -->
		<el-dialog title="编辑分类" :visible.sync="editSortDialog" top="30%" size="tiny">
			<el-form :model="editForm" label-width="90px">
				<el-form-item label="分类名称：" style="margin-right: 10px;">
					<el-input size="small" v-model="editForm.name"></el-input>
				</el-form-item>				
				<el-form-item label="分类排序：" style="margin: 0 10px 0 0;">
					<el-input-number size="small" v-model="editForm.id" :min="1"></el-input-number>
				</el-form-item>
			</el-form>			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    		<el-button size="small" icon="circle-close" @click="editSortDialog = false">取 消</el-button>
		    		<el-button size="small" icon="circle-check" type="primary" @click="editSortDialog = false">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / edit sort end -->
	</section>
</template>

<script>
export default {
	data() {
		return {
			sortList: [{
				id: 0,
				name: "热销系列",
			},{
				id: 1,
				name: "特价系列",
			},{
				id: 2,
				name: "面食系列",
			},{
				id: 3,
				name: "凉菜系列",
			},{
				id: 4,
				name: "饮料系列",
			},{
				id: 5,
				name: "凑单",
			}],
			addSortDialog: false,
			addForm: {
				id: "",
				name: "",
			},
			editSortDialog: false,
			editForm: "",
		}
	},
	methods: {
		addSortFun() {					// 新增分组
			this.addSortDialog = true;
		},
		editFun(id) {					// 编辑分组
			this.editSortDialog = true;
			this.sortList.forEach((item, index) => {
				if(item.id == id) {
					this.editForm = item;
					return false;
				}
			})
		},
		deleteFun(id) {					// 删除分组
			this.$confirm('该操作将删除该分组以及该分组下的所有商品，是否继续？', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning',
	        }).then(() => {
	          	this.$message({
	            		type: 'success',
	            		message: '删除成功!'
	          	});
	        }).catch(() => {
	          	this.$message({
	            		type: 'info',
	            		message: '取消该操作！'
	          	});          
	        });
		}
	}
}
</script>

<style scoped lang="scss">
.container {
	margin-top: 20px;
	padding: 30px;
	border: 1px solid #eaeefb;
	border-radius: 4px;
	background-color: #fff;
	transition: .2s;
	&:hover {
		box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
	}
	.header {
		border: solid #ddd;
		border-width: 1px 1px 1px 0;
		background-color: #eeeff6;
		.title {
			padding: 8px 0;
			text-align: center;
			border-left: 1px solid #ddd;
		}
	}
	.table {
		width: 100%;
		border: 0 none;
		border-collapse: collapse;
		th {
			float: none;
			padding: 8px 0;
			text-align: center;
			border: 1px solid #ddd;
			background-color: #eeeff6;
		}
		td {
			padding: 8px 0;
			text-align: center;
			border: 1px solid #ddd;
		}
	}
}
</style>