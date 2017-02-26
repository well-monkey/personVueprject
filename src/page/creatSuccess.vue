<template>
    <div id="creatFinsh">
        <div id="headerMd">   
            <h1>CET-4</h1>
            <header id="menu" class="header">         
            </header>
        </div>
       
        <div class="text-size-lg padding-md" >注册成功</div>
        <div class="padding-md">经验值+{{message}}</div>
        <bottomBtn value="查看计划" color="orange" @click.native="go([$router,''])"></bottomBtn>
    
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import headerMd from '../components/header-md.vue'
import bottomBtn from '../components/bottomBtn.vue'
    export default {
        name: 'creatFinsh',
        data(){
            return {
               message:60
            }
        },
        methods:{
            // toCreateFinsh:function(){
            //     this.$router.push({path:"/"});
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
          
        },
        components:{headerMd,bottomBtn}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/variables.less";
#headerMd{
    height:50px;
    line-height: 50px;
    box-shadow:#ddd 0 3px;
    width:100%;
    background:linear-gradient(270deg,@greencolor 0%,@turquoise 100%);
    color:@white;
    font-size: 200%;
    h1{
        float:left;
    }
}

#menu{
    float:right;
}
</style>