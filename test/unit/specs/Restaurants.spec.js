import Vue from 'vue'
const RestaurantsInjector = require('!!vue-loader?inject!@/components/Restaurants')

describe('Restaurants.vue', () => {
  const spy = sinon.spy()
  const Restaurants = RestaurantsInjector({
    '../api': {
      simpleApi: spy
    }
  })

  it('should initially have an empty list of restaurants', () => {
    const Constructor = Vue.extend(Restaurants)
    const vm = new Constructor()
    expect(vm.restaurants).to.have.lengthOf(0)
  })

  it('should have called simpleApi', () => {
    const Constructor = Vue.extend(Restaurants)
    const vm = new Constructor()
    vm.$mount()
    expect(spy).to.have.been.called
  })

  it('should render correct header', () => {
    const Constructor = Vue.extend(Restaurants)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.restaurants h1').textContent)
      .to.equal('Restaurants')
  })
})
