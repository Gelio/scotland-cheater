export default class Station {
  /**
   * @param {number} id
   */
  constructor(id) {
    this.id = id;

    this.position = {
      top: 0,
      left: 0
    };

    /** @type {Connection[]} */
    this.connections = [];
  }

  getNeighboringStations() {
    return this.connections.map(connection => this.getOtherStation(connection));
  }

  getNeighboringStationsByConnectionType(connectionType) {
    return this.connections
      .filter(connection => connection instanceof connectionType)
      .map(connection => this.getOtherStation(connection));
  }

  /**
   * @param {Connection} connection
   * @return {Station}
   */
  getOtherStation(connection) {
    if (connection.stationA === this) {
      return connection.stationB;
    } else if (connection.stationB === this) {
      return connection.stationA;
    }

    throw new Error('Connection does not belong to this station');
  }
}
