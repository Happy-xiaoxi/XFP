export function elementView(F, C, B, D, H) {
  let that = this;
  let params = that.params(F);
  params.e_t = "element_view";
  if (B && D) {
    params = helper.extend(params, { cat: B, act: D });
  } else {
    let action = getAction2(F);
    if (action.cat && action.act) {
      params = Object.assign({}, params, action);
    } else {
      params = helper.extend(params, {
        cat: "element_view",
        act: "元素曝光",
      });
    }
  }
  const E = getTrackID(F);
  params.e_d.spm = E;
  if (E) {
    if (E.indexOf("ad-") === 0) {
      params.element_data.ad_tk_id = E;
    } else {
      if (E.indexOf("topic-") === 0) {
        params.element_data.topic_tk_id = E;
      } else {
        params = helper.extend(params, { tk_id: E });
      }
    }
  }
  params = helper.extend(params, { rdt: "1" });
  if (C) {
    params = helper.extend(params, { b_t: C });
  }
  if (H) {
    params = helper.extend(params, { b_v: H });
  }
  if (D === "模板曝光" && params.e_d) {
    const G = params.e_d.type;
    if (f[G]) {
      params.product = f[G];
    }
  }
  if (params.act) {
    params.act = params.act.replace("点击", "曝光");
  }
  proxySend(that.server, params);
}