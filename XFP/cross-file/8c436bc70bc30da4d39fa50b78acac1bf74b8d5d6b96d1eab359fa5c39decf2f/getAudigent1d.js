
import buildAudigent1d from "./buildAudigent1d.js";
import getCookie from "./getCookie.js";

export default function getAudigent1d(w, d) {
  let au1d = getCookie(d, "1d");
  if (au1d == null) {
    au1d = buildAudigent1d();
  }
  return au1d;
}