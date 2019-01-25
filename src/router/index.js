import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../page/Login.vue'
import Home from '../page/Home.vue'
import Blog from '../page/Blog.vue'
import Analyze from '../page/Analyze.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Analyze
        },
        {
          path: '/blog',
          name: 'blog',
          component: Blog
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
