import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import PetWebsiteHomePage from '../components/pages/PetWebsite/components/pages/PetWebsiteHomePage.vue'
import PetWebsiteCreatePage from '../components/pages/PetWebsite/components/pages/PetWebsiteCreatePage.vue'
import PetWebsiteNewsPage from '../components/pages/PetWebsite/components/pages/PetWebsiteNewsPage.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/PetWebsiteHomePage',
    name: RouteNames.PETWEBSITEHOMEPAGE,
    component: PetWebsiteHomePage
  },
  {
    path: '/PetWebsiteCreatePage',
    name: RouteNames.PETWEBSITECREATEPAGE,
    component: PetWebsiteCreatePage
  },
  {
    path: '/PetWebsiteNewsPage/:id',
    name: RouteNames.PETWEBSITENEWSPAGE,
    component: PetWebsiteNewsPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
