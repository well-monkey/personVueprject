<template>
    <div id="creatFinsh">
       <header-lg bigTitle="CET-4" hotTitle="四级单词记忆管理"></header-lg>
         
        <div class="formDataList">
            <div class="padding-sm"></div>
           <p>可以传到本页的值{{this.$parent.examTime}}</p>
           <div class="padding-sm"></div>
            <p>可以传到本页的值{{this.$parent.preExamTime}}</p>
            <div class="padding-sm"></div>
            <div class="text-size-lg">真实姓名</div>
            <div class="padding-sm"></div>
            <input type="text" v-model="name"></input>
      
            <div class="text-size-lg">注册手机号</div>
            <div class="padding-sm"></div>
            <input type="text" v-model="mobile"></input>
            <div class="padding-sm"></div>
            <div class="text-size-lg">性别</div>
            <div class="padding-sm"></div>
            <div class="radio-lg">
                <ul>
                    <li class="radioLi active" id="data-1" @click="dateSex('data-1')">
                        <div>男</div>
                    </li>
                    <li class="radioLi noactive" id="data-0" @click="dateSex('data-0')">
                       <div>女</div>
                    </li>
                   
                </ul>
            </div>
        </div>
        <bottomBtn value="完成注册" color="orange" @click.native="go([$router,'creatSuccess'])" class="bottomBtn"></bottomBtn>
    </div>
</template>

<script>
// import Vue from 'Vue'
// import VueResource from 'VueResource'
// Vue.use(VueResource)
import {mapMutations} from 'vuex'
import headerLg from '../components/header-lg.vue'
import bottomBtn from '../components/bottomBtn.vue'
    export default {
        name: 'creatFinsh',
        data(){
            return {
                mobile:"1656347843",
                name:"well",
                sex:"男"   
            }
        },
        methods:{
            // toCreateFinsh:function(){
                // this.$router.push({path:"/creatSuccess"});
                // if(this.name!=""&&this.mobile!=""){
                //     var formData = new formData();
                //     formData.append("name",this.name);
                //     formData.append("mobile",this.mobile);
                //     formData.append("sex",this.sex);
                //     formData.append("examTime",this.$parent.examTime);
                //     formData.append("preExamTime",this.$parent.preExamTime);
                //     this.$http.post("http://"+this.$store.state.serverIp+'json/post_reguser.php',formData).then(
                //         function(response){
                //             console.log(response)
                //         },function(error){
                //               this.$router.push({path:"/ErrorPage"})
                //         })
                // }
                
            // },
            ...mapMutations([
                "go"
            ]),
            dateSex:function(id){
                var obj = document.getElementsByClassName("radioLi");
                for(var i=0;i<obj.length;i++){
                  obj[i].setAttribute("class","radioLi noactive");
                }
                document.getElementById(id).setAttribute("class","radioLi active");
                this.$parent.sex = id.replace(/data-/g,"")
            },

        },
        components:{headerLg,bottomBtn}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '../assets/css/variables.less';
    #creatFinsh{
        width:100%;
    }
    .formDataList{
        width:90%;
        padding-left: 10%;
    }
        .radio-lg{
        ul{
            overflow: hidden;
            width:100%;
        }
        li{
            float: left;
            width:30px;
            height:30px;
            padding:5px;
            margin:0 10px 10px 10px;
        }
        .active{
        background:#49AA83;
            div{
                background-color:@green;
                text-align:center;
                width:30px;
                height:30px;
                line-height: 30px;
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
                height:30px;
                line-height:30px;
                color:@gray;
                border:1px solid @gray-light;
            }
        }
    }
</style>