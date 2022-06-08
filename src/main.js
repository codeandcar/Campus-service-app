import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant, { Lazyload, Toast } from 'vant';
import 'vant/lib/index.css';
import store from './store'
import './assets/global.css'

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Toast);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

