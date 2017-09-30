<template>
	<section>
		<el-col :span="24" class="container">
			<el-col :span="24" style="margin-bottom: 20px;">
				<el-col :span="12" style="line-height: 28px;">餐桌列表信息</el-col>
				<el-col :span="12" style="text-align: right;">
					<el-button size="small" icon="plus" type="success" @click="addDeskDialog = true">添加餐桌</el-button>						
				</el-col>
			</el-col>
			<table class="table">
				<tr>
					<th class="el-col-5">餐桌名称</th>
					<th class="el-col-7">二维码</th>
					<th class="el-col-6">时间信息</th>
					<th class="el-col-6">操作</th>
				</tr>
				<tr v-for="(item, index) in deskList" :key="index">
					<td>{{ item.deskNumber }}</td>
					<td>
						<div class="img-box">							
							<img :src="item.qrcode" title="">
						</div>
					</td>
					<td>
						<p>创建时间：{{ item.createTime }}</p>
						<p v-show="item.updateTime">修改时间：{{ item.updateTime }}</p>
					</td>
					<td>
						<el-button size="small" icon="edit" type="primary"
							@click="editDeskFun(item)">编辑
						</el-button>
						<el-button size="small" icon="delete2" type="danger"
							@click="deleteFun(item)">删除
						</el-button>
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
				
		<!-- add sort start -->
		<el-dialog title="添加餐桌" :visible.sync="addDeskDialog" top="30%" size="tiny">
			<el-form :model="addDeskData" label-width="90px">
				<el-form-item label="餐桌名称：" style="margin-right: 10px;">
					<el-input size="small" v-model="addDeskData.deskNumber"></el-input>
				</el-form-item>
			</el-form>			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    		<el-button size="small" icon="circle-close" @click="addDeskDialog = false">取 消</el-button>
		    		<el-button size="small" icon="circle-check" type="primary" @click="addDeskSubmit">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / add sort end -->
		
		<!-- edit sort start -->
		<el-dialog title="编辑餐桌" :visible.sync="editDeskDialog" top="30%" size="tiny">
			<el-form :model="editDeskData" label-width="90px">
				<el-form-item label="餐桌名称：" style="margin-right: 10px;">
					<el-input size="small" v-model="editDeskData.deskNumber"></el-input>
				</el-form-item>
			</el-form>			
			<div slot="footer" class="dialog-footer" style="text-align: right;">
		    		<el-button size="small" icon="circle-close" @click="editDeskDialog = false">取 消</el-button>
		    		<el-button size="small" icon="circle-check" type="primary" @click="editDeskSubmit">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / edit sort end -->
	</section>
</template>

<script>
import api from '@/util/api'

export default {
	data() {
		return {
			deskList: '',			// 桌子列表
			totalCount: 0,			// 桌子总算量
			totalPage: 0,			// 总分页数
			pageSize: 0,				// 每页数量
			currPage: 0,				// 当前分页
			addDeskDialog: false,	// 控制添加桌子弹窗显示隐藏
			addDeskData: {
				deskMerchantId: 0,
				deskNumber: "",
			},
			editDeskDialog: false,	// 控制添加桌子弹窗显示隐藏
			editDeskData: "",			
		}
	},
	created() {
		this.getDeskList();
	},
	methods: {
		
		getDeskList(params) {			// 请求餐桌列表信息
			api.getDeskList(params).then((res) => {			
				if(!res) return false;
				this.deskList = res.page.list;
				this.totalCount = res.page.totalCount;
				this.totalPage = res.page.totalPage;
				this.pageSize = res.page.pageSize;
				this.currPage = res.page.currPage;
			});	
		},
		
		addDeskSubmit() {				// 添加餐桌
			
			api.createDesk(this.addDeskData).then((res) => {
				if(res.code == 0) {
					this.addDeskDialog = false;
					this.getDeskList();
					this.$message({
		            		type: 'success',
		            		message: '添加成功!'
		          	});
	          	}
			});
		},
		
		editDeskFun(obj) {				// 编辑餐桌			
			this.editDeskDialog = true;
			this.editDeskData = obj;
		},
		editDeskSubmit() {				// 编辑餐桌提交
			
			api.editDesk(this.editDeskData).then((res) => {
								
				this.editDeskDialog = false;
			})
		},
		deleteFun(id) {					// 删除餐桌
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
		},
		
		handleSizeChange(val) {
        		console.log(`每页${val} 条`);
      	},
      	handleCurrentChange(val) {
        		console.log(`当前页: ${val}`);
      	},
	},
	filters: {
//		formatTime: function(value) {
//			if(!value) return;
//			let commonTime, unixTimestamp = new Date(value);			
//			Date.prototype.toLocaleString = function() {
//		        return this.getFullYear() + "-" + 
//		        (this.getMonth()>8 ? this.getMonth()+1 : "0"+(this.getMonth()+1)) + "-" +
//		        (this.getDate()>9 ? this.getDate() : "0"+this.getDate()) + " " + 
//		        (this.getHours()>9 ? this.getHours() : "0"+this.getHours() ) + ":" +
//		        (this.getMinutes()>9 ? this.getMinutes() : "0"+this.getMinutes()) + ":" + 
//		        (this.getSeconds()>9 ? this.getSeconds() : "0"+this.getSeconds());
//		   	};
//		   	
//			commonTime = unixTimestamp.toLocaleString();
//			return commonTime
//		}
	},
}
</script>

<style scoped lang="scss">
.container {
	margin-top: 20px;
	padding: 30px;
	border: 1px solid #eaeefb;
	border-radius: 4px;
	background-color: #fff;
	/*transition: .2s;
	&:hover {*/
		box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
	/*}*/
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
		margin-bottom: 10px;
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
			padding: 8px 10px;
			text-align: center;
			border: 1px solid #ddd;
			.img-box {
				max-width: 80px;
				max-height: 80px;
				margin: 0 auto;
				overflow: hidden;				
				img {
					display: block;
					width: 100%;
				}
			}
		}
	}
	.paging-box {
		float: right;
		padding: 10px 0 5px;
	}
}
</style>