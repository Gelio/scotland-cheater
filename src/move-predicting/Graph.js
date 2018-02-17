import Station from './Station';

export default class Graph {
  /**
   * @param {number} stationsCount
   */
  constructor(stationsCount) {
    this.stationsCount = stationsCount;

    /** @type {Station[]} */
    this.stations = [];

    for (let i = 0; i < this.stationsCount; i++) {
      this.stations.push(new Station(i + 1, []));
    }
  }

  /**
   * @param {number} id
   */
  getStationById(id) {
    if (id < 0 || id > this.stationsCount) {
      throw new Error('Id out of bounds');
    }

    return this.stations[id - 1];
  }
}
