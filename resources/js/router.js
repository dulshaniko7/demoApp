import Vue from 'vue';
import Router from 'vue-router';
import Index from "./components/pages/Index";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import Dashboard from "./components/pages/Dashboard";
import CustomerLogin from "./components/pages/CustomerLogin";
import CustomerRegister from "./components/pages/CustomerRegister";
import ProductAdd from "./components/pages/ProductAdd";
import AllProducts from "./components/pages/AllProducts";
import CustomerIndex from "./components/pages/CustomerIndex";
import ShowProduct from "./components/pages/ShowProduct";


Vue.use(Router)


const routes = [
    {
        path: '/admin',
        component: Login,
        name: 'login'
    },
    {
        path: '/',
        component: Index,
        name: 'index'
    },

    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout'
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        name: 'dashboard'
    },
    {
        path: '/admin/addProduct',
        component: ProductAdd,
        name: 'addProduct'
    },
    {
        path: '/:id',
        name: 'product',
        component: ShowProduct,
        params: true
    },

    {
        path: '/admin/products',
        component: AllProducts,
        name: 'allProducts'
    },

    {
        path: '/customer',
        component: CustomerLogin,
        name: 'customerLogin'
    },
    {
        path: '/customer/register',
        component: CustomerRegister,
        name: 'customerRegister'
    },
    {
        path: '/customer/index',
        component: CustomerIndex,
        name: 'customerIndex'
    },

]

export default new Router({
    mode: 'history',
    routes
})
