<template>
	<el-row class="container">
		<!-- header start -->
		<el-col :span="24" class="header" :class="{'fn-hide': hide}">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="iconfont icon-fa-menu"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img src="../../static/img/user.png" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<!-- / header end -->
		
		<!-- article start -->
		<el-col :span="24" class="main" :class="{'top0px': hide}">
			<!-- aside start -->
			<aside :class="[collapsed?'menu-collapsed':'menu-expanded',{'fn-hide': hide}]">
				<!-- Navigation to expand start-->
				<el-menu class="el-menu-vertical-demo" 
					:default-active="$route.path"
					unique-opened router v-if="!collapsed">
					<template v-for="(item,index) in $router.options.routes" 
						v-if="!item.hidden">
						<el-submenu :index="index+''" 
							v-if="!item.leaf">
							<template slot="title">
								<i :class="item.iconCls"></i>
								{{ item.name }}
							</template>
							
							<el-menu-item v-for="child in item.children" 
								:index="child.path" 
								:key="child.path" 
								v-if="!child.hidden">
								{{ child.name }}
							</el-menu-item>
						</el-submenu>
						
						<el-menu-item v-if="item.leaf && item.children.length>0" 
							:index="item.children[0].path">
							<i :class="item.iconCls"></i>
							{{ item.children[0].name }}
						</el-menu-item>
					</template>
				</el-menu>
				<!-- / Navigation to expand end-->
				
				<!-- Navigation closed start -->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-if="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title"
								@mouseover="showMenu(index,true)" 
								@mouseout="showMenu(index,false)">
								<i :class="item.iconCls"></i>
							</div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" 
								@mouseover="showMenu(index,true)" 
								@mouseout="showMenu(index,false)"> 
								<li class="el-menu-item" 
									v-for="child in item.children" 
									v-if="!child.hidden" 
									:class="$route.path==child.path?'is-active':''"
									:key="child.path"
									@click="$router.push(child.path)">
									{{child.name}}
								</li>
							</ul>
						</template>
						
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" 
									style="padding-left: 20px; height: 56px;line-height: 56px;padding: 0 20px;" 
									:class="$route.path==item.children[0].path?'is-active':''" 
									@click="$router.push(item.children[0].path)">
									<i :class="item.iconCls"></i>
								</div>
							</li>
						</template>
					</li>
				</ul>
				<!-- / Navigation closed end -->
			</aside>
			<!-- /aside end -->
			
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view class="container-box"></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
		<!-- / article end -->
		
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			sysName:'蜘蛛旅游后台管理系统',
			collapsed:false,
			sysUserName: '',
			hide: false,
		}
	},
	created() {
		let topleftParm = this.$route.query.topLeft;
		if(topleftParm == 'hide') {
			this.hide = true;
		}
		let tokenParm = this.$route.query.token;
		if(tokenParm != null && tokenParm.length > 0) {
			this.hide = true;
		}
	},

	methods: {
		onSubmit() {
			console.log('submit!');
		},
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function (a, b) {
		},
		//退出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				localStorage.removeItem('user');
				_this.$router.push('/login');
			}).catch(() => {

			});
		},
		//折叠导航栏
		collapse:function(){
			this.collapsed=!this.collapsed;
		},
		showMenu(i,status){
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
		}
	},
	mounted() {
		var user = localStorage.getItem('user');
		if (user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysUserAvatar = user.avatar || '';
		}

	}
}
</script>

<style scoped lang="scss">
	/*@import '~scss_vars';*/
	
.iconfont {
	width: 24px;
	font-size: 20px;
	margin: 0 5px 0 3px;
}
.container {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	.header {
		height: 60px;
		line-height: 60px;
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
		.logo {
			height:60px;
			font-size: 18px;
			padding-left:20px;
			padding-right:20px;
			border-color: rgba(238,241,146,0.3);
			border-right-width: 1px;
			border-right-style: solid;
			img {
				width: 40px;
				float: left;
				margin: 10px 10px 10px 18px;
			}
			.txt {
				color:#fff;
			}
		}
		.logo-width{
			width:230px;
		}
		.logo-collapse-width{
			width:60px
		}
		.tools{
			padding: 0px 23px;
			width:14px;
			height: 60px;
			line-height: 60px;
			cursor: pointer;
		}
	}
	.main {
		display: flex;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
		background-color: #fafafa;
		&.top0px {
			top: 0px;
		}
		aside {
			flex:0 0 230px;
			width: 230px;
			.el-menu{
				height: 100%;
			}
			.collapsed{
				width:60px;
				.item {
					position: relative;
				}
				.submenu{
					position:absolute;
					top:0px;
					left:60px;
					z-index:99999;
					height:auto;
					display:none;
				}

			}
		}
		.menu-collapsed{
			flex:0 0 60px;
			width: 60px;
		}
		.menu-expanded{
			flex:0 0 230px;
			width: 230px;
		}
		.content-container {
			flex:1;
			overflow-y: scroll;
			padding: 20px;
			.breadcrumb-container {
				.title {
					width: 200px;
					float: left;
					color: #475669;
				}
				.breadcrumb-inner {
					float: right;
				}
			}
			.content-wrapper {
				background-color: #fafafa;
				box-sizing: border-box;
			}
		}
	}
}
</style>