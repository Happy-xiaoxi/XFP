
export function setGetParams (params) {
	this.getParams = params;
};
export function getGetParams () {
	return this.getParams;
};
export function getGetParam (paramName) {
	return this.getParams[paramName] !== undefined ? this.getParams[paramName] : false;
};
export function getIntGetParam (paramName) {
	var val = this.getGetParam(paramName);
	if (!val) return false;
	val.replace(',', '.').replace(/[^0-9.]/, '');
	return val ? parseFloat(val) : false;
};