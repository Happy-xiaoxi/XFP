export function getConnectUrl() {
	var httpProto = 'https://';
	var lgcUrl = tagHost + '/img/img.png?cnx=' + (device && device.D9_61 ? device.D9_61 : '');
	return httpProto + lgcUrl;
}