export function W() {
	if ("safari" in window && "pushNotification" in window.safari) {
	  var t = window.safari.pushNotification.permission(f);
	  "default" === t.permission &&
		(localStorage.removeItem("subscription"),
		localStorage.removeItem("tags"),
		window.safari.pushNotification.requestPermission(
		  host.slice(0, -1),
		  f,
		  { platformId: g._id },
		  V
		));
	}
  }