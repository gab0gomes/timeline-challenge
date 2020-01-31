import Vue from 'vue';
import SvgIcon from 'vue-svgicon';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(SvgIcon, {
  tagName: 'svgicon',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
