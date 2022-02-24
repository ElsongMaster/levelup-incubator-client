/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
// import Alpine from 'alpine.js';
import vuetify from "./vuetify";
// import '../../node_modules/vuetify/dist/vuetify.min.css'
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
// import {createRouter, createWebHistory} from "vue-router";
import Vuex from "vuex";
// window.Alpine = Alpine;




window.Vue = require("vue").default;

import storeData from "./store/index"

//Stockage de mon vuex
const store = new Vuex.Store(
    storeData

 )


//Routes
import { routes } from "./routes";
Vue.component(
    "app-component",
    require("./components/AppComponent.vue").default
);

Vue.use(VueRouter);

Vue.use(vuetify);


// Register Routes
const router = new VueRouter({
    base: "/",
    mode: "history",
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // console.log("dans mon before",);
        if (localStorage.getItem("connected") == "0") {
            next({ path: "/" });
        } else {
            next();
        }
    } else {
        console.log("skip");
        next(); // does not require auth, make sure to always call next()!
    }
});
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    store,
    router,
    vuetify,
});

// Alpine.start();
