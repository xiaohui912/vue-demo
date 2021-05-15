<template>
  <main>
    <ul>
      <MainCheck v-for="(item,index) in arr" :key="item.id" :index="index" :item="item"></MainCheck>
    </ul>
  </main>
</template>

<script>
import MainCheck from '@/components/MainCheck'

export default {
  data () {
    return {}
  },
  props: ['arr'],
  components: {
    MainCheck
  }
}
</script>

<style lang='less' scoped>
main li {
  padding: 5px;
  list-style: none;
}
</style>
