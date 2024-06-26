export function getPluginName() {
  var e = "";
  if (navigator.plugins.length > 0)
    for (i = 0; i < navigator.plugins.length; i++)
      e += navigator.plugins[i].name + ";";
  return e;
}