export function getSeriesTrackID(a) {
  try {
    let tempTrackerId = "";
    let elementTmp = a;
    for (let i = 0; i < 8; i++) {
      let tracking_id_value = elementTmp.getAttribute("tracking_id");
      tracking_id_value = supplement_tkid(elementTmp, tracking_id_value);
      if (tempTrackerId) {
        if (tracking_id_value) {
          tempTrackerId = tracking_id_value + "," + tempTrackerId;
        }
      } else {
        if (tracking_id_value) {
          tempTrackerId = tracking_id_value;
        }
      }
      let isFinal = elementTmp.getAttribute("data-final");
      if (isFinal) {
        break;
      }
      elementTmp = elementTmp.parentElement;
      if (!elementTmp) {
        break;
      }
    }
    let current_page_ab = "";
    let temp_tracker_ab = getCookie("_tracker_ab");
    if (temp_tracker_ab) {
      let idx = temp_tracker_ab.indexOf("abTest_v1_");
      if (idx > -1) {
        let temp_stg = temp_tracker_ab.substring("abTest_v1_".length);
        current_page_ab = "ab-" + temp_stg + "-page-0-0-0";
      }
    }
    if (!tempTrackerId) {
      tempTrackerId = current_page_ab;
    } else {
      if (tempTrackerId.indexOf("ab") === -1) {
        tempTrackerId = tempTrackerId + "," + current_page_ab;
      }
    }
    if (window.log && window.log.start_track) {
      let product = window.ilog.product;
      let scene_code = window.scene && window.scene.code;
      if (product && scene_code) {
        if (tempTrackerId.indexOf(product) === -1) {
          let current_page_tk_id = product + "-" + scene_code + "-page-0-0-0";
          if (tempTrackerId) {
            tempTrackerId = current_page_tk_id + "," + tempTrackerId;
          } else {
            tempTrackerId = current_page_tk_id;
          }
        }
      }
    }
    return getUniqueSpm(tempTrackerId);
  } catch (b) {
    return null;
  }
}