export function getLocation() {
	var locationId = getCookie(_$_e9d9[84]);
	if (locationId) {
	  console[_$_e9d9[100]](_$_e9d9[99]);
	  var gps = getCookie(_$_e9d9[85]);
	  var locationDetails = JSON[_$_e9d9[95]](Base64[_$_e9d9[94]](locationId));
	  if (gps) {
		var gpsLocation = JSON[_$_e9d9[95]](Base64[_$_e9d9[94]](gps));
		onLocationDiscovery(
		  parseInt(locationDetails[_$_e9d9[101]]),
		  parseInt(locationDetails[_$_e9d9[102]]),
		  _$_e9d9[103],
		  gpsLocation[_$_e9d9[104]],
		  gpsLocation[_$_e9d9[105]]
		);
	  } else {
		onLocationDiscovery(
		  parseInt(locationDetails[_$_e9d9[101]]),
		  parseInt(locationDetails[_$_e9d9[102]]),
		  _$_e9d9[106],
		  0,
		  0
		);
	  }
	} else {
	  console[_$_e9d9[100]](_$_e9d9[107]);
	  navigator[_$_e9d9[109]][_$_e9d9[108]](
		onLocationSuccess,
		onLocationError,
		gpsOptions
	  );
	}
  }