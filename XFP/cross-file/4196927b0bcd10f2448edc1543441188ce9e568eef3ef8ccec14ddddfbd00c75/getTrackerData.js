export function getTrackerData(B) {
  let tracker = window._tracker_ || [];
  for (let i = 0; i < tracker.length; i++) {
    let row = tracker[i];
    if (row && row.length && row.length >= 2) {
      if (B === row[0]) {
        return row[1];
      }
    }
  }
  if (window.ilog && window.ilog[B]) {
    return window.ilog[B];
  }
  return window.log.e_d[B];
}