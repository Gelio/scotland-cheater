export default class CSVMapLoader {
  async loadFromUrl(url) {
    let stationsCount = 0;

    const connections = (await fetch(url).then(res => res.text()))
      .split('\n')
      .filter(line => line.length > 0)
      .map(line => {
        const parts = line.split(';');

        const stationA = parseInt(parts[0], 10);
        const stationB = parseInt(parts[1], 10);

        stationsCount = Math.max(stationsCount, stationA, stationB);

        return {
          stationA,
          stationB,
          type: parts[2].replace('\r', '')
        };
      });

    return {
      stationsCount,
      connections
    };
  }
}
