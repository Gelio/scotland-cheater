import StepConnection from './StepConnection';

export default class MoveSimulator {
  constructor() {
    this.simulateStepMultipleStations = this.simulateStepMultipleStations.bind(this);
  }

  /**
   * @param {Station} lastKnownStation
   * @param {string[]} stepsTaken
   */
  getPossibleStations(lastKnownStation, stepsTaken) {
    return stepsTaken.reduce(this.simulateStepMultipleStations, [lastKnownStation]);
  }

  /**
   * @param {Station} station
   * @param {string} stepType
   * @private
   */
  simulateStepSingleStation(station, stepType) {
    if (!(stepType in StepConnection)) {
      throw new Error(`Invalid step type: ${stepType}`);
    }

    return station.getNeighboringStationsByConnectionType(StepConnection[stepType]);
  }

  /**
   * @param {Station[]} station
   * @param {string} stepType
   * @private
   */
  simulateStepMultipleStations(stations, stepType) {
    if (!(stepType in StepConnection)) {
      throw new Error(`Invalid step type: ${stepType}`);
    }

    const nextStations = Array.prototype.concat(
      ...stations.map(station => this.simulateStepSingleStation(station, stepType))
    );
    const nextStationsSet = new Set(nextStations);

    return Array.from(nextStationsSet.values());
  }
}
