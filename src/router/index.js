import { createRouter, createWebHistory } from 'vue-router'
import SearchMain from '../views/SearchMain.vue'
import HeaderLogin from '../components/HeaderLogin.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchMain
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
