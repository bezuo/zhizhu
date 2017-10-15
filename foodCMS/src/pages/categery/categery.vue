<template>
	<section>
		<el-col :span="24" class="container">
			<el-col :span="24" style="margin-bottom: 20px;">
				<el-col :span="12" style="line-height: 28px;">分类列表信息</el-col>
				<el-col :span="12" style="text-align: right;">
					<el-button size="small" icon="plus" type="success" @click="addCategeryDialog = true">添加分类</el-button>						
				</el-col>
			</el-col>
			<table class="table">
				<tr>
					<th class="el-col-4">排序</th>
					<th class="el-col-7">分类名称</th>
					<th class="el-col-7">时间信息</th>
					<th class="el-col-6">操作</th>
				</tr>
				<tr v-for="(item, index) in categeryList" :key="index">
					<td>{{ item.catIndex }}</td>
					<td>{{ item.catName }}</td>
					<td>
						<el-col :span="24" class="time">	
							<p>添加时间：{{ item.createTime }}</p>
							<p>修改时间：{{ item.updateTime }}</p>
						</el-col>
					</td>
					<td>
						<el-button size="small" icon="edit" type="primary" @click="editCategery(item)">编辑</el-button>
						<el-button size="small" icon="delete2" type="danger" @click="deleteCategery(item.id)">删除</el-button>
					</td>
				</tr>
			</table>
			
			<!-- paging start -->
			<el-row :span="24" class="paging-box">
				<el-pagination
					@size-change="handleSizeChange"
      				@current-change="handleCurrentChange"
				  	:current-page="currPage"
				  	:page-sizes="[20, 30, 40]"
				  	:page-size="pageSize"
				  	layout="total, sizes, prev, pager, next, jumper"
				  	:total="totalCount">
				</el-pagination>
	  		</el-row>
			<!-- / paging end -->
		</el-col>
		
		<!-- add categery start -->
		<el-dialog title="添加分类" :visible.sync="addCategeryDialog" top="30%" size="tiny">
			<el-form :model="addCategeryData" label-width="90px">
				<el-form-item label="分类名称：" style="margin-right: 10px;">
					<el-input size="small" v-model="addCategeryData.catName"></el-input>
				</el-form-item>				
				<el-form-item label="分类排序：" style="margin: 0 10px 0 0;">
					<el-input-number size="small" v-model="addCategeryData.catIndex" :min="1"></el-input-number>
				</el-form-item>
			</el-form>			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    		<el-button size="small" icon="circle-close" @click="addCategeryDialog = false">取 消</el-button>
		    		<el-button size="small" icon="circle-check" type="primary" @click="addCategerySubmit" :loading="loading">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / add categery end -->
		
		<!-- edit categery start -->
		<el-dialog title="编辑分类" :visible.sync="editCategeryDialog" top="30%" size="tiny">
			<el-form :model="editCategeryData" label-width="90px">
				<el-form-item label="分类名称：" style="margin-right: 10px;">
					<el-input size="small" v-model="editCategeryData.catName"></el-input>
				</el-form-item>				
				<el-form-item label="分类排序：" style="margin: 0 10px 0 0;">
					<el-input-number size="small" v-model="editCategeryData.catIndex" :min="1"></el-input-number>
				</el-form-item>
			</el-form>			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    		<el-button size="small" icon="circle-close" @click="editCategeryDialog = false">取 消</el-button>
		    		<el-button size="small" icon="circle-check" type="primary" @click="editCategerySubmit">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / edit categery end -->
	</section>
</template>

<script>
import api from '@/util/api'

export default {
	data() {
		return {
			categeryList: [],			// 分组列表
			loading: false,				// 请求状态
			totalCount: 0,				// 桌子总数量
			totalPage: 0,				// 总分页数
			pageSize: 20,				// 每页数量
			currPage: 0,					// 当前分页
			sidx: "cat_index",			// 排序
			order: "asc",				// 升序
//			order: "desc",				// 降序	
			addCategeryDialog: false,	// 添加分组弹窗
			editCategeryDialog: false,	// 修改分组弹窗
			addCategeryData: {
				merchantId: 1,
				catIndex: "",
  				catName: ""
			},
			editCategeryData: "",
		}
	},
	created() {
		let data = {
			sidx: this.sidx,
			order: this.order
		};
		this.getCategeryList(data);
	},
	methods: {
		
		getCategeryList(data) {				// 获取分组列表
			api.getCategeryList({params: data}).then((res) => {
				if(res.code == 0) {
					this.categeryList = res.page.list
					this.totalCount = res.page.totalCount;
					this.totalPage = res.page.totalPage;
					this.pageSize = res.page.pageSize;
					this.currPage = res.page.currPage;
				}
			})
		},
		
		addCategerySubmit() {					// 新增分组

			this.loading = true;						
			api.createCategery(this.addCategeryData).then((res) => {
				this.loading = false;
				if(res.code == 0) {
					
					let data = {
						sidx: this.sidx,
						order: this.order
					};
					
					this.addCategeryDialog = false;
					this.getCategeryList(data);
					this.$message({
						type: 'success',
						message: '添加成功!'
		          	});
	          	}
			})
		},
		
		deleteCategery(id) {						// 删除分组
			this.$confirm('该操作将删除该分组以及该分组下的所有商品，是否继续？', '提示', {
	          	confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning',
			}).then(() => {
				api.deleteCategery([id]).then((res) => {
					if(res.code == 0) {
			          	let data = {
			      			page: this.currPage,
			      			limit: this.pageSize,
							sidx: this.sidx,
							order: this.order
			      		};
			      		
			          	this.$message({
							type: 'success',
							message: '删除成功!'
			          	});
			          	this.getCategeryList(data);
					}
				});
	        }).catch(() => {
	          	this.$message({
					type: 'info',
					message: '取消该操作！'
	          	});
	        });
		},
		
		editCategery(obj) {						// 编辑分组
			this.editCategeryDialog = true;
			this.editCategeryData = obj;
		},
		
		editCategerySubmit() {					// 提交编辑
			let str = this.editCategeryData.catName;
			if(!str) {
				this.$message({
					type: 'warning',
					message: '输入有误，请重新输入!'
	          	});
	          	return false;
			};
			this.loading = true;
			api.editCategery(this.editCategeryData).then((res) => {
				this.loading = false;
				if(res.code == 0) {
					let params = {
		      			page: this.currPage,
		      			limit: this.pageSize,
						sidx: this.sidx,
						order: this.order
		      		};
		      		this.getCategeryList(params);
					this.editCategeryDialog = false;
					this.$message({
						type: 'success',
						message: '修改成功!'
		          	});
				}
			})
		},
		
		handleSizeChange(val) {						// 修改每页数据条数
			let params = {
      			page: this.currPage,
      			limit: val,
				sidx: this.sidx,
				order: this.order
      		};
      		this.getCategeryList(params);
      	},
      	
      	handleCurrentChange(val) {					// 切换分页
      		
      		let params = {
      			page: val,
      			limit: this.pageSize,
				sidx: this.sidx,
				order: this.order
      		};
      		this.getCategeryList(params);
      	},
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
			.time {
				p {
					text-align: center;
				}
			}
		}
	}	
	.paging-box {
		float: right;
		padding: 20px 0 0;
	}
}
</style>