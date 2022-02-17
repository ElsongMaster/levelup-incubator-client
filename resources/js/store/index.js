import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
// import axios from 'axios'
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    userID:null,
    email:null,
    password:null,
    userInfo:{},
    dialogLogin:false
  },
  mutations: {
    updateField,

  },
  actions: {

  },

  getters: {
    getField,
  },
  //Seul le token et le userID sont enregistrés automatiqument
  plugins: [createPersistedState({
    paths: ['token','userID']
  })],

})
