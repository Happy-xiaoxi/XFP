export function setData(name, value, ttl) {
  document.cookie = this._constructCookieString(
    name,
    value,
    ttl,
    true,
    "none"
  );
}