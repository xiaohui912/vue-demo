<template>
  <footer>
    <label><input type="checkbox" v-model="isCheckAll"/> 已完成{{ ready }} / 全部{{ all }}</label>
    <button class="btn btn-danger btn-sm float-right" @click="delA">清除已完成任务</button>
  </footer>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    arr: Array,
    updateAll: Function,
    delAll: Function
  },
  methods: {
    delA () {
      this.delAll()
    }
  },
  computed: {
    all () {
      return this.arr.length
    },
    ready () {
      return this.arr.reduce((prev, item) => {
        if (item.isTrue) {
          prev += 1
        }
        return prev
      }, 0)
    },
    isCheckAll: {
      get () {
        return this.all === this.ready && this.ready > 0
      },
      set (value) {
        this.updateAll(value)
      }
    }
  }
}
</script>
<style lang='less' scoped>
footer {
  padding: 5px;
}
</style>
