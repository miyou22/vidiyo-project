import { createRouter, createWebHistory } from 'vue-router'
import SearchMain from '../views/SearchMain.vue'
import HeaderLogin from '../components/HeaderLogin.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
