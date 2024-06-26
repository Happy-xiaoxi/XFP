import { String } from './String.js';
import { O } from './O.js';
import { O } from './O.js';
import { String } from './String.js';
import { Number } from './Number.js';
import { P } from './P.js';
export function Q(a, b) {
  b && (b = String(b).toLowerCase());
  if ("protocol" === b || "port" === b) a.protocol = O(a.protocol) || O(G.location.protocol);
  "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || G.location.hostname).replace(N, "").toLowerCase());
  return P(a, b);
}