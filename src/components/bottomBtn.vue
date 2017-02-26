<template>
  <div id="bottomBtn">
      <button id="btn" v-bind:class="colorName" class="text-size-md">{{value}}</button>
  </div>
</template>

<script>
export default {
  name: 'bottomBtn',
  props:["value","color","position"],
  computed:{
    colorName:function(){
      if(this.color == "orange"){
        return this.colorName="orange"
      }else if(this.color == "green"){
        return this.colorName="green"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/variables.less";
#bottomBtn{
  width:100%;
  height:50px;
  text-align: center;
  padding:10px 0 10px 0;
}
#btn{
  heiht:45px;
  width:80%;
  color:#fff;
  border:0;
  border-radius: @border-radius;
  letter-spacing: 2px;
  outline: none
}
.orange{
  background:orange;
}
.green{
  background:green;
}
</style>