import { createRouter, createWebHistory } from 'vue-router'

import WelcomePage from '../components/WelcomePage.vue'
import MainPage from '../components/MainPage.vue'
import About from '../components/AboutPage.vue'
import Contact from '../components/ContactPage.vue'

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
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router