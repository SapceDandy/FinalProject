import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './components/WelcomePage.vue'
import MainPage from './components/MainPage.vue'
import About from './components/AboutPage.vue'
import Contact from './components/ContactPage.vue'
import VueScrollTo from 'vue-scrollto'
import emailjs from './email.js'

const routes = [
    { path: '/', name: 'Welcome', component: WelcomePage },
    { path: '/home', name: 'Home', component: MainPage },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(VueScrollTo).use(emailjs).mount('#app')