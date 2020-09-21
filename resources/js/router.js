import Vue from 'vue';
import Router from 'vue-router';
import Index from "./components/pages/Index";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";


Vue.use(Router)


const routes = [
    {
        path: '/',
        component:Login,
        name: 'login'
    },
    {
        path: '/index',
        component:Index,
        name: 'index'
    },
    {
        path: '/register',
        component:Register,
        name: 'register'
    },
    {
        path: '/logout',
        component:Logout,
        name: 'logout'
    },

]

export default new Router({
    mode:'history',
    routes
})
