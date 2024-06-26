export function regListen () {
	var a = this;
	return function (b) {
	  if (
		b &&
		b.origin &&
		b.origin.indexOf("imrworldwide.com") !== -1 &&
		(typeof b.data === "string" || b.data instanceof String) &&
		b.data.indexOf("{") === -1 &&
		b.data !== ""
	  ) {
		if (
		  typeof localStorage.Y29va2llX293X25hbWUK === "undefined" ||
		  !localStorage.Y29va2llX293X25hbWUK ||
		  b.data.search(/;JA$/) === -1
		) {
		  a.cookie_overwrite = b.data.replace(/;JA$/, "");
		} else {
		  if (
			typeof localStorage.Y29va2llX293X25hbWUK === "string" ||
			localStorage.Y29va2llX293X25hbWUK instanceof String
		  ) {
			a.cookie_overwrite = localStorage.Y29va2llX293X25hbWUK.replace(
			  /;JA$/,
			  ""
			);
		  }
		}
		localStorage.Y29va2llX293X25hbWUK = a.cookie_overwrite;
	  }
	  if (a.postChk) {
		a.post();
	  }
	};
  }