import 'sweetalert2/dist/sweetalert2.min.css';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuetify from 'vuetify';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.use(
  VueSweetalert2, VueAxios, axios,
);

new Vue({
  router,
  store,
  vuetify,
  // eslint-disable-next-line id-length
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
