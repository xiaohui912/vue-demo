<template>
  <header>
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      class="btn btn-block border text-left"
      @keyup.enter="addO"
      v-model="name"
    />
  </header>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    addO () {
      if (this.name.trim()) {
        const obj = {
          id: Date.now(),
          name: this.name,
          isTrue: false
        }
        this.$emit('add', obj)
      } else {
        alert('请输入合法数据')
      }
      this.name = ''
    }
  }
}
</script>

<style lang='less' scoped>
header {
  margin-bottom: 10px;
}
</style>
