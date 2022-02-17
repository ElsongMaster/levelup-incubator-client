/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
// import Alpine from 'alpine.js';
import vuetify from './vuetify';
// import '../../node_modules/vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from "vue-router";
// import {createRouter, createWebHistory} from "vue-router";
import Vuex from 'vuex'
// window.Alpine = Alpine;

window.Vue = require("vue").default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Routes
import { routes } from "./routes";
Vue.component(
    "app-component",
    require("./components/AppComponent.vue").default
);

Vue.use(VueRouter)
 Vue.use(Vuex)
 Vue.use(vuetify)
// Register Routes
const router = new VueRouter({
    base: "/",
    mode: "history",
    routes,
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
    router,
    vuetify
});

// Alpine.start();
