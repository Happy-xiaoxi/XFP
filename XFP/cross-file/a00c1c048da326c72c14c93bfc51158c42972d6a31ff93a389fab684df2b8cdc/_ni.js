export function i(t) {
	var o = JSON.parse(JSON.stringify(t)),
	  i = {};
	return (
	  o.keys ||
		(o.keys = {
		  auth: e(
			btoa(
			  String.fromCharCode.apply(
				null,
				new Uint8Array(t.getKey("auth"))
			  )
			)
		  ),
		  p256dh: e(
			btoa(
			  String.fromCharCode.apply(
				null,
				new Uint8Array(t.getKey("p256dh"))
			  )
			)
		  ),
		}),
	  o &&
		((i.endpoint = o.endpoint),
		(i.keys = {}),
		(i.keys.p256dh = o.keys.p256dh),
		(i.keys.auth = o.keys.auth)),
	  i
	);
  }