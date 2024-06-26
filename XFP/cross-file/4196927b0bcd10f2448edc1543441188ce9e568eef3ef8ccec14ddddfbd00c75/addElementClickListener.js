export function addElementClickListener() {
  let that = this;
  window.setInterval(function () {
    let nodeList = document.querySelectorAll(
      "div, span, i, a, img, button, li, input[type='button'], input[type='submit'], input[type='reset'], *[ng-click],*[bd_attr]"
    );
    helper.each(nodeList, function (C, B) {
      if (C.getAttribute("bd_attr")) {
      } else {
        if (
          C &&
          (C.tagName.toLowerCase() === "div" ||
            C.tagName.toLowerCase() === "span" ||
            C.tagName.toLowerCase() === "i") &&
          !C.getAttribute("ng-click")
        ) {
          let id = C.getAttribute("id") || "";
          let clz = C.getAttribute("class") || "";
          let tid = C.getAttribute("tracking_id") || "";
          let rdt = C.getAttribute("rdt") || "";
          if (
            clz.indexOf("bdc_view") < 0 &&
            id.indexOf("btn") < 0 &&
            id.indexOf("button") < 0 &&
            clz.indexOf("btn") < 0 &&
            tid.length < 1 &&
            rdt.length < 1
          ) {
            return;
          }
        }
      }
      if (!C.getAttribute("_tracker_click_")) {
        helper.on(C, "click", function (F) {
          let params = that.params(C);
          params.e_t = "element_click";
          if (helper.getTrackerDataFrom(C) && params.e_d) {
            if (params.e_d.type) {
              const G = params.e_d.type;
              if (f[G]) {
                params.product = f[G];
                if (params.e_d.product_id) {
                  params = helper.extend(params, {
                    cat: "template",
                    act: "",
                    rdt: "3",
                  });
                }
              }
            }
          }
          let tracking_id_value = getTrackID(C);
          let act_arr = [getAction1(C), getAction2(C)];
          if (
            tracking_id_value &&
            tracking_id_value.search("^search|re|topic|man-A") === 0
          ) {
            params = helper.extend(params, {
              tk_id: tracking_id_value,
              rdt: "2",
            });
          } else {
            if (tracking_id_value) {
              if (tracking_id_value.indexOf("show-pro") === 0) {
                setCookie("_tracker_pro_tk_id", tracking_id_value, 20000);
                params.rdt = "3";
                params.tk_id = tracking_id_value;
                params.cat = "";
                params.act = "";
              } else {
                if (tracking_id_value.indexOf("show-ad") === 0) {
                  setCookie("_tracker_pro_tk_id", tracking_id_value, 20000);
                  params.rdt = "3";
                  params.tk_id = tracking_id_value;
                  params.cat = "";
                  params.act = "";
                } else {
                  if (tracking_id_value.indexOf("topic") === 0) {
                    setCookie(
                      "_tracker_topic_tk_id",
                      tracking_id_value,
                      7200000
                    );
                    params.rdt = "3";
                    params.element_data.topic_tk_id = tracking_id_value;
                  } else {
                    if (tracking_id_value.indexOf("ad") === 0) {
                      setCookie(
                        "_tracker_ad_tk_id",
                        tracking_id_value,
                        7200000
                      );
                      params.rdt = "3";
                      params.element_data.ad_tk_id = tracking_id_value;
                      params.tk_id = tracking_id_value;
                    } else {
                      params.rdt = "3";
                      params.tk_id = tracking_id_value;
                      params.cat = "element_click";
                      params.act = "";
                    }
                  }
                }
              }
            }
          }
          if (C.getAttribute("rdt") === 3) {
            params = helper.extend(params, { rdt: "3" });
          }
          let spm = getSeriesTrackID(C);
          if (spm && params.e_d) {
            params.e_d.spm = spm;
            const D = spm.split(",");
            let tmpPreSpmArr = [];
            const E = getCookie("_tracker_spm");
            if (E) {
              tmpPreSpmArr = E.split(",");
            }
            let diffSpmArr = D.filter(function (H) {
              return tmpPreSpmArr.indexOf(H) === -1;
            });
            diffSpmArr.map(function (H) {
              tmpPreSpmArr.unshift(H);
            });
            spm = Array.from(new Set(tmpPreSpmArr)).join(",");
            setCookie("_tracker_spm", spm, 20000);
          }
          let material_click_event_array = act_arr.filter(function (H) {
            return H.act === "";
          });
          if (
            material_click_event_array &&
            material_click_event_array.length > 0
          ) {
            setCookie("_tracker_spm", spm, 60000);
          }
          for (let i in act_arr) {
            let tmp_obj = act_arr[i];
            if (tmp_obj.act) {
              let tmp_params = Object.assign({}, params, tmp_obj);
              proxySend(that.server, tmp_params);
            }
          }
          if (params.act) {
            proxySend(that.server, params);
          }
          if (window.log.autoHeatmap) {
            heatClickCallBack(F);
          }
          return false;
        });
        C.setAttribute("_tracker_click_", "_tracker_click_");
      }
    });
  }, 1000);
}