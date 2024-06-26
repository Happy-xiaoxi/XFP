export function getIntGetParam (paramName) {
	var val = this.getGetParam(paramName);
	if (!val) return false;
	val.replace(',', '.').replace(/[^0-9.]/, '');
	return val ? parseFloat(val) : false;
}