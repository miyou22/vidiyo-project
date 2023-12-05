import { createRouter, createWebHistory } from 'vue-router'
import SearchMain from '../views/SearchMain.vue'
import HeaderJoinMembership from '../views/HeaderJoinMembership.vue'
import HeaderLogin from '../views/HeaderLogin.vue'
import HomeView from '../views/HomeView.vue'
import SearchMovie from '../views/SearchMovie.vue'
import DetailPage from '../views/DetailPage.vue'
import EvalView from '../views/EvalView.vue'
import StorageView from '../views/StorageView.vue'
import AppProfile from '../views/AppProfile.vue'
import ActorDetail from '../views/ActorDetail.vue'
import CustomerView from '../views/CustomerView.vue'

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
    path: '/searchmovie',
    name: 'searchmovie',
    component: SearchMovie
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailPage
  },
  {
    path: '/Eval',
    name: 'Eval',
    component: EvalView
  },
  {
    path: '/storage',
    name: 'storage',
    component: StorageView
  },
  {
    path: '/profile',
    name: 'profile',
    component: AppProfile
  },
  {
    path: '/actor',
    name: 'actor',
    component: ActorDetail
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
