import {getArgFromStr} from './getArgFromStr.js';
export function reportPoint() {
  let that = this;
  const B = getArgFromStr(document.URL, "bd_ptid");
  let bd_ptst = getArgFromStr(document.URL, "bd_ptst");
  if (B && bd_ptst) {
    try {
      bd_ptst = parseInt(bd_ptst) * 1000;
      setTimeout(function () {
        let params = that.params();
        params.e_t = "element_view";
        params.cat = "point";
        params.act = "point_task";
        params.rdt = "61";
        params.product = "max";
        params.b_t = "def";
        params.element_data.bd_ptid = B;
        helper.send(collect.server, params);
      }, bd_ptst);
    } catch (C) {
      console.log("Error: point 1. ");
    }
  }
}