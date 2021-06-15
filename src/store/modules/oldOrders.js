const state = {
  oldOrders: [],
}

const getters = {

   getOldOrders(state){
    return state.oldOrders;
  }

}

const mutations = {

  setEmptyOldOrders(state){
    state.oldOrders = [];
  },

  setOldOrders(state, payload){
    state.oldOrders = payload;
  }
  
}

const actions = {

  setStorageOldOrders({state, dispatch}){
    localStorage.setItem('oldOrders', JSON.stringify(state.oldOrders));
    dispatch('getStorageOldOrders');
  },
  getStorageOldOrders({commit}){
    if (localStorage.getItem('oldOrders') === null){ 
      commit('setEmptyOldOrders');
    }
    else {
      var oldOrders = JSON.parse(localStorage.getItem('oldOrders'));
      commit('setOldOrders', oldOrders);
    }
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}