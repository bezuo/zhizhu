<template>
	<el-row class="container">
		<!-- header start -->
		<el-col :span="24" class="header">
			
		</el-col>
		<!-- / header end -->
		
		<!-- article start -->
		<el-col :span="24">
			
		</el-col>
		<!-- / article end -->
		
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
	/*@import '~scss_vars';*/

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			padding: 0 20px;
			/*background-color: $color-primary;*/
			background: #5977c6;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
		}
	}
</style>