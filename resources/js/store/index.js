import { getField, updateField } from "vuex-map-fields";
// import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default {
    state: {
        token: null,
        userID: null,
        dialogLogin: false,
        isLoggin: localStorage.getItem("connected") == "1",
        todoList: [],
        userData: null,
        requestDocument:null,
        notifications:null,
        email: null,
        password:null,
        askedDocs:[],
        cptNotifications:0
        
    },

    getters: {
        getField,
    },
    mutations: {
        updateField,
        setToken(state){
        state.token=null
        },
        setIsLoggin(state, isLoggin) {
            state.isLoggin = isLoggin;
        },
        setTodoList(state, todoList) {
            console.log("todoList", todoList);
            state.todoList = todoList;
        },
        setUserData(state, userData) {
            console.log("todoList", userData);
            state.userData = userData;
        },
    },
    actions: {
        updateIsLoggin({ commit }, isLoggin) {
            commit("setIsLoggin", isLoggin);
        },
        updateTodoList({ commit }, todoList) {
            console.log("dans mon dispatch", todoList);
            commit("setTodoList", todoList);
        },
        updateUserData({ commit }, userData) {
            console.log("dans mon dispatch user", userData);
            commit("setUserData", userData);
        },

    },
    //Seul le token et le userID sont enregistrés automatiqument
    plugins: [
        createPersistedState({
            paths: ["token", "userData", "notifications","tasks","cptNotifications"],
        }),
    ],
};
