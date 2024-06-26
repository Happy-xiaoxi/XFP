export function qp_qsV(n) {
	try {
		return new RegExp('[\\?\\&]' + n + '[\\=]([^\\&\\?\\=\\#]+)').exec(document.location)[1];
	} catch (t) {}
	return '';
}