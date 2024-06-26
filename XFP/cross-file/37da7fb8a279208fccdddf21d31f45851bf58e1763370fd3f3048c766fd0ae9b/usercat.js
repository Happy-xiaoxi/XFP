export function getUserCat (catID) {
	return this.userCat[catID] !== undefined ? this.userCat[catID] : false;
};
export function setUserData (userData) {
	this.userData = userData;
	this.userCat = {};
	if (!userData || !userData.categories) {
		return;
	}
	for (var i = 0; i < userData.categories.length; i++) {
		this.userCat[userData.categories[i].id] = userData.categories[i].cat;
	}
};
export function getUserCats () {
	return this.userCat;
};
export function addUserCatIterator (func, beforeExec, afterExec) {
	this.userIteratorFunc.push([func, beforeExec, afterExec]);
};