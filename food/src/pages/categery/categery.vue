<template>
	<section class="container">
		<!-- header start -->
		<v-header :headerObj="headerObj" @callBackFun="parentLisen"></v-header>		
		<!-- / header end -->
		
		<!-- merchant list start -->
		<section class="content-box">			
			<v-list :itemsMerchant="itemsMerchant" class="items-container"></v-list>
		</section>
		<!-- / merchant list end -->
	</section>
</template>

<script type="text/javascript">
import vHeader from '@/components/header'
import vList from '@/components/merchantList'

export default {
	data() {
		return {
			headerObj: {
				title: "正餐",				// 头部标题
				leftShow: true,				// 返回按钮
				rightText: ""				// 右上角文字
			},
			itemsMerchant: [],				// 获取商家列表
		}
	},
	
	components: {
		vHeader,
		vList
	},
	
	created() {
		this.getMerchantList();
	},
	
	methods: {
		
		// 获取商家列表
		getMerchantList() {
			api.getMerchantList().then((res) => {
				if(res.code != "0") return;
				this.itemsMerchant = res.page.list;
			});
		},
		
		parentLisen(evtValue) {
			this.$router.push('/order');
		},
		
	}
}
</script>

<style scoped lang="scss">
@import '../../style/global.scss';

.container {
	padding-top: px2rem(88px);
	background-color: #fff;
	.content-box {
		padding-left: px2rem(30px);
	}
}
</style>