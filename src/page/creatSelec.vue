<template>
	<div id="creatSelec">
		<div class="padding-lg">
			<div class="text-size-lg">请选择考试时间</div>
			<div class="padding-sm"></div>
			<div class="text-size-lg-note">                       CET考试时间定于每年6月和12月的第三个星期六
			</div>
			<div class="padding-sm"></div>
			<div class="text-size-lg">2017年</div>
			<div class="padding-sm"></div>
			<p class="text-size-lg-note" @click="isShow = !isShow">选择其他的考试时间</p>
			<div class="padding-sm"></div>
			<div class="radio-lg">
				<ul>
					<li class="radioLi active" id="data-2016-6-17" @click="dateSelect('data-2016-6-17')">
						<div>6月17日</div>
					</li>
					<li class="radioLi noactive" id="data-2016-6-18" @click="dateSelect('data-2016-6-18')">
					   <div>6月18日</div>
					</li>
					<div class="otherLi" v-show="isShow">
						 <li class="radioLi noactive" id="data-2016-6-19" @click="dateSelect('data-2016-6-19')">
							<div>6月19日</div>
						</li>
						<li class="radioLi noactive" id="data-2016-6-20" @click="dateSelect('data-2016-6-20')">
							<div>6月20日</div>
						</li>
						<li class="radioLi noactive" id="data-2016-6-21" @click="dateSelect('data-2016-6-21')">
							<div>6月21日</div>
						</li>
						<li class="radioLi noactive" id="data-2016-6-22" @click="dateSelect('data-2016-6-22')">
							<div>6月22日</div>
						</li>
					</div>
				</ul>
			</div>
			<div class="padding-lg clear-both"></div>
			<div class="text-size-lg">预留备考时间</div>
			<div class="padding-sm"></div>
			<div class="text-size-lg-note">
				设置考试前多少天完成单词计划
			</div>
			<div class="padding-sm"></div>
			<div class="radio-sm">
				<ul>
					<li class="radioLi-sm active-sm" id="data-90" @click="preExamday('data-90')">
						<div>90天</div>
					</li>
					<li class="radioLi-sm noactive-sm" id="data-60" @click="preExamday('data-60')">
						<div>60天</div>
					</li>
					<li class="radioLi-sm noactive-sm" id="data-30" @click="preExamday('data-30')">
						<div>30天</div>
					</li>
				</ul>
			</div>
		<bottomBtn value="下一步" color="orange" @click.native="go([$router,'creatFinsh'])" class="bottomBtn"></bottomBtn>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	import bottomBtn from '../components/bottomBtn.vue'
	export default {
		name: 'creatSelec',
		data(){
			return {
			  isShow:false,			 
			}
	  	},
		methods:{
			// toCreateSelec:function(){
			// 	this.$router.push({path:"/creatFinsh"})
			// },
			...mapMutations([
		        "go"
		    ]),
			dateSelect:function(id){
				var obj = document.getElementsByClassName("radioLi");
				for(var i=0;i<obj.length;i++){
				  obj[i].setAttribute("class","radioLi noactive");
				}
				document.getElementById(id).setAttribute("class","radioLi active");
				this.$parent.examTime = id.replace(/data-/g,"")
			},
			preExamday:function(id){
				var obj = document.getElementsByClassName("radioLi-sm");
				for(var i=0;i<obj.length;i++){
				  obj[i].setAttribute("class","radioLi-sm noactive-sm");
				}
				document.getElementById(id).setAttribute("class","radioLi-sm active-sm");
				this.$parent.preExamTime = id.replace(/data-/g,"")
			},


		},
		components:{bottomBtn}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import '../assets/css/variables.less';
	#creatSelec{
	  width:100%;
	  overflow: hidden;
 	}
   	.radio-lg{
		ul{
			overflow: hidden;
			width:100%;
		}
	    li{
			float: left;
			width:100px;
			height:100px;
			padding:5px;
			margin:0 10px 10px 10px;
		}
		.active{
		background:#49AA83;
			div{
				background-color:@green;
				text-align:center;
				width:100px;
				height:100px;
				line-height: 100px;
				color:@white;
			}
		}
		.noactive{
			border:0;
			background:#F4F4F4;
			div{
				box-sizing: border-box;
				background-color:@gray-lighter;
				text-align:center;
				height:100px;
				line-height: 100px;
				color:@gray;
				border:1px solid @gray-light;
			}
		}
	}
	.radio-sm{
	li{
		float: left;
		width:40px;
		height:20px;
		padding:5px;
		margin:0 10px 10px 10px;
	}
	.active-sm{
		background:#49AA83;
		div{
			background-color:@green;
			text-align:center;
			width:40px;
			height:20px;
			line-height: 20px;
			color:@white;
		}
	}
		
	.noactive-sm{
		border:0;
		background:#F4F4F4;
		div{
			box-sizing: border-box;
			background-color:@gray-lighter;
			text-align:center;
			width:40px;
			height:20px;
			line-height: 20px;
			color:@gray;
			border:1px solid @gray-light;
		}
	}
	
	}

</style>