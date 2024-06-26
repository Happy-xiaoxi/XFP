export function callURL (url) {
	var i = new Image();
	i.src = url.substr(0, 1023);
}