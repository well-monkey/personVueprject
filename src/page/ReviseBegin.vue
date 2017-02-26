<template>
    <div id="reviseBegin">
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
    </div>
</template>

<script>
// import Vue from 'Vue'
// import VueResource from 'VueResource'
// Vue.use(VueResource)
import {mapMutations} from 'vuex'
import notice from '../components/notice.vue'
import headerLg from '../components/header-lg.vue'
import bottomBtn from '../components/bottomBtn.vue'
    export default {
        name: 'reviseBegin',
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
			
			
			// toRevise:function(){
			// 	this.$router.push({path:"/ReviseBegin"})
			// }
			
		},
		components:{notice}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '../assets/css/variables.less';
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
</style>