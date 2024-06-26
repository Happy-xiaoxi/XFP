import  randomString from "./randomString.js";
export default function buildAudigent1d() {
  const secondsSinceEpoch = Math.round(Date.now() / 1000);
  return "AU1D-0100-" + String(secondsSinceEpoch).padStart(12, "0") + "-" + randomString(8) + "-" + randomString(4);
}