export function getPlugins(m) {
  var a = [];
  if (m) {
    return a;
  }
  try {
    for (var i = 0; i < navigator.plugins.length; i++) {
      a.push(
        navigator.plugins[i].name +
          ": " +
          navigator.plugins[i].description +
          " (" +
          navigator.plugins[i].filename +
          ")"
      );
    }
    return a;
  } catch (e) {
    return null;
  }
}