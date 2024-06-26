export function registerView(pageId) {
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
	timeInSecondsNode[_$_e9d9[114]](document[_$_e9d9[116]](0));
	var oSerializer = new XMLSerializer();
	var data = oSerializer[_$_e9d9[120]](xmlDocument);
	$[_$_e9d9[139]]({
	  type: _$_e9d9[135],
	  url: API_BASEURL + _$_e9d9[142],
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