<template>
    <div id="leftMenu">
        <div id="menu">
            <h2 class="text-size-lg text-align-center">CET-4</h2>
            <h3 class="text-align-center">四級單詞記憶管理</h3>
        </div>
        <div id="zz" @click="closeMenu"></div>

    </div>
</template>

<script>

    export default {
        name: 'leftMenu',
        methods:{
            closeMenu:function(){
                this.$store.state.leftMenuShow=false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '../assets/css/variables.less';
    #menu{
        z-index: 100;
         width:70%;
        height:100%;//微信支持100%
        position:fixed;
        left:0;
        top:0;
        background: @gray-dark;
        padding-top: 30px;
        color:#fff;

    }
    #zz{
        z-index: 99;
        width:100%;
        height:100%;//微信支持100%
        position:fixed;
        left:0;
        top:0;
        background: @black;
        opacity:0.2;
    }
</style>