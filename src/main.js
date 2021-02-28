import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

Vue.use(VueCompositionAPI)
Vue.use(MotionPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
