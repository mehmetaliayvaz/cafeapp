import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import persons from './modules/persons';
import menu from './modules/menu';
import tables from './modules/tables';
import activeOrders from './modules/activeOrders';
import oldOrders from './modules/oldOrders';

Vue.use(Vuex);

const store =  new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    persons,
    menu,
    tables,
    activeOrders,
    oldOrders,
  }
});

export default store;