import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import SearchMain from '../views/SearchMain.vue'
=======
import HomeView from '../views/HomeView.vue'
import HeaderLogin from '../components/HeaderLogin.vue'
>>>>>>> d9f79f361c14827eb19c880e6521a455be7026f3

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchMain
  },
<<<<<<< HEAD
  
=======
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: HeaderLogin
  },
>>>>>>> d9f79f361c14827eb19c880e6521a455be7026f3
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
