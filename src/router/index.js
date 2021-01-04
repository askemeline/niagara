import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';
import ThirdStep from '../components/steps/ThirdStep.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/card/1',
    name: 'firstStep',
    component: FirstStep,
  },
  {
    path: '/card/2',
    name: 'secondStep',
    component: SecondStep,
  },
  {
    path: '/card/3',
    name: 'thirdStep',
    component: ThirdStep,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
