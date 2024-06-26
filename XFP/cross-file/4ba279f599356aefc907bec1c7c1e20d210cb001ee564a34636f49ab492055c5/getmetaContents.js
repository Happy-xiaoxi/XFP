export function getmetaContents(e) {
	var t = document.getElementsByTagName("meta");
	for (var w in t) if (t[w].name == e) return t[w].content;
  }