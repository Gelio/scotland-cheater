import Graph from './Graph';
import ConnectionFactory from './connections/ConnectionFactory';

export default class MapLoader {
  createGraphFromData(data) {
    const graph = new Graph(data.stationsCount);
    const connectionFactory = new ConnectionFactory();

    data.connections.forEach(connection => {
      const stationA = graph.getStationById(connection.stationA);
      const stationB = graph.getStationById(connection.stationB);

      switch (connection.type) {
        case 'BUS':
          connectionFactory.createBusConnection(stationA, stationB);
          break;

        case 'BOAT':
          connectionFactory.createBoatConnection(stationA, stationB);
          break;

        case 'TAXI':
          connectionFactory.createTaxiConnection(stationA, stationB);
          break;

        case 'UNDERGROUND':
          connectionFactory.createUndergroundConnection(stationA, stationB);
          break;

        default:
          throw new Error(`Invalid connection type: ${connection.type}`);
      }
    });

    return graph;
  }
}
