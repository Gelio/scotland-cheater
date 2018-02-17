<template>
  <div>
    <div>
      Last known station: <input v-model="lastKnownStationId">
    </div>

    <div>
      <button @click="stepBoat">Boat</button>
      <button @click="stepBus">Bus</button>
      <button @click="stepTaxi">Taxi</button>
      <button @click="stepUnderground">Underground</button>
    </div>

    <h2>Selected steps</h2>
    <ul>
      <li v-for="(step, index) in stepsTaken" :key="index">
        <button @click="removeStep(index)">X</button>
        {{ step }}
      </li>
    </ul>

    <button @click="simulate()">Simulate</button>
  </div>
</template>


<script>
import StepType from '../move-predicting/StepType';

export default {
  name: 'Inputs',
  data() {
    return {
      lastKnownStationId: '',
      stepsTaken: []
    };
  },
  methods: {
    stepBus() {
      this.stepsTaken.push(StepType.Bus);
    },

    stepBoat() {
      this.stepsTaken.push(StepType.Boat);
    },

    stepTaxi() {
      this.stepsTaken.push(StepType.Taxi);
    },

    stepUnderground() {
      this.stepsTaken.push(StepType.Underground);
    },

    removeStep(index) {
      this.stepsTaken.splice(index, 1);
    },

    simulate() {
      const lastKnownStationId = parseInt(this.lastKnownStationId, 10);
      // TODO: validate last known station ID
      // TODO: make sure stepsTaken is not empty
      this.$emit('simulate', lastKnownStationId, this.stepsTaken);
    }
  }
};
</script>

