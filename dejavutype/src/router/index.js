import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import WaitingRoom from '../views/WaitingRoom.vue'
import GamePage from '../views/GamePage.vue'
import FinishPage from '../views/FinishPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/waitingroom',
    name: 'WaitingRoom',
    component: WaitingRoom
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage
  },
  {
    path: '/finish',
    name: 'FinishPage',
    component: FinishPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
