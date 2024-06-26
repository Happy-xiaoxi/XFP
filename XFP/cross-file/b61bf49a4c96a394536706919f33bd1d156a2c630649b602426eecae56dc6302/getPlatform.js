export function getPlatform() {
  var hostname = this.hostname();
  if (
    hostname.indexOf("m.vidio.com") > -1 ||
    hostname.indexOf("m.staging.vidio.com") > -1 ||
    hostname.indexOf("m.int.vidio.com") > -1
  ) {
    return "web-mobile";
  } else if (
    hostname.indexOf("www.vidio.com") > -1 ||
    hostname.indexOf("staging.vidio.com") > -1 ||
    hostname.indexOf("int.vidio.com") > -1
  ) {
    return "web-desktop";
  } else {
    return "unknown";
  }
}