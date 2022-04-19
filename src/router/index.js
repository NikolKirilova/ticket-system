import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from '../views/Login'
import Tickets from '../views/Tickets'
import MyProfile from '../views/MyProfile'
import Categories from '../views/Categories'
import SingleTicket from '../views/SingleTicket'
import Types from '../views/Types'
import Users from '../views/Users'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tickets/:id',
    name: 'SingleTicket',
    component: SingleTicket,
    props:true
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/types',
    name: 'Types',
    component: Types
  },
 
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
