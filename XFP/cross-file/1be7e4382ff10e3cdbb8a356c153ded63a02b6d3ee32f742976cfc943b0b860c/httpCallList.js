export function httpCallList (list) {
	for (var c = 0; c < list.length; c++) {
		this.httpCall(list[c]);
	}
}