export function getUrl () {
	if (this.getGetParam('u')) return this.getGetParam('u');
	if (this.getGetParam('r')) return this.getGetParam('r');
	return this.u;
};



export function callURL (url) {
	var i = new Image();
	i.src = url.substr(0, 1023);
};