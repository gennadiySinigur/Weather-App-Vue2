import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(
  VueSweetalert2, VueAxios, axios,
);

new Vue({
  router,
  store,
  vuetify,
  VueSweetalert2,
  // eslint-disable-next-line id-length
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
