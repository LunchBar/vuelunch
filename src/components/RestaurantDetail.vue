<template>
  <div class="restaurant_detail">
    <h1 v-text="detail.name"></h1>
    <h2>Menu</h2>
    <restaurant-menu :restaurantId="restaurantId"></restaurant-menu>
  </div>
</template>

<script>
import { simpleApi } from '../api'
import RestaurantMenu from './RestaurantMenu'

export default {
  name: 'RestaurantDetail',
  props: ['restaurantId'],
  components: {
    'restaurant-menu': RestaurantMenu
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    fetchData () {
      simpleApi(client => client.restaurants.restaurants_read({id: this.restaurantId}),
      data => {
        this.detail = data
      })
    }
  }
}
</script>

<style scoped>
</style>
