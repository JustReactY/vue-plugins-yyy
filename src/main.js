import Vue from 'vue'
import App from './App.vue'
// import plugins from './plugins/index'
import { yButton } from './plugins/index'
import store from './store'

Vue.config.productionTip = false

// Vue.use(plugins)
Vue.use(yButton)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
