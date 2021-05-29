const state = {
  persons: [{name: 'Yönetici', role: 'admin'}],
  activePerson: 0,
}

const getters = {

  getPersons(state){
    return state.persons;
  },

  getActivePerson(state){
    return state.activePerson;
  }

}

const mutations = {

  savePersons(state, payload){
    state.persons.push(payload);
  },

  setEmptyPersons(state){
    state.persons = [];
  },

  setPersons(state, payload){
    state.persons = payload;
  },

  deletePerson(state, payload){
    state.persons.splice(payload, 1);
  },

}

const actions = {

  savePerson({commit, dispatch}, person){
    commit('savePersons', person);
    dispatch('setStoragePersons');
  },

  setStoragePersons({state, dispatch}){
    localStorage.setItem('persons', JSON.stringify(state.persons));
    dispatch('getPersons');
  },

  getPersons({dispatch, commit}){
    if (localStorage.getItem('persons') === null){ 
      //commit('setEmptyPersons');
      dispatch('setStoragePersons');
    }
    else {
      var persons = JSON.parse(localStorage.getItem('persons'));
      commit('setPersons', persons);
    }
  },

  deletePerson({commit, dispatch}, index){
    commit('deletePerson', index);
    dispatch('setStoragePersons');
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}