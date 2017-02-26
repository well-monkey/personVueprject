<template>
	<div id="index">
	 	<header-md title="CET-4" show="y"></header-md>
	 	<leftMenu v-show="this.$store.state.leftMenuShow"></leftMenu>
	 	<div class="privateInfo">
	 		<div class="facing">
	 			<img :src="$store.state.headerImgurl">
	 		</div>
	 		<div class="showDetail">
	 			<h3 class="nameTag">
	 				<div>{{showname}}</div>
					<notice :num="$store.state.notice" v-show="noticeShow" class="notice"></notice>
	 			</h3>
	 			<h3>
	 				<span>
	 					记忆力:<span class="memory">{{$store.state.memory}}</span>
	 				</span>
	 				<span>
	 					经验值:
	 					<span class="xp">{{$store.state.xp}}</span>
	 				</span>
	 			</h3>
	 		</div>
	 	</div>
	 	<div></div>
	 	<div class="animated flash padding-lg">
	 		你好。我是bling bling
	 	</div>

		<button @click="toCreat">去create页面</button>
		<div class="indexBtn">
			<div class="leftCircular"></div>
            <div class="leftBtn">继续计划</div>
            <div class="rightBtn" @click="go([$router,'ReviseBegin'])">复习加经验</div>
            <div class="rightCircular"></div>
        </div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
import notice from '../components/notice.vue'
import headerMd from '../components/header-md.vue'
import leftMenu from '../components/leftMenu.vue'
	export default {
		name: 'index',
		computed:{
			noticeShow:function(){
				if (this.$store.notice == 0) {
					return false
				}else{
					return true
				}
			},
			showname:function(){
				var showname= this.$store.state.name;
				if(showname.length>15){
					showname= showname.substring(0,8)+"..."
				}
				return showname
			}
		},
		methods:{
			...mapMutations([
		        "go"
		    ]),
			toCreat:function(){
				this.$router.push({path:"/Creat"})
			},
			// toRevise:function(){
			// 	this.$router.push({path:"/ReviseBegin"})
			// }
			
		},
		components:{headerMd,leftMenu,notice}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import '../assets/css/variables.less';
	#index{
		width:100%;
		
	}
	.privateInfo{
		width:100%;
		height:70px;
		
	
		overflow: hidden;
	}
	.facing{
		width:30%;
		height:70px;
		float:left;
		position:relative;
		img{
			position: absolute;
			left:0;
			right:0;
			top:0;
			bottom:0;
			margin: auto;
			display: block;
			height: 50px;
			width: 50px;
			border: 3px solid red;
		}
	}
	.showDetail{
		width: 70%;
		height:70px;
		float:left;
		
		overflow: hidden;
		.nameTag{
			font-size: 25px;
			overflow: hidden;
			div{
				float:left;
			}
		}
		h3{
			width:100%;
			height:35px;
			line-height: 35px;
			float:left;
		}
	}
	.notice{
		
		padding-left: 40px;
	}
	.memory{
		color:orange;
	}
	.xp{
		color: blue
	}
	.indexBtn{
		width:220px;
		position:absolute;
		left:0;
		right:0;
		margin:auto;
		bottom:10px;
		overflow: hidden;
		
	
		.leftBtn,.rightBtn{
			width: 80px;
			height:50px;
			text-align: center;
			line-height: 50px;
			float: left;
		}
		.leftBtn{			
			background:#49AA83;
		}
		.rightBtn{
			background:#EB6419;
		}
		.leftCircular{
			width: 30px;
			height:50px;
			border-radius:50px 0 0 50px;
			background:#49AA83;
			float: left;
		}
		.rightCircular{
			width: 30px;
			height:50px;
			border-radius:0 50px 50px 0;
			background:#EB6419;
			float: left;
		}
	}
</style>