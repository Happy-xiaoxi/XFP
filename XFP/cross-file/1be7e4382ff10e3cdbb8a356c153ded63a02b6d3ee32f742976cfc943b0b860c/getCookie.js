export function getCookie (name) {
	return this.cookieData[name] ? this.cookieData[name] : false;
}