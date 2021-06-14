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
    state.tables = [
      { name: 'A1', active: 0 , fullness: 0, content: []},
      { name: 'A2', active: 0 , fullness: 0, content: []},
      { name: 'A3', active: 0 , fullness: 0, content: []},
      { name: 'A4', active: 0 , fullness: 0, content: []},
      { name: 'A5', active: 0 , fullness: 0, content: []},
      { name: 'A6', active: 0 , fullness: 0, content: []},
      { name: 'A7', active: 0 , fullness: 0, content: []},
      { name: 'A8', active: 0 , fullness: 0, content: []},
      { name: 'A9', active: 0 , fullness: 0, content: []},
      { name: 'A10', active: 0 , fullness: 0, content: []},
      { name: 'B1', active: 0 , fullness: 0, content: []},
      { name: 'B2', active: 0 , fullness: 0, content: []},
      { name: 'B3', active: 0 , fullness: 0, content: []},
      { name: 'B4', active: 0 , fullness: 0, content: []},
      { name: 'B5', active: 0 , fullness: 0, content: []},
      { name: 'B6', active: 0 , fullness: 0, content: []},
      { name: 'B7', active: 0 , fullness: 0, content: []},
      { name: 'B8', active: 0 , fullness: 0, content: []},
      { name: 'B9', active: 0 , fullness: 0, content: []},
      { name: 'B10', active: 0 , fullness: 0, content: []},
      { name: 'C1', active: 0 , fullness: 0, content: []},
      { name: 'C2', active: 0 , fullness: 0, content: []},
      { name: 'C3', active: 0 , fullness: 0, content: []},
      { name: 'C4', active: 0 , fullness: 0, content: []},
      { name: 'C5', active: 0 , fullness: 0, content: []},
      { name: 'C6', active: 0 , fullness: 0, content: []},
      { name: 'C7', active: 0 , fullness: 0, content: []},
      { name: 'C8', active: 0 , fullness: 0, content: []},
      { name: 'C9', active: 0 , fullness: 0, content: []},
      { name: 'C10', active: 0 , fullness: 0, content: []},
      { name: 'D1', active: 0 , fullness: 0, content: []},
      { name: 'D2', active: 0 , fullness: 0, content: []},
      { name: 'D3', active: 0 , fullness: 0, content: []},
      { name: 'D4', active: 0 , fullness: 0, content: []},
      { name: 'D5', active: 0 , fullness: 0, content: []},
      { name: 'D6', active: 0 , fullness: 0, content: []},
      { name: 'D7', active: 0 , fullness: 0, content: []},
      { name: 'D8', active: 0 , fullness: 0, content: []},
      { name: 'D9', active: 0 , fullness: 0, content: []},
      { name: 'D10', active: 0 , fullness: 0, content: []},
    ];
  },
  setTablesMenu(state, payload){
    state.tables = payload;
  }

}

const actions = {

  // addTablesCategory({commit, dispatch}, category){
  //   commit('addTablesCategory', category);
  //   dispatch('setStorageTablesMenu');
  // },
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