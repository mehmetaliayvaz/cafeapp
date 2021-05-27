import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home';
import Tables from './components/Tables';
import TablesEdit from './components/TablesEdit';
import MenuEdit from './components/MenuEdit';
import PersonEdit from './components/PersonEdit';
import PastOrders from './components/PastOrders';


const routes = [
  { path: '/', component: Home },
  { path: '/tables', component: Tables },
  { path: '/tables-edit', component: TablesEdit },
  { path: '/menu-edit', component: MenuEdit},
  { path: '/person-edit', component: PersonEdit },
  { path: '/past-orders', component: PastOrders },
  { path : "*", redirect : '/'}
];


const router = new VueRouter({
  mode : "history",
  routes,
});


export default router;
