import Vue from 'vue'
import Router from 'vue-router'
import Landing from 'components/Landing'
import Restaurants from 'components/Restaurants'
import RestaurantDetail from 'components/RestaurantDetail'

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
    },
    {
      path: '/restaurants/:restaurantId',
      name: 'RestaurantDetail',
      component: RestaurantDetail,
      props: true
    }
  ]
})
