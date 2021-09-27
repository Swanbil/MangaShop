import Vue from 'vue'
import Router from 'vue-router'

import Login from '../page/Login.vue';
import Register from '../page/Register.vue';
import Home from '../page/Home.vue';
import Product from '../page/Product.vue';
import Cart from '../page/Cart.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/product',
        name: 'Product',
        component: Product
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
       
    ]
  })