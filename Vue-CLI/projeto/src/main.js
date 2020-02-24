import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import './registerServiceWorker'
import VueResorce from 'vue-resource';
import 'script-loader!jquery/dist/jquery.min';
// import 'script-loader!what-input/dist/what-input.min';
// import 'script-loader!foundation-sites/dist/js/foundation.min';
import  './assets/js/app.js';


Vue.config.productionTip = false
Vue.use(VueResorce);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



