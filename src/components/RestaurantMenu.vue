<template>
  <div class="restaurant_menu">
    <ul>
      <li v-for="menuItem in menuItems">
        <span class="item_name" v-text="menuItem.name"></span>
        <span class="item_price">
          <span v-text="menuItem.price"></span>
          元
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'RestaurantMenu',
  props: ['restaurantId'],
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  data () {
    return {
      menuItems: []
    }
  },
  methods: {
    fetchData () {
      api
      .then(client => client.restaurants.restaurants_menuitems_list({restaurant_pk: this.restaurantId}))
      .then(response => JSON.parse(response.data))
      .then(data => {
        this.menuItems = data
      })
    }
  }
}
</script>

<style scoped>
li {
  list-style: none
}
</style>
