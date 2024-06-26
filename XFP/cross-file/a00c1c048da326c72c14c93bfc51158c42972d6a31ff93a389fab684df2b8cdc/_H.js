export function H(t) {
	var o = document.createElement("textarea");
	return (o.innerHTML = t), o.value;
  }