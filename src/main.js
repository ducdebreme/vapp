// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

let places = require('./places.json')
places.forEach(function (p) {
  p.location = {
    lat: parseFloat(p.latitude),
    lng: parseFloat(p.longitude)
  }
})

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places,drawing,visualization'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    places,
    currentLocation: { lat: 0.0, lng: 0.0 }
  },
  router,
  template: '<App/>',
  components: { App },
  mounted: function () {
    let me = this
    navigator.geolocation.getCurrentPosition(function (position) {
      me.currentLocation.lat = position.coords.latitude
      me.currentLocation.lng = position.coords.longitude
      console.log(position.coords.latitude, position.coords.longitude)
    })
  }
})
