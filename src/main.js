import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './components/WelcomePage.vue'
import MainPage from './components/MainPage.vue'
import VueScrollTo from 'vue-scrollto'

// Define routes
const routes = [
  { path: '/', name: 'Welcome', component: WelcomePage },
  { path: '/home', name: 'Home', component: MainPage }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Create Vue instance, use router and VueScrollTo
createApp(App).use(router).use(VueScrollTo).mount('#app')