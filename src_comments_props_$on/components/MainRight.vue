<template>
  <div class="right col-7 offset-1">
    <h3>评论回复</h3>
    <ul class="list-group " style="list-style: none; ">
      <RightItem v-for="(item,index) in comments" :key="item.id" :index="index" :item="item" :delComment="delComment"></RightItem>
    </ul>
  </div>
</template>

<script>
import RightItem from "@/components/RightItem.vue";
export default {
  data() {
    return {};
  },
  props: ["comments","delComment"],
  components: {
    RightItem,
  },
};
</script>
<style lang='less' scoped>
</style>