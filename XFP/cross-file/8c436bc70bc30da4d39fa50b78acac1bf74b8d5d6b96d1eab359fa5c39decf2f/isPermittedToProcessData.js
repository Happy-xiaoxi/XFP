export default function isPermittedToProcessData(tcdata) {
  let permitted = false;
  if ((tcdata || {})["gdprApplies"] === true) {
    const consents = tcdata["purpose"]["consents"];
    const permittedConsents = Object.keys(consents).filter(idx => consents[idx] === true);
    if (tcdata["vendor"].consents[561] && ["1", "2", "3", "4", "9"].every(v => permittedConsents.includes(v))) {
      permitted = true;
    }
  }
  return permitted;
}