import { createRouter, createWebHistory } from 'vue-router'
import SearchMain from '../views/SearchMain.vue'
import HeaderJoinMembership from '../views/HeaderJoinMembership.vue'
import HeaderLogin from '../views/HeaderLogin.vue'
import HomeView from '../views/HomeView.vue'
import SearchMovie from '../components/SearchMovie.vue'


const routes = [
  {
    path: '/search',
    name: 'search',
    component: SearchMain
  },
  
  {
    path: '/joinmembership',
    name: 'joinmembership',
    component: HeaderJoinMembership
  },
  {
    path: '/login',
    name: 'login',
    component: HeaderLogin
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
<<<<<<< HEAD
  {
    path:'/searchmovie',
    name:'searchmovie',
    component:SearchMovie
  }
=======

>>>>>>> 0dcc26f3053bccc07abdb4bfb8a138516890c9bd
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
