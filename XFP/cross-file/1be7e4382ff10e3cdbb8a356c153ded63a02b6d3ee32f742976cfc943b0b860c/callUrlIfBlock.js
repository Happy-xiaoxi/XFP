export function callUrlIfBlock (blockPixelArray, notBlockPixelArray) {
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isChrome = !!window.chrome && !isOpera;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isChrome || isFirefox) {
		var htmlElem = document.createElement('div');
		htmlElem.className = 'AdvertContainer adblock annonces_google barre_adsense adBlock';
		htmlElem.style.height = '1px';
		htmlElem.style.width = '1px';
		htmlElem.style.opacity = '0.1';
		document.body.appendChild(htmlElem);
		if (htmlElem.offsetHeight == 0) {
			for (var i = 0; i < blockPixelArray.length; i++) {
				this.callURL(blockPixelArray[i]);
			}
		} else {
			for (var i = 0; i < notBlockPixelArray.length; i++) {
				this.callURL(notBlockPixelArray[i]);
			}
		}
		htmlElem.parentNode.removeChild(htmlElem);
	}
}