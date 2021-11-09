import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import router from './routes'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 手动引入 ECharts 各模块来减小打包体积

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  PieChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'

use([
  TitleComponent,
  CanvasRenderer,
  PieChart,
  TooltipComponent,
  TitleComponent,
  LegendComponent
]);

// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts)


Vue.use(ElementUI);
Vue.use(VueMaterial);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
