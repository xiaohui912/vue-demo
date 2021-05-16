import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  el: '#app',
  render: h => h(App)
})
