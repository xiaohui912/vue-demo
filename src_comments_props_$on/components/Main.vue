<template>
  <main class="container">
    <div class="row">
      <!-- 自定义事件麻烦写法 -->
      <!-- <MainLeft ref="add"></MainLeft> -->
      <!-- 自定义事件简便写法 -->
      <MainLeft @addComment="addComment"></MainLeft>
      <MainRight :comments="comments" :delComment="delComment"></MainRight>
    </div>
  </main>
</template>

<script>
import MainLeft from "@/components/MainLeft.vue";
import MainRight from "@/components/MainRight.vue";
export default {
  data() {
    return {
      comments: [
        { id: 1, username: "xiaohui", comment: "vueniubi" },
        { id: 2, username: "xiaoliang", comment: "vuenlihai" },
        { id: 3, username: "xiaogang", comment: "vuenhaoqiang" },
      ],
    };
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    },
    delComment(index) {
      this.comments.splice(index, 1);
    },
  },
  components: {
    MainLeft,
    MainRight,
  },
  // //自定义事件麻烦写法
  // mounted(){
  //   //对子组件绑定自定义事件
  //   this.$refs.add.$on('addComment',this.addComment)
  // }
};
</script>
<style lang='less' scoped>
</style>