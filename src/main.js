import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store/store';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')
