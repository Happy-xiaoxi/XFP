export function httpCall (url) {
	if (!url) return;
	var i = new Image();
	i.src = url.substr(0, 2048);
};