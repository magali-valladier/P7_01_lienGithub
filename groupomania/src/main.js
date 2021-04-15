import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/custom.scss'
import router from './router'
import store from './store'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(FontAwesomeIcon)


Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
