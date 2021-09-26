import Vue from 'vue'
import Router from 'vue-router'

import Login from '../page/Login.vue';
import Register from '../page/Register.vue';
import Home from '../page/Home.vue';

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
       
    ]
  })