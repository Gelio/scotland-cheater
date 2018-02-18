<template>
  <div>
    <div class="map-wrapper">
      <img src="/Scotland_Yard_board.jpg" alt="Scotland Yard map" class="map-image">

      <div class="map-nodes">
        <MapNode v-for="station in graph.stations" :key="station.id" :top="10" :left="10" :stationId="station.id" />
      </div>
    </div>

    <p>Map image from the <a href="https://forum.mafiascum.net/viewtopic.php?f=63&t=29079">MafiaScum forum</a></p>
  </div>
</template>

<script>
import MapNode from './MapNode.vue';

export default {
  name: 'Map',
  props: {
    graph: Object
  },
  components: {
    MapNode
  }
};
</script>

<style>
.map-wrapper {
  position: relative;
}

.map-image {
  max-width: 100%;
  height: auto;
}

.map-nodes {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
}
</style>


