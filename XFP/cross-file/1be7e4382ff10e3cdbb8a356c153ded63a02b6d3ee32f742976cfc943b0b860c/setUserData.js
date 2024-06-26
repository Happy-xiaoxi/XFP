export function setUserData (userData) {
	this.userData = userData;
	this.userCat = {};
	if (!userData || !userData.categories) {
		return;
	}
	for (var i = 0; i < userData.categories.length; i++) {
		this.userCat[userData.categories[i].id] = userData.categories[i].cat;
	}
}