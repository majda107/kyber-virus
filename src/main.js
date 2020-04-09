import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false

import VueGoogleCharts from 'vue-google-charts'
Vue.use(VueGoogleCharts)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
