// import Vue and VueRouter
import { createRouter, createWebHistory } from 'vue-router'

// import your components
import WelcomePage from '../components/WelcomePage.vue'
// import HelloWorld from '../components/HelloWorld.vue'
import MainPage from '../components/MainPage.vue'

// define your routes
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
  },
  {
    path: '/Home',
    name: 'Home',
    component: MainPage,
  },
]

// create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// export the router
export default router