export function _isIP(hostname) {
  var splittedHostName = hostname.split(".");
  if (splittedHostName.length != 4) {
    return false;
  }
  return splittedHostName.reduce(function (accum, current) {
    return accum && current >= 0 && current < 256;
  }, true);
}