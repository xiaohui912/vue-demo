import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  beforeCreate () {
    // 在Vue的原形上添加一个$bus 让他指向Vue的实例对象vm 名为总线
    // 成为总线的条件
    // 1 必须让所有的组件对象都能看到（找到）
    // 2 这个对象必须能使用$on和$emit方法
    // 在vue当中基本都会选择vm作为全局事件总线
    Vue.prototype.$bus = this
  },
  el: '#app',
  render: h => h(App)
})
