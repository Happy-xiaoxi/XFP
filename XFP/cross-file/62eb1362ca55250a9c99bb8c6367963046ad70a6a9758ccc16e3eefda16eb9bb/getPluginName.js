export function getPluginName() {
  var t = "";
  if (navigator.plugins.length > 0)
    for (i = 0; i < navigator.plugins.length; i++)
      t += navigator.plugins[i].name + ";";
  return t;
}