export function z(t) {
	let o;
	(o = "object" == typeof t ? JSON.stringify(t) : t),
	  localStorage.setItem("subscription", o);
  }