export function sendData (uri) {
	var img = new Image();
	img.src = this.getDataURL() + uri;
}