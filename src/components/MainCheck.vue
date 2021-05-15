<template>
  <li
    class="border"
    @mouseover="isShow = true"
    @mouseout="isShow = false"
    :class="{ba:isShow}"
  >
    <label>
      <input type="checkbox" :checked="item.isTrue" v-model="item.isTrue"/>
      {{ item.name }}
    </label>
    <button
      class="btn btn-danger btn-sm float-right"
      @click="del"
      v-show="isShow"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: ['index', 'item', 'delObj'],
  methods: {
    del () {
      this.delObj(this.index)
    }
  }
}
</script>

<style lang='less' scoped>
.ba {
  background: rgb(224, 224, 224);
}
</style>
