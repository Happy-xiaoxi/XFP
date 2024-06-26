export function appendElemToBody (elem) {
	if (document.getElementsByTagName('body').length > 0) {
		document.getElementsByTagName('body')[0].appendChild(elem);
		return;
	}
	var scripts = document.getElementsByTagName('script');
	if (scripts.length > 0 && scripts[0].parentNode !== undefined && scripts[0].parentNode != null) {
		scripts[0].parentNode.appendChild(elem);
	}
}