export function CheckBrowserCampatability() {
	var t = browserData.browser.name.toLowerCase(),
	  o = browserData.ua.indexOf("Mobile") >= 0,
	  e = browserData.browser.major;
	return o
	  ? !!mobileAllowedVersions[t] &&
		  ("all" === mobileAllowedVersions[t] || mobileAllowedVersions[t] <= e)
	  : "safari" === t
	  ? "safari" in window && "pushNotification" in window.safari
	  : !!desktopAllowedVersions[t] &&
		("all" === desktopAllowedVersions[t] || desktopAllowedVersions[t] <= e);
  }