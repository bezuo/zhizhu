<template>
	<section>
		<el-col :span="24" class="container">
			<el-tabs type="border-card" 
				v-model="tabIndex"
				@tab-click="toggleTabFun()">
				<el-tab-pane v-for="(item, index) in tabTitle" 
				    :key="item.name"
				    :name="item.id"
					:label="item.name">
					<order-table v-if="tabIndex == item.id" :tabIndex="tabIndex" :orderList="orderList" :currentPage="currentPage"></order-table>
				</el-tab-pane>
			</el-tabs>
		</el-col>
	</section>
</template>

<script>
import orderTable from '@/components/orderTable'

export default {
	data() {
		return {
			tabIndex: "0",							// 指定显示的tab具体哪一项，从0开始(0表示第一项)
			tabTitle: [{								// 订单tab栏
				id: "0",
				name:"待接单"
			},{
				id: "1",
				name:"用餐中"
			},{
				id: "2",
				name:"待买单"
			},{
				id: "3",
				name:"已完成"
			},{
				id: "4",
				name:"已取消"
			}],
			currentPage: 4,							// 当前分页
			orderList:[{								// 订单数据
				orderId: "20170910182533001",		// 订单ID
				orderGoods: [{
					ImgSrc: 'http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg',						// 商品图片
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",					// 商品名称
					goodsSku: '尺码L大；红色',		// 商品sku
					price: "14.5",					// 商品价格
					quantity: "1"					// 商品数量
				},{
					ImgSrc: 'http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg',						// 商品图片
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",					// 商品名称
					goodsSku: '尺码L小；红色',		// 商品sku
					price: "10.5",					// 商品价格
					quantity: "2"					// 商品数量
				}],
				diningTable: "5",					// 餐桌号码
				people: "2",							// 用餐人数
				message: "多上点米饭",				// 买家留言
				submitTime: "2017-09-17 12:31:22",	// 下单时间
				confirmTime: "2017-09-17 12:35:01",	// 接单时间
				completeTime: "2017-09-17 13:03:30",	// 完成时间
				cancelTime: "2017-09-17 12:32:22",	// 取消时间
			},{								// 订单数据
				orderId: "20170910182533003",		// 订单ID
				orderGoods: [{
					ImgSrc: 'http://img.alicdn.com/imgextra/i3/1639620692/TB2HULfX0qgF1JjSsppXXaBNXXa_!!1639620692.jpg',						// 商品图片
					goodsTitle: "煲汤料广东冰姨参鸡汤老火煲汤料包炖汤煲汤材料药膳滋补养生汤料",					// 商品名称
					goodsSku: '尺码L大；红色',		// 商品sku
					price: "10.5",					// 商品价格
					quantity: "2"					// 商品数量
				}],
				diningTable: "5",					// 餐桌号码
				people: "2",							// 用餐人数
				submitTime: "2017-09-17 12:31:22",	// 下单时间
				confirmTime: "2017-09-17 12:35:01",	// 接单时间
				completeTime: "2017-09-17 13:03:30",	// 完成时间
				cancelTime: "2017-09-17 12:32:22",	// 取消时间
			}]
		}
	},
	components: {
		orderTable
	},
	methods: {
		
		toggleTabFun() {
			console.log("撒旦撒旦撒旦")
		}
	}
}
</script>

<style scoped lang="scss">
.container {
	margin-top: 20px;
}
</style>