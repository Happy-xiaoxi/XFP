export function ajax(url, send) {
	if (window.d9PendingXDR != undefined) {
		return;
	}
	var ar = null;
	function corsSupported() {
		try {
			return typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
		} catch (e) {
			return false;
		}
	}
	if (typeof window.XDomainRequest !== 'undefined' && !corsSupported()) {
		ar = new XDomainRequest();
		ar.open('POST', url);
	} else {
		try {
			ar = new XMLHttpRequest();
		} catch (e) {
			if (window.ActiveXObject) {
				var ax = [
					'Msxml2.XMLHTTP.3.0',
					'Msxml2.XMLHTTP.4.0',
					'Msxml2.XMLHTTP.6.0',
					'Msxml2.XMLHTTP',
					'Microsoft.XMLHTTP',
				];
				var i = ax.length;
				while (--i) {
					try {
						ar = new ActiveXObject(ax[i]);
						break;
					} catch (e) {}
				}
			}
		}
		ar.open('POST', url, true);
		ar.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		ar.withCredentials = true;
	}
	ar.onreadystatechange = function () {
		if (D9r && D9r.L > 0) {
			return;
		}
		if (D9r && D9r.callback && ar.readyState == 4) {
			if (ar.status == 200 || ar.status == 304) {
				var r = ar.responseText;
				var response;
				if (r && r.length > 0) {
					try {
						response = JSON.parse(r);
					} catch (e) {}
				}
				if (response) {
					if (response.cnx) {
						new Image().src = getConnectUrl();
						delete response.cnx;
					}
					D9r.callback(response);
				} else {
					D9r.callback(null);
				}
			}
		}
	};
	if (typeof window.XDomainRequest !== 'undefined' && !corsSupported()) {
		ar.ontimeout = ar.onerror = function (e) {
			ar.status = 400;
			ar.readyState = 4;
			ar.onreadystatechange();
		};
		ar.onload = function () {
			ar.status = 200;
			ar.readyState = 4;
			ar.onreadystatechange();
		};
		ar.onprogress = function () {};
	}
	ar.send(send);
	window.d9PendingXDR = ar;
}