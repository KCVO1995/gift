import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Heart from '@/views/Heart.vue';
import Time from '@/views/Time.vue';
import Reject from '@/views/Reject.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/heart',
    component: Heart
  },
  {
    path: '/time',
    component: Time
  },
  {
    path: '/reject',
    component: Reject
  }
];

const router = new VueRouter({
  routes
});

export default router;
