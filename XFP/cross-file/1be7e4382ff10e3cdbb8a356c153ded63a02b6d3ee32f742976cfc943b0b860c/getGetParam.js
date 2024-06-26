export function getGetParam (paramName) {
	return this.getParams[paramName] !== undefined ? this.getParams[paramName] : false;
}