export function r(t, o) {
	if (!(o >= 2)) {
	  var e = localStorage.getItem("tp-visitsData");
	  if (e || t)
		try {
		  var i = host + "api/v1/updateVisit",
			n = [];
		  t ? (n = t) : ((e = JSON.parse(e)), (n = s(e)));
		  var a = { visitsData: n, platformId: g._id };
		  "allowed_cookies_only" === m.userConsent &&
			(a.deniedPersonalData = !0),
			HTTP.post(
			  i,
			  a,
			  {
				credentials: !0,
				headers: { "Content-Type": "application/json" },
			  },
			  function (t, e) {
				if (t) return o || (o = 0), r(n, ++o);
				localStorage.removeItem("tp-visitsData"),
				  t
					? console.log("error occured ", t)
					: e &&
					  "ERROR" == e.status &&
					  console.log("error occured ", e);
			  }
			);
		} catch (t) {
		  console.log("updatevisit error", t);
		}
	}
  }