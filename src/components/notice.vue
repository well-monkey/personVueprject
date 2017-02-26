<template>
    <div id="notice">
        <div class="noticeTip">
            {{numText}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'notice',
        props:['num'],
        computed:{
            numText:function(){
                 var tempNum = this.num;
                if(tempNum>99){
                    return 99
                }else{
                     return tempNum
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '../assets/css/variables.less';
    .noticeTip{
        width:30px;
        height:30px;
        border-radius: 50%;
        background:red;
        color:#fff;
        text-align: center;
        line-height: 30px;
    }
</style>