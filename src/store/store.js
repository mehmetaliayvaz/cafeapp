import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import persons from './modules/persons';
import menu from './modules/menu';
import tables from './modules/tables';
import pastOrders from './modules/pastOrders';
import activeOrders from './modules/activeOrders';

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
    pastOrders,
    activeOrders,
  }
});

export default store;