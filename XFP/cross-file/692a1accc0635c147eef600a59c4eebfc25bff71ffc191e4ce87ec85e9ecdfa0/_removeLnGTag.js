export function removeLnGTag(t) {
	var e = $(t)
	  .val()
	  .replace(/[<>/();]+/g, "");
	$(t).val(e);
  }