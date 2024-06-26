export function deleteData(name) {
  var cookies = document.cookie.split("; ");
  cookies = cookies.filter(function (cookie) {
    return cookie !== "";
  });
  for (var i = 0; i < cookies.length; i++) {
    var domainName = window.location.hostname.split(".");
    while (domainName.length > 0) {
      if (cookies[i].split(";")[0].split("=")[0] === name) {
        var cookieBase =
          encodeURIComponent(cookies[i].split(";")[0].split("=")[0]) +
          "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" +
          domainName.join(".") +
          " ;path=";
        var p = location.pathname.split("/");
        document.cookie = cookieBase + "/";
        while (p.length > 0) {
          document.cookie = cookieBase + p.join("/");
          p.pop();
        }
        domainName.shift();
      }
    }
  }
}