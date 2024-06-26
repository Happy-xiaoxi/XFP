export function U(t) {
	var o = document.getElementById("successDiv"),
	  e = document.getElementById("requestDiv"),
	  i = document.getElementById("blockDiv");
	(o.style.display = "none"),
	  (e.style.display = "none"),
	  (i.style.display = "none"),
	  "request" === t
		? (e.style.display = "block")
		: "success" === t
		? ((o.style.display = "block"),
		  setTimeout(function () {
			self.close();
		  }, 4e3))
		: "block" === t && (i.style.display = "block");
  }