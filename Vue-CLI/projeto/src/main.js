import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FoundationSites from 'foundation-sites'
import 'chart.js';
import 'hchs-vue-charts';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';

Vue.use(window.VueCharts);
Vue.use(FoundationSites);

Vue.use(VueMoment, {
  moment,
})

// import  './assets/js/app.js';
// import './registerServiceWorker'
import VueResorce from 'vue-resource';
// import 'script-loader!jquery/dist/jquery.min';
// import 'script-loader!what-input/dist/what-input.min';
// import 'script-loader!foundation-sites/dist/js/foundation.min';
Vue.config.productionTip = false

Vue.use(VueResorce);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



