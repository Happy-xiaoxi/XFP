export function sendDataArg (args) {
	var uri = '';
	for (key in args) {
		uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]) + '&';
	}
	this.sendData(uri);
}