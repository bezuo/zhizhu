<template>
	<section>
		<el-col :span="24" class="container">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
				<el-form-item label="商户名称：" prop="name">
			    		<el-input v-model="ruleForm.name" size="small" style="max-width: 420px;"></el-input>
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
			 				 	
			 	<el-form-item label="商户公告：" prop="desc">			 		
	    				<el-input type="textarea" v-model="ruleForm.desc" size="small" :rows="3" style="max-width: 520px;"></el-input>
			 	</el-form-item>
			 	
			 	<el-form-item label="联系电话：" prop="tel">
			    		<el-input v-model="ruleForm.tel" size="small" style="max-width: 200px;"></el-input>
			 	</el-form-item>
			 	
			 	<el-form-item label="商户地址：">
			 		<el-select v-model="ruleForm.province" placeholder="请选择省份" style="margin: 0 6px 10px 0;">
					    <el-option v-for="item in province"
					      	:key="item.id"
					      	:label="item.value"
			      			:value="item.id">
				    		</el-option>
				  	</el-select>
				  	
				  	<el-select v-model="ruleForm.city" placeholder="请选择城市" style="margin: 0 6px 10px 0;">
					    <el-option v-for="item in city"
					      	:key="item.id"
					      	:label="item.value"
			      			:value="item.id">
				    		</el-option>
				  	</el-select>
				  	
				  	<el-select v-model="ruleForm.county" placeholder="请选择区县" style="margin: 0 6px 10px 0;">
					    <el-option v-for="item in county"
					      	:key="item.id"
					      	:label="item.value"
			      			:value="item.id">
				    		</el-option>
				  	</el-select>
				  	
				  	<el-select v-model="ruleForm.street" placeholder="请选择乡镇街道" style="margin: 0 6px 10px 0;">
					    <el-option v-for="item in street"
					      	:key="item.id"
					      	:label="item.value"
			      			:value="item.id">
				    		</el-option>
				  	</el-select>
			 	</el-form-item>
			 	
			 	<el-form-item label="营业时间：" style="text-align: center;">
		    			<el-time-picker
				    		is-range
				    		v-model="ruleForm.time"
				    		placeholder="选择时间范围">
					</el-time-picker>
			 	</el-form-item>
			 	
			 	<el-form-item>
					<el-button size="small" icon="check" type="primary" @click="submitFun('ruleForm')">提交修改</el-button>
					<el-button size="small" icon="close" type="warning" @click="backFun">取消并返回</el-button>
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
				name: "",						// 商户名称
				desc: "",						// 商户公告
				tel: "",							// 商户电话
				time: "",						// 营业时间
				province: "",					// 省份信息
				city: "",						// 城市
				county: "",						// 区县
				street: "",						// 乡镇或街道
			},
			province: [{							// 省份信息
				id: '1',
          		value: '北京市',
			},{
				id: '2',
          		value: '广东省',
			}],
			city: [{								// 城市
				id: '5',
          		value: '广州市',
			},{
				id: '4',
          		value: '深圳市',
			}],
			county: [{							// 区县
				id: '6',
          		value: '南山区',
			},{
				id: '7',
				value: '福田区'
			}],
			street: [{
				id: '8',
				value: '西丽街道'
			},{
				id: '9',
				value: '南海大道'
			}],
			rules: {
	          	name: [
	            		{ required: true, message: '请输入商户名称', trigger: 'blur' },
	            		{ min: 2, message: '长度不得少于在 2 个字符', trigger: 'blur' }
	          	],
	          	desc: [
	            		{ required: true, message: '请填写菜品简介', trigger: 'blur' }
	          	],
	          	tel: [
	            		{ required: true, message: '请输入联系电话', trigger: 'blur' }
	          	],
			},
		}
	},
	methods: {
		
		submitFun() {					//   提交修改
			console.log("提交修改")
		},
		
		backFun() {						//  取消并返回
			this.$router.back(-1);
		},
		
		handleRemove(file, fileList) {
	        console.log(file, fileList);
      	},
      	handlePictureCardPreview(file) {
      		console.log(file);
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
}
</style>