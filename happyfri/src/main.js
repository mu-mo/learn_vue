import Vue from 'vue';
import router from '@/router/router';
import store from '@/store/';
import '@/common/rem';
import '@/common/common.less';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
});
