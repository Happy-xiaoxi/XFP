export function getUserCat (catID) {
	return this.userCat[catID] !== undefined ? this.userCat[catID] : false;
}