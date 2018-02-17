import StepType from './StepType';
import BoatConnection from './connections/BoatConnection';
import BusConnection from './connections/BusConnection';
import TaxiConnection from './connections/TaxiConnection';
import UndergroundConnection from './connections/UndergroundConnection';

export default {
  [StepType.Boat]: BoatConnection,
  [StepType.Bus]: BusConnection,
  [StepType.Taxi]: TaxiConnection,
  [StepType.Underground]: UndergroundConnection
};
