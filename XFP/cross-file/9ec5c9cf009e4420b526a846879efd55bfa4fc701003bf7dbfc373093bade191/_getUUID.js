var d = window;
export function _getUUID(a) {
			var b = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
					var b = (16 * d.Math.random()) | 0;
					return ('x' == a ? b : (b & 3) | 8).toString(16);
				}),
				b = this.getCookie(a) || this.getLocalStorage(a) || b;
			this.setCookie(a, b, 365);
			this.setLocalStorage(a, b);
			return b;
		}
        
export function _getRandom() {
			return d.Math.random();
		}