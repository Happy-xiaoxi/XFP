export function d9legacy(D9v, D9r, tagHost, signals) {
    D9r = D9r || {};
    function D9request(D9_device) {
      var json = encodeURIComponent(JSON.stringify(D9_device));
      var send = "&tbx=" + encodeURIComponent(json);
      ajax(getLgcUrl(), send);
    }
    function getLgcUrl() {
      var httpProto = "https://";
      var lgcUrl = tagHost + "/lgc";
      return httpProto + lgcUrl;
    }
    function getConnectUrl() {
      var httpProto = "https://";
      var lgcUrl =
        tagHost +
        "/img/img.png?cnx=" +
        (device && device.D9_61 ? device.D9_61 : "");
      return httpProto + lgcUrl;
    }
    function ajax(url, send) {
      if (window.d9PendingXDR != undefined) {
        return;
      }
      var ar = null;
      function corsSupported() {
        try {
          return (
            typeof XMLHttpRequest !== "undefined" &&
            "withCredentials" in new XMLHttpRequest()
          );
        } catch (e) {
          return false;
        }
      }
      if (typeof window.XDomainRequest !== "undefined" && !corsSupported()) {
        ar = new XDomainRequest();
        ar.open("POST", url);
      } else {
        try {
          ar = new XMLHttpRequest();
        } catch (e) {
          if (window.ActiveXObject) {
            var ax = [
              "Msxml2.XMLHTTP.3.0",
              "Msxml2.XMLHTTP.4.0",
              "Msxml2.XMLHTTP.6.0",
              "Msxml2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ];
            var i = ax.length;
            while (--i) {
              try {
                ar = new ActiveXObject(ax[i]);
                break;
              } catch (e) {}
            }
          }
        }
        ar.open("POST", url, true);
        ar.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ar.withCredentials = true;
      }
      ar.onreadystatechange = function () {
        if (D9r && D9r.L > 0) {
          return;
        }
        if (D9r && D9r.callback && ar.readyState == 4) {
          if (ar.status == 200 || ar.status == 304) {
            var r = ar.responseText;
            var response;
            if (r && r.length > 0) {
              try {
                response = JSON.parse(r);
              } catch (e) {}
            }
            if (response) {
              if (response.cnx) {
                new Image().src = getConnectUrl();
                delete response.cnx;
              }
              D9r.callback(response);
            } else {
              D9r.callback(null);
            }
          }
        }
      };
      if (typeof window.XDomainRequest !== "undefined" && !corsSupported()) {
        ar.ontimeout = ar.onerror = function (e) {
          ar.status = 400;
          ar.readyState = 4;
          ar.onreadystatechange();
        };
        ar.onload = function () {
          ar.status = 200;
          ar.readyState = 4;
          ar.onreadystatechange();
        };
        ar.onprogress = function () {};
      }
      ar.send(send);
      window.d9PendingXDR = ar;
    }
    function getProperty(prop) {
      try {
        return eval(prop);
      } catch (e) {
        return null;
      }
    }
    var device = {};
    device.D9_1 = signals.D9_110;
    device.D9_6 = signals.D9_130;
    device.D9_7 = signals.D9_131;
    device.D9_8 = signals.D9_132;
    device.D9_9 = signals.D9_133;
    device.D9_10 = signals.D9_134;
    device.D9_61 = signals.D9_138;
    device.D9_67 = signals.D9_139;
    device.D9_18 = {};
    device.D9_16 = signals.D9_111;
    if (signals.D9_101 || signals.D9_111) {
      device.D9_4 = { width: signals.D9_101, height: signals.D9_102 };
    }
    if (window.navigator) {
      device.D9_14 = signals.D9_120;
      device.D9_15 = signals.D9_121;
      device.D9_19 = signals.D9_122;
      device.D9_123 = signals.D9_123;
    }
    device.D9_33 = signals.D9_150;
    device.D9_34 = signals.D9_151;
    device.D9_30 = [];
    device.D9_52 = {};
    device.D9_57 = typeof D9r.callback === "function";
    device.D9_58 = D9r;
    device.D9_59 = D9v;
    device.D9_63 = signals.D9_140;
    device.D9_64 = signals.D9_103;
    device.D9_66 = signals.D9_141;
    D9request(device);
  }