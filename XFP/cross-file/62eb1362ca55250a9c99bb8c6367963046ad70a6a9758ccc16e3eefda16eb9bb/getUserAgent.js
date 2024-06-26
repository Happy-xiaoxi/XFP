export function getUserAgent() {
  return fingerprint.util.MD5.hex_md5(navigator.userAgent);
}