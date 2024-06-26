export function setHash (type, value) {
	this.hashList[type] = value;
};
export function getHash (type) {
	return this.hashList[type] ? this.hashList[type] : false;
};