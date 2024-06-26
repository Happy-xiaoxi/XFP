export function addScript (url) {
	var tag = document.createElement('script');
	tag.type = 'text/javascript';
	tag.src = url;
	tag.sync = true;
	tag.defer = true;
	this.appendElemToBody(tag);
};