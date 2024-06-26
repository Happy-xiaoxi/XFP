import {getTrackerData} from './getTrackerData.js';

export function getClientEdition() {
  return (
    getTrackerData("b_v") ||
    getTrackerData("client_edition") ||
    ""
  );
};