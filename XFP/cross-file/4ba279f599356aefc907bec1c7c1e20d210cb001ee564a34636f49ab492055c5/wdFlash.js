export function wdFlash() {
	var a = "",
	  b = navigator;
	if (b.plugins && b.plugins.length) {
	  for (var c = 0; c < b.plugins.length; c++)
		if (b.plugins[c].name.indexOf("Shockwave Flash") != -1) {
		  a = b.plugins[c].description.split("Shockwave Flash ")[1];
		  break;
		}
	} else if (window.ActiveXObject)
	  for (c = 10; c >= 2; c--)
		try {
		  var d = eval(
			"new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + c + "');"
		  );
		  if (d) {
			a = c + ".0";
			break;
		  }
		} catch (e) {}
	return a;
  }