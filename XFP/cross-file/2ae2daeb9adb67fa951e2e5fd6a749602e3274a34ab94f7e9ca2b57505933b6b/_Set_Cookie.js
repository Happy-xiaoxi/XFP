export function Set_Cookie(name, value, expires, path, domain, secure) {
    domain = document.domain;
    domain = domain.match(/[^\.]*\.[^.]*$/)[0];
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
      expires = expires * 1e3 * 60 * 60 * 24;
    } else {
      expires = expires * 20 * 365 * 1e3 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + expires);
    this_expires = expires / 1e3;
    document.cookie =
      name +
      "=" +
      escape(value) +
      (expires ? ";expires=" + expires_date.toGMTString() : "") +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      (secure ? ";secure" : "");
  }