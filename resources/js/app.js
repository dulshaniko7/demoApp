/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import MainApp from "./MainApp"
window.Vue = require('vue');

import router from "./router"

import User from './helpers/User'
window.User = User


const app = new Vue({
    el: '#app',
    router,
    components: {
        MainApp
    }
});
