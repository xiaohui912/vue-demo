<template>
  <div class="left col-4">
    <label for="username">用户名</label><br />
    <input
      type="text"
      id="username"
      class="btn btn-block text-left border-dark"
      placeholder="用户名"
      v-model="username"
    /><br />
    <label for="text">评论内容</label><br />
    <textarea
      name="text"
      id=""
      cols="30"
      rows="10"
      class="btn btn-block text-left border-dark"
      placeholder="评论内容"
      v-model="comment"
    ></textarea>
    <button
      type="button"
      class="btn btn-light border-dark float-lg-right"
      @click="submit"
    >
      提交
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      comment: "",
    };
  },
  // props: ["addComment"],
  methods: {
    submit() {
      let { username, comment } = this;

      if (username.trim() && comment.trim()) {
        let obj = {
          id: Date.now(),
          username,
          comment,
        };
        // 自定义事件的触发 分发 调用回调
        this.$emit('addComment',obj);
      } else {
        alert("请规范输入");
      }

      this.username = "";
      this.comment = "";
    },
  },
};
</script>
<style lang='less' scoped>
</style>