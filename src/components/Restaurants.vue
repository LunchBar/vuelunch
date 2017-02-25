<template>
  <div class="restaurants">
    <h1>Restaurants</h1>
    <ul>
      <li v-for="restaurant in restaurants" >
        <router-link :to="{name: 'RestaurantDetail', params: {restaurantId: restaurant.id}}">
          <span v-text="restaurant.name"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'restaurants',
  created () {
    this.fetchData()
  },
  data () {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchData () {
      api
        .then(client => client.restaurants.restaurants_list())
        .then(respond => JSON.parse(respond.data))
        .then(data => data.results)
        .then(list => {
          this.restaurants = list
        })
    }
  }
}
</script>

<style scoped lang="less">
.restaurants {
  li {
    list-style: none;
  }
}
</style>
