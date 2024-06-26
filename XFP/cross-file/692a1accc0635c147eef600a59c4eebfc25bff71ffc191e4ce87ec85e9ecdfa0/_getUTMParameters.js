export function getUTMParameters() {
	var utm_campaign = getQueryStringByName(_$_e9d9[86]);
	var utm_source = getQueryStringByName(_$_e9d9[87]);
	var utm_medium = getQueryStringByName(_$_e9d9[88]);
	var utm_term = getQueryStringByName(_$_e9d9[89]);
	var utm_content = getQueryStringByName(_$_e9d9[90]);
	var agency_code = getQueryStringByName(_$_e9d9[91]);
	if (
	  utm_campaign ||
	  utm_source ||
	  utm_medium ||
	  utm_term ||
	  utm_content ||
	  agency_code
	) {
	  var utmData = {
		ca: utm_campaign,
		so: utm_source,
		me: utm_medium,
		te: utm_term,
		co: utm_content,
		ac: agency_code,
	  };
	  setCookie(_$_e9d9[92], Base64[_$_e9d9[83]](JSON[_$_e9d9[93]](utmData)), 30);
	}
  }