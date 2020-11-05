import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import driveDecroder from '@/filters/drive.filter'

Vue.config.productionTip = false

Vue.filter('drive', driveDecroder)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
