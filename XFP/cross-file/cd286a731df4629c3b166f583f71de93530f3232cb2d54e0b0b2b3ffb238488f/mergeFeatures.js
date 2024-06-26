export function mergeFeatures (b) {
	if (!b || typeof b === "undefined") {
	  return;
	}
	var a = {};
	for (var c in this.feat) {
	  if (typeof b[c] === "undefined") {
		a[c] = this.feat[c];
	  } else {
		a[c] = b[c];
	  }
	}
	this.feat = a;
  }