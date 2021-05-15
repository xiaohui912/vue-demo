<template>
  <li class="border">
    <h4 class="offset-1">{{ item.username }}说：</h4>
    <span class="offset-2">{{ item.comment }}</span>
    <input
      type="button"
      value="删除"
      class="btn btn-link offset-6"
      @click="delC"
    />
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["index", "item", "delComment"],
  methods: {
    delC() {
      if (confirm("确定要删除吗？")) {
        this.delComment(this.index);
      }
    },
  },
};
</script>
<style lang='less' scoped>
</style>