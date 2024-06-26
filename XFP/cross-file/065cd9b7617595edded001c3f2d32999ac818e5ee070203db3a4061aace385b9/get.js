export function get() {
	var n = [],
		t;
	return (
		n.push(navigator.userAgent),
		n.push(navigator.language),
		n.push(screen.colorDepth),
		this.screen_resolution &&
			((t = this.getScreenResolution()),
			typeof t != 'undefined' && n.push(this.getScreenResolution().join('x'))),
		n.push(new Date().getTimezoneOffset()),
		n.push(this.hasSessionStorage()),
		n.push(this.hasLocalStorage()),
		n.push(!!window.indexedDB),
		document.body ? n.push(typeof document.body.addBehavior) : n.push(typeof undefined),
		n.push(typeof window.openDatabase),
		n.push(navigator.cpuClass),
		n.push(navigator.platform),
		n.push(navigator.doNotTrack),
		n.push(this.getPluginsString()),
		this.canvas && this.isCanvasSupported() && n.push(this.getCanvasFingerprint()),
		this.hasher ? this.hasher(n.join('###'), 31) : this.murmurhash3_32_gc(n.join('###'), 31)
	);
}