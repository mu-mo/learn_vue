import VueRouter from 'vue-router';
import Vue from 'vue';
import App from '@/App';
import home from '@/page/home';
import item from '@/page/item';
import score from '@/page/score';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(home), 'home'),
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(item), 'item'),
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(score), 'score'),
  }],
}];
const router = new VueRouter({
  routes,
});

export default router;
