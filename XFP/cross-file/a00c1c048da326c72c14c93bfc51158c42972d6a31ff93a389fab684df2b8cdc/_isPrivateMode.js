export function isPrivateMode(t) {
	return (promise = new Promise(function (o, e) {
	  if ("firefox" === t)
		try {
		  (localStorage.test = 2), o("done!");
		} catch (t) {
		  e("private browser");
		}
	  else if ("safari" === t) {
		var i = window.sessionStorage;
		try {
		  i.setItem("someKeyHere", "test"),
			i.removeItem("someKeyHere"),
			o("done!");
		} catch (t) {
		  t.code === DOMException.QUOTA_EXCEEDED_ERR &&
			0 === i.length &&
			(console.log(" private safari"), e("private browser"));
		}
	  } else if ("chrome" === t || "opera" === t || "chromium" === t) {
		(n = window.RequestFileSystem || window.webkitRequestFileSystem) ||
		  (console.log("FS check failed.."), e("private browser")),
		  n(
			window.TEMPORARY,
			100,
			function (t) {
			  o("done!");
			},
			function (o) {
			  console.log(" private " + t), e("private browser");
			}
		  );
	  } else if ("edge" === t)
		window.indexedDB || (!window.PointerEvent && !window.MSPointerEvent)
		  ? o("done!")
		  : e("private browser");
	  else if ("ucbrowser" === t) o("done!");
	  else if ("yandex" === t) {
		var n;
		(n = window.RequestFileSystem || window.webkitRequestFileSystem) ||
		  (console.log("FS check failed.."), e("private browser")),
		  n(
			window.TEMPORARY,
			100,
			function (t) {
			  o("done!");
			},
			function (o) {
			  console.log(" private " + t), e("private browser");
			}
		  );
	  }
	}));
  }