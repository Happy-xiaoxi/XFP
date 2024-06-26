export function registerTime(pageId, seconds) {
	var xmlDocument = $[_$_e9d9[111]](_$_e9d9[110]);
	var footPrintNode = xmlDocument[_$_e9d9[113]](_$_e9d9[112]);
	xmlDocument[_$_e9d9[115]][_$_e9d9[114]](footPrintNode);
	footPrintNode[_$_e9d9[114]](
	  document[_$_e9d9[116]](Base64[_$_e9d9[94]](getCookie(_$_e9d9[98])))
	);
	var sessionPrintNode = xmlDocument[_$_e9d9[113]](_$_e9d9[117]);
	xmlDocument[_$_e9d9[115]][_$_e9d9[114]](sessionPrintNode);
	sessionPrintNode[_$_e9d9[114]](
	  document[_$_e9d9[116]](Base64[_$_e9d9[94]](getCookie(_$_e9d9[97])))
	);
	var idNode = xmlDocument[_$_e9d9[113]](_$_e9d9[118]);
	xmlDocument[_$_e9d9[115]][_$_e9d9[114]](idNode);
	idNode[_$_e9d9[114]](document[_$_e9d9[116]](pageId));
	var timeInSecondsNode = xmlDocument[_$_e9d9[113]](_$_e9d9[119]);
	xmlDocument[_$_e9d9[115]][_$_e9d9[114]](timeInSecondsNode);
	timeInSecondsNode[_$_e9d9[114]](document[_$_e9d9[116]](seconds));
	var oSerializer = new XMLSerializer();
	var data = oSerializer[_$_e9d9[120]](xmlDocument);
	if (navigator[_$_e9d9[121]] === undefined) {
	  var isSafari =
		/constructor/i[_$_e9d9[6]](window[_$_e9d9[122]]) ||
		(function (p) {
		  return p[_$_e9d9[126]]() === _$_e9d9[127];
		})(
		  !window[_$_e9d9[123]] ||
			(typeof safari !== _$_e9d9[124] && safari[_$_e9d9[125]])
		);
	  var isIE = false || !!document[_$_e9d9[128]];
	  var userAgent = window[_$_e9d9[129]][_$_e9d9[3]];
	  if (
		userAgent[_$_e9d9[130]](/iPad/i) ||
		userAgent[_$_e9d9[130]](/iPhone/i)
	  ) {
		isSafari = true;
	  }
	  if (isIE || isSafari) {
		console[_$_e9d9[100]](_$_e9d9[123]);
		var img = document[_$_e9d9[113]](_$_e9d9[131]);
		img[_$_e9d9[132]] =
		  API_BASEURL +
		  _$_e9d9[133] +
		  Base64[_$_e9d9[94]](getCookie(_$_e9d9[98])) +
		  _$_e9d9[134] +
		  Base64[_$_e9d9[94]](getCookie(_$_e9d9[97])) +
		  _$_e9d9[134] +
		  pageId +
		  _$_e9d9[134] +
		  seconds +
		  _$_e9d9[134];
	  } else {
		$[_$_e9d9[139]]({
		  type: _$_e9d9[135],
		  url: API_BASEURL + _$_e9d9[136],
		  processData: false,
		  dataType: _$_e9d9[137],
		  contentType: _$_e9d9[138],
		  data: data,
		  success: function (result) {
			console[_$_e9d9[100]](result);
		  },
		  error: function (xhr, ajaxOptions, thrownError) {
			console[_$_e9d9[100]](thrownError);
		  },
		});
	  }
	} else {
	  var headers = { type: _$_e9d9[140] };
	  var blob = new Blob([data], headers);
	  navigator[_$_e9d9[121]](API_BASEURL + _$_e9d9[141], blob);
	}
  }