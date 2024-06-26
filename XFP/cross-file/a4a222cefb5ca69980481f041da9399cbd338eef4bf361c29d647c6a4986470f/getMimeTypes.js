export function getMimeTypes(m) {
  var a = [];
  if (m) {
    return a;
  }
  try {
    for (var i = 0; i < navigator.mimeTypes.length; i++) {
      a.push(
        navigator.mimeTypes[i].type + ": " + navigator.mimeTypes[i].description
      );
    }
    return a;
  } catch (e) {
    return null;
  }
}