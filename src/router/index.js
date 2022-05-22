import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from '../views/SearchView.vue'
import MyView from '../views/MyView.vue'
import PublishView from '../views/PublishView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/my',
    name: 'my',
    component: MyView
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
