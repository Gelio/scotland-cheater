import BoatConnection from './BoatConnection';
import BusConnection from './BusConnection';
import TaxiConnection from './TaxiConnection';
import UndergroundConnection from './UndergroundConnection';

export default class ConnectionFactory {
  /**
   *
   * @param {Station} stationA
   * @param {Station} stationB
   */
  createBoatConnection(stationA, stationB) {
    return this.createConnection(stationA, stationB, BoatConnection);
  }

  /**
   *
   * @param {Station} stationA
   * @param {Station} stationB
   */
  createBusConnection(stationA, stationB) {
    return this.createConnection(stationA, stationB, BusConnection);
  }

  /**
   *
   * @param {Station} stationA
   * @param {Station} stationB
   */
  createTaxiConnection(stationA, stationB) {
    return this.createConnection(stationA, stationB, TaxiConnection);
  }

  /**
   *
   * @param {Station} stationA
   * @param {Station} stationB
   */
  createUndergroundConnection(stationA, stationB) {
    return this.createConnection(stationA, stationB, UndergroundConnection);
  }

  /**
   * @param {Station} stationA
   * @param {Station} stationB
   * @param {Function} connectionConstructor
   * @private
   */
  createConnection(stationA, stationB, connectionConstructor) {
    const connection = new connectionConstructor(stationA, stationB);
    this.addConnectionInStations(connection);

    return connection;
  }

  /**
   * @param {Connection} connection
   * @private
   */
  addConnectionInStations(connection) {
    connection.stationA.connections.push(connection);
    connection.stationB.connections.push(connection);
  }
}
