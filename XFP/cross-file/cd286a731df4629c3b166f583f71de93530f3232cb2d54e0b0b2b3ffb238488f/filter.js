export function filter (b) {
	if (this.feat && this.feat.filters) {
	  for (var a in this.feat.filters) {
		if (this.feat.filters.hasOwnProperty(a)) {
		  b = this.feat.filters[a](b);
		}
	  }
	}
	return b;
  }