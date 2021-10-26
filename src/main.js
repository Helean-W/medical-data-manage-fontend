import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import router from './routes'
Vue.use(ElementUI);
Vue.use(VueMaterial);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
