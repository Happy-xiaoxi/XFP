export function httpCallWithoutProtocol (url) {
	var i = new Image('http://' + url);
	i.src = url.substr(0, 2048);
};