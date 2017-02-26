<template>
  <div id="creat">
    <header-lg bigTitle="CET-4" hotTitle="四级单词记忆管理"></header-lg>
    <div class="text-text padding-md">
      <p>Hi,</p>
      <p class="text-indent">亲爱的你，距离大学英语司机（COLLEGE ENGLISH TEST 4/6）还有365天，根据考试大纲要求，你需要记忆3441个单词，让我帮助你规划的记忆管理。</p>

      <p class="text-indent">当然你不会感觉到枯燥，养成式记忆办法，规划了单词的遗忘曲线，同事，你可以邀请更多的小伙伴一起参与，或加入更多社区。又去的词语接龙，俚语猜猜看，作文漂流瓶，更多的活动游戏美哒哒的学英语吧。</p>
      <p class="text-align-right">会会</p>
    </div>
    <bottomBtn @click.native="go([$router,'creatSelec'])" value="创建计划" color="orange" class="bottomBtn"></bottomBtn>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import headerLg from '../components/header-lg.vue'
import bottomBtn from '../components/bottomBtn.vue'
export default {
  name: 'creat',
  data () {
    return {
      msg: 'Welcome to Your Vue.js creat 注册页面'
    }
  },
  methods:{
    // toCreateSelec:function(){
    //     this.$router.push({path:"/creatSelec"})
    // }
    ...mapMutations([
        "go"
    ])
  },
  components:{headerLg,bottomBtn}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/variables.less';
.text-text{
  font-size: 120%
}

p{
  margin-bottom: 10px;
}



</style>