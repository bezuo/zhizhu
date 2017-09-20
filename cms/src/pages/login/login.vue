<template>
	<section class="login-box">
	  	<el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
	    	<h3 class="title">蜘蛛旅游电商后台管理系统</h3>
	    	<el-form-item prop="account">
	      		<el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
	    	</el-form-item>
	    	<el-form-item prop="checkPass">
	      		<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
   			</el-form-item>
	    	<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
	    	<el-form-item style="width:100%;">
	    		<el-button type="primary" style="width:100%;" @click.native.prevent="loginFun('ruleForm')" :loading="logining">登录</el-button>
	    	</el-form-item>
	    	<el-col :span="24" class="login-text">注：推荐使用chrome内核浏览器访问</el-col>
	  	</el-form>
	</section>
</template>

<script>
export default {
	data() {
		return {
			logining: false,
	        ruleForm: {
	          	account: 'admin',
	          	checkPass: '123456'
	        },
	        rules2: {
	          	account: [
	            	{ required: true, message: '请输入账号', trigger: 'blur' },
	          	],
	          	checkPass: [
	            	{ required: true, message: '请输入密码', trigger: 'blur' },
	          	]
        	},
	        checked: true
		}
	},
	created() {
		
	},
	methods: {
		loginFun(ruleForm) {
			
			this.$refs[ruleForm].validate((valid) => {
	          	if (valid) {
            		let loginParams = { username: this.ruleForm.account, password: this.ruleForm.checkPass };
	          	  	sessionStorage.setItem('user', JSON.stringify(loginParams));
  	  				this.$router.push('/orderList');
	          	} else {
	            	console.log('error submit!!');
	            	return false;
	          	}
	        });
		}
	}
}
</script>

<style lang="scss" scoped>

.login-box {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: -webkit-radial-gradient(25% 25%, #cde6ec, #5977c6);	
	.login-container {
	  	position: absolute;
	  	top: 50%;
	  	left: 50%;
	    width: 350px;
	    padding: 35px 35px 15px 35px;
	    border: 1px solid #eaeaea;
	    box-shadow: 0 0 25px #cac6c6;
	    -webkit-border-radius: 5px;
	    background: #fff;
	    background-clip: padding-box;
	    transform: translate(-50%, -60%);
	    border-radius: 5px;
	    -moz-border-radius: 5px;
	    .title {
	      	margin: 0px auto 40px auto;
	      	text-align: center;
	      	color: #505458;
	      	font-size: 24px;
	      	text-shadow: 1px 1px 3px #505458;
		}
	    .remember {
	      	margin: 0px 0px 35px 0px;
	    }
	}
	.login-text {
		color: #fff;
		text-align: center;
		transform: translateY(45px);
	}
}
</style>