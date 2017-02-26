<template>
  <div id="header-lg">
    <div class="box-padding">
        <h3>{{bigTitle}}</h3>
        <h4>{{hotTitle}}</h4>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'header-lg',
  props:["bigTitle","hotTitle"]
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/variables.less";
#header-lg{
  height:150px;
  box-shadow:#ddd 0 3px;
  width:100%;
  background:linear-gradient(270deg,@greencolor 0%,@turquoise 100%);
  color:@white;
}
.box-padding{
  padding:50px 0 0 20px; 
}
h3{
  font-size: 300%;

}
h4{
  font-size: 120%;
  position:relative;

}
</style>