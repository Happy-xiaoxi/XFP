export function onLocationError(err) {
	var evt = new CustomEvent(_$_e9d9[152], {
	  "\x64\x65\x74\x61\x69\x6C": {
		result: _$_e9d9[154],
		stateId: -1,
		cityId: -1,
		gpsType: _$_e9d9[106],
		lat: 0,
		long: 0,
	  },
	});
	window[_$_e9d9[76]](evt);
  }