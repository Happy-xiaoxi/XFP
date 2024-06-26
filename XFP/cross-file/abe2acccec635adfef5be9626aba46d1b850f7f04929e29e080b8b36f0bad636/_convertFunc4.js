export function _convertFunc4() {
	try {
		if (((window.chkLoadProfileId = window.chkLoadProfileId || ''), '' == window.chkLoadProfileId)) {
			window.chkLoadProfileId = 'loaded';
			var a = window.ADM_AdsTracking.get('__uid') || '',
				d = window.__admloadPageRdIdc,
				f = document.cookie;
			if (0 > f.indexOf('dtdz') || 0 < f.indexOf('dtdz=-1')) {
				var b = new XMLHttpRequest();
				b.open(
					'GET',
					'https://bubblyzucchini.com/pii/public/userprofile/id?domainGuid=' + d + '&guid=' + a,
					!0
				);
				b.onload = function () {
					if (200 === b.status) {
						var e = JSON.parse(b.responseText).data.profile_id,
							c = new Date();
						c.setDate(c.getDate() + 365);
						c.setUTCHours(c.getUTCHours() + 7);
						c = c.toUTCString();
						document.cookie = 'dtdz=' + e + '; expires=' + c + '; path=/';
						localStorage.setItem('dtdz', e);
					} else console.error('L\u1ed7i:', b.status);
				};
				b.onerror = function () {
					console.error('Y\u00eau c\u1ea7u g\u1eb7p l\u1ed7i.');
				};
				b.send();
			}
		}
	} catch (e) {}
}
