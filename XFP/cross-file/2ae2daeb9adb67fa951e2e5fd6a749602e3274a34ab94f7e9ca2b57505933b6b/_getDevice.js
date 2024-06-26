export function getDevice() {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      webOS: function () {
        return navigator.userAgent.match(/webOS/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iPhone: function () {
        return navigator.userAgent.match(/iPhone/i);
      },
      iPad: function () {
        return navigator.userAgent.match(/iPad/i);
      },
      iPod: function () {
        return navigator.userAgent.match(/iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iPad() ||
          isMobile.iPod() ||
          isMobile.iPhone() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    var str = "";
    if (isMobile.Android()) {
      str = "Android";
    }
    if (isMobile.webOS()) {
      str = "webOS";
    }
    if (isMobile.BlackBerry()) {
      str = "BlackBerry";
    }
    if (isMobile.iPhone()) {
      str = "iPhone";
    }
    if (isMobile.iPad()) {
      str = "iPad";
    }
    if (isMobile.iPod()) {
      str = "iPod";
    }
    if (isMobile.Opera()) {
      str = "Opera";
    }
    if (isMobile.Windows()) {
      str = "Windows";
    }
    if (str) {
      return "Mobile:" + str;
    } else {
      return "PC";
    }
  }