export function Ne(e) {
  var t = Date.now();
  return {
    pp2: (t - e.timing.start).toFixed(2),
    cd2: (t - e.timing.p2Start).toFixed(2),
    cp: e.timing.pluginsTiming,
  };
}