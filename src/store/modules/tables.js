const state = {
  tables: [],
}

const getters = {

  getTablesMenu(state){
    return state.tables;
  }

}

const mutations = {

  addTablesCategory(state, payload){
    state.tables.push(payload);
  },
  setEmptyTablesMenu(state){
    state.tables = [];
  },
  setTablesMenu(state, payload){
    state.tables = payload;
  }

}

const actions = {

  addTablesCategory({commit, dispatch}, category){
    commit('addTablesCategory', category);
    dispatch('setStorageTablesMenu');
  },
  setStorageTablesMenu({state, dispatch}){
    localStorage.setItem('tablesMenu', JSON.stringify(state.tables));
    dispatch('getStorageTablesMenu');
  },
  getStorageTablesMenu({commit}){
    if (localStorage.getItem('tablesMenu') === null){ 
      commit('setEmptyTablesMenu');
    }
    else {
      var menu = JSON.parse(localStorage.getItem('tablesMenu'));
      commit('setTablesMenu', menu);
    }
  }


}

export default {
  state,
  getters,
  mutations,
  actions
}