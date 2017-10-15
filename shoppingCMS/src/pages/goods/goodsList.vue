<template>
	<section>
		<!-- 查询表单 start -->
		<el-col :span="24" class="toolbar" style="padding-top: 20px;">
			<el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="formId">
				<el-col :span="24">
					<el-col :span="6">
						<el-form-item label="商品名称">
							<el-input size="small" v-model="formId.goodsName"></el-input>
						</el-form-item>
					</el-col>
					
					<el-col :span="10">
						<el-form-item label="添加时间">
							<el-date-picker
								size="small"
						      	v-model="formId.createTime"
						      	type="datetimerange"
						      	placeholder="选择时间范围">
						    </el-date-picker>
						</el-form-item>
					</el-col>
					
					<el-col :span="8">
						<el-form-item label="添加人">
							<el-input size="small" v-model="formId.createdPerson"></el-input>
						</el-form-item>
					</el-col>
				</el-col>
				
				<el-col :span="24">
					<el-col :span="6">
						<el-form-item label="是否特价">
							<el-radio-group v-model="formId.specialOffer">
								<el-radio :label="1">全部</el-radio>
							    <el-radio :label="2">是</el-radio>
						    	<el-radio :label="3">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					
					<el-col :span="10">
						<el-form-item label="上架时间">
							<el-date-picker
								size="small"
						      	v-model="formId.onSaleTime"
						      	type="datetimerange"
						      	placeholder="选择时间范围">
						    </el-date-picker>
						</el-form-item>
					</el-col>
					
					<el-col :span="8">
						<el-form-item label="上架人">
							<el-input size="small" v-model="formId.onPerson"></el-input>
						</el-form-item>
					</el-col>
				</el-col>
				
				<el-col :span="24">
					<el-col :span="6">
						<el-form-item label="商品状态">
							<el-radio-group v-model="formId.goodsState">
								<el-radio :label="1">全部</el-radio>
							    <el-radio :label="2">上架</el-radio>
						    	<el-radio :label="3">下架</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					
					<el-col :span="10">						
						<el-form-item label="下架时间">
							<el-date-picker
								size="small"
						      	v-model="formId.downShelfTime"
						      	type="datetimerange"
						      	placeholder="选择时间范围">
						    </el-date-picker>
						</el-form-item>
					</el-col>
					
					<el-col :span="8">						
						<el-form-item label="下架人">
							<el-input size="small" v-model="formId.downPerson"></el-input>
						</el-form-item>
					</el-col>
				</el-col>
				
				<el-col :span="8" style="float:right; margin-top: -10px; padding-bottom: 20px;">
					<el-button type="primary" size="small" icon="search" style="margin: 3px 0 0 30px;">按条件查询</el-button>
					<el-button type="info" size="small" @click="plusGoods" style="margin-top: 3px;"><i class="el-icon-plus"></i>添加商品</el-button>
				</el-col>
			</el-form>
		</el-col>		
		<!-- / 查询表单 end -->
		
		<!-- 商品分类tab start -->
		<el-col :span="24">
			<el-tabs type="border-card" 
				v-model="tabIndex"
				@tab-click="toggleTabFun()">
				<el-tab-pane v-for="(item, index) in tabTitle" 
				    :key="item.name"
				    :name="index"
					:label="item.name">
					<goods-table v-if="tabIndex == index" :currentPage="currentPage" :goodsList="goodsList"></goods-table>
				</el-tab-pane>
			</el-tabs>
		</el-col>		
		<!-- / 商品分类tab end -->
	</section>
</template>

<script>
import goodsTable from '@/components/goodsTable'
	
export default {
	data() {
		return {
			formId: {						// 商品搜索
				goodsName: '',				// 商品名称
				createTime: '',				// 添加时间
				createdPerson: '',			// 添加人
				onSaleTime: '',				// 上架时间
				onPerson: '',				// 上架人
				downShelfTime: '',			// 下架时间
				downPerson: '',				// 下架人
				specialOffer: '',			// 是否特价
				goodsState: ''				// 商品状态				
			},
			tabIndex: 0,					// 指定显示的tab具体哪一项，从0开始(0表示第一项)
			tabTitle: [{					// 商品tab栏目
				name: '全部商品'
			},{					
				name: "传统糕点"
			},{
				name: "枣类制品"
			},{
				name: "肉类"
			},{
				name: "鱼系列"
			},{
				name: "豆制品"
			},{
				name: "干货类"
			},{
				name: "生鲜类"
			}],
			currentPage: 4,								// 当前分页
			goodsList: [{								// 商品数据
				goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",												// 商品名称
				goodsImg: "http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg",		// 商品图片
				salesVolume: "50",						// 商品销量
				stock: "420",							// 库存
				retailPrice: "30",						// 零售价
				originalPrice: "15.8",					// 经销价
				specialOffer: false,					// 特价
				createTime: "2017-08-19 15:00:31",		// 添加时间
				createPeople: "张无忌",					// 添加人
				ModifyTime: "2017-09-07 15:00:31",		// 修改时间
				ModifyPeople: "张三丰",					// 修改人
				shelves: true,							// 是否为上架商品
			},{
				goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",
				goodsImg: "http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg",
				salesVolume: "50",
				stock: "420",
				retailPrice: "30",
				originalPrice: "15.8",
				specialOffer: true,
				createTime: "2017-08-19 15:00:31",
				createPeople: "张无忌",
				ModifyTime: "2017-09-07 15:00:31",
				ModifyPeople: "张三丰",
				shelves: false,
			}],
		}
	},
	created() {
		
	},
	components: {
		goodsTable
	},
	methods: {
		plusGoods() {						// 添加商品
			this.$router.push('/addGoods')
		},
		
		toggleTabFun() {
			console.log("tab切换");
		}
	}
}
</script>

<style>
</style>