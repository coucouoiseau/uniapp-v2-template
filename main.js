import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import tabBar from './components/tab-bar.vue'
Vue.component('tab-bar', tabBar)
import statusBarHolder from './components/status-bar-holder.vue'
Vue.component('status-bar-holder', statusBarHolder)

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
