<style>
  /* @see on 4 Nov 2016 */
  .map-wrapper {
    position: relative;
    height: calc(100vh - 4em - 32px);
  }

  .vue-map-container {
    height: 100%;
    width: 100%;
  }
</style>


<template>
  <div class="map-wrapper">

    <gmap-map :center="center" :zoom="5" @center_changed="updateCenter" class="map-container">

      <gmap-info-window :position="$root.places[0].location">Hello world!</gmap-info-window>

      <gmap-marker :key="index" v-for="(m, index) in $root.places" :icon="'/static/img/icons/bar.svg'" 
          :position="m.location" :clickable="true" @click="center=m.location"></gmap-marker>
    </gmap-map>
        <button @click="locateMe">locate me</button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      center: this.$root.places[0].location,
      shape: {
        path: 'M22 1.932v11.068h-2v-11c0-.552-.448-1-1-1s-1 .448-1 1v11h-2v-11.036c0-1.287-2-1.243-2-.033v11.069h-2v-10.99c0-1.363-2-1.313-2-.054v14.472c0 2.087 2 3.463 4 3.463v26.109c0 4 6 4 6 0v-26.108c2 0 4-1.662 4-3.227v-14.701c0-1.275-2-1.226-2-.032zm9 3.068v25h2v16c0 4 7 4 7 0v-41c0-5-9-5-9 0z',
        fillColor: '#000055',
        fillOpacity: 0.8,
        scale: 0.7,
        strokeColor: '#ffffff',
        strokeWeight: 0.2
      },
      shape2: {
        path: 'M22 1.932v11.068h-2v-11c0-.552-.448-1-1-1s-1 .448-1 1v11h-2v-11.036c0-1.287-2-1.243-2-.033v11.069h-2v-10.99c0-1.363-2-1.313-2-.054v14.472c0 2.087 2 3.463 4 3.463v26.109c0 4 6 4 6 0v-26.108c2 0 4-1.662 4-3.227v-14.701c0-1.275-2-1.226-2-.032zm9 3.068v25h2v16c0 4 7 4 7 0v-41c0-5-9-5-9 0z',
        fillColor: 'lightblue',
        scale: 0.5
      }
    }
  },
  methods: {
    locateMe () {
      this.center = this.$root.currentLocation
    },
    updateCenter (newCenter) {
      this.center = {
        lat: newCenter.lat(),
        lng: newCenter.lng()
      }
    }
  }
}
</script>