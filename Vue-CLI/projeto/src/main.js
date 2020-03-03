import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FoundationSites from 'foundation-sites'
import 'chart.js';
import 'hchs-vue-charts';
import VueResorce from 'vue-resource';

// import  './assets/js/app.js';

Vue.use(window.VueCharts);
Vue.use(FoundationSites);
Vue.config.productionTip = false
Vue.use(VueResorce);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



