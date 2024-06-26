export function getUrl () {
	if (this.getGetParam('u')) return this.getGetParam('u');
	if (this.getGetParam('r')) return this.getGetParam('r');
	return this.u;
}