import Vue from 'vue';
import router from './router/router';
import store from './store/';
import './config/rem';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
});
