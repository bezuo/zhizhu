<template>
	<section>
		<el-col class="container">
			<el-form label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
				<el-form-item label="商户名称：" prop="name">
					<el-input v-model="ruleForm.name" style="width: 50%;"></el-input>
				</el-form-item>
				
				<el-form-item label="商户简介：" prop="introduction">
					<el-input type="textarea" rows="3" v-model="ruleForm.introduction" style="width: 60%;"></el-input>
				</el-form-item>
				
				<el-form-item label="商户头像：">
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>
				
				<el-form-item label="店铺详图：">
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>
								
				<el-form-item label="所属位置：" required>
					<el-col :span="8" style="width: 160px;">
						<el-form-item prop="province">							
							<el-select v-model="ruleForm.province" placeholder="请选择省份" class="select-box">
						    	<el-option
							      	v-for="item in province"
							      	:key="item.id"
							      	:label="item.value"
							      	:value="item.id">
						    	</el-option>
						  	</el-select>
						</el-form-item>
					</el-col>
				  	
				  	<el-col :span="8" style="width: 160px;">
						<el-form-item prop="city">	
						  	<el-select v-model="ruleForm.city" placeholder="请选择城市" class="select-box">
						    	<el-option
							      	v-for="item in city"
							      	:key="item.id"
							      	:label="item.value"
							      	:value="item.id">
						    	</el-option>
						  	</el-select>
						</el-form-item>
					</el-col>
				  	
				  	<el-col :span="8" style="width: 160px;">
						<el-form-item prop="county">	
						  	<el-select v-model="ruleForm.county" placeholder="请选择区县" class="select-box">
						    	<el-option
						    		style="width: 150px;"
							      	v-for="item in county"
							      	:key="item.id"
							      	:label="item.value"
							      	:value="item.id">
						    	</el-option>
						  	</el-select>
						</el-form-item>
					</el-col>
				</el-form-item>
				
				<el-form-item style="padding-top: 20px;">
			    	<el-button type="primary" @click="onSubmit('ruleForm')">确认提交</el-button>
			    	<el-button>取消修改</el-button>
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
				name: '',					// 商户名称
				introduction: '',			// 商户简介
				province: '',				// 省份
				city: '',					// 城市
				county: ''					// 区县
			},
			province: [{					// 省份信息
				id: '1',
          		value: '北京市',
			},{
				id: '2',
          		value: '广东省',
			}],
			city: [{						// 城市
				id: '5',
          		value: '广州市',
			},{
				id: '4',
          		value: '深圳市',
			}],
			county: [{						// 区县
				id: '6',
          		value: '南山区',
			},{
				id: '7',
				value: '福田区'
			}],
			rules: {						// 数据验证
				name: [						// 店铺名称
			    	{ required: true, message: '请输入店铺名称', trigger: 'blur' },
					{ min: 3, message: '字符长度不得少于3个字符', trigger: 'blur' }
			  	],
			  	introduction: [
			  		{ required: true, message: '请填写商品简介', trigger: 'blur'},
			  	],
			  	province: [
			  		{ required: true, message: '请选择所属省份', trigger: 'change' }
			  	],
			  	city: [
			  		{ required: true, message: '请选择所属省份', trigger: 'change' }
			  	],
			  	county: [
			  		{ required: true, message: '请选择所属省份', trigger: 'change' }
			  	]
			}
		}
	},
	methods: {
		onSubmit(formName) {				// 提交表单
			this.$refs[formName].validate((valid) => {
	          	if (valid) {
	          		console.log("提交表单成功")
	          	} else {
	            	console.log('error submit!!');
	            	return false;
	          	}
        	});
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
    transition: .2s;
    background-color: #fff;
    &:hover {
    	box-shadow: 0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)
    }
    
    .select-box {
    	width: 150px;
    }
}    
</style>