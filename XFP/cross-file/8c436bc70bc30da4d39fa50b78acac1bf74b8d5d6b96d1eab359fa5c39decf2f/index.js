import onConsent from "./onConsent.js";
import processData from "./processData.js";

var t = "script";
var u = "https://p.ad.gt/api/v1/p/458";
const COOKIE_TTL = 57600;
const CURRENT_SECONDS = Math.round(new Date() / 1000);
const GDPR_APPLIES = false;
const NEED_GDPR_FLAGS = ["apn", "ttd", "rub", "smart", "son", "index"];
const NEED_HADRON_MATCH = ["index"];
const ID_MATCH_VENDORS = {
  "apn": 32,
  "ttd": 21,
  "adx": 755,
  "ado": 565,
  "pub": 76,
  "son": 104,
  "goo": 561,
  "rub": 52,
  "bees": 12,
  "impr": 253,
  "smart": 45,
  "ppnt": 81,
  "taboola": 42,
  "unruly": 36,
  "openx": 69,
  "ip": 561,
  "tapad": 89,
  "index": 10
};
const SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
const DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;
;
const w = window;
onConsent(w, w.document, t, u, processData);