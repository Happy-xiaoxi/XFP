
export function getURLKeywords (url) {
	var r = new RegExp('^https?://([a-z.-0-9]+)/(.+)$', 'i');
	var found = r.exec(url);
	return '';
};