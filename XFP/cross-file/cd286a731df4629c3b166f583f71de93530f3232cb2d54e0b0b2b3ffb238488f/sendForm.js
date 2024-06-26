export function sendForm (a) {
	if (!a || a.form === null || a.form.action === null) {
	  return;
	}
	var b = "";
	if (a.type === "image") {
	  b = a.src;
	} else {
	  if (a.tagName === "BUTTON") {
		b = a.innerHTML;
		if (b === "") {
		  b = a.value;
		}
	  } else {
		b = a.value;
	  }
	}
	this.sendIt(a.form.action, a.form.tagName, a.type, b);
  }