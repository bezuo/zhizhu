<template>
	<section>
		<el-col :span="24" class="container">
			<el-row :span="24" style="max-width: 1000px;">
				<el-col :span="12" class="title">账号列表</el-col>
				<el-col :span="12" style="text-align: right;">
					<el-button type="primary" size="small" @click="dialogAdd = true">添加账号</el-button>
				</el-col>
			</el-row>
			
			<el-row :span="24">
				<table class="table">
					<tr>
						<th width="18%">用户昵称</th>
						<th width="17%">登录账号</th>
						<th width="17%">登录密码</th>
						<th width="18%">账号权限</th>
						<th width="30%">操作</th>
					</tr>
					<tr v-for="(item, index) in account">
						<td>{{ item.name }}</td>
						<td>{{ item.user }}</td>
						<td>{{ item.pwd }}</td>
						<td v-if="item.administrator">管理员</td>
						<td v-else>普通账号</td>
						<td>
							<el-button type="info" size="small" icon="edit" @click="dialogEdit = true">编辑</el-button>
							<el-button type="warning" size="small" icon="warning" @click="prohibitFun(index)">禁用</el-button>
							<el-button type="danger" size="small" icon="delete2" @click="deleteFun(index)">删除</el-button>
						</td>
					</tr>
				</table>
			</el-row>
		</el-col>
		
		<!-- 账号编辑 start -->
		<el-dialog title="编辑账号" :visible.sync="dialogEdit" size="tiny">
		  	<el-form :model="editform" :label-width="120">
		    	<el-form-item label="用户昵称：">
		      		<el-input v-model="editform.name" size="small" style="width: 200px;"></el-input>
		    	</el-form-item>
		    	
		    	<el-form-item label="登录账号：">
		      		<el-input v-model="editform.user" :disabled="true" size="small" style="width: 200px;"></el-input>
		    	</el-form-item>
		    	
		    	<el-form-item label="登录密码：">
		      		<el-input v-model="editform.pwd" size="small" style="width: 200px;"></el-input>
		    	</el-form-item>
		    	
		    	<el-form-item label="账号权限：" style="margin-bottom: 0;">
		    		<el-radio class="radio" v-model="editform.administrator" label="0">管理员</el-radio>
  					<el-radio class="radio" v-model="editform.administrator" label="1">普通账号</el-radio>
		    	</el-form-item>
		  	</el-form>
		  	<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="dialogEdit = false">取 消</el-button>
		    	<el-button type="primary" @click="editFun">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / 账号编辑 end -->
		
		<!-- 账号添加 start -->
		<el-dialog title="添加账号" :visible.sync="dialogAdd" size="tiny">
		  	<el-form :model="addform" :label-width="120">
		    	<el-form-item label="用户昵称：">
		      		<el-input v-model="addform.name" size="small" style="width: 200px;"></el-input>
		    	</el-form-item>
		    	
		    	<el-form-item label="登录账号：">
		      		<el-input v-model="addform.user" size="small" style="width: 200px;"></el-input>
		    	</el-form-item>
		    	
		    	<el-form-item label="登录密码：">
		      		<el-input v-model="addform.pwd" size="small" style="width: 200px;"></el-input>
		    	</el-form-item>
		    	
		    	<el-form-item label="账号权限：" style="margin-bottom: 0;">
		    		<el-radio class="radio" v-model="addform.administrator" label="0">管理员</el-radio>
  					<el-radio class="radio" v-model="addform.administrator" label="1">普通账号</el-radio>
		    	</el-form-item>
		  	</el-form>
		  	<div slot="footer" class="dialog-footer" style="text-align: right;">
		    	<el-button @click="dialogAdd = false">取 消</el-button>
		    	<el-button type="primary" @click="addFun">确 定</el-button>
		  	</div>
		</el-dialog>
		<!-- / 账号添加 end -->
	</section>
</template>

<script>
export default {
	data() {
		return {
			account: [{
				name: '张三',
				user: '13995613155',
				pwd: 'lxs1234578',
				administrator: '0',			// 0表示为管理员账号、1表示普通账号
			},{
				name: '李四',
				user: '13956431589',
				pwd: 'tx1456325',
				administrator: '1',
			},{
				name: '王五',
				user: '18745632598',
				pwd: 'lx12354698',
				administrator: '1',
			}],
			formLabelWidth: '100px',		// label宽度	
			dialogAdd: false,				// 控制添加账号弹出框
			dialogEdit: false,				// 控制编辑账号弹出框
			editform: {						// 编辑账号表单
				name: '张三',
				user: '13995613155',
				pwd: 'lxs1234578',
				administrator: '0',
			},
			addform: {						// 添加账号表单
				name: '',
				user: '',
				pwd: '',
				administrator: '',
			},
		}
	},
	methods: {
		
		prohibitFun(id) {					// 禁用账号
			this.$confirm('该操作将禁止此帐号登录, 是否继续?', '提示', {
			  	confirmButtonText: '确定',
			  	cancelButtonText: '取消',
			  	type: 'warning'
			}).then(() => {
			  	this.$message({
			    	type: 'success',
					message: '提交禁用成功!'
			  	});
			}).catch(() => {
				this.$message({
		    		type: 'info',
					message: '已取消删除'
		      	});
		    });
		},
		
		deleteFun(id) {						// 删除账号
			this.$confirm('此操作将永久删除此账号, 是否继续?', '提示', {
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
		
		editFun() {							// 编辑账号
			console.log("修改账号成功!");
			this.dialogEdit = false;
		},
		
		addFun() {							// 添加账号
			console.log("添加账号成功!");
			this.dialogAdd = false;
		},
	}
}
</script>

<style scoped lang="scss">
.container {
    margin-top: 20px;
    padding: 30px 30px 50px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    background-color: #fff;
    &:hover {
    	box-shadow: 0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)
    }
    
    .title {
    	font-size: 14px;
    	line-height: 30px;
    }
    
    .table {
    	width: 100%;
    	max-width: 1000px;
    	margin-top: 30px;
    	font-size: 14px;
    	border: 0 none;
    	border-collapse: collapse;
    	th {
    		padding: 8px 0;
    		text-align: center;
    		border: 1px solid #ddd;
    		background-color: #eeeff6;
    	}
    	td {
    		padding: 10px 0;
    		text-align: center;
    		border: 1px solid #ddd;
    	}
    }
}
</style>