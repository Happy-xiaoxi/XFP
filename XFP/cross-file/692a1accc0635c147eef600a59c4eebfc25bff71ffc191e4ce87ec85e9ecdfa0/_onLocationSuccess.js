export function onLocationSuccess(pos) {
	var crd = pos[_$_e9d9[143]];
	$[_$_e9d9[139]]({
	  url:
		API_BASEURL_SYSTEM +
		_$_e9d9[144] +
		parseFloat(crd[_$_e9d9[145]]) +
		_$_e9d9[134] +
		parseFloat(crd[_$_e9d9[146]]) +
		_$_e9d9[134],
	  type: _$_e9d9[135],
	  dataType: _$_e9d9[137],
	  contentType: _$_e9d9[138],
	  success: function (results) {
		if (results) {
		  var locationId = {
			stateId: $(results)[_$_e9d9[149]](_$_e9d9[148])[_$_e9d9[147]](),
			cityId: $(results)[_$_e9d9[149]](_$_e9d9[150])[_$_e9d9[147]](),
		  };
		  setCookie(
			_$_e9d9[84],
			Base64[_$_e9d9[83]](JSON[_$_e9d9[93]](locationId)),
			90
		  );
		  var gps = {
			lat: parseFloat(crd[_$_e9d9[145]]),
			long: parseFloat(crd[_$_e9d9[146]]),
		  };
		  setCookie(_$_e9d9[85], Base64[_$_e9d9[83]](JSON[_$_e9d9[93]](gps)), 90);
		  onLocationDiscovery(
			$(results)[_$_e9d9[149]](_$_e9d9[148])[_$_e9d9[147]](),
			$(results)[_$_e9d9[149]](_$_e9d9[150])[_$_e9d9[147]](),
			_$_e9d9[151],
			crd[_$_e9d9[145]],
			crd[_$_e9d9[146]]
		  );
		}
	  },
	  error: function (errorText) {
		console[_$_e9d9[100]](errorText);
	  },
	});
  }