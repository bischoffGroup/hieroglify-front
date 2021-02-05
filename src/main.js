import VueApexCharts from 'vue-apexcharts';
import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store';
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'codemirror/lib/codemirror.css';

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

store().dispatch('auth/checkLogin').then(() => {
  new Vue({
    router,
    store,
    vuetify,
    icons: {
      iconfont: ['fa']
    },
    render: h => h(App)
  }).$mount('#app');
}).catch(() => {
  new Vue({
    router,
    store,
    vuetify,
    icons: {
      iconfont: ['fa']
    },
    render: h => h(App)
  }).$mount('#app');
});
// new Vue({
//   router,
//   store,
//   vuetify,
//   icons: {
//     iconfont: ['fa']
//   },
//   render: h => h(App)
// }).$mount('#app');
