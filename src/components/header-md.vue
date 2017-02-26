<template>
    <div id="headerMd">
      
        <h1>{{title}}</h1>
        <header v-show="moreshow" id="menu" class="header">
            <img src="" alt="三" @click="menuOpen">
        </header>
       
       
       
    </div>
</template>

<script>
    export default {
        name: 'header-md',
        props:['title','show'],
        data(){
            return{
                moreshow:true
            }
        },
        computed:{
            preshow:function(){
                if(this.show=="y"){
                    return this.moreshow = true
                }else{
                      return this.moreshow = false
                }
            }
        },
        methods:{
            menuOpen:function(){
                  this.$store.state.leftMenuShow=true
            }
        }
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