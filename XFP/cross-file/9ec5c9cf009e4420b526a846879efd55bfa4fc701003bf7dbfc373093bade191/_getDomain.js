export function _getDomain(l) {
			var a = l.host.toLowerCase(),
				b = /.*?([^\.]+\.(com|org|net|biz|edu|cc)(\.[^\.]+)?)/;
			return b.test(a) ? '.' + a.replace(b, '$1') : '';
		}