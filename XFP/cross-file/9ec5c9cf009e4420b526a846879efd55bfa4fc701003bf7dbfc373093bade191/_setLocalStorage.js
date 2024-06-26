export function _setLocalStorage(a, b) {
			try {
				d.localStorage && d.localStorage.setItem(a, b);
			} catch (c) {}
		}