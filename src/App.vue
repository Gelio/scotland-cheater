<template>
  <div id="app">
    <main class="main-map">
      <Map v-if="!loading" :graph="graph" />
    </main>

    <aside class="control-panel">
      <div v-if="loading">
        Loading...
      </div>

      <div v-if="!loading">
        <Inputs @simulate="simulate" />
      </div>
    </aside>
  </div>
</template>

<script>
import Inputs from './components/Inputs.vue';
import Map from './components/Map.vue';

import GraphFactory from './move-predicting/GraphFactory';
import MoveSimulator from './move-predicting/MoveSimulator';
import CSVMapLoader from './move-predicting/CSVMapLoader';

export default {
  name: 'app',
  components: {
    Inputs,
    Map
  },
  async created() {
    const csvMapLoader = new CSVMapLoader();
    const mapData = await csvMapLoader.loadFromUrl('/map-data.csv');

    const graphFactory = new GraphFactory();
    this.loading = false;
    this.graph = graphFactory.createGraphFromData(mapData);
  },
  methods: {
    simulate(lastKnownStationId, stepsTaken) {
      const moveSimulator = new MoveSimulator();
      const lastKnownStation = this.graph.getStationById(lastKnownStationId);

      const stations = moveSimulator.getPossibleStations(lastKnownStation, stepsTaken);
      console.log(stations.map(station => station.id));
    }
  },
  data() {
    return {
      loading: true,
      graph: null
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: grid;
  grid-template-rows: 1fr min-content;
  grid-column-gap: 1rem;
}

.main-map {
  grid-column: 1;
}

.control-panel {
  grid-column: 2;
}
</style>
