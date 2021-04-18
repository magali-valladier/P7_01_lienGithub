import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Signin from '../views/Signin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
]

const router = new VueRouter({
  routes
})

export default router
