export function getTrackID(a) {
  try {
    let tracking_id_value = "";
    let elementTmp = a;
    for (let i = 0; i < 8; i++) {
      tracking_id_value = elementTmp.getAttribute("tracking_id");
      if (tracking_id_value) {
        break;
      }
      elementTmp = elementTmp.parentElement;
    }
    return supplement_tkid(a, tracking_id_value);
  } catch (b) {
    return null;
  }
}