import Vue from 'vue'
import App from './App.vue'

import bugsnagClient from './lib/bugsnag'
import bugsnagVue from 'bugsnag-vue'

bugsnagClient.use(bugsnagVue(Vue))

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
