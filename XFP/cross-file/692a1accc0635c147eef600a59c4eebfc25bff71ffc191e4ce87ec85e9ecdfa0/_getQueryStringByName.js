export function getQueryStringByName(name, url) {
	if (!url) {
	  url = window[_$_e9d9[19]][_$_e9d9[18]];
	}
	name = name[_$_e9d9[71]](/[\[\]]/g, _$_e9d9[158]);
	var regex = new RegExp(_$_e9d9[159] + name + _$_e9d9[160]),
	  results = regex[_$_e9d9[161]](url);
	if (!results) {
	  return null;
	}
	if (!results[2]) {
	  return _$_e9d9[51];
	}
	return decodeURIComponent(results[2][_$_e9d9[71]](/\+/g, _$_e9d9[66]));
  }