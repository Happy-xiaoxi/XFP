export function addUserCatIterator (func, beforeExec, afterExec) {
	this.userIteratorFunc.push([func, beforeExec, afterExec]);
}