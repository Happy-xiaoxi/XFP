export function executeUserCatIteratorFunc () {
	for (var c = 0; c < this.userIteratorFunc.length; c++) {
		if (this.userIteratorFunc[c][1]) this.userIteratorFunc[c][1]();
	}
	for (var catID in this.userCat) {
		for (var c = 0; c < this.userIteratorFunc.length; c++)
			if (this.userIteratorFunc[c][0]) this.userIteratorFunc[c][0](catID, this.userCat[catID]);
	}
	for (var c = 0; c < this.userIteratorFunc.length; c++) {
		if (this.userIteratorFunc[c][2]) this.userIteratorFunc[c][2]();
	}
}