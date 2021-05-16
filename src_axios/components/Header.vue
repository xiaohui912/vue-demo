<template>
  <header class="jumbotron container" style="margin-bottom: 20px">
    <p class="h1" style="margin-bottom: 20px;">Search Github Users</p>
    <input type="text" v-model="keyword" class="btn btn-dark text-left" placeholder="enter the name you search" @keyup.enter="search">
    <button class="btn btn-success" @click="search" >Search</button>
  </header>
</template>

<script>
export default {
  name: 'Header.vue',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      const { keyword } = this
      if (keyword.trim()) {
        this.$bus.$emit('searchAjax', keyword)
      } else {
        alert('请输入合法数据')
      }

      this.keyword = ''
    }
  }
}
</script>

<style scoped>

</style>
