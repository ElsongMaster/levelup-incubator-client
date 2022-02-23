import { getField, updateField } from "vuex-map-fields";
// import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default {
    state: {
        token: null,
        userID: null,
        email: null,
        password: null,
        userInfo: {},
        dialogLogin: false,
        isLoggin: localStorage.getItem("connected") == "1",
    },

    getters: {
        getField,
    },
    mutations: {
        updateField,
        setIsLoggin(state, isLoggin) {
            state.isLoggin = isLoggin;
        },
    },
    actions: {
        updateIsLoggin({ commit }, isLoggin) {
            commit("setIsLoggin", isLoggin);
        },
    },
    //Seul le token et le userID sont enregistrés automatiqument
    plugins: [
        createPersistedState({
            paths: ["token", "userID"],
        }),
    ],
};
