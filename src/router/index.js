import { createRouter, createWebHistory } from 'vue-router'
import SearchMain from '../views/SearchMain.vue'
import HeaderJoinMembership from '../components/HeaderJoinMembership.vue'
import HeaderLogin from '../components/HeaderLogin.vue'
import HomeView from '../views/HomeView.vue'
import DetailPage from '../views/DetailPage.vue'

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
  {
    path: '/detail',
    name: 'detail',
    component: DetailPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
