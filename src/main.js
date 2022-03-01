import Vue from 'vue'
import App from './App.vue'
import plugins from 'vue-plugins-yyy'

import 'vue-plugins-yyy/lib/vue-plugins-yyy.css'

Vue.config.productionTip = false

Vue.use(plugins)

new Vue({
  render: h => h(App),
}).$mount('#app')
