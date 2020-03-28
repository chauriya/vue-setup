import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import i18n from '@/plugins/i18n';
import router from '@/router';
import '@/styles/global.scss';
import '@/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
