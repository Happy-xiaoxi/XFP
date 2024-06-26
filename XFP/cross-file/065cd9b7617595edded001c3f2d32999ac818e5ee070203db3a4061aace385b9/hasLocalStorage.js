export function hasLocalStorage() {
	try {
		return !!window.localStorage;
	} catch (n) {
		return !0;
	}
}