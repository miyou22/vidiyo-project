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
import MovieDetail from '../views/MovieDetail.vue'
import AccountManagement from '../views/AccountManagement.vue'
import QusttList from '../views/QusttList.vue'
import RegisterInquiry from '../views/RegisterInquiry.vue'
import CustomerAnswer01 from '../views/CustomerAnswer01.vue'
import InquiryList from '../views/InquiryList.vue'
import UsageInquiries from '../views/UsageInquiries.vue'
import Contents from '../views/Contents.vue'
import DiscontinueLicense from '../views/DiscontinueLicense.vue'
import PaymentLicense from '../views/PaymentLicense.vue'
import CouPon from '../views/CouPon.vue'
import ReFund from '../views/ReFund.vue'
import ReplayError from '../views/ReplayError.vue'
import SearchResults from '../views/SearchResults.vue'


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
    path: '/',
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
  {
    path: '/movie',
    name: 'movie',
    component: MovieDetail
  },
  {
    path: '/accountm',
    name: 'accountm',
    component: AccountManagement
  },
  {
    path: '/customerand',
    name: 'customerand',
    component: QusttList
  },
  {
    path: '/registeri',
    name: 'registeri',
    component: RegisterInquiry
  },
  {
    path: '/answer',
    name: 'answer',
    component: CustomerAnswer01
  },
  {
    path: '/inlist',
    name: 'inlist',
    component: InquiryList
  },
  {
    path: '/usagei',
    name: 'usagei',
    component: UsageInquiries
  },
  {
    path: '/contents',
    name: 'contents',
    component: Contents
  },
  {
    path: '/discontinue',
    name: 'discontinue',
    component: DiscontinueLicense
  },
  {
    path: '/paymentl',
    name: 'paymentl',
    component: PaymentLicense
  },
  {
    path: '/coupona',
    name: 'coupona',
    component: CouPon
  },
  {
    path: '/refunda',
    name: 'refunda',
    component: ReFund
  },
  {
    path: '/replayue',
    name: 'replayue',
    component: ReplayError
  },
  {
    path: '/searchresult',
    name: 'searchresult',
    component: SearchResults
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
