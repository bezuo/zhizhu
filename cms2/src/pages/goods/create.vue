<template>
	<section>
		<el-col :span="24" class="container">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
				<el-form-item label="菜品名称：" prop="name">
			    		<el-input v-model="ruleForm.name" size="small" style="max-width: 420px;"></el-input>
			 	</el-form-item>
			 	<el-form-item label="菜品分组：" prop="goodsSort">
		    			<el-radio-group v-model="ruleForm.goodsSort">
		      			<el-radio v-for="(item, index) in sortData"
		      				:key="index"
		      				:label="item.name"
		      				style="margin: 0 15px 0 0;">
		      			</el-radio>
				    </el-radio-group>
			 	</el-form-item>
			 	
		 		<el-form-item label="菜品简介：" prop="desc">
	    				<el-input type="textarea" v-model="ruleForm.desc" size="small" :rows="3" style="max-width: 520px;"></el-input>
  				</el-form-item>
  				
  				<el-form-item v-for="(item, index) in skuArr"
  					:key="item.propId"
					:label="item.propName + '：'">
  					<el-checkbox-group v-model="selectedValues[index].values">
						<el-checkbox v-for="(arr, i) in item.values"
							:key="arr.valueId"
							:label="arr">
							{{ arr.valueName }}
						</el-checkbox>
					</el-checkbox-group>
					<el-button size="small" icon="edit" type="info" 
						v-show="selectedValues[index].values.length != 0" 
						@click="editNameDialog(index)">
						编辑名称
					</el-button>
  				</el-form-item>
  				
				<el-form-item>
					<table class="table">
						<tr>
							<th class="item-bar" v-for="(item, index) in selectedValues" v-if="item.values.length > 0">
								{{ item.propName }}
							</th>
							<th>价格</th>
						</tr>
						<tr v-for="(item, index) in createdSkuItems">
							<td v-for="arr in item.values">
								{{ arr.valueName }}
							</td>
							<td style="text-align: center;">
								<el-input v-model="item.price" size="small" class="ipt-text">
									<template slot="prepend">￥</template>
									<template slot="append">元</template>
								</el-input>
							</td>
						</tr>
					</table>
				</el-form-item>
  				
  				<el-form-item label="菜品图片：">
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>				
			 	
				<el-form-item>
					<el-button size="small" icon="check" type="primary" @click="createGoods('ruleForm')">
						确认并添加
					</el-button>
					<el-button size="small" icon="close" type="warning" @click="">
						取消并返回
					</el-button>
				</el-form-item>
			</el-form>
			
			<el-dialog title="编辑属性名称" :visible.sync="editDialog.visible">
				<div :span="24">
					<table class="editNameTable">
						<tr>
							<th class="el-col-10">原名称</th>
							<th class="el-col-14">编辑名称</th>
						</tr>
						<tr v-for="item in selectedValues[editDialog.index].values">
							<td>{{ item.valueName }}</td>
							<td>
								<el-input size="small" v-model="item.editValueName"></el-input>
							</td>
						</tr>
					</table>
				</div>
				<span slot="footer" class="dialog-footer">
				    <el-button size="small" @click="editDialog.visible = false">取 消</el-button>
				    <el-button size="small" type="primary" @click="editValueNameSubmit">确 定</el-button>
			  	</span>
			</el-dialog>
		</el-col>
	</section>
</template>

<script>
import createSku from '@/util/createSku'

export default {
	data() {
		return {
			ruleForm: {
				name: "",						// 菜品名称
				desc: "",						// 菜品简介
				goodsSort: "",					// 菜品分组
			},
			editDialog: {						// 编辑sku名称弹框
				visible: false,					// 控制弹框显示隐藏
				index: 0,						// 修改的sku索引
			},
			selectedValues: [],					// 多选框选择的sku组合信息
			rules: {
	          	name: [
	            		{ required: true, message: '请输入菜品名称', trigger: 'blur' },
	            		{ min: 2, message: '长度不得少于在 2 个字符', trigger: 'blur' }
	          	],
	          	desc: [
	            		{ required: true, message: '请填写菜品简介', trigger: 'blur' }
	          	],
	          	goodsSort: [
	            		{ required: true, message: '请选择菜品分组', trigger: 'change' }
	          	],
			},
			sortData: [{
				id: "1",
				name: "热销系列",
			},{
				id: "2",
				name: "特价系列",
			},{
				id: "3",
				name: "面食系列",
			}],
			skuArr: [{
				propId: "01",
				propName: '口味',
				values: [{
					valueName: '麻辣',
					valueId: '011'
				},{
					valueName: '超辣',
					valueId: '012'
				},{
					valueName: '中辣',
					valueId: '013'
				},{
					valueName: '微辣',
					valueId: '014'
				},{
					valueName: '免辣',
					valueId: '015'
				}]
			},{
				propId: '02',
				propName: '规格',
				values: [{
					valueName: '超大份',
					valueId: '014'
				},{
					valueName: '大份',
					valueId: '015'
				},{
					valueName: '中份',
					valueId: '016'
				},{
					valueName: '小份',
					valueId: '017'
				}]
			}]
		}
	},
	computed: {
		
		// 根据选择的多选框生成一个sku项
		createdSkuItems: function(){
			
			return createSku.init(this.selectedValues);
		},
	},
	created() {
		this.createValues();
	},
	methods: {
		// 根据选择的商品分组之后获取到的sku信息，去生成用户可选的sku多选框
		// 1.通过获取到的sku数据生成数组，数组包涵propId、propName
		createValues() {
			let len = this.skuArr, arr = [];
			
			len.forEach((item, index) => {
				
				let obj = {};
				obj.propId = item.propId,
				obj.propName = item.propName,
				obj.values = [];
				arr.push(obj);
			});
			
			this.selectedValues = arr;
//			console.log(this.selectedValues);
		},
		createGoods(formName) {
			
			// 生成需要提交的sku数据
        		createSku.submitSku(this.createdSkuItems, this.selectedValues);
        	
	        this.$refs[formName].validate((valid) => {
	          	if (valid) {
	            		alert('submit!');
	          	} else {
		            console.log('error submit!!');
		            return false;
      			}
        		});
      	},
      	
      	editNameDialog(index) {
      		this.editDialog.visible = true;
      		this.editDialog.index = index;
      		this.editDialog.oddName = this.skuArr[index].values;
      	},
      	
      	editValueNameSubmit() {
      		let i = this.editDialog.index;
      		this.selectedValues[i].values.forEach((value, index) => {
      			value.valueName = value.editValueName || value.valueName;
      			value.editValueName = "";
      		})
      		this.editDialog.visible = false;
      	},
      	
      	handleRemove(file, fileList) {
	        console.log(file, fileList);
      	},
	    	handlePictureCardPreview(file) {
        		this.dialogImageUrl = file.url;
        		this.dialogVisible = true;
    		}
	}	
}
</script>

<style scoped lang="scss">
.container {	
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
		max-width: 600px;
		border-collapse: collapse;
		.item-bar {
			width: 150px;
			max-width: 200px;
		}
		th {
			padding: 8px 0;
			line-height: 20px;
			text-align: center;
			border: 1px solid #ddd;
			background-color: #f2f2f2;
		}
		td {
			padding: 8px;
			border: 1px solid #ddd;
			.ipt-text {
				min-width: 120px;
				max-width: 150px;
				margin: 0 auto;
			}
		}
	}
	.editNameTable {
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
			padding: 10px;
			border: 1px solid #ddd;
		}
	}
}
</style>