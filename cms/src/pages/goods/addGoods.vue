<template>
	<section>
		<el-col class="container">
			<el-form label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
				<el-form-item label="商品名称：" prop="goodsName">
					<el-input v-model="ruleForm.goodsName" placeholder="请输入内容" style="width: 50%;"></el-input>
				</el-form-item>
				
				<el-form-item label="商品分组：" prop="categoryValue">
					<el-radio-group v-model="ruleForm.categoryValue" 
						@change="selectedCategory(ruleForm.categoryValue)">						
						<el-radio class="radio" v-for="(item, index) in category" 
							:label="item.value" style="margin: 0 15px 0 0;">
							{{ item.name }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
				
				<el-form-item label="商品品牌：" prop="brandsValue">
					<el-radio-group v-model="ruleForm.brandsValue">
						<el-radio class="radio" v-for="(item, index) in brands"
							:label="item.value">
							{{ item.name }}
						</el-radio>
					</el-radio-group>
				</el-form-item>
				
				<el-form-item label="商品标签：" prop="checkList">					
					<el-checkbox-group v-model="ruleForm.checkList">
					  	<el-checkbox v-for="(item, index) in checkLabel" 
					  		:label="item.value" style="margin: 0 15px 0 0;">
					  		{{ item.name }}
					  	</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				
				
				<el-form-item label="商品简介：" prop="introduction">
					<el-input type="textarea" rows="3" v-model="ruleForm.introduction" style="width: 60%;"></el-input>
				</el-form-item>
				
				<el-form-item v-for="(item, index) in skus"
					:label="item.propName + '：'" :data-id="item.propId">
					<el-checkbox-group v-model="selectedValues[index].values"
						@change="checkedFun">
						<el-checkbox v-for="(arr, i) in item.values"
							:label="arr">
							{{ arr.valueName }}
							<!--<el-input size="small" resize="horizontal" v-model="arr.valueName"></el-input>-->
						</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				
				<el-form-item label="特价时间：">
					<el-date-picker
				      	v-model="ruleForm.specialTime"
				      	type="datetimerange"
				      	placeholder="选择时间范围">
				    </el-date-picker>
			    	<span v-if="!!ruleForm.specialTime" style="color: #ff4949;">注：如果选择特价时间，则下方表格中的活动价格必填</span>
				</el-form-item>
				
				<!-- 编辑商品sku信息 start -->
				<el-form-item>
					<table class="sku-table">
						<tr>
							<th v-for="(item, index) in selectedValues" v-if="item.values.length > 0">
								{{ item.propName }}
							</th>
							<th class="label-title">零售价</th>
							<th class="label-title">经销价</th>
							<th class="label-title" v-if="!!ruleForm.specialTime">活动价（特价）</th>
							<th class="label-title">库存数</th>
						</tr>
						<tr v-for="(item, index) in createdSkuItems">
							<td v-for="arr in item.values">
								{{ arr.valueName }}
							</td>
							<td>
								<el-col :span="21">
									<el-input size="small" v-model="item.retailPrice" class="ipt-text"></el-input>
								</el-col>
								<el-col :span="3">元</el-col>
							</td>
							<td>
								<el-col :span="21">
									<el-input size="small" v-model="item.disPrice" class="ipt-text"></el-input>
								</el-col>
								<el-col :span="3">元</el-col>
							</td>
							<td v-if="!!ruleForm.specialTime">								
								<el-col :span="21">									
									<el-input size="small" v-model="item.activityPrice" class="ipt-text"></el-input>
								</el-col>
								<el-col :span="3">元</el-col>
							</td>
							<td>
								<el-col :span="21">
									<el-input size="small" v-model="item.stock" class="ipt-text"></el-input>
								</el-col>
								<el-col :span="3">个</el-col>
							</td>
						</tr>
					</table>
					<!--<el-col></el-col>-->
				</el-form-item>
				<!-- / 编辑商品sku信息 end -->
				
				<el-form-item label="商品缩略图：">
					<el-upload
					  action="https://jsonplaceholder.typicode.com/posts/"
					  list-type="picture-card"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  	<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>
				
				<el-form-item label="商品详情图：">
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
					<el-button @click="backwards">返回商品列表</el-button>
				</el-form-item>
			</el-form>	
		</el-col>
	</section>
</template>

<script>
import createSku from '@/util/createSku'

export default {
	data() {
		return {
			ruleForm: {				
				categoryValue: '',					// 所选分类
				brandsValue: '',					// 所选品牌
				checkList: [],						// 所选商品标签
				goodsName: '',						// 商品名称
				introduction: '',					// 商品简介
				specialTime: '',					// 特价时间
			},
			selectedValues: [],
			rules: {								// 表单验证（这里使用的是element-ui自带的表单验证）
			  	categoryValue: [					// 商品分组验证
			    	{ required: true, message: '请选择一个商品分组', trigger: 'change' }
			  	],
			  	brandsValue: [						// 商品品牌验证
			    	{ required: true, message: '请选择商品所属品牌', trigger: 'change' }
			  	],
			  	checkList: [						// 商品标签验证
			    	{ type: 'array', required: true, message: '请至少选择其中一项', trigger: 'change' }
			  	],
			  	goodsName: [						// 商品名称
			  		{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, message: '字符长度不得少于3个字符', trigger: 'blur' }
			  	],
			  	introduction: [						// 商品简介
			    	{ required: true, message: '请填写商品简介', trigger: 'blur' }
			  	],
			},
			category: [{							// 商品分类数据
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
			brands: [{								// 品牌类别数据
				name: '百草味',
				value: '6',
			},{
				name: '周黑鸭',
				value: '7',
			},{
				name: '三只松鼠',
				value: '8',
			}],
			checkLabel: [{							// 商品标签数据
				name: '情人节',
				value: '9',
			},{
				name: '送客户',
				value: '10',
			},{
				name: '夏天',
				value: '11',
			}],
			skus: [{								// 添加sku的所需数据，根据所选的商品分组来生成
				propId: "01",
				propName: '口味',
				values: [{
					valueName: '香辣',
					valueId: '011'
				},{
					valueName: '麻辣',
					valueId: '012'
				},{
					valueName: '微辣',
					valueId: '013'
				}]
			},{
				propId: '02',
				propName: '规格',
				values: [{
					valueName: '大份',
					valueId: '014'
				},{
					valueName: '中份',
					valueId: '015'
				},{
					valueName: '小份',
					valueId: '016'
				}]
			},{
				propId: '03',
				propName: '颜色',
				values: [{
					valueName: '红色',
					valueId: '017'
				},{
					valueName: '蓝色',
					valueId: '018'
				},{
					valueName: '黑色',
					valueId: '019'
				},{
					valueName: '绿色',
					valueId: '020'
				}]
			}]
		}
	},
	
	computed: {
		
		// 根据选择的多选框生成一个sku项
		createdSkuItems: function(){
			
			return createSku.init(this.selectedValues, this.skus);
		}
	},	
	
	created() {
		this.createValues();
	},
	
	methods: {
		
		// 根据选择的商品分组之后获取到的sku信息，去生成用户可选的sku多选框
		// 1.通过获取到的sku数据生成数组，数组包涵propId、propName
		createValues() {
			let len = this.skus, arr = [];
			
			len.forEach((item, index) => {
				
				let obj = {};
				obj.propId = item.propId,
				obj.propName = item.propName,
				obj.values = [];
				arr.push(obj);
			});
			
			this.selectedValues = arr;
		},
		
		selectedCategory(value) {					// 选择商品分组
			console.log("您选择商品分组是："+ value);
		},
		
		checkedFun() {								// selected商品分组
//			console.log(JSON.stringify(this.selectedValues));
		},
		
		submitForm(formName) {						// 表单提交
			console.log(this.createdSkuItems);
        	this.$refs[formName].validate((valid) => {
	          	if (valid) {
	            	alert('submit!');
	          	} else {
	            	console.log('error submit!!');
	            	return false;
	          	}
        	});
      	},
      	
      	backwards() {								// 返回至列表页
      		this.$router.push("/goodsList");
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
    .sku-table {
    	width: 800px;
    	margin-bottom: 10px;
    	border-collapse: collapse;
    	.label-title {
    		width: 120px;
    	}
    	th {
			padding: 8px 0;    		
    		line-height: 20px;
    		text-align: center;
    		border: 1px solid #bfc3d9;
    		background-color: #f2f2f2;
    	}
    	td {
    		padding: 3px 10px;
    		border: 1px solid #bfc3d9;
    	}    	
    }
    .ipt-text {
    	max-width: 80px;
    }
}
</style>