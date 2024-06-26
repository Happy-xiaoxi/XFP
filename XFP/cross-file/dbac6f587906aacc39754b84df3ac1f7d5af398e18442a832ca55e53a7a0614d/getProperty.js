export function getProperty(prop) {
	try {
		return eval(prop);
	} catch (e) {
		return null;
	}
}