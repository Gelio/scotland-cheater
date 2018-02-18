<template>
  <div>
    <div class="map-wrapper">
      <img src="/Scotland_Yard_board.jpg" alt="Scotland Yard map" class="map-image">

      <div class="map-nodes">
        <MapNode v-for="station in graph.stations" :key="station.id" :top="station.position.top" :left="station.position.left" :stationId="station.id"
          @drag="position => stationDragged(station, position)" />
      </div>
    </div>

    <p>Map image from the <a href="https://forum.mafiascum.net/viewtopic.php?f=63&t=29079">MafiaScum forum</a></p>

    <button @click="saveGraph">Save graph</button>
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
  },
  methods: {
    stationDragged(station, position) {
      station.position = position;
    },
    saveGraph() {
      const graphData = {
        stationsCount: this.graph.stations.length,
        stations: this.graph.stations.map(station => ({
          stationId: station.id,
          position: station.position
        }))
      };
      
      console.log(JSON.stringify(graphData));
    }
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


