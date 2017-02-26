// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
require('!style!css!less!./assets/css/main.less');
require('!style!css!less!./assets/css/animate.css');
import Creat from './page/creat.vue'
import creatSelec from './page/creatSelec.vue'
import creatFinsh from './page/creatFinsh.vue'
import creatSuccess from './page/creatSuccess.vue'
import ReviseBegin from './page/ReviseBegin.vue'
import index from './page/index.vue'
import store from './store/index.js'


const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:index},
		{path:"/creat",component:Creat},
    	{path:"/creatSelec",component:creatSelec},
    	{path:"/creatFinsh",component:creatFinsh},
    	{path:"/creatSuccess",component:creatSuccess},
    	{path:"/ReviseBegin",component:ReviseBegin},
		  {path:"*",component:index},
	]
})
/* eslint-disable no-new */
var vm = new Vue({
	router,
	store,
	data:{
	  	examTime:"data-2016-6-17",
	    preExamTime:"data-90",

	},
	template: `
	<div>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
	`,
	beforeCreate:function(){
		console.log(this.$store.state.newbi)
		//和服务器中断连接
		if(this.$store.state.serverIp==0){
			router.push({"path":"/error"})
		}
		//判断是否注册用户
		if(this.$store.state.newbi==1){
			router.push({"path":"/"})
		}else{
		router.push({"path":"/creat"})
		}
	}
}).$mount("#app")
