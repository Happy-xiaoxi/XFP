export function onLocationDiscovery(stateId, cityId, gpsType, lat, long) {
	var evt = new CustomEvent(_$_e9d9[152], {
	  "\x64\x65\x74\x61\x69\x6C": {
		result: _$_e9d9[153],
		stateId: stateId,
		cityId: cityId,
		gpsType: gpsType,
		lat: lat,
		long: long,
	  },
	});
	window[_$_e9d9[76]](evt);
  }