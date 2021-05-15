<template>
  <div id="box" class="border">
    <Header @add="add"></Header>
    <Main :arr="arr"></Main>
    <Footer :arr="arr" :updateAll="updateAll" :delAll="delAll"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      // arr: [
      //   {
      //     id: 1,
      //     name: "喝酒",
      //     isTrue: true,
      //   },
      //   {
      //     id: 2,
      //     name: "抽烟",
      //     isTrue: true,
      //   },
      //   {
      //     id: 3,
      //     name: "烫头",
      //     isTrue: true,
      //   },
      // ],
      arr: JSON.parse(localStorage.getItem('ARR_KEY')) || []
    }
  },
  mounted () {
    // 给总线绑定一个事件
    // $on给谁绑定事件 事件就在谁身上（事件在vm上） 而回调函数会留在组件上
    this.$bus.$on('delObj', this.delObj)
  },
  methods: {
    add (obj) {
      this.arr.splice(0, 0, obj)
    },
    delObj (index) {
      this.arr.splice(index, 1)
    },
    updateAll (value) {
      // eslint-disable-next-line no-return-assign
      this.arr.forEach(item => item.isTrue = value)
    },
    delAll () {
      this.arr = this.arr.filter(item => !item.isTrue)
    }
  },
  components: {
    Header,
    Main,
    Footer
  },
  // 监视
  watch: {
    // 一般监视的是数据的数据，但是数组内部对象的数据监视不到
    // 深度监视可以监视到数组的数据也可以监视到数组里对象的数据
    // 当前监视的数据
    arr: {
      // 开启深度监视
      deep: true,
      // 新值和旧值
      handler (newVal, oldVal) {
        // 只要arr数据发送变化，就把变化后的数据存储到localStorage当中
        // localStorage是前端本地存储的方案，是一个小型的数据库，存储到localStorage当中的东西都会自动转换为字符串
        // localStorage当中有4个api
        // localStorage.setItem('键',值)  //给localStorage存储数据
        // localStorage.getItem('键')   //获取localStorage当中的某个数据
        // localStorage.removeItem('键')   //删除localStorage当中的某个数据
        // localStorage.clear()  //清空localStorage

        localStorage.setItem('ARR_KEY', JSON.stringify(newVal))// 不能之间存对象数据类型，因为对象数据全部会自动传基本

        // 在计算  比较   判等的时候会触发自动数据类型转换
        // 数组专基本  去掉中括号中间留下什么加上引号
        // [1,2,3] + 100 = '1,2,3100'
        // 对象专基本  固定的'[object Object]'
        // {name:'haha'} + 100 = '[object Object]100'
        // 函数赚基本  固定的 函数整体加字符串
        // function fu(){return haha}
        // fu() + 100 = 'function fu(){return haha}100'
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#box {
  width: 600px;
  margin: 0 auto;
  padding: 10px;
}
</style>
