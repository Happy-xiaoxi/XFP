export function send(a, b) {
  var c, d, i;
  if (u.ev[a] || typeof u.ev["all"] !== "undefined") {
    if (a === "remote_api") {
      utag.DB("Remote API event suppressed.");
      return;
    }
    if (a === "update_consent_cookie") {
      utag.DB("Update Consent Cookie event supressed.");
      return;
    }
    if (u.tealium_cookie_domain) {
      b.tealium_cookie_domain = u.tealium_cookie_domain;
    }
    if (u.tealium_cookie_expiry) {
      b.tealium_cookie_expiry = parseInt(u.tealium_cookie_expiry);
    }
    if (u.iab_v20_compliance === true || u.iab_v20_compliance === "true") {
      if (typeof __tcfapi === "function") {
        __tcfapi("getTCData", 2, function (tcData, success) {
          if (success) {
            u.tc_string = "gdpr=";
            if (tcData.gdprApplies === true) {
              u.tc_string += "1";
            } else if (tcData.gdprApplies === false) {
              u.tc_string += "0";
            } else {
              u.tc_string += String(tcData.gdprApplies);
            }
            u.tc_string += "&gdpr_consent=" + tcData.tcString;
            execute_send();
          }
        });
      } else {
        var frame = window;
        var cmpFrame;
        var cmpCallbacks = {};
        while (frame) {
          try {
            if (frame.frames["__tcfapiLocator"]) {
              cmpFrame = frame;
              break;
            }
          } catch (error) {
            utag.DB(error);
          }
          if (frame === window.top) {
            break;
          }
          frame = frame.parent;
        }
        if (!cmpFrame) {
          execute_send();
        } else {
          window.__tcfapi = function (cmd, version, callback, arg) {
            var callId = String(Math.random());
            var msg = {
              __tcfapiCall: {
                command: cmd,
                parameter: arg,
                version: version,
                callId: callId,
              },
            };
            cmpCallbacks[callId] = callback;
            cmpFrame.postMessage(msg, "*");
          };
          window.tealiumiabPostMessageHandler = function (event) {
            var json = {};
            try {
              json =
                typeof event.data === "string"
                  ? JSON.parse(event.data)
                  : event.data;
            } catch (error) {
              utag.DB(error);
            }
            var payload = json.__tcfapiReturn;
            if (payload) {
              if (typeof cmpCallbacks[payload.callId] === "function") {
                cmpCallbacks[payload.callId](
                  payload.returnValue,
                  payload.success
                );
                cmpCallbacks[payload.callId] = null;
              }
            }
          };
          window.addEventListener(
            "message",
            tealiumiabPostMessageHandler,
            false
          );
          __tcfapi("getTCData", 2, function (tcData, success) {
            if (success) {
              u.tc_string = "gdpr=";
              if (tcData.gdprApplies === true) {
                u.tc_string += "1";
              } else if (tcData.gdprApplies === false) {
                u.tc_string += "0";
              } else {
                u.tc_string += String(tcData.gdprApplies);
              }
              u.tc_string += "&gdpr_consent=" + tcData.tcString;
              execute_send();
            }
          });
        }
      }
    } else {
      execute_send();
    }
    function execute_send() {
      if (u.data_source) {
        b.tealium_datasource = u.data_source;
      }
      u.make_enrichment_request = false;
      try {
        if (
          utag.gdpr.consent_prompt.isEnabled ||
          utag.gdpr.getConsentState()
        ) {
          b["consent_categories"] = utag.gdpr.getSelectedCategories();
          b["policy"] = "gdpr";
        }
      } catch (e) {
        utag.DB(e);
      }
      if (!u.is_in_sample_group(b)) {
        return false;
      }
      u.get_performance_timing(b);
      for (i = 0; i < u.server_list.length; i++) {
        if (u.server_list[i].toLowerCase().indexOf("http") === -1) {
          u.server_list[i] = u.validateProtocol(u.server_list[i], true);
        }
        if (u.enrichment_enabled[i] !== false) {
          u.enrichment_enabled[u.server_list[i]] = true;
        }
      }
      if (u.server_list.length > 1) {
        u.profile_specific_vid = 1;
      }
      u.data = utag.datacloud || {};
      u.data["loader.cfg"] = {};
      for (d in utag.loader.GV(utag.loader.cfg)) {
        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
          utag.loader.cfg[d].executed = 1;
        } else {
          utag.loader.cfg[d].executed = 0;
        }
        u.data["loader.cfg"][d] = utag.loader.GV(utag.loader.cfg[d]);
      }
      u.data.data = b;
      for (d in u.data.data) {
        if ((d + "").indexOf("qp.") === 0) {
          u.data.data[d] = encodeURIComponent(u.data.data[d]);
        } else if ((d + "").indexOf("va.") === 0) {
          delete u.data.data[d];
        }
      }
      if (!b["cp.utag_main_dc_event"]) {
        b["cp.utag_main_dc_visit"] =
          1 +
          (b["cp.utag_main_dc_visit"]
            ? parseInt(b["cp.utag_main_dc_visit"])
            : 0) +
          "";
      }
      b["cp.utag_main_dc_event"] =
        1 +
        (b["cp.utag_main_dc_event"]
          ? parseInt(b["cp.utag_main_dc_event"])
          : 0) +
        "";
      utag.loader.SC("utag_main", {
        dc_visit: b["cp.utag_main_dc_visit"],
        dc_event: b["cp.utag_main_dc_event"] + ";exp-session",
      });
      utag.data["cp.utag_main_dc_visit"] = b["cp.utag_main_dc_visit"];
      utag.data["cp.utag_main_dc_event"] = b["cp.utag_main_dc_event"];
      var dt = new Date();
      u.data.browser = {};
      try {
        u.data.browser["height"] =
          window.innerHeight || document.body.clientHeight;
        u.data.browser["width"] =
          window.innerWidth || document.body.clientWidth;
        u.data.browser["screen_height"] = screen.height;
        u.data.browser["screen_width"] = screen.width;
        u.data.browser["timezone_offset"] = dt.getTimezoneOffset();
      } catch (e) {
        utag.DB(e);
      }
      u.data["event"] = a + "";
      u.data["post_time"] = dt.getTime();
      if (
        u.data_enrichment === "frequent" ||
        u.data_enrichment === "infrequent"
      ) {
        u.visit_num = b["cp.utag_main_dc_visit"];
        if (
          parseInt(u.visit_num) > 1 &&
          b["cp.utag_main_dc_event"] === "1"
        ) {
          u.enrichment_polling = 2;
        }
        try {
          u.va_update = parseInt(
            localStorage.getItem("tealium_va_update") || 0
          );
        } catch (e) {
          utag.DB(e);
        }
        u.visitor_id =
          u.visitor_id || b.tealium_visitor_id || b["cp.utag_main_v_id"];
        if (
          u.data_enrichment === "frequent" ||
          (u.data_enrichment === "infrequent" &&
            parseInt(u.visit_num) > 1 &&
            parseInt(b["cp.utag_main_dc_event"]) <= 5 &&
            u.visit_num !== u.va_update)
        ) {
          u.make_enrichment_request = true;
        }
        u.visitor_service_request = function (t, server) {
          var s,
            p = u.get_account_profile(server);
          if (u.visitor_service_override) {
            s = u.validateProtocol(u.visitor_service_override, true);
          } else {
            s =
              u.validateProtocol(u.server_prefix, true) +
              "visitor-service" +
              (u.region ? "-" + u.region : "").replace(
                /[^-A-Za-z0-9+_.]/g,
                ""
              ) +
              "." +
              u.server_domain;
          }
          (function (p) {
            var prefix = "tealium_va";
            var key = "_" + p[1] + "_" + p[2];
            utag.ut["writeva" + p[2]] = function (o) {
              utag.DB("Visitor Attributes: " + prefix + key);
              utag.DB(o);
              var str = JSON.stringify(o);
              if (str !== "{}" && str !== "") {
                try {
                  localStorage.setItem(
                    "tealium_va_update",
                    utag.data["cp.utag_main_dc_visit"]
                  );
                  localStorage.setItem(prefix, str);
                  localStorage.setItem(prefix + key, str);
                } catch (e) {
                  utag.DB(e);
                }
                if (typeof tealium_enrichment === "function") {
                  tealium_enrichment(o, prefix + key);
                }
              }
            };
          })(p.slice(0));
          var vid = u.visitor_id;
          if (u.profile_specific_vid === 1) {
            vid += p[2];
          }
          var srcUrl =
            s +
            "/" +
            p[1] +
            "/" +
            p[2] +
            "/" +
            vid.replace(/[\?\&]callback=.*/g, "") +
            "?callback=utag.ut%5B%22writeva" +
            p[2] +
            "%22%5D&rnd=" +
            t;
          if (b.tealium_cookie_domain) {
            srcUrl =
              srcUrl + "&tealium_cookie_domain=" + b.tealium_cookie_domain;
            if (b.tealium_cookie_expiry) {
              srcUrl =
                srcUrl +
                "&tealium_cookie_expiry=" +
                b.tealium_cookie_expiry;
            }
          }
          utag.ut.loader({
            id:
              "tealium_visitor_service_36" +
              p[2] +
              "_" +
              u.request_increment++,
            src: srcUrl,
          });
        };
        u.do_enrichment = function (
          server,
          enrichment_polling,
          enrichment_polling_delay
        ) {
          if (typeof utag.ut.loader != "undefined") {
            for (i = 0; i < enrichment_polling; i++) {
              setTimeout(function () {
                u.visitor_service_request(new Date().getTime(), server);
              }, i * enrichment_polling_delay + 1);
            }
          }
        };
      }
      var json_string,
        regExpReplace = new RegExp(u.visitor_id, "g");
      if (
        b.tealium_random &&
        typeof utag.globals[b.tealium_random] === "object"
      ) {
        for (var downstream_param in utag.globals[b.tealium_random]) {
          u.data.data[downstream_param] = u.deepCopy(
            utag.globals[b.tealium_random][downstream_param]
          );
        }
      }
      function getSendData(useEventData, server) {
        var dataStringify = u.data;
        if (useEventData) {
          dataStringify = u.data.data;
          u.data.data.tealium_profile = u.profile;
        }
        json_string = JSON.stringify(dataStringify);
        if (u.profile_specific_vid === 1 && u.visitor_id) {
          json_string = json_string.replace(
            regExpReplace,
            u.visitor_id + u.get_account_profile(server)[2]
          );
        }
        if (useEventData) {
          return json_string;
        }
        var formData = new FormData();
        formData.append("data", json_string);
        return formData;
      }
      function postData(
        server_index,
        enrichment_polling,
        enrichment_polling_delay,
        useEventData
      ) {
        if (server_index + 1 > u.server_list.length) {
          return;
        }
        var xhr = new XMLHttpRequest();
        var server = u.validateProtocol(u.server_list[server_index], true);
        var data = getSendData(useEventData, server);
        u.region =
          utag.loader.RC("utag_main")["dc_region"] || u.region || "";
        if (
          typeof navigator.sendBeacon === "function" &&
          u.region !== "" &&
          u.use_sendBeacon
        ) {
          u.server_list.forEach(function (serverItem) {
            navigator.sendBeacon(
              infixParameters(serverItem, u.tc_string),
              data
            );
            if (
              u.make_enrichment_request &&
              u.enrichment_enabled[serverItem]
            ) {
              u.do_enrichment(
                serverItem,
                enrichment_polling,
                enrichment_polling_delay
              );
            }
          });
          utag.DB("Data sent using sendBeacon");
          return;
        }
        xhr.addEventListener("readystatechange", function () {
          if (xhr.readyState === 3) {
            try {
              u.region =
                xhr.getResponseHeader("X-Region") || u.region || "";
            } catch (res_error) {
              utag.DB(res_error);
              u.region = u.region || "";
            }
            if (u.region)
              utag.loader.SC("utag_main", {
                dc_region: u.region + ";exp-session",
              });
            utag.DB("dc_region:" + u.region);
          } else if (xhr.readyState === 4) {
            postData(
              server_index + 1,
              enrichment_polling,
              enrichment_polling_delay,
              useEventData
            );
            if (u.make_enrichment_request && u.enrichment_enabled[server]) {
              u.do_enrichment(
                server,
                enrichment_polling,
                enrichment_polling_delay
              );
            }
          }
        });
        if (
          u.server_list[server_index].toLowerCase().indexOf("http") !== 0
        ) {
          u.server_list[server_index] = u.validateProtocol(
            u.server_list[server_index],
            true
          );
        }
        var serverUrl = infixParameters(
          u.server_list[server_index],
          u.tc_string
        );
        xhr.open("post", serverUrl, true);
        xhr.withCredentials = true;
        xhr.send(data);
      }
      if (
        u.use_event_endpoint &&
        (u.tag_config_server === u.event_url ||
          u.tag_config_region !== "default") &&
        window.FormData
      ) {
        postData(0, u.enrichment_polling, u.enrichment_polling_delay, true);
      } else if (window.FormData) {
        postData(
          0,
          u.enrichment_polling,
          u.enrichment_polling_delay,
          false
        );
      } else {
        for (i = 0; i < u.server_list.length; i++) {
          (function (i, enrichment_polling, enrichment_polling_delay) {
            var server = u.server_list[i];
            setTimeout(function () {
              json_string = JSON.stringify(u.data);
              if (u.profile_specific_vid == 1 && u.visitor_id) {
                json_string = json_string.replace(
                  regExpReplace,
                  u.visitor_id + u.get_account_profile(server)[2]
                );
              }
              var img = new Image();
              img.src =
                server +
                "?" +
                (u.tc_string ? u.tc_string + "&" : "") +
                "data=" +
                encodeURIComponent(json_string);
              if (
                u.make_enrichment_request &&
                u.enrichment_enabled[server]
              ) {
                u.do_enrichment(
                  server,
                  enrichment_polling,
                  enrichment_polling_delay
                );
              }
            }, i * 700);
          })(i, u.enrichment_polling, u.enrichment_polling_delay);
        }
      }
    }
  }
}