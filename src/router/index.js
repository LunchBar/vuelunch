import Vue from 'vue'
import Router from 'vue-router'
import Landing from 'components/Landing'
import Restaurants from 'components/Restaurants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/restaurants',
      name: 'Restaurants',
      component: Restaurants
    }
  ]
})
