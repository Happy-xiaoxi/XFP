export function getCookieDomain() {
  var hostname = this._getHostname();
  var isIP = this._isIP(hostname);
  if (isIP) {
    return hostname;
  }
  var components = hostname.split(".");
  if (components.length > 2) {
    components = components.slice(1);
  }
  return components.join(".");
}