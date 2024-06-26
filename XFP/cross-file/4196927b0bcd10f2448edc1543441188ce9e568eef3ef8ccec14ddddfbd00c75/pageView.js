import { h } from "./h.js";
import {getField} from './getField.js';
export function pageView(B) {
  let temp_url = h();
  window.log.page_url = temp_url;
  let that = this;
  let params = that.params();
  params.e_t = "page_view";
  params.cat = "page_view";
  params.rdt = "3";
  params.act = getField("unm");
  params.url = temp_url;
  if (B) {
    params = helper.extend(params, B);
  }
  proxySend(that.server, params);
}