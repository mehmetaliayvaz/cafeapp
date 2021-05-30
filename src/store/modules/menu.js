const state = {
  menu: [],
}

const getters = {

  getMenu(state){
    return state.menu;
  }

}

const mutations = {

  addCategory(state, payload){
    state.menu.push(payload);
  },
  setEmptyMenu(state){
    state.menu = [];
  },
  setMenu(state, payload){
    state.menu = payload;
  }

}

const actions = {

  addCategory({commit, dispatch}, category){
    commit('addCategory', category);
    dispatch('setStorageMenu');
  },
  setStorageMenu({state, dispatch}){
    localStorage.setItem('menu', JSON.stringify(state.menu));
    dispatch('getStorageMenu');
  },
  getStorageMenu({commit}){
    if (localStorage.getItem('menu') === null){ 
      commit('setEmptyMenu');
    }
    else {
      var menu = JSON.parse(localStorage.getItem('menu'));
      commit('setMenu', menu);
    }
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}