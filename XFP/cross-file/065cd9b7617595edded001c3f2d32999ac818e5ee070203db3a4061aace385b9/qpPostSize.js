export function qpPostSize() {
	var t = (document.location.hash + '').substr(1),
		n = getComputedStyle(document.body, null),
		i = parseInt(n.paddingTop) + parseInt(n.paddingBottom);
	t.indexOf('//') != -1 && top.window.postMessage(document.body.childNodes[0].offsetHeight + i, '*');
}