import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import FeaturesView from "@/views/FeaturesView.vue"
import ReasonsView from "@/views/ReasonsView.vue"
import AlternativeView from "@/views/AlternativeView.vue"
import SignUpView from "@/views/SignUpView.vue"
import LoginView from "@/views/LoginView.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component:HomeView
  },
  {
    path: '/features',
    name: 'features',
    component:FeaturesView
  },
  {
    path: '/reasons',
    name: 'reasons',
    component:ReasonsView
  },
  {
    path: '/alternatives',
    name: 'alternatives',
    component:AlternativeView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component:SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component:LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
