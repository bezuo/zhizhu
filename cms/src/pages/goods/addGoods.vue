<template>
	<section>
		<el-col class="container">
			<el-form label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
				<el-form-item label="商品分组" prop="packet">
					<el-radio class="radio" v-for="(item, index) in category" 
						v-model="ruleForm.categoryValue" 
						:label="item.value" style="margin: 0 15px 0 0;">
						{{ item.name }}
					</el-radio>
				</el-form-item>
				
				<el-form-item label="商品品牌" prop="brands">
					<el-radio class="radio" v-for="(item, index) in brands" 
						v-model="ruleForm.brandsValue" 
						:label="item.value">
						{{ item.name }}
					</el-radio>
				</el-form-item>
				
				<el-form-item label="商品标签" prop="label">					
					<el-checkbox-group v-model="ruleForm.checkList">
					  	<el-checkbox v-for="(item, index) in checkLabel" 
					  		:label="item.name" 
					  		:name="item.value" style="margin: 0 15px 0 0;">					  		
					  	</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				
				<el-form-item label="商品名称" prop="name">
					<el-input v-model="ruleForm.goodsName" placeholder="请输入内容" style="width: 50%;"></el-input>
				</el-form-item>
				
				<el-form-item label="商品简介" prop="introduction">
					<el-input type="textarea" rows="3" v-model="ruleForm.desc" style="width: 60%;"></el-input>
				</el-form-item>
				
				<el-form-item label="编辑sku">
				</el-form-item>
				
				<el-form-item label="商品缩略图">
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>
				
				<el-form-item label="商品详情图">
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>
				
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">添加商品</el-button>
					<el-button @click="resetForm('ruleForm')">返回商品列表</el-button>
				</el-form-item>
			</el-form>	
		</el-col>
	</section>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {				
				categoryValue: '',					// 所选分类
				brandsValue: '',					// 所选品牌
				checkList: [],						// 所选商品标签
				goodsName: '',						// 商品名称
				introduction: '',					// 商品简介
			},
			category: [{							// 商品分类
				name: '传统糕点',
				value: '1',
			},{
				name: '枣类制品',
				value: '2',
			},{
				name: '牛肉类',
				value: '3',
			},{
				name: '猪肉类',
				value: '4',
			},{
				name: '豆制品',
				value: '5',
			}],
			brands: [{								// 品牌类别
				name: '百草味',
				value: '1',
			},{
				name: '周黑鸭',
				value: '2',
			},{
				name: '三只松鼠',
				value: '3',
			}],
			checkLabel: [{							// 商品标签
				name: '情人节',
				value: '1',
			},{
				name: '送客户',
				value: '2',
			},{
				name: '夏天',
				value: '3',
			}],
			rules: {
			  	packet: [
			    	{ required: true, message: '请选择一个商品分组', trigger: 'change' }
			  	],
			  	brands: [
			    	{ required: true, message: '请选择商品所属品牌', trigger: 'change' }
			  	],
			  	label: [
			    	{ type: 'array', required: true, message: '请至少选择其中一项', trigger: 'change' }
			  	],
			  	name: [
			  		{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, message: '字符长度不得少于3个字符', trigger: 'blur' }
			  	],
			  	introduction: [
			    	{ required: true, message: '请填写商品简介', trigger: 'blur' }
			  	],
			}
		}
	},
	methods: {
		submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	            	alert('submit!');
	          	} else {
	            	console.log('error submit!!');
	            	return false;
	          	}
        	});
      	},
      	resetForm(formName) {
        	this.$refs[formName].resetFields();
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
    transition: .2s;
    &:hover {
    	box-shadow: 0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)
    }
}
</style>