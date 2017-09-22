<template>
	<section>
		<el-col :span="24" class="container">
			<el-tabs type="border-card" 
				v-model="tabIndex"
				@tab-click="toggleTabFun(tabIndex)">
				<el-tab-pane v-for="(item, index) in tabTitle" 
				    :key="item.name"
				    :name="item.id"
					:label="item.name">
					<goods-table v-if="tabIndex == item.id" :tabIndex="tabIndex" :dishesList="dishesList" :currentPage="currentPage"></goods-table>
				</el-tab-pane>
			</el-tabs>
		</el-col>
	</section>
</template>

<script>
import goodsTable from '@/components/goodsTable'

export default {
	data() {
		return {
			tabIndex: "0",							// 指定显示的tab具体哪一项，从0开始(0表示第一项)
			tabTitle: [{
				id: "0",
				name: "全部"
			},{
				id: "1",
				name: "热销系列",
			},{
				id: "2",
				name: "特价系列",
			},{
				id: "3",
				name: "面食系列",
			},{
				id: "4",
				name: "凉菜系列",
			},{
				id: "5",
				name: "饮料系列",
			},{
				id: "6",
				name: "凑单",
			}],
			currentPage: 4,							// 当前分页
			dishesList: [{
				imgSrc: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3052281620,48836246&fm=58",
				title: "招牌荷叶鸡饭",
				sales: "38",
				price: "31.8",
				createTime: "2017-08-28 08:32:08",
				upTime: "2017-08-28 08:32:08",
				downTime: "",
				shelves: true,
			},{
				imgSrc: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1528005120,2291107359&fm=58",
				title: "腊味拼鸡荷叶饭",
				sales: "12",
				price: "32.8",
				createTime: "2017-08-28 08:33:22",
				upTime: "2017-08-28 08:33:22",
				downTime: "2017-08-31 09:00:08",
				shelves: false,
			}]
		}
	},
	components: {
		goodsTable
	},
	methods: {
		toggleTabFun(id) {
			console.log(id)
		}
	}
}
</script>

<style scoped lang="scss">
.container {
	margin-top: 20px;
}
</style>