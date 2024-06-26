import {getCookie} from './getCookie.js';

let collect = {
  server: "//datalog.eqxiu.com/p.gif",
  sdk: "tracker.js",
  ver: "7.1.18",
}
export function params(B, helper) {

  let p = {};
  p.element_data = {};
  p.sdk = collect.sdk;
  p.ver = collect.ver;
  p.d_i = getCookie("_tracker_distinct_id_") || window._tracker_distinct_id_;
  if (document) {
    p.url = document.URL || "";
    p.tit = helper.getField("unm") || document.title || "";
    p.ref = document.referrer || "";
  }
  if (navigator) {
    p.u_a = navigator.userAgent || "";
  }
  let device = tracker_ua_device(p.u_a);
  if (device && device.browser) {
    p.bro = device.browser.name || "";
  }
  if (device && device.os) {
    p.os = device.os.name || "";
    if (device.os.version) {
      p.o_v = device.os.version.original || "";
    }
  }
  if (device && device.engine) {
    p.eng = device.engine.name || "";
  }
  if (device && device.device) {
    p.man = device.device.manufacturer || "";
    p.mod = device.device.model || "";
  }
  p.sns = helper.getSocialNetworkingSite();
  p.n_t = helper.getNetType();
  p.s_i = helper.getSessionId();
  p.c_i = getCanvasId();
  p.u_i = helper.getUserId();
  p.c_p = helper.getClientType();
  p.ter = getTerminal();
  p.p_l = getPlatform() || "";
  p.b_v = helper.getClientEdition() || window.log.b_v;
  p.b_t = helper.getField("b_t") || window.log.b_t;
  p.product = window.log.product || helper.getField("product");
  p.pid = window.log.pid || "";
  p.tk_id = "";
  p.scene_id = (window.scene && window.scene.id) || window.log.scene_id || "";
  p.scene_c_u = (window.scene && window.scene.userId) || "";
  p.scene_code = (window.scene && window.scene.code) || "";
  p.scene_bizType = (window.scene && window.scene.bizType) || "";
  if (window.log && window.log.page_start_time) {
    p.dur = new Date().getTime() - window.log.page_start_time;
  } else {
    p.dur = 1;
  }
  p.e_d = helper.getData(B);
  if (B) {
    let level2_fields = [
      "activity_id",
      "team_id",
      "mat_product",
      "product_id",
    ];
    p.e_p = helper.getXPath(B);
    let bd_attr = B.getAttribute("bd_attr");
    if (bd_attr) {
      p.rdt = "3";
      let kv_pairs = bd_attr.split("&");
      for (let idx in kv_pairs) {
        let kv = kv_pairs[idx].split("=");
        if (kv.length === 2 && kv[0] && kv[1]) {
          if (kv[0] === "loc") {
            p.loc = kv[1];
          } else {
            if (level2_fields.indexOf(kv[0]) > -1) {
              if (p.e_d) {
                p.e_d[kv[0]] = kv[1];
              } else {
                p.e_d = {};
                p.e_d[kv[0]] = kv[1];
              }
            }
          }
        }
      }
    }
  }
  return p;
}