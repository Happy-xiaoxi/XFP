export function validateProtocol(address, force_ssl) {
  if (/^https?:\/\//i.test(address)) {
    if (force_ssl) {
      if (/^http:\/\//i.test(address)) {
        address = address.toLowerCase().replace("http", "https");
      }
    }
  } else {
    if (/^\/\//.test(address)) {
      if (force_ssl) {
        address = "https:" + address;
      } else {
        address = location.protocol + address;
      }
    } else {
      if (force_ssl) {
        address = "https://" + address;
      } else {
        address = location.protocol + "//" + address;
      }
    }
  }
  return address;
}