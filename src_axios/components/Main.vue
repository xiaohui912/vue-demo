<template>
  <main class="container">
    <div class="row">
      <h2 v-if="isOne">欢迎进入本站</h2>
      <h2 v-else-if="isTwo">正在搜索……</h2>
      <h2 v-else-if="isThree">出现错误 --- {{ isThree }}</h2>
      <div class="col-4 border text-center" v-else v-for="item in isList" :key="item.username">
        <a :href="item.userurl" target="_blank">
          <img style="width: 100px" :src="item.userimg" alt="#">
        </a>
        <p>{{ item.username}}</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main.vue',
  data () {
    return {
      isOne: true,
      isTwo: false,
      isThree: '',
      isList: []
    }
  },
  mounted () {
    this.$bus.$on('searchAjax', this.searchAjax)
  },
  methods: {
    searchAjax (q) {
      this.isOne = false
      this.isTwo = true

      axios({
        url: 'https://api.github.com/search/users',
        method: 'get',
        params: {
          q
        }
      }).then(response => {
        this.isTwo = false
        this.isList = response.data.items.map(item => ({
          username: item.login,
          userurl: item.html_url,
          userimg: item.avatar_url
        }))
      }).catch(error => {
        this.isTwo = false
        this.isThree = error.message
      })
    }
  }
}
</script>

<style scoped>

</style>
