<template>
  <div class="restaurant_detail">
    <h1 v-text="detail.name"></h1>
    <h2>Menu</h2>
    <restaurant-menu :restaurantId="restaurantId"></restaurant-menu>
  </div>
</template>

<script>
import api from '../api'
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
      api
      .then(client => client.restaurants.restaurants_read({id: this.restaurantId}))
      .then(response => JSON.parse(response.data))
      .then(data => {
        this.detail = data
      })
    }
  }
}
</script>

<style scoped>
</style>
