export function getLocation() {
  return fingerprint.util.MD5.hex_md5(location.href.split("?")[0]);
}