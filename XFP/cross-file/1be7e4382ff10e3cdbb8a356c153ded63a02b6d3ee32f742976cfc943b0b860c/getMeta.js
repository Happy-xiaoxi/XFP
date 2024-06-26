export function getMeta (name) {
	var metas = document.getElementsByTagName('meta');
	for (var x = 0, y = metas.length; x < y; x++) {
		if (metas[x].name.toLowerCase() == name) {
			return metas[x].content;
		}
	}
	return '';
}