function Logger() {
  try {
    function e(e) {
      var t, o;
      (t = Array.prototype.forEach),
        (o = Array.prototype.map),
        (this.each = function (e, o, r) {
          if (null !== e)
            if (t && e.forEach === t) e.forEach(o, r);
            else if (e.length === +e.length) {
              for (var i = 0, n = e.length; i < n; i++)
                if (o.call(r, e[i], i, e) === {}) return;
            } else
              for (var a in e)
                if (e.hasOwnProperty(a) && o.call(r, e[a], a, e) === {}) return;
        }),
        (this.map = function (e, t, r) {
          var i = [];
          return null == e
            ? i
            : o && e.map === o
            ? e.map(t, r)
            : (this.each(e, function (e, o, n) {
                i[i.length] = t.call(r, e, o, n);
              }),
              i);
        }),
        "object" == typeof e
          ? ((this.hasher = e.hasher),
            (this.screen_resolution = e.screen_resolution),
            (this.screen_orientation = e.screen_orientation),
            (this.canvas = e.canvas),
            (this.ie_activex = e.ie_activex))
          : "function" == typeof e && (this.hasher = e);
    }
    function t() {
      this.i, this.o;
    }
    function o(t, o) {
      (this.user_id = userInfo.id),
        (this.email = userInfo.email),
        (this.mobile = userInfo.mobile),
        (this.name = userInfo.name);
      try {
        var r = localStorage.getItem(LOG_CONSTANTS.LOCAL_STORAGE.VERSIONS);
        if (r && null != r && "" != r) {
          var i = JSON.parse(r);
          i &&
            null != i &&
            i.value &&
            null != i.value &&
            "" != i.value &&
            (this.version = i.value);
        }
      } catch (e) {
        globalVar.tracking && console.log(e);
      }
      this.action_id = t;
      try {
        this.data = JSON.stringify(o);
      } catch (e) {
        globalVar.tracking && console.log(e);
      }
      (this.web_id = LOG_CHOBROD_CONSTANTS.CHOBROD_WEB_ID),
        (this.mouse_pos_x = globalVar.mousePositionX),
        (this.mouse_pos_y = globalVar.mousePositionY),
        (this.page_y_offset = window.pageYOffset),
        (this.page_x_offset = window.pageXOffset),
        (this.scroll_width = document.documentElement.scrollWidth),
        (this.scroll_height = document.documentElement.scrollHeight),
        (this.document_width = Math.max(
          window.innerWidth,
          document.documentElement.clientWidth,
          document.body.clientWidth
        )),
        (this.document_height = Math.max(
          window.innerHeight,
          document.documentElement.clientHeight,
          document.body.clientHeight
        )),
        (this.current_uri = document.URL),
        (this.refer_uri = document.referrer),
        (this.time = new Date().getTime()),
        this.session_id,
        this.user_session_id,
        this.browser_finger_print,
        this.screen_width,
        this.screen_height,
        this.browser_width,
        this.browser_height,
        this.os_info,
        this.browser_info,
        this.is_mobile,
        (this.ip_address = ""),
        (this.city = ""),
        (this.region = ""),
        (this.country = ""),
        this.send_time,
        (this.prepareLogObjectData = function (t) {
          (this.session_id = t.getSessionId()),
            (this.user_session_id = t.getUserSessionId()),
            (this.browser_finger_print = new e().get());
          var o = t.getBrowserAndOSInfo();
          (this.screen_width = o.screenWidth),
            (this.screen_height = o.screenHeight),
            (this.browser_width = window.innerWidth),
            (this.browser_height = window.innerHeight),
            (this.os_info = o.os + " " + o.osVersion),
            null != navigator &&
            null != navigator &&
            null != navigator.userAgent &&
            null != navigator.userAgent
              ? (this.browser_info =
                  navigator.userAgent +
                  " #@# " +
                  o.browser +
                  " " +
                  o.browserMajorVersion +
                  " (" +
                  o.browserVersion +
                  ")\n")
              : (this.browser_info =
                  o.browser +
                  " " +
                  o.browserMajorVersion +
                  " (" +
                  o.browserVersion +
                  ")\n"),
            (this.is_mobile = o.mobile);
          var r = t.getIPLocationAddress();
          r && null != r
            ? ((this.ip_address =
                r[LOG_CONSTANTS.CLIENT_IP.KEY_IP_ADDRESS_RESPONSE]),
              (this.city =
                r[LOG_CONSTANTS.CLIENT_IP.KEY_CITY_ADDRESS_RESPONSE]),
              (this.region =
                r[LOG_CONSTANTS.CLIENT_IP.KEY_REGION_ADDRESS_RESPONSE]),
              (this.country =
                r[LOG_CONSTANTS.CLIENT_IP.KEY_COUNTRY_ADDRESS_RESPONSE]))
            : t.getIPLocationAddressFromAPI();
        });
    }
    function r() {
      this.i,
        this.h,
        this.t,
        this.gy,
        this.gx,
        this.ey,
        this.ex,
        this.name,
        this.pos;
    }
    function i() {
      this.i,
        this.n,
        this.h,
        this.p,
        this.gy,
        this.ey,
        this.gx,
        this.ex,
        this.t,
        this.loc,
        this.br,
        this.mo,
        this.ti;
    }
    function n() {
      this.gx, this.gy, this.ex, this.ey, this.scp;
    }
    (this.getXHR = function () {
      return window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
    }),
      (this.makeId = function (e) {
        for (
          var t = "",
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            r = 0;
          r < e;
          r++
        )
          t += o.charAt(Math.floor(Math.random() * o.length));
        return t;
      }),
      (this.createLogObject = function (e, t) {
        return new o(e, t);
      }),
      (this.createData = function () {
        return new (function () {
          this.timeOnSite,
            this.timestamp,
            (this.target = new Object()),
            this.searchContent,
            this.ipInfo,
            (this.cs = []),
            (this.vdi = new i()),
            (this.main_vdis = []),
            (this.left_vdis = []),
            (this.right_vdis = []),
            (this.bottom_vdis = []),
            (this.ris = []),
            (this.is = []),
            (this.listBanner = []),
            (this.el_d = new n());
        })();
      }),
      (e.prototype = {
        get: function () {
          var e = [];
          if (
            (e.push(navigator.userAgent),
            e.push(navigator.language),
            e.push(screen.colorDepth),
            this.screen_resolution)
          ) {
            var t = this.getScreenResolution();
            void 0 !== t && e.push(t.join("x"));
          }
          return (
            e.push(new Date().getTimezoneOffset()),
            e.push(this.hasSessionStorage()),
            e.push(this.hasLocalStorage()),
            e.push(!!window.indexedDB),
            document.body
              ? e.push(typeof document.body.addBehavior)
              : e.push("undefined"),
            e.push(typeof window.openDatabase),
            e.push(navigator.cpuClass),
            e.push(navigator.platform),
            e.push(navigator.doNotTrack),
            e.push(this.getPluginsString()),
            this.canvas &&
              this.isCanvasSupported() &&
              e.push(this.getCanvasFingerprint()),
            this.hasher
              ? this.hasher(e.join("###"), 31)
              : this.murmurhash3_32_gc(e.join("###"), 31)
          );
        },
        murmurhash3_32_gc: function (e, t) {
          var o, r, i, n, a, c, s, l;
          for (
            o = 3 & e.length,
              r = e.length - o,
              i = t,
              a = 3432918353,
              c = 461845907,
              l = 0;
            l < r;

          )
            (s =
              (255 & e.charCodeAt(l)) |
              ((255 & e.charCodeAt(++l)) << 8) |
              ((255 & e.charCodeAt(++l)) << 16) |
              ((255 & e.charCodeAt(++l)) << 24)),
              ++l,
              (i =
                27492 +
                (65535 &
                  (n =
                    (5 *
                      (65535 &
                        (i =
                          ((i ^= s =
                            ((65535 &
                              (s =
                                ((s =
                                  ((65535 & s) * a +
                                    ((((s >>> 16) * a) & 65535) << 16)) &
                                  4294967295) <<
                                  15) |
                                (s >>> 17))) *
                              c +
                              ((((s >>> 16) * c) & 65535) << 16)) &
                            4294967295) <<
                            13) |
                          (i >>> 19))) +
                      (((5 * (i >>> 16)) & 65535) << 16)) &
                    4294967295)) +
                (((58964 + (n >>> 16)) & 65535) << 16));
          switch (((s = 0), o)) {
            case 3:
              s ^= (255 & e.charCodeAt(l + 2)) << 16;
            case 2:
              s ^= (255 & e.charCodeAt(l + 1)) << 8;
            case 1:
              i ^= s =
                ((65535 &
                  (s =
                    ((s =
                      ((65535 & (s ^= 255 & e.charCodeAt(l))) * a +
                        ((((s >>> 16) * a) & 65535) << 16)) &
                      4294967295) <<
                      15) |
                    (s >>> 17))) *
                  c +
                  ((((s >>> 16) * c) & 65535) << 16)) &
                4294967295;
          }
          return (
            (i ^= e.length),
            (i =
              (2246822507 * (65535 & (i ^= i >>> 16)) +
                (((2246822507 * (i >>> 16)) & 65535) << 16)) &
              4294967295),
            (i =
              (3266489909 * (65535 & (i ^= i >>> 13)) +
                (((3266489909 * (i >>> 16)) & 65535) << 16)) &
              4294967295),
            (i ^= i >>> 16) >>> 0
          );
        },
        hasLocalStorage: function () {
          try {
            return !!window.localStorage;
          } catch (e) {
            return !0;
          }
        },
        hasSessionStorage: function () {
          try {
            return !!window.sessionStorage;
          } catch (e) {
            return !0;
          }
        },
        isCanvasSupported: function () {
          var e = document.createElement("canvas");
          return !(!e.getContext || !e.getContext("2d"));
        },
        isIE: function () {
          return (
            "Microsoft Internet Explorer" === navigator.appName ||
            !(
              "Netscape" !== navigator.appName ||
              !/Trident/.test(navigator.userAgent)
            )
          );
        },
        getPluginsString: function () {
          return this.isIE() && this.ie_activex
            ? this.getIEPluginsString()
            : this.getRegularPluginsString();
        },
        getRegularPluginsString: function () {
          return this.map(
            navigator.plugins,
            function (e) {
              var t = this.map(e, function (e) {
                return [e.type, e.suffixes].join("~");
              }).join(",");
              return [e.name, e.description, t].join("::");
            },
            this
          ).join(";");
        },
        getIEPluginsString: function () {
          if (window.ActiveXObject) {
            return this.map(
              [
                "ShockwaveFlash.ShockwaveFlash",
                "AcroPDF.PDF",
                "PDF.PdfCtrl",
                "QuickTime.QuickTime",
                "rmocx.RealPlayer G2 Control",
                "rmocx.RealPlayer G2 Control.1",
                "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                "RealPlayer",
                "SWCtl.SWCtl",
                "WMPlayer.OCX",
                "AgControl.AgControl",
                "Skype.Detection",
              ],
              function (e) {
                try {
                  return new ActiveXObject(e), e;
                } catch (e) {
                  return null;
                }
              }
            ).join(";");
          }
          return "";
        },
        getScreenResolution: function () {
          return this.screen_orientation
            ? screen.height > screen.width
              ? [screen.height, screen.width]
              : [screen.width, screen.height]
            : [screen.height, screen.width];
        },
        getCanvasFingerprint: function () {
          var e = document.createElement("canvas"),
            t = e.getContext("2d"),
            o = "logger" + LOG_CHOBROD_CONSTANTS.WEB_ALL_DOMAIN;
          return (
            (t.textBaseline = "top"),
            (t.font = "14px 'Arial'"),
            (t.textBaseline = "alphabetic"),
            (t.fillStyle = "#f60"),
            t.fillRect(125, 1, 62, 20),
            (t.fillStyle = "#069"),
            t.fillText(o, 2, 15),
            (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
            t.fillText(o, 4, 17),
            e.toDataURL()
          );
        },
      }),
      (this.handleBrowserTabActive = function () {
        globalVar.is_active ||
          ((globalVar.start_time_active_tab = new Number(new Date().getTime())),
          (globalVar.is_active = !0));
      }),
      (this.handleBrowserTabDeactive = function () {
        globalVar.is_active &&
          ((globalVar.time_on_site =
            globalVar.time_on_site +
            (new Number(new Date().getTime()) -
              globalVar.start_time_active_tab)),
          (globalVar.is_active = !1));
      }),
      (this.getSessionId = function () {
        var e = this.getCookie(LOG_CONSTANTS.COOKIE.SESSION_KEY);
        return e && null != e && "" != e
          ? (this.setCookie(LOG_CONSTANTS.COOKIE.SESSION_KEY, e), e)
          : ((e = this.makeId(LOG_CONSTANTS.THRESHOLD.COOKIE_LENGTH)),
            this.setCookie(LOG_CONSTANTS.COOKIE.SESSION_KEY, e),
            e);
      }),
      (this.getUserSessionId = function () {
        var e = this.getCookie(LOG_CONSTANTS.COOKIE.USER_SESSION_KEY);
        return e && null != e && "" != e
          ? (this.setCookie(
              LOG_CONSTANTS.COOKIE.USER_SESSION_KEY,
              e,
              LOG_CONSTANTS.THRESHOLD.USER_SESSION_TIMEOUT
            ),
            e)
          : ((e = this.makeId(LOG_CONSTANTS.THRESHOLD.COOKIE_LENGTH)),
            this.setCookie(
              LOG_CONSTANTS.COOKIE.USER_SESSION_KEY,
              e,
              LOG_CONSTANTS.THRESHOLD.USER_SESSION_TIMEOUT
            ),
            e);
      }),
      (this.getCurrentURI = function () {
        return document.URL;
      }),
      (this.setCookie = function (e, t, o) {
        var r = "",
          i = new Date();
        if (void 0 !== o)
          i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3),
            (r = "expires=" + i.toUTCString());
        else {
          var n = new Date(i.getFullYear(), i.getMonth() + 1, i.getDate() + 1);
          i.setTime(Math.min(i.getTime() + 18e5, n.getTime())),
            (r = "expires=" + i.toUTCString());
        }
        document.cookie =
          e +
          "=" +
          t +
          ";" +
          r +
          ";path=/;domain=" +
          LOG_CHOBROD_CONSTANTS.WEB_ALL_DOMAIN;
      }),
      (this.getCookie = function (e) {
        for (
          var t = e + "=", o = document.cookie.split(";"), r = 0;
          r < o.length;
          r++
        ) {
          for (var i = o[r]; " " == i.charAt(0); ) i = i.substring(1);
          if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
        }
        return "";
      }),
      (this.sendLog = function (e) {
        (e.sendTime = new Date().getTime()),
          encodeURIComponent(JSON.stringify(e)).length <
          LOG_CONSTANTS.THRESHOLD.GET_REQUEST_MAX_LENGTH
            ? this.sendLogByGetImageRequest(e)
            : this.postLogXHR(e);
      }),
      (this.sendLogByGetImageRequest = function (e) {
        var t = JSON.stringify(e),
          o = new Image();
        (o.style.display = "none"),
          (o.onload = function () {
            document.body.appendChild(o);
          }),
          (o.src =
            LOG_CONSTANTS.URL.LOG_SERVER_IMAGE_REQUEST +
            "?log=" +
            encodeURIComponent(t)),
          this.processRemoveLocalStorage(e);
      }),
      (this.processRemoveLocalStorage = function (e) {
        e.action_id == LOG_CONSTANTS.ACTION_TYPE.MOUSE_CLICK
          ? localStorage.removeItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_COOKIE_KEY + e.time
            )
          : e.action_id == LOG_CONSTANTS.ACTION_TYPE.ENTER_UP
          ? localStorage.removeItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_ENTER_UP_COOKIE_KEY + e.time
            )
          : e.action_id == LOG_CONSTANTS.ACTION_TYPE.UNLOAD
          ? localStorage.removeItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_TIME_ON_SITE_KEY + e.time
            )
          : e.action_id == LOG_CONSTANTS.ACTION_TYPE.IFRAME_CLICK &&
            localStorage.removeItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_IFRAME_COOKIE_KEY
            );
      }),
      (this.sendXHRLog = function (e) {
        (e.sendTime = new Date().getTime()), this.postLogXHR(e);
      }),
      (this.postLogXHR = function (e) {
        var t = JSON.stringify(e);
        try {
          var o = this.getXHR();
          (o.onreadystatechange = function () {
            o.readyState == XMLHttpRequest.DONE &&
              o.status >= 200 &&
              o.status < 300 &&
              logger.processRemoveLocalStorage(e);
          }),
            o.open("POST", LOG_CONSTANTS.URL.LOG_SERVER, !0),
            o.setRequestHeader(
              "Content-type",
              "application/json;charset=utf-8"
            ),
            o.setRequestHeader("Content-Encoding", "gzip"),
            (o.withCredentials = !0),
            o.send(t);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.getIPLocationAddressFromAPI = function () {
        try {
          $.getJSON(globalVar.url_get_ip, function (e) {
            (e.time = new Date().getTime()),
              localStorage.setItem(
                LOG_CONSTANTS.LOCAL_STORAGE.IP_LOCATION_ADDRESS_KEY,
                JSON.stringify(e)
              );
          });
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        return null;
      }),
      (this.getIPLocationAddress = function () {
        var e = localStorage.getItem(
          LOG_CONSTANTS.LOCAL_STORAGE.IP_LOCATION_ADDRESS_KEY
        );
        try {
          if (e && null != e && "" != e) return JSON.parse(e);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        return null;
      }),
      (this.getLocationFromElement = function (e, t) {
        try {
          t.gy =
            e.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top;
        } catch (e) {}
        try {
          t.gx =
            e.getBoundingClientRect().left -
            document.body.getBoundingClientRect().left;
        } catch (e) {}
        try {
          t.ey = e.offsetHeight;
        } catch (e) {}
        try {
          t.ex = e.offsetWidth;
        } catch (e) {}
      }),
      (this.getInputData = function () {
        for (
          var e = [],
            o = document.querySelectorAll(
              'input[type="text"],input[type="file"],input[type="email"],input[type="datetime-local"],\n            input[type="date"],input[type="color"],input[type="checkbox"],div[class*="box-select"] a[class="chosen-single"],\n            select[class="select-box valid"],select[class*="select-box"],input[id="suggestion-search"],input[class*="input-text"],select'
            ),
            r = 0,
            i = 0;
          i < o.length;
          i++
        ) {
          var n = o[i],
            a = new t();
          null != n.value && null != n.value
            ? (a.i = n.value)
            : (a.i = n.innerText),
            "" === a.i ||
              null === a.i ||
              void 0 === a.i ||
              (n.outerHTML &&
                null != n.outerHTML &&
                "" != n.outerHTML &&
                (n.outerHTML.length >
                LOG_CONSTANTS.THRESHOLD.MAX_LENGTH_OUTER_HTML / 16
                  ? (a.o = n.outerHTML.substring(
                      0,
                      Math.max(
                        LOG_CONSTANTS.THRESHOLD.MAX_LENGTH_OUTER_HTML / 16,
                        n.outerHTML.indexOf(">") + 1
                      )
                    ))
                  : (a.o = n.outerHTML)),
              (e[r] = a),
              r++);
        }
        return e;
      }),
      (this.getBrowserAndOSInfo = function () {
        return (
          null == window.jscd && this.extractBrowserAndOSInfo(), window.jscd
        );
      }),
      (this.extractBrowserAndOSInfo = function () {
        var e = "";
        screen.width &&
          ((width = screen.width ? screen.width : ""),
          (height = screen.height ? screen.height : ""),
          (e += width + " x " + height));
        var t,
          o,
          r,
          i = navigator.appVersion,
          n = navigator.userAgent,
          a = navigator.appName,
          c = "" + parseFloat(navigator.appVersion),
          s = parseInt(navigator.appVersion, 10);
        -1 != (o = n.indexOf("Opera")) &&
          ((a = "Opera"),
          (c = n.substring(o + 6)),
          -1 != (o = n.indexOf("Version")) && (c = n.substring(o + 8))),
          -1 != (o = n.indexOf("OPR"))
            ? ((a = "Opera"), (c = n.substring(o + 4)))
            : -1 != (o = n.indexOf("Edge"))
            ? ((a = "Microsoft Edge"), (c = n.substring(o + 5)))
            : -1 != (o = n.indexOf("MSIE"))
            ? ((a = "Microsoft Internet Explorer"), (c = n.substring(o + 5)))
            : -1 != (o = n.indexOf("Chrome"))
            ? ((a = "Chrome"), (c = n.substring(o + 7)))
            : -1 != (o = n.indexOf("Safari"))
            ? ((a = "Safari"),
              (c = n.substring(o + 7)),
              -1 != (o = n.indexOf("Version")) && (c = n.substring(o + 8)))
            : -1 != (o = n.indexOf("Firefox"))
            ? ((a = "Firefox"), (c = n.substring(o + 8)))
            : -1 != n.indexOf("Trident/")
            ? ((a = "Microsoft Internet Explorer"),
              (c = n.substring(n.indexOf("rv:") + 3)))
            : (t = n.lastIndexOf(" ") + 1) < (o = n.lastIndexOf("/")) &&
              ((a = n.substring(t, o)),
              (c = n.substring(o + 1)),
              a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)),
          -1 != (r = c.indexOf(";")) && (c = c.substring(0, r)),
          -1 != (r = c.indexOf(" ")) && (c = c.substring(0, r)),
          -1 != (r = c.indexOf(")")) && (c = c.substring(0, r)),
          (s = parseInt("" + c, 10)),
          isNaN(s) &&
            ((c = "" + parseFloat(navigator.appVersion)),
            (s = parseInt(navigator.appVersion, 10)));
        var l = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(i),
          g = !!navigator.cookieEnabled;
        void 0 !== navigator.cookieEnabled ||
          g ||
          ((document.cookie = "testcookie"),
          (g = -1 != document.cookie.indexOf("testcookie")));
        var h = "-",
          d = [
            { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
            { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
            { s: "Windows Vista", r: /Windows NT 6.0/ },
            { s: "Windows Server 2003", r: /Windows NT 5.2/ },
            { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
            { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
            { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
            { s: "Windows 98", r: /(Windows 98|Win98)/ },
            { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
            {
              s: "Windows NT 4.0",
              r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
            },
            { s: "Windows CE", r: /Windows CE/ },
            { s: "Windows 3.11", r: /Win16/ },
            { s: "Android", r: /Android/ },
            { s: "Open BSD", r: /OpenBSD/ },
            { s: "Sun OS", r: /SunOS/ },
            { s: "Linux", r: /(Linux|X11)/ },
            { s: "iOS", r: /(iPhone|iPad|iPod)/ },
            { s: "Mac OS X", r: /Mac OS X/ },
            { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: "QNX", r: /QNX/ },
            { s: "UNIX", r: /UNIX/ },
            { s: "BeOS", r: /BeOS/ },
            { s: "OS/2", r: /OS\/2/ },
            {
              s: "Search Bot",
              r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
            },
          ];
        for (var u in d) {
          var m = d[u];
          if (m.r.test(n)) {
            h = m.s;
            break;
          }
        }
        var O = "-";
        switch (
          (/Windows/.test(h) &&
            ((O = /Windows (.*)/.exec(h)[1]), (h = "Windows")),
          h)
        ) {
          case "Mac OS X":
            O = /Mac OS X (10[\.\_\d]+)/.exec(n)[1];
            break;
          case "Android":
            O = /Android ([\.\_\d]+)/.exec(n)[1];
            break;
          case "iOS":
            O =
              (O = /OS (\d+)_(\d+)_?(\d+)?/.exec(i))[1] +
              "." +
              O[2] +
              "." +
              (0 | O[3]);
        }
        var _ = "no check";
        if ("undefined" != typeof swfobject) {
          var S = swfobject.getFlashPlayerVersion();
          _ = S.major > 0 ? S.major + "." + S.minor + " r" + S.release : "-";
        }
        window.jscd = {
          screen: e,
          screenWidth: width,
          screenHeight: height,
          browser: a,
          browserVersion: c,
          browserMajorVersion: s,
          mobile: l,
          os: h,
          osVersion: O,
          cookies: g,
          flashVersion: _,
        };
      }),
      (this.pageViewLog = function () {
        var e = null;
        (e = this.createData()),
          (o = this.createLogObject(
            LOG_CONSTANTS.ACTION_TYPE.PAGE_VIEW,
            e
          )).prepareLogObjectData(this);
        var t = o.is_mobile;
        this.getPageViewData(e, !1, t);
        try {
          this.getPageViewDataDestopView(e);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        try {
          this.getImpDataBanner(e);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        var o,
          r = localStorage.getItem(
            LOG_CONSTANTS.LOCAL_STORAGE.IP_LOCATION_ADDRESS_KEY
          );
        r && (e.ipInfo = JSON.parse(r)),
          (o = this.createLogObject(
            LOG_CONSTANTS.ACTION_TYPE.PAGE_VIEW,
            e
          )).prepareLogObjectData(this),
          this.sendLog(o);
      }),
      (this.logBrowserTabActive = function () {
        var e = this.createData();
        this.getInputData(e);
        var t = new o(LOG_CONSTANTS.ACTION_TYPE.BROWSER_ACTIVE, e);
        t.prepareLogObjectData(this), this.sendLog(t);
      }),
      (this.logBrowserTabDeactive = function () {
        var e = this.createData();
        this.getInputData(e);
        var t = new o(LOG_CONSTANTS.ACTION_TYPE.BROWSER_DEACTIVE, e);
        t.prepareLogObjectData(this), this.sendLog(t);
      }),
      (this.getElementCssPath = function (e) {
        var t = !1,
          o = new n(),
          r = 0,
          i = 0,
          a = e,
          c = "",
          s = "";
        try {
          (c = this.getHrefFromElement(e)), (s = this.getHrefFromElement(e));
        } catch (e) {
          console.log(e);
        }
        for (; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); )
          (r += a.offsetLeft - a.scrollLeft),
            (i += a.offsetTop - a.scrollTop),
            (a = a.offsetParent);
        (o.gy = i), (o.gx = r);
        try {
          o.ey = e.offsetHeight;
        } catch (e) {}
        try {
          o.ex = e.offsetWidth;
        } catch (e) {}
        if (!(e instanceof Element)) return o;
        for (var l = []; e.nodeType === Node.ELEMENT_NODE; ) {
          var g = e.nodeName.toLowerCase();
          if (e.id) g += "#" + e.id;
          else {
            for (var h = e, d = 1; (h = h.previousElementSibling); )
              h.nodeName.toLowerCase() === g && d++;
            var u = "";
            try {
              null != (u = e.getAttribute("class")) &&
                null != u &&
                u.indexOf(" ") >= 0 &&
                (u = u.trim().replace(" ", "."));
            } catch (e) {
              console.log(e);
            }
            null != u && null != u && (g += "." + u),
              1 !== d && (g += ":nth-of-type(" + d + ")");
          }
          l.unshift(g), (e = e.parentNode);
          try {
            null != e.querySelector('div[class="info"]') &&
              0 == t &&
              ((s = this.getHrefFromElement(
                e.querySelector('div[class="info"]')
              )),
              (t = !0));
          } catch (e) {}
          try {
            (null == c || "" == c || c.indexOf("/") < 0) &&
              (c = this.getHrefFromElement(e));
          } catch (e) {}
        }
        try {
          o.scp = l.join(">");
        } catch (e) {
          console.log(e);
        }
        return (o.hr = c), (o.hr_tr = s), o;
      }),
      (this.getHrefFromElement = function (e) {
        var t = null;
        if (
          null != e &&
          null != e &&
          (null == (t = e.getAttribute("href")) || null == t)
        ) {
          var o = e.querySelector("a[href]");
          if (null != o && null != o)
            try {
              t = o.getAttribute("href");
            } catch (e) {}
        }
        return t;
      }),
      (this.getPageViewDataDestopView = function (e) {
        try {
          e.vdi.br = document.getElementById("txtBrandName").value;
        } catch (e) {}
        try {
          e.vdi.br_i = document.getElementById("hddBrandId").value;
        } catch (e) {}
        try {
          e.vdi.mo = document.getElementById("txtModelName").value;
        } catch (e) {}
        try {
          e.vdi.mo_i = document.getElementById("hddModelId").value;
        } catch (e) {}
        try {
          e.vdi.p = document.getElementById("hddPrice").value;
        } catch (e) {}
        try {
          e.vdi.ct = document.getElementById("hddCity").value;
        } catch (e) {}
        try {
          e.vdi.ct_i = document.getElementById("hddCityId").value;
        } catch (e) {}
        try {
          e.vdi.at_t_i = document.getElementById("hddAutoType").value;
        } catch (e) {}
        try {
          e.vdi.v_i = document.getElementById("hddVersionId").value;
        } catch (e) {}
        try {
          e.vdi.v_n = document.getElementById("txtVersionName").value;
        } catch (e) {}
        try {
          e.vdi.y = document.getElementById("hddYear").value;
        } catch (e) {}
        try {
          e.vdi.y_txt = document.getElementById("txtYear").value;
        } catch (e) {}
        try {
          e.vdi.cr_u = document.getElementById("hddCreatedUser").value;
        } catch (e) {}
        try {
          e.vdi.n_km = document.getElementById("hddNumberKm").value;
        } catch (e) {}
        try {
          e.vdi.line_i = document.getElementById("hddLineID").value;
        } catch (e) {}
        try {
          e.vdi.user_i = document.getElementById("hddUserId").value;
        } catch (e) {}
        try {
          e.vdi.h = this.getCurrentURI();
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        try {
          try {
            e.vdi.i = document.getElementById("hddProductId").value;
          } catch (e) {}
          if (
            null === e.vdi.i ||
            void 0 === e.vdi.i ||
            "" === e.vdi.i ||
            0 === e.vdi.i
          )
            try {
              e.vdi.i = document.getElementById("hddArticleId").value;
            } catch (e) {}
          if (
            null === e.vdi.i ||
            void 0 === e.vdi.i ||
            "" === e.vdi.i ||
            0 === e.vdi.i
          )
            try {
              e.vdi.i = document.getElementById("hddReviewId").value;
            } catch (e) {}
        } catch (e) {}
      }),
      (this.getChkSum = function () {
        var e = "";
        try {
          e = document.getElementById("ChkSum").value;
        } catch (e) {}
        return e;
      }),
      (this.clickIframe = function (e) {
        try {
          var t = this.createLogObject(
            LOG_CONSTANTS.ACTION_TYPE.IFRAME_CLICK,
            e
          );
          try {
            this.getImpDataBanner(e);
          } catch (e) {
            globalVar.tracking && console.log(e);
          }
          t.prepareLogObjectData(this),
            localStorage.setItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_IFRAME_COOKIE_KEY,
              JSON.stringify(t)
            ),
            this.sendXHRLog(t);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.mouseClickLog = function (e) {
        try {
          var t = this.getChkSum(),
            o = e.target || e.srcElement,
            r = this.createData();
          if (null != o && null != o) {
            try {
              for (var i = o.attributes, n = 0; n < i.length; n++) {
                var a = i[n];
                r.target[a.nodeName] = a.nodeValue;
              }
            } catch (e) {
              globalVar.tracking && console.log(e);
            }
            try {
              r.target.tagName = o.tagName;
            } catch (e) {
              globalVar.tracking && console.log(e);
            }
            var c = o.parentElement;
            if (null == c || null == c);
            else {
              try {
                for (i = o.parentElement.attributes, n = 0; n < i.length; n++) {
                  a = i[n];
                  r.target["parent_" + a.nodeName] = a.nodeValue;
                }
              } catch (e) {
                globalVar.tracking && console.log(e);
              }
              try {
                r.target.parent_tagName = o.parentElement.tagName;
              } catch (e) {
                globalVar.tracking && console.log(e);
              }
              var s = c;
              for (
                n = 1;
                n < 100 && null != (s = s.parentElement) && null != s;
                n++
              ) {
                try {
                  for (var l = s.attributes, g = 0; g < l.length; g++) {
                    var h = l[g];
                    r.target["parent_" + n + "_" + h.nodeName] = h.nodeValue;
                  }
                } catch (e) {
                  globalVar.tracking && console.log(e);
                }
                try {
                  r.target["parent_" + n + "_tagName"] = s.tagName;
                } catch (e) {
                  globalVar.tracking && console.log(e);
                }
              }
            }
          }
          try {
            r.el_d = this.getElementCssPath(o);
          } catch (e) {
            globalVar.tracking && console.log(e);
          }
          r.is = this.getInputData();
          var d = this.createLogObject(
            LOG_CONSTANTS.ACTION_TYPE.MOUSE_CLICK,
            r
          );
          try {
            this.getImpDataBanner(r);
          } catch (e) {
            globalVar.tracking && console.log(e);
          }
          d.prepareLogObjectData(this),
            localStorage.setItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_COOKIE_KEY + d.time,
              JSON.stringify(d)
            ),
            this.sendXHRLog(d);
          try {
            setTimeout(function () {
              if (
                JSON.stringify(r.target).indexOf(
                  'id":"btnThanachartCheckData'
                ) >= 0
              ) {
                var e = logger.getChkSum();
                if (e != t) {
                  var i = logger.createData();
                  try {
                    i.chk_sum = e;
                  } catch (e) {}
                  try {
                    i.is = logger.getInputData();
                  } catch (e) {}
                  try {
                    i.el_d = logger.getElementCssPath(o);
                  } catch (e) {
                    globalVar.tracking && console.log(e);
                  }
                  var n = logger.createLogObject(
                    LOG_CONSTANTS.ACTION_TYPE.SPECIAL_DIRECT_OTHER_SITE,
                    i
                  );
                  n.prepareLogObjectData(logger),
                    localStorage.setItem(
                      LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_COOKIE_KEY,
                      JSON.stringify(n)
                    ),
                    logger.sendXHRLog(n);
                }
              }
            }, 1500);
          } catch (e) {
            globalVar.tracking && console.log(e);
          }
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.mouseMoveAndStopLog = function (e) {
        try {
          (globalVar.lastMouseMoveStopTime = new Date().getTime()),
            (globalVar.mousePositionX = null != e.pageX ? e.pageX : -1),
            (globalVar.mousePositionY = null != e.pageY ? e.pageY : -1),
            setTimeout(function () {
              try {
                if (
                  new Date().getTime() - globalVar.lastMouseMoveStopTime >=
                  LOG_CONSTANTS.THRESHOLD.MOUSE_MOUVE_STOP_TIMEOUT
                ) {
                  var t = e.target || e.srcElement,
                    o = logger.createData();
                  if (null != t && null != t) {
                    try {
                      for (var r = t.attributes, i = 0; i < r.length; i++) {
                        var n = r[i];
                        o.target[n.nodeName] = n.nodeValue;
                      }
                    } catch (e) {
                      globalVar.tracking && console.log(e);
                    }
                    try {
                      o.target.tagName = t.tagName;
                    } catch (e) {
                      globalVar.tracking && console.log(e);
                    }
                    var a = t.parentElement;
                    if (null == a || null == a);
                    else {
                      try {
                        for (
                          r = t.parentElement.attributes, i = 0;
                          i < r.length;
                          i++
                        ) {
                          n = r[i];
                          o.target["parent_" + n.nodeName] = n.nodeValue;
                        }
                      } catch (e) {
                        globalVar.tracking && console.log(e);
                      }
                      try {
                        o.target.parent_tagName = t.parentElement.tagName;
                      } catch (e) {
                        globalVar.tracking && console.log(e);
                      }
                      var c = a;
                      for (
                        i = 1;
                        i < 100 && null != (c = c.parentElement) && null != c;
                        i++
                      ) {
                        try {
                          for (var s = c.attributes, l = 0; l < s.length; l++) {
                            var g = s[l];
                            o.target["parent_" + i + "_" + g.nodeName] =
                              g.nodeValue;
                          }
                        } catch (e) {
                          globalVar.tracking && console.log(e);
                        }
                        try {
                          o.target["parent_" + i + "_tagName"] = c.tagName;
                        } catch (e) {
                          globalVar.tracking && console.log(e);
                        }
                      }
                    }
                  }
                  try {
                    o.el_d = logger.getElementCssPath(t);
                  } catch (e) {
                    globalVar.tracking && console.log(e);
                  }
                  var h = logger.createLogObject(
                    LOG_CONSTANTS.ACTION_TYPE.MOUSE_MOVE_STOP,
                    o
                  );
                  try {
                    logger.getImpDataBanner(o);
                  } catch (e) {
                    globalVar.tracking && console.log(e);
                  }
                  h.prepareLogObjectData(logger), logger.sendLog(h);
                }
              } catch (e) {
                globalVar.tracking && console.log(e);
              }
            }, LOG_CONSTANTS.THRESHOLD.MOUSE_MOUVE_STOP_TIMEOUT);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.windowOnEnterEventLog = function (e) {
        try {
          try {
            var t = logger.createData();
            try {
              var o = e.target || e.srcElement;
              t.el_d = logger.getElementCssPath(o);
            } catch (e) {
              globalVar.tracking && console.log(e);
            }
            try {
              o = e.target || e.srcElement;
              t.is = logger.getInputData();
            } catch (e) {
              globalVar.tracking && console.log(e);
            }
            var r = logger.createLogObject(
              LOG_BXH_CONSTANTS.ACTION_TYPE.ENTER_UP,
              t,
              e
            );
            r.prepareLogObjectDataForOtherAction(logger), logger.sendLog(r);
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        }
      }),
      (this.getNameAndPriceFromElement = function (e, t) {
        if (null != e && null != e) {
          try {
            (t.n = e.querySelector("a[href]").getAttribute("title")),
              (null != t.n && null != t.n) ||
                (t.n = e.querySelector("h3").innerText.trim().toLowerCase()),
              (null != t.n && null != t.n) ||
                (t.n = e
                  .querySelector("a[href] font")
                  .innerText.trim()
                  .toLowerCase());
          } catch (o) {
            try {
              t.n = e.querySelector("h3").innerText.trim().toLowerCase();
            } catch (e) {}
          }
          try {
            (t.p = e
              .querySelector('div[class="price"]')
              .innerText.trim()
              .toLowerCase()),
              (null != t.p && null != t.p) ||
                (t.p = e
                  .querySelector('div[class="post-info"]')
                  .innerText.trim()
                  .toLowerCase()
                  .replace("price : ", ""));
          } catch (o) {
            try {
              t.p = e
                .querySelector('div[class="post-info"]')
                .innerText.trim()
                .toLowerCase()
                .replace("price : ", "");
            } catch (e) {}
          }
        }
      }),
      (this.getItem = function (e, t, o) {
        var r = new (function () {
          this.h, this.i, this.n, this.sy, this.ey, this.y;
        })();
        try {
          (r.i = t),
            o.length < 50 && (r.n = o),
            (r.h = e.querySelector("a").getAttribute("href"));
        } catch (e) {}
        try {
          (r.sy = e.getBoundingClientRect().top),
            (r.ey = e.getBoundingClientRect().bottom),
            (r.y = e.getBoundingClientRect().height);
        } catch (e) {}
        return r;
      }),
      (this.checkOnScreen = function (e) {
        try {
          var t = e.getBoundingClientRect(),
            o = t.left,
            r = t.top,
            i = t.left + t.width,
            n = t.top + t.height,
            a = window.innerHeight,
            c = window.innerWidth;
          if (o * (o - c) + r * (r - a) < 0) return !0;
          if (i * (i - c) + n * (n - a) < 0) return !0;
          if (i * o + n * r < 0) return !0;
          if ((a - r) * (a - n) + (c - n) * (c - r) < 0) return !0;
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        return !1;
      }),
      (this.getProd = function (e, t, o, r, i) {
        (!1 === i || this.checkOnScreen(t)) &&
          e.main_vdis.push(this.getItem(t, o, r));
      }),
      (this.getArticle = function (e, t, o, r, i) {
        (!1 === i || this.checkOnScreen(t)) &&
          e.ris.push(this.getItem(t, o, r));
      }),
      (this.getProdsHomePage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[id="salon_promotion"] div[class="item-slide swiper-slide"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[id="box_special2"] div[class*="col-xs-3 swiper-slide swiper-slide-visible"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "");
          try {
            a =
              n.parentElement.parentElement.parentElement.parentElement
                .parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesHomePage = function (e, t) {
        var o = 0;
        try {
          for (
            var r = document.querySelectorAll(
                'div[id*="menu"] div[class="col-xs-4"] div[class="photo"]'
              ),
              i = 0;
            i < r.length;
            i++
          ) {
            var n = r[i],
              a = "";
            try {
              a =
                n.parentElement.parentElement.parentElement.parentElement
                  .parentElement.parentElement.previousElementSibling.innerText;
            } catch (e) {}
            this.getArticle(e, n, o, a, t), o++;
          }
        } catch (e) {}
      }),
      (this.getProdsTinraoListPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="list-product"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsTinraoDetailPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[id="ListAutoSamePrice"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[id="box_recent"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "");
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsPriceDetailPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="section-boxcar"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i];
          this.getProd(e, n, o, "Car sale announcement", t), o++;
        }
      }),
      (this.getArticlesPriceDetailPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="elm sidebar-box-carlist"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "Interesting articles";
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class="elm sidebar-box-carlist style2"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "Car Review Articles");
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsReviewListPage = function (e, t) {}),
      (this.getArticlesReviewListPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="news-listing"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "Review";
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class="elm sidebar-box-carlist style2"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "Highly Visited Review");
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsReviewDetailPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="section-boxcar"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i];
          this.getProd(e, n, o, "Car sale announcement", t), o++;
        }
      }),
      (this.getArticlesReviewDetailPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="elm sidebar-box-carlist"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "Interesting articles";
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class="elm sidebar-box-carlist style2"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "Car Review Articles");
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesNewsListPage = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class*="box-news-2"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "Domestic car market";
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class="news-listing"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "Main");
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class="section-boxnews"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "Car trading experience");
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class="elm sidebar-box-carlist style2"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "Car review");
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsHomePageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[id="boxspecial2"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesHomePageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="container tab-article tab-article-1"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsTinraoListPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="car-list"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsTinraoDetailsPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[id="ListAutoSamePrice"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[id="boxrecentviewed"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "");
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesPriceListPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="price-listing style2"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsPriceDetailsPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="row car-grid"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesNewsListPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class*="box-price"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesNewsDetailsPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class*="box-price"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesReviewListPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class*="box-price"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesReviewDetailsPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class*="price-listing no_br"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getArticle(e, n, o, a, t), o++;
        }
        for (
          r = document.querySelectorAll(
            'div[class*="price-listing style2 no_br"] div[class="photo"]'
          ),
            i = 0;
          i < r.length;
          i++
        ) {
          (n = r[i]), (a = "");
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getArticle(e, n, o, a, t), o++;
        }
      }),
      (this.getProdsReviewDetailsPageMobile = function (e, t) {
        for (
          var o = 0,
            r = document.querySelectorAll(
              'div[class="row car-grid"] div[class="photo"]'
            ),
            i = 0;
          i < r.length;
          i++
        ) {
          var n = r[i],
            a = "";
          try {
            a = n.parentElement.parentElement.previousElementSibling.innerText;
          } catch (e) {}
          this.getProd(e, n, o, a, t), o++;
        }
      }),
      (this.getArticlesDesktop = function (e, t) {
        var o = this.getCurrentURI();
        "https://chobrod.com/" == o ||
        "http://chobrod.com/" == o ||
        "http://beta.chobrod.com/" == o ||
        "https://beta.chobrod.com/" == o
          ? this.getArticlesHomePage(e, t)
          : o.match(/.*chobrod.com\/car-price.*/)
          ? o.match(/.*chobrod.com\/car-price/) &&
            this.getArticlesPriceDetailPage(e, t)
          : o.match(/.*chobrod.com\/search-car-price.*/)
          ? this.getArticlesPriceDetailPage(e, t)
          : o.match(/.*chobrod.com\/car-.*/)
          ? o.match(/.*chobrod.com\/car-.*\/.*-aid.*/)
          : o.match(/.*chobrod.com\/news\/auto-market\/.*/) ||
            o.match(/.*chobrod.com\/news\/foreign-auto-market\/.*/) ||
            o.match(/.*chobrod.com\/news\/tips-car-care\/.*/) ||
            o.match(/.*chobrod.com\/news\/tips-buy-sell\/.*/) ||
            o.match(/.*chobrod.com\/auto-market\/.*/) ||
            o.match(/.*chobrod.com\/foreign-auto-market\/.*/) ||
            o.match(/.*chobrod.com\/tips-car-care\/.*/) ||
            o.match(/.*chobrod.com\/tips-buy-sell\/.*/)
          ? this.getArticlesNewsListPage(e, t)
          : "https://chobrod.com/news" == o || o.match(/.*chobrod.com\/news/)
          ? this.getArticlesNewsListPage(e, t)
          : "https://chobrod.com/news/auto-market" == o ||
            "https://chobrod.com/news/foreign-auto-market" == o ||
            "https://chobrod.com/news/tips-car-care" == o ||
            "https://chobrod.com/news/tips-buy-sell" == o
          ? this.getArticlesNewsListPage(e, t)
          : (o.match(/.*chobrod.com\/review.*/) ||
              o.match(/.*chobrod.com\/review-search/)) &&
            (o.match(/.*chobrod.com\/review-.*-aid.*/)
              ? this.getArticlesReviewDetailPage(e, t)
              : this.getArticlesReviewListPage(e, t));
      }),
      (this.getArticlesMobile = function (e, t) {
        var o = this.getCurrentURI();
        "https://chobrod.com/" == o ||
        "http://chobrod.com/" == o ||
        "http://beta.chobrod.com/" == o ||
        "https://beta.chobrod.com/" == o
          ? this.getArticlesHomePageMobile(e, t)
          : o.match(/.*chobrod.com\/car-price.*/)
          ? (o.match(/.*chobrod.com\/car-price/),
            this.getArticlesPriceListPageMobile(e, t))
          : o.match(/.*chobrod.com\/search-car-price.*/)
          ? this.getArticlesPriceListPageMobile(e, t)
          : o.match(/.*chobrod.com\/car-.*/)
          ? o.match(/.*chobrod.com\/car-.*\/.*-aid.*/)
          : o.match(/.*chobrod.com\/news\/auto-market\/.*/) ||
            o.match(/.*chobrod.com\/news\/foreign-auto-market\/.*/) ||
            o.match(/.*chobrod.com\/news\/tips-car-care\/.*/) ||
            o.match(/.*chobrod.com\/news\/tips-buy-sell\/.*/) ||
            o.match(/.*chobrod.com\/auto-market\/.*/) ||
            o.match(/.*chobrod.com\/foreign-auto-market\/.*/) ||
            o.match(/.*chobrod.com\/tips-car-care\/.*/) ||
            o.match(/.*chobrod.com\/tips-buy-sell\/.*/)
          ? this.getArticlesNewsDetailsPageMobile(e, t)
          : "https://chobrod.com/news" == o || o.match(/.*chobrod.com\/news/)
          ? this.getArticlesNewsListPageMobile(e, t)
          : "https://chobrod.com/news/auto-market" == o ||
            "https://chobrod.com/news/foreign-auto-market" == o ||
            "https://chobrod.com/news/tips-car-care" == o ||
            "https://chobrod.com/news/tips-buy-sell" == o
          ? this.getArticlesNewsListPageMobile(e, t)
          : (o.match(/.*chobrod.com\/review/) ||
              o.match(/.*chobrod.com\/review-search/)) &&
            (o.match(/.*chobrod.com\/review-.*-aid.*/)
              ? this.getArticlesReviewDetailsPageMobile(e, t)
              : this.getArticlesReviewListPageMobile(e, t));
      }),
      (this.getProdsDesktop = function (e, t) {
        var o = this.getCurrentURI();
        "https://chobrod.com/" === o ||
        "http://chobrod.com/" === o ||
        "http://beta.chobrod.com/" === o ||
        "https://beta.chobrod.com/" === o
          ? this.getProdsHomePage(e, t)
          : o.match(/.*chobrod.com\/car-price.*/)
          ? o.match(/.*chobrod.com\/car-price/) &&
            this.getProdsPriceDetailPage(e, t)
          : o.match(/.*chobrod.com\/search-car-price.*/) ||
            (o.match(/.*chobrod.com\/car-.*/)
              ? o.match(/.*chobrod.com\/car-.*\/.*-aid.*/)
                ? this.getProdsTinraoDetailPage(e, t)
                : this.getProdsTinraoListPage(e, t)
              : o.match(/.*chobrod.com\/news\/auto-market\/.*/) ||
                o.match(/.*chobrod.com\/news\/foreign-auto-market\/.*/) ||
                o.match(/.*chobrod.com\/news\/tips-car-care\/.*/) ||
                o.match(/.*chobrod.com\/news\/tips-buy-sell\/.*/) ||
                o.match(/.*chobrod.com\/auto-market\/.*/) ||
                o.match(/.*chobrod.com\/foreign-auto-market\/.*/) ||
                o.match(/.*chobrod.com\/tips-car-care\/.*/) ||
                o.match(/.*chobrod.com\/tips-buy-sell\/.*/) ||
                "https://chobrod.com/news" == o ||
                o.match(/.*chobrod.com\/news/) ||
                "https://chobrod.com/news/auto-market" == o ||
                "https://chobrod.com/news/foreign-auto-market" == o ||
                "https://chobrod.com/news/tips-car-care" == o ||
                "https://chobrod.com/news/tips-buy-sell" == o ||
                (o.match(/.*chobrod.com\/review.*/) &&
                  (o.match(/.*chobrod.com\/review-.*-aid.*/),
                  this.getProdsReviewDetailPage(e, t))));
      }),
      (this.getProdsMobile = function (e, t) {
        var o = this.getCurrentURI();
        "https://chobrod.com/" == o ||
        "http://chobrod.com/" == o ||
        "http://beta.chobrod.com/" == o ||
        "https://beta.chobrod.com/" == o
          ? this.getProdsHomePageMobile(e, t)
          : o.match(/.*chobrod.com\/car-price.*/)
          ? (o.match(/.*chobrod.com\/car-price/),
            this.getProdsPriceDetailsPageMobile(e, t))
          : o.match(/.*chobrod.com\/search-car-price.*/)
          ? this.getProdsPriceDetailsPageMobile(e, t)
          : o.match(/.*chobrod.com\/car-.*/)
          ? o.match(/.*chobrod.com\/car-.*\/.*-aid.*/)
            ? this.getProdsTinraoDetailsPageMobile(e, t)
            : this.getProdsTinraoListPageMobile(e, t)
          : o.match(/.*chobrod.com\/news\/auto-market\/.*/) ||
            o.match(/.*chobrod.com\/news\/foreign-auto-market\/.*/) ||
            o.match(/.*chobrod.com\/news\/tips-car-care\/.*/) ||
            o.match(/.*chobrod.com\/news\/tips-buy-sell\/.*/) ||
            o.match(/.*chobrod.com\/auto-market\/.*/) ||
            o.match(/.*chobrod.com\/foreign-auto-market\/.*/) ||
            o.match(/.*chobrod.com\/tips-car-care\/.*/) ||
            o.match(/.*chobrod.com\/tips-buy-sell\/.*/) ||
            "https://chobrod.com/news" == o ||
            o.match(/.*chobrod.com\/news/) ||
            "https://chobrod.com/news/auto-market" == o ||
            "https://chobrod.com/news/foreign-auto-market" == o ||
            "https://chobrod.com/news/tips-car-care" == o ||
            "https://chobrod.com/news/tips-buy-sell" == o ||
            ((o.match(/.*chobrod.com\/review/) ||
              o.match(/.*chobrod.com\/review-search/)) &&
              (o.match(/.*chobrod.com\/review-.*-aid.*/),
              this.getProdsReviewDetailsPageMobile(e, t)));
      }),
      (this.getPageViewDataIdsMobile = function (e, t) {
        this.getProdsMobile(e, t), this.getArticlesMobile(e, t);
      }),
      (this.getPageViewDataIdsDesktop = function (e, t) {
        this.getProdsDesktop(e, t), this.getArticlesDesktop(e, t);
      }),
      (this.getPageViewData = function (e, t, o) {
        !0 === o
          ? (this.getPageViewDataIdsMobile(e, t), (e.is = this.getInputData()))
          : (this.getPageViewDataIdsDesktop(e, t),
            (e.is = this.getInputData()));
        try {
          this.getPvDataExtendBtnThanaChart(e);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
        try {
          this.getImpressionLiveStreamFBDesktop(e);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.getPvDataExtendBtnThanaChart = function (e) {
        var t = "",
          o = this.getCurrentURI();
        if (
          o.match(/.*chobrod.com\/car-.*/) &&
          o.match(/.*chobrod.com\/car-.*\/.*-aid.*/)
        ) {
          var r = document.getElementById("btnThanachartCheckData");
          if (null != r && null != r) {
            t = "";
            t = "true";
            var n = new i();
            this.getHrefIdFromElement(r, n),
              this.getLocationFromElement(r, n),
              (n.is_btn_thanachart = t),
              (e.btn_thanachart = n);
          }
        }
      }),
      (this.getImpressionLiveStreamFBDesktop = function (e) {
        var t = document.getElementById("fb-live-stream-open");
        if (null != t && null != t) {
          var o = new i();
          this.getHrefIdFromElement(t, o),
            this.getLocationFromElement(t, o),
            (e.live_stream = o);
        }
      }),
      (this.getImpDataBanner = function (e) {
        for (
          var t = document.querySelectorAll(
              'div[id="banner_big_home"], div[id="adsTopList"], div[id="adsTopDetail"], div[id="boxAds-320x267"], div[class="ads-campain-top-right-new"], div[id="bannerbighome"], div[class="ads-campain-top-wap"]'
            ),
            o = 0,
            i = 0;
          t && i < t.length;
          i++
        ) {
          var n = t[i],
            a = new r();
          try {
            a.gy = n.getBoundingClientRect().y;
          } catch (e) {}
          try {
            a.gx = n.getBoundingClientRect().x;
          } catch (e) {}
          try {
            a.ey = n.offsetHeight;
          } catch (e) {}
          try {
            a.ex = n.offsetWidth;
          } catch (e) {}
          try {
            var c = n.querySelector("a");
            try {
              a.name = c.getAttribute("data-bannername");
            } catch (e) {}
            try {
              a.pos = c.getAttribute("data-bannerpositionname");
            } catch (e) {}
            try {
              a.t = c.getAttribute("title");
            } catch (e) {}
            try {
              a.h = c.getAttribute("href");
            } catch (e) {}
          } catch (e) {}
          var s = n.querySelector("a[href]");
          try {
            (a.h = s.href), (a.t = s.title);
          } catch (e) {}
          this.checkOnScreen(n) && ((e.listBanner[o] = a), o++);
        }
        t = document.querySelectorAll('form[id="formPostThanachart"]');
        try {
          if (null != t && null != t)
            for (i = 0; t && i < t.length; i++) {
              (n = t[i]), (a = new r());
              try {
                a.gy = n.getBoundingClientRect().y;
              } catch (e) {}
              try {
                a.gx = n.getBoundingClientRect().x;
              } catch (e) {}
              try {
                a.ey = n.offsetHeight;
              } catch (e) {}
              try {
                a.ex = n.offsetWidth;
              } catch (e) {}
              (a.name = "formPostThanachart"),
                this.checkOnScreen(n) && ((e.listBanner[o] = a), o++);
            }
        } catch (e) {}
      }),
      (this.enterUpLog = function () {
        try {
          var e = this.createData();
          e.target.text_search = [];
          for (var t = 0, o = 0; o < LOG_CONSTANTS.ID_SEARCH_BOXS.length; o++) {
            var r = LOG_CONSTANTS.ID_SEARCH_BOXS[o],
              i = document.getElementById(r);
            if (null != i && null != i) {
              var n = i.value,
                a = new Object();
              (a.text_search = n),
                (a.id_text_search = r),
                (e.target.text_search[t] = a),
                t++;
            }
          }
          var c = this.createLogObject(LOG_CONSTANTS.ACTION_TYPE.ENTER_UP, e);
          c.prepareLogObjectData(this),
            localStorage.setItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_ENTER_UP_COOKIE_KEY + c.time,
              JSON.stringify(c)
            ),
            this.sendXHRLog(c);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.scrollLog = function () {
        try {
          if (
            new Date().getTime() - globalVar.lastScrollTime >=
            LOG_CONSTANTS.THRESHOLD.SCROLL_TIMEOUT
          ) {
            var e = this.createLogObject(
              LOG_CONSTANTS.ACTION_TYPE.WINDOW_SCROLL,
              null
            );
            e.prepareLogObjectData(this), this.sendLog(e);
          }
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.timeOnSiteLog = function () {
        try {
          var e = new Date().getTime(),
            t = this.createData();
          (t.timeOnSite = globalVar.time_on_site),
            (t.timestamp = e),
            (t.is = this.getInputData());
          var o = this.createLogObject(LOG_CONSTANTS.ACTION_TYPE.UNLOAD, t);
          o.prepareLogObjectData(this),
            localStorage.setItem(
              LOG_CONSTANTS.LOCAL_STORAGE.LOG_TIME_ON_SITE_KEY + o.time,
              JSON.stringify(o)
            ),
            logger.sendXHRLog(o);
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }),
      (this.getIdFromUrl = function (e) {
        return e.match(/^.*-aid([0-9]+)$/)
          ? e.replace(/^.*-aid([0-9]+)$/, "$1")
          : e.match(
              /^\/(auto-market|foreign-auto-market|tips-car-care|tips-buy-sell).*-([0-9]+)$/
            )
          ? e.replace(/^.*-([0-9]+)$/, "$1")
          : null;
      }),
      (this.getHrefIdFromElement = function (e, t) {
        if (null != e && null != e) {
          var o = e.querySelector("a[href]");
          if (null != o && null != o) {
            try {
              t.h = o.getAttribute("href");
            } catch (e) {}
            try {
              t.i = this.getIdFromUrl(t.h);
            } catch (e) {}
          }
        }
      }),
      (this.updateUserInfoToCookie = function () {
        try {
          var e = this.getCookie(LOG_CONSTANTS.COOKIE.USER_INFO_KEY_COOKIE);
          if (e && void 0 !== e && "" != e) {
            var t = JSON.parse(decodeURIComponent(e));
            (t || t.email || t.email != userInfo.email) &&
              this.setCookie(
                LOG_CONSTANTS.COOKIE.USER_INFO_KEY_COOKIE,
                JSON.stringify(userInfo),
                LOG_CONSTANTS.THRESHOLD.USER_INFO_KEY_COOKIE
              );
          } else
            this.setCookie(
              LOG_CONSTANTS.COOKIE.USER_INFO_KEY_COOKIE,
              JSON.stringify(userInfo),
              LOG_CONSTANTS.THRESHOLD.USER_INFO_KEY_COOKIE
            );
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      });
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}
var logger = new Logger();
function loggerWindowOnLoadInitForLog() {
  try {
    (LOG_CONSTANTS.current_pagey_offset = window.pageYOffset),
      (globalVar.loadedTime = new Date().getTime()),
      globalVar.isLogPageView ||
        ((globalVar.isLogPageView = !0),
        $(window).bind("load", function () {
          logger.pageViewLog();
        }));
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}
function loggerAddSearchBoxEventLog() {
  try {
    null != document.getElementById(LOG_CONSTANTS.ID_SEARCH_BOX) &&
      document
        .getElementById(LOG_CONSTANTS.ID_SEARCH_BOX)
        .addEventListener("keyup", function (e) {
          e.keyCode == LOG_CONSTANTS.KEY_CODE.ENTER && logger.enterUpLog();
        });
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}
function loggerUpdateUserInfo() {
  try {
    null != document.querySelector('input[id="hddIsLogin"]') &&
    null != document.querySelector('input[id="hddIsLogin"]')
      ? (userInfo.id = document.querySelector('input[id="hddIsLogin"]').value)
      : null != document.querySelector('input[id="hddUserId"]') &&
        null != document.querySelector('input[id="hddUserId"]') &&
        (userInfo.id = document.querySelector('input[id="hddUserId"]').value);
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}
function loggerListenerIframes() {
  try {
    var e = window.addEventListener("blur", function () {
      for (
        var t = document.querySelectorAll("iframe"), o = 0;
        o < t.length;
        o++
      )
        document.activeElement === t[o] &&
          (logger.clickIframe(document.activeElement.outerHTML),
          window.removeEventListener("blur", e));
    });
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}
function loggerAddScript(e) {
  try {
    var t = document.createElement("script");
    (t.src = e),
      null != document.body && null != document.body
        ? document.body.appendChild(t)
        : document.head.appendChild(t);
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}
function loggerResendLogObjectInStorage(e) {
  try {
    var t = localStorage.getItem(e);
    if (t && void 0 !== t && "" != t) {
      var o = JSON.parse(t);
      localStorage.removeItem(e), logger.sendLog(o);
    }
  } catch (e) {
    globalVar.tracking && console.log(e);
  }
}

export {
    Logger,
    loggerWindowOnLoadInitForLog,
    loggerAddSearchBoxEventLog,
    loggerUpdateUserInfo,
    loggerListenerIframes,
    loggerAddScript,
    loggerResendLogObjectInStorage
}