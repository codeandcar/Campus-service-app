import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from '../views/SearchView.vue'
import PersonView from '../views/PersonView.vue'
import PublishView from '../views/PublishView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/person',
    name: 'person',
    component: PersonView
  },
  {
    path: '/publish',
    name: 'publish',
    component: PublishView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
