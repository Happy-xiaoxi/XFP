export function getTrackerDataFrom(C) {
  if (C) {
    let edata = C.getAttribute("_tracker_data_");
    if (edata) {
      try {
        return JSON.parse(edata);
      } catch (B) {
        return JSON.parse(
          edata.replace(/(\w+)\s*:/g, '"$1":').replace(/(')/g, '"')
        );
      }
    }
  }
  return null;
}