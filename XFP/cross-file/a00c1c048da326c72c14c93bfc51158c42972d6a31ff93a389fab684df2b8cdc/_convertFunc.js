import {o} from './_o.js';
import {e} from './_ne.js';
import {i} from './_ni.js';
import {n} from './_nn.js';
import {a} from './_a.js';
import {r} from './_r.js';
import {s} from './_s.js';
import {I} from './_I.js';
import {T} from './_T.js';
import {D} from './_D.js';
import {C} from './_C.js';
import {N} from './_N.js';
import {z} from './_z.js';
import {E} from './_E.js';
import {P} from './_P.js';
import {U} from './_U.js';
import {L} from './_L.js';
import {H} from './_H.js';
import {M} from './_M.js';
import {j} from './_nj.js';
import {J} from './_J.js';
import {W} from './_W.js';
import {V} from './_V.js';
import { u } from './u.js';
import { c } from './c.js';

export function _convertFunc(){
  "use strict";
  o.truepushSDK = function (t) {

    var p,
      l = ["add-tags", "remove-tags", "get-tags"];


    (this.subscribeUserByTwoWayOptIn = function (t) {
      a({ optinClick: !0 }, "optinClick"), t && truepush.HideOptin(), P();
    }),
      (this.HideOptin = function (t) {
        "close" == t &&
          (a({ optinIgnore: !0 }, "optinIgnore"),
          r(),
          localStorage.getItem("optinShow") ||
            "custom" === g.optInType ||
            "bell" === g.optInType ||
            "spec_time" !== g.optInFrequencyType ||
            localStorage.setItem(
              "optinShow",
              Date.now() + 6e4 * g.optInFrequency
            ),
          "new_session" === g.optInFrequencyType &&
            sessionStorage.setItem("new_session", "true")),
          "top_bar" === g.optInType &&
            ("" !== g.customStyles.top
              ? (document.body.style.cssText = "margin-top: 0px !important")
              : (document.getElementsByTagName("html")[0].style.cssText =
                  "margin-bottom:0px !important"));
        var o = "box+" === g.optInType ? "box2" : g.optInType;
        o = "default+" === o ? "default2" : o;
        var e = document.getElementsByClassName(
          "truepush_optin_notifications"
        )[0];
        (e.className = "truepush_optin_notifications d-none"),
          g.websiteSSL || (w && w.postMessage({ type: "hideOptin" }, "*"));
      });
    var f,
      d,
      m,
      g,
      b,
      h,
      x,
      _,
      w,
      y = { platformDetails: !0, jsFiles: !0 },
      v = Notification.permission,
      S = !1,
      k = !0;

    window.addEventListener(
      "message",
      function (t) {
        var o = t.data;
        o && o.optInType
          ? (o.browserInfo &&
              ((browserData = o.browserInfo), delete o.browserInfo),
            (g = o).userConsent &&
              (m || (m = {}), (m.userConsent = g.userConsent)),
            fromIframe && I(),
            fromSubDomain && (d || j()),
            fromSubDomain &&
              ((document.getElementById("subDomainTP").innerHTML =
                " Subscribe to " + g.websiteURL),
              (document.getElementById("requestDiv").style.display = "block")))
          : o && "getSubscriberId" === o.type
          ? (function (t) {
              var o = {};
              if ("granted" != Notification.permission)
                return t(
                  (o = { error: "Permission not granted", result: null })
                );
              if (!G())
                return t(
                  (o = { error: "Script not yet initialized", result: null })
                );
              var e = localStorage.getItem("subscriberId");
              if (e) return t((o = { error: null, result: e }));
              Y(function (e) {
                if (!e)
                  return t(
                    (o = { error: "Subscription not found", result: null })
                  );
                var i = host + "api/v1/getSubscriberId",
                  n = { userPlatformId: g._id, subscription: e };
                HTTP.post(i, n, R, function (e, i) {
                  return e
                    ? t(
                        (o = {
                          error: "Unable to serve subscriberId",
                          result: null,
                        })
                      )
                    : "ERROR" == i.status
                    ? t((o = { error: n.message, result: null }))
                    : i && i.data
                    ? ((o = { error: null, result: i.data }),
                      localStorage.setItem("subscriberId", i.data),
                      t(o))
                    : t(
                        (o = {
                          error: "Unable to serve subscriberId",
                          result: null,
                        })
                      );
                });
              });
            })(function (t) {
              (t.type = "subscriberId"), w && w.postMessage(t, "*");
            })
          : o && "subscriberId" === o.type
          ? subscriberIdCallback &&
            (subscriberIdCallback(o.error, o.result),
            (subscriberIdCallback = null))
          : o && "hideOptin" === o.type
          ? ((document.getElementById("tp-iframe").style.display = "none"),
            "top_bar" === g.optInType &&
              ("" !== g.customStyles.top
                ? (document.body.style.cssText = "margin-top: 0px !important")
                : (document.getElementsByTagName("html")[0].style.cssText =
                    "margin-bottom:0px !important")))
          : o && "optinHeight" === o.type
          ? ((document.getElementById("tp-iframe").style.minHeight =
              o.height + "px"),
            "top_bar" == g.optInType &&
              ("" !== g.customStyles.top
                ? (document.body.style.cssText =
                    "margin-top:" + o.height + "px !important")
                : (document.getElementsByTagName("html")[0].style.cssText =
                    "margin-bottom:" + o.height + "px !important")))
          : o &&
            "iframeShow" === o.type &&
            (document.getElementById("tp-iframe").style.display = "block");
      },
      !1
    ),
      (function () {
        (function () {
          try {
            return window.self !== window.top;
          } catch (t) {
            return !0;
          }
        })() && ((fromIframe = !0), (w = window.parent));
        window.name && "HTTPSubscriptionWindow" == window.name
          ? (fromSubDomain = !0)
          : window.location.href.indexOf(subDomainsHost) >= 0 &&
            !fromIframe &&
            (fromSubDomain = !0);
      })(),
      setTimeout(function () {
        !d && m && fromSubDomain && ((_ = !0), truepush.Init(m));
      }, 5e3);
    var R = {
      credentials: !0,
      headers: { "Content-Type": "application/json" },
    };
   
    (this.subscribeUserVapid = function (t) {
      if (
        browserData &&
        browserData.browser &&
        "Safari" === browserData.browser.name
      )
        W();
      else if (
        ((Notification && "granted" != Notification.permission) || t) &&
        "serviceWorker" in navigator
      )
        try {
          permissionAllowed ||
            fromSubDomain ||
            a({ show: !0, optinType: g.optInType }, "show"),
            Notification.requestPermission().then(function (e) {
              localStorage.setItem("permission", Notification.permission),
                "enable" == optinStatus && truepush.HideOptin(),
                "denied" === Notification.permission
                  ? (a({ block: !0, optinType: g.optInType }, "block"),
                    r(),
                    fromSubDomain && U("block"))
                  : "default" === Notification.permission
                  ? ("Firefox" === browserData.browser.name &&
                      (function (t, o) {
                        var e = new Date();
                        e.setTime(e.getTime() + 1e4);
                        var i = "; expires=" + e.toGMTString();
                        document.cookie = t + "=" + o + i + "; path=/";
                      })("permission", "blocked"),
                    a({ ignore: !0, optinType: g.optInType }, "ignore"),
                    r())
                  : "granted" === Notification.permission &&
                    ((key = o(g.vapidDetails.publicKey)),
                    D(function (o) {
                      o.pushManager
                        .subscribe({
                          userVisibleOnly: !0,
                          applicationServerKey: key,
                        })
                        .then(function (e) {
                          (subscription = i(e)),
                            !g.welcomeNotification ||
                              t ||
                              n(subscription) ||
                              skipSubscriberReport ||
                              L(o),
                            "enable" == optinStatus && truepush.HideOptin(),
                            localStorage.setItem("permission", "granted"),
                            fromSubDomain && U("success"),
                            O(subscription, "no", function () {
                              it();
                            });
                        })
                        .catch(function (t) {
                          console.log("catch error ", t),
                            "granted" === Notification.permission && M();
                        });
                    }));
            });
        } catch (t) {
          console.log("error in catch block ", t);
        }
    }),
      (this.Init = function (t, o) {
        if (((m = t), !S || !fromSubDomain || _)) {
          S = !0;
          var e = t.id;
          if (
            (t.userConsent || (t.userConsent = "allowed_cookies_personal_data"),
            [
              "allowed_cookies_only",
              "denied",
              "allowed_cookies_personal_data",
            ].indexOf(t.userConsent) < 0)
          )
            return (d = !0), o ? o("Invalid userConsent...!!!") : void 0;
          if ("denied" !== m.userConsent) {
            if (
              (m.fromshopify && (fromshopifyDomain = m.fromshopify),
              m.serviceWorkerFileName || (m.serviceWorkerFileName = "sw.js"),
              m.serviceWorkerFileName &&
                -1 != m.serviceWorkerFileName.indexOf("/"))
            )
              return (d = !0), o("Invalid serviceWorkerFileName...!!!");
            k &&
              ((!fromIframe && !fromSubDomain) || _
                ? B(e, function (t, o) {
                    if (o && "SUCCESS" == o.status) {
                      try {
                        if (
                          (o.data.browserDetails &&
                            ((browserData = o.data.browserDetails),
                            localStorage.setItem(
                              "browserInfo",
                              JSON.stringify(o.data.browserDetails)
                            ),
                            delete o.data.browserDetails),
                          o.data && !o.data.sameData
                            ? ((g = o.data),
                              localStorage.setItem(
                                "platformDetails",
                                JSON.stringify(g)
                              ))
                            : ((g = localStorage.getItem("platformDetails")),
                              (g = JSON.parse(g))),
                          g && g.audiencePrime)
                        ) {
                          let t = localStorage.getItem("tp-scriptStatus"),
                            o = new Date(),
                            i =
                              o.getFullYear() +
                              "-" +
                              o.getMonth() +
                              "-" +
                              o.getDate();
                          if (!t || t != i) {
                            localStorage.setItem("tp-scriptStatus", i);
                            var e = document.createElement("script");
                            (e.type = "text/javascript"),
                              (e.defer = !0),
                              (e.async = !0),
                              (e.onload = function () {
                                audiencePlay.set(g.audiencePrime.apiKey),
                                  audiencePlay.start(g.audiencePrime.source),
                                  audiencePlay.end(),
                                  audiencePlay.send();
                              }),
                              (e.src =
                                "https://truepush1.digitalkites.com/audienceplay.js"),
                              document.body.appendChild(e);
                          }
                        }
                        A(g)
                          ? fromSubDomain
                            ? ("box+" !== g.optInType ||
                                g.customStyles["box+"] ||
                                g.customStyles["box+"].subText ||
                                (g.customStyles["box+"].subText = ""),
                              j(),
                              (d = !0))
                            : I()
                          : (localStorage.removeItem("platformDetails"),
                            console.log("platform data is not valid"));
                      } catch (t) {}
                      g && g.websiteSSL && et();
                    } else console.log("Unable to service truepushsdk", t);
                  })
                : (y.platformDetails = !1));
          } else d = !0;
        }
      });
    var F = function () {
        try {
          let t = window.ShopifyAnalytics.meta.page.customerId;
          if (void 0 !== t && null !== t && "" !== t) return t;
        } catch (t) {}
        try {
          let t = window.meta.page.customerId;
          if (void 0 !== t && null !== t && "" !== t) return t;
        } catch (t) {}
        try {
          let t = _st.cid;
          if (void 0 !== t && null !== t && "" !== t) return t;
        } catch (t) {}
        return null;
      },
      q = function (t) {
        return new Promise((o, e) => {
          try {
            const i = `/admin/customers/${t}.json`;
            (xhttp.onreadystatechange = function () {
              4 == this.readyState &&
                200 == this.status &&
                o(this.responseText);
            }),
              xhttp.open("GET", i, !0),
              xhttp.send();
          } catch (t) {
            console.error("Error :: While fetching customer data..."), e(t);
          }
        });
      },
      B = async function (t, o) {
        var e = host + "api/v2/truepushSDKPlatfromDetails",
          i = {};
        if (
          ((i.platformId = t),
          "v2" === version && (i.version = "v2"),
          localStorage.getItem("platformDetails"))
        ) {
          var n = localStorage.getItem("platformDetails");
          (n = JSON.parse(n)).updatedDate && (i.updatedDate = n.updatedDate),
            n.originalURL && (i.originalURL = n.originalURL),
            n._id && (i._id = n._id);
        }
        let a = "";
        if (fromshopifyDomain) {
          "" == a && "" != (a = N("cart")) && null != a && (i.cartId = a);
          let t = "";
          if ("" == t && "" != (t = F()) && null != t)
            try {
              let o = await q(t);
              if (o && void 0 != o) {
                let e = (o = JSON.parse(o)).customer.email;
                (i.customerId = t.toString()), (i.customerEmail = e);
              }
            } catch (t) {
              console.error(t);
            }
        }
        if (!fromIframe && !fromSubDomain) {
          "allowed_cookies_only" === m.userConsent &&
            (i.deniedPersonalData = !0),
            (i.visit = !0),
            localStorage.getItem("visited-tp") ||
              ((i.uniqueVisitors = !0), localStorage.setItem("visited-tp", !0));
          var r = localStorage.getItem("tp-visitsData");
          if (r)
            try {
              (r = JSON.parse(r)), (i.visitsData = s(r));
            } catch (t) {}
          var p = localStorage.getItem("subscription");
          p && (i.subscription = p);
          var l = localStorage.getItem("browserInfo");
          l && ((browserData = JSON.parse(l)), (i.skipBrowserInfo = !0));
        }
        let u = !1,
          c = "";
        i.originalURL && (c = i.originalURL);
        let f = "";
        i.platformId && (f = i.platformId),
          console.log("OriginalUrl::; ", c),
          HTTP.post(e, i, R, function (t, e) {
            if (k) {
              t || localStorage.removeItem("tp-visitsData");
              e.data;
              var i = window.location.protocol + "//" + window.location.host;
              if ("" !== c) {
                if (i !== c) {
                  e.orignalUrl = i;
                  let t = JSON.parse(localStorage.getItem("platformDetails"));
                  ((t = t).originalURL = i),
                    localStorage.setItem("platformDetails", JSON.stringify(t)),
                    (u = !0);
                }
              } else if (e.data.originalURL) {
                if (i !== e.data.originalURL) {
                  if (
                    ((e.data.originalURL = i),
                    localStorage.getItem("platformDetails"))
                  ) {
                    let t = JSON.parse(localStorage.getItem("platformDetails"));
                    ((t = t).originalURL = i),
                      localStorage.setItem(
                        "platformDetails",
                        JSON.stringify(t)
                      );
                  }
                  u = !0;
                }
              } else {
                if (localStorage.getItem("platformDetails")) {
                  let t = JSON.parse(localStorage.getItem("platformDetails"));
                  ((t = t).originalURL = i),
                    localStorage.setItem("platformDetails", JSON.stringify(t));
                }
                (e.data.originalURL = i), (u = !0);
              }
              if (u) {
                var n = { originalURL: i, platformId: e.data._id };
                "" !== f && (n.platformId = f);
                var a = host + "api/v1/updateOriginalUrl";
                HTTP.post(a, n, R, function (t, o) {
                  t && console.log("error while making updateOriginalUrl req");
                });
              }
              return g ? void 0 : o(t, e);
            }
          });
      },
      A = function (t) {
        try {
          return (
            t.customStyles && t.customStyles[t.optInType]
              ? (t.customStyles = Object.assign(
                  {},
                  t.customStyles[t.optInType]
                ))
              : (t.customStyles = X[t.optInType]),
            (y.platformDetails = !1),
            "top_bar" === t.optInType &&
              0 !== t.customStyles.top &&
              0 !== t.customStyles.bottom &&
              ((t.customStyles.top = 0), (t.customStyles.bottom = "")),
            t.websiteSSL ||
              (t.altUrl = (function (t) {
                var o,
                  e = /((https|http):\/\/)?(www\.)?([\w_\.-]+)(\/?)/.exec(
                    t.websiteURL
                  );
                e
                  ? (e[4].replace(/\//g, ""), (o = e[4].replace(/\./g, "-")))
                  : (o = null);
                return "https://" + o + "." + subDomainsHost;
              })(t)),
            t.optinShowInterval || (t.optinShowInterval = 0),
            (t && t.vapidDetails && t.vapidDetails.publicKey) ||
              (t.vapidDetails = { publicKey: defaultKey }),
            t.optInFrequencyType || (t.optInFrequencyType = "page_refresh"),
            t.safariDetails &&
              t.safariDetails.webPushId &&
              (f = t.safariDetails.webPushId),
            !0
          );
        } catch (t) {}
      };
      async function O(t, o, e) {
        if (E(t, "vapid")) return;
        if (n(t)) return;
        var i = {
          subscription: t,
          userPlatformId: g._id,
          isChrome: (function () {
            if (navigator && navigator.plugins) {
              for (var t = 0; t < navigator.plugins.length; t++)
                if ("Chrome PDF Viewer" == navigator.plugins[t].name) return !0;
              return !1;
            }
            return !1;
          })(),
          language: navigator.language || navigator.userLanguage,
          optinType: g.optInType,
        };
        let a = "";
        if (fromshopifyDomain) {
          "" != (a = N("cart")) && null != a && (i.cartId = a);
          let t = F();
          if ("" != t && null != t)
            try {
              let o = await q(t);
              if ((o = JSON.parse(o)) && void 0 != o) {
                let e = o.customer.email;
                (i.customerId = t.toString()), (i.customerEmail = e);
              }
            } catch (t) {
              console.error(t);
            }
        }
        "update" == o &&
          "Opera" === browserData.browser.name &&
          "mobile" === browserData.device.type &&
          (i.forceUpdate = !0),
          "allowed_cookies_only" === m.userConsent &&
            ((i.deniedPersonalData = !0), delete i.language),
          "granted" === v && (i.skipTriggers = !0),
          skipSubscriberReport && (i.skipSubscriberReport = !0);
        var r = localStorage.getItem("tp-visitsData");
        if (r)
          try {
            (r = JSON.parse(r)), (i.visitsData = s(r));
          } catch (t) {}
        var p = host + "api/v1/upsertSubscriber";
        HTTP.post(p, i, R, function (o, i) {
          i &&
            i.data &&
            (z(t),
            localStorage.setItem("subscriberId", i.data),
            localStorage.removeItem("tp-visitsData"),
            e()),
            o && console.log("error while making upsertsubscriber req");
        });
      }
    (this.Iframloaded = function () {
      J((iFrameReference = document.getElementById("tp-iframe").contentWindow));
    }),
      (this.IsInitialized = function () {
        return !!S;
      }),
      (this.GetUserConsent = function () {
        return m.userConsent;
      });
    var X = {
      box: {
        mainText: "Allow updates from truepush.com",
        firstBtnText: "Not now",
        subText: "You can turn it off whenever you like.",
        secondBtnText: "Allow",
        visibleStatus: "none",
      },
      "box+": {
        mainText: "Allow updates from truepush.com",
        firstBtnText: "Not now",
        secondBtnText: "Allow",
        visibleStatus: "none",
      },
      top_bar: {
        barColor: "#000",
        textColor: "#fff",
        buttonColor: "#4A90E2",
        buttonTextColor: "#fff",
        barText: "This is optinbar text information",
        buttonText: "Subscribe to push notifications",
        top: 0,
        bottom: "",
      },
      bell: { circleColor: "#F00", bellColor: "#fff" },
      custom: {
        backgroundColor: "#4A90E2",
        textColor: "#fff",
        buttonText: "Subscribe to push notifications",
      },
      default: {},
      "default+": {},
    };
    (this.push = function (t) {
      if ("function" == typeof t) S || ((S = !0), t());
      else {
        if (l.indexOf(t.operation) < 0)
          return void console.log("Invalid operation");
        "add-tags" === t.operation
          ? truepush.addTags(t.data, t.callback)
          : "remove-tags" == t.operation
          ? truepush.removeTags(t.data, t.callback)
          : "get-tags" == t.operation && truepush.getTags(t.callback);
      }
    }),
      (this.GetSubscriberId = function (t) {
        if (g && !g.websiteSSL)
          return (
            (subscriberIdCallback = t),
            void iFrameReference.postMessage({ type: "getSubscriberId" }, "*")
          );
        if ("granted" != Notification.permission)
          return t("Permission not granted", null);
        if (!G()) return t("Script not yet initialized", null);
        var o = localStorage.getItem("subscriberId");
        if (o) return t(null, o);
        Y(function (o) {
          o || t("subscription not found", null);
          var e = host + "api/v1/getSubscriberId",
            i = { userPlatformId: g._id, subscription: o };
          HTTP.post(e, i, R, function (o, e) {
            return o
              ? t("Unable to serve subscriberId", null)
              : "ERROR" == e.status
              ? t(i.message, null)
              : e && e.data
              ? (localStorage.setItem("subscriberId", e.data), t(null, e.data))
              : t("Unable to serve subscriberId", null);
          });
        });
      });
    var Y = function (t) {
        if ("granted" != Notification.permission) return t(null);
        if (subscription) return t(subscription);
        if (fromIframe) {
          var o = localStorage.getItem("subscription");
          if (o)
            try {
              return "object" == typeof o && (o = i(JSON.parse(o))), t(o);
            } catch (o) {
              return t(null);
            }
          return t(null);
        }
        if (
          browserData &&
          browserData.browser &&
          "Safari" === browserData.browser.name
        ) {
          try {
            var e = window.safari.pushNotification.permission(f);
          } catch (t) {
            console.log("window.safari.pushNotification.permission ", t);
          }
          return e.deviceToken ? t(e.deviceToken) : t(null);
        }
        navigator.serviceWorker.ready
          .then(function (o) {
            o.pushManager
              .getSubscription()
              .then(function (o) {
                return t(i(o));
              })
              .catch(function (o) {
                return t(null);
              });
          })
          .catch(function (o) {
            return t(null);
          });
      },
      K = host + "api/v1/";
    (this.getTags = function (t) {
      Z(function (o) {
        if (o)
          return "INIT-ERROR" === o.statusCode
            ? void (x = { callback: t })
            : t(o, null);
        nt("get");
        var e = K + "getTags",
          i = { userPlatformId: g._id };
        Y(function (o) {
          if (!o)
            return t(
              {
                message: "Notification permission not granted.",
                status: "ERROR",
                statusCode: "SUBSCRIPTION-ERROR",
              },
              null
            );
          (i.subscription = o),
            HTTP.post(e, i, R, function (o, e) {
              return o
                ? t(
                    {
                      message: "Something went wrong. Please try again.",
                      status: "ERROR",
                      statusCode: "INS-ERROR",
                    },
                    null
                  )
                : "ERROR" == e.status
                ? t(e, null)
                : t(null, e);
            });
        });
      });
    }),
      (this.removeTags = function (t, o) {
        Z(function (e) {
          if (e)
            return "INIT-ERROR" === e.statusCode
              ? void (h = { tags: t, callback: o })
              : "SUBSCRIPTION-ERROR" == e.statusCode
              ? void tt(t)
              : o(e, null);
          ot(t), nt("remove");
          var i = K + "removeTags";
          if (!t || !t.length)
            return o(
              {
                message: "Tags shouldn't be empty.",
                status: "ERROR",
                statusCode: "VALIDATION-ERROR",
              },
              null
            );
          var n = { userPlatformId: g._id, tags: t };
          Y(function (t) {
            if (!t)
              return o(
                {
                  message: "Notification permission not granted.",
                  status: "ERROR",
                  statusCode: "SUBSCRIPTION-ERROR",
                },
                null
              );
            (n.subscription = t),
              HTTP.post(i, n, R, function (t, e) {
                return t
                  ? o(
                      {
                        message: "Something went wrong. Please try again.",
                        status: "ERROR",
                        statusCode: "INS-ERROR",
                      },
                      null
                    )
                  : "ERROR" == e.status
                  ? o(e, null)
                  : o(null, e);
              });
          });
        });
      }),
      (this.addTags = function (t, o) {
        Z(function (e) {
          if (e)
            return "INIT-ERROR" === e.statusCode
              ? void (b = { tags: t, callback: o })
              : "SUBSCRIPTION-ERROR" == e.statusCode
              ? void $(t)
              : o(e, null);
          var i = K + "addTags";
          if (!t || !t.length)
            return o(
              {
                message: "Tags shouldn't be empty.",
                status: "ERROR",
                statusCode: "VALIDATION-ERROR",
              },
              null
            );
          var n = Q(t);
          if ((nt("add"), 0 === n.length))
            return o(null, {
              message: "Tags added successfully.",
              status: "SUCCESS",
              status_code: "SUCCESS",
            });
          var a = { userPlatformId: g._id, tags: n };
          Y(function (e) {
            if (!e)
              return o(
                {
                  message: "Notification permission not granted.",
                  status: "ERROR",
                  statusCode: "SUBSCRIPTION-ERROR",
                },
                null
              );
            (a.subscription = e),
              HTTP.post(i, a, R, function (e, i) {
                return e
                  ? o(
                      {
                        message: "Something went wrong. Please try again.",
                        status: "ERROR",
                        statusCode: "INS-ERROR",
                      },
                      null
                    )
                  : "ERROR" == i.status
                  ? o(i)
                  : (localStorage.setItem("tags", JSON.stringify({ tags: t })),
                    o(null, i));
              });
          });
        });
      });
    var Z = function (t) {
        var o = {
          message: "Notification permission not granted.",
          status: "ERROR",
          statusCode: "SUBSCRIPTION-ERROR",
        };
        return S
          ? "allowed_cookies_personal_data" != m.userConsent
            ? ((o.message = "consent denied"),
              (o.statusCode = "CONSENT-DENIED"),
              t(o))
            : g
            ? g.websiteSSL
              ? "granted" != Notification.permission
                ? t(o)
                : t(null)
              : ((o.message =
                  "Tags support for http websites is not available yet."),
                (o.statusCode = "HTTP-ERROR"),
                t(o))
            : ((o.message = "platformdetails are not ready"),
              (o.statusCode = "INIT-ERROR"),
              t(o))
          : ((o.message = "truepush sdk is not initialized"),
            (o.statusCode = "INIT-ERROR"),
            t(o));
      },  
      G = function () {
        return !!S && !!g;
      },
      Q = function (t) {
        var o = localStorage.getItem("tags");
        if (!o) return t;
        try {
          o = (o = JSON.parse(o)).tags;
          for (var e = [], i = 0; i < t.length; i++) {
            var n = o.findIndex(function (o) {
              return (
                o.tagName === t[i].tagName &&
                o.tagValue === t[i].tagValue &&
                o.tagType === t[i].tagType
              );
            });
            -1 == n && e.push(t[i]);
          }
          return e;
        } catch (o) {
          return localStorage.removeItem("tags"), t;
        }
      };

    const $ = function (t) {
        t = JSON.parse(JSON.stringify(t));
        let o = localStorage.getItem("unsavedTags");
        if (o)
          try {
            o = JSON.parse(o);
          } catch (t) {
            console.error(t), (o = []);
          }
        else o = [];
        for (let e of o) {
          let o = t.findIndex(
            (t) =>
              t.tagName == e.tagName &&
              t.tagType == e.tagType &&
              t.tagValue == e.tagValue
          );
          o >= 0 && t.splice(o, 1);
        }
        (t = o.concat(t)),
          localStorage.setItem("unsavedTags", JSON.stringify(t));
      },
      tt = function (t) {
        t = JSON.parse(JSON.stringify(t));
        let o = localStorage.getItem("unsavedTags");
        if (o)
          try {
            o = JSON.parse(o);
          } catch (t) {
            console.error(t), (o = []);
          }
        else o = [];
        for (let e of t) {
          let t = o.findIndex(
            (t) =>
              t.tagName == e.tagName &&
              t.tagType == e.tagType &&
              t.tagValue == e.tagValue
          );
          t >= 0 && o.splice(t, 1);
        }
        o.length > 0
          ? localStorage.setItem("unsavedTags", JSON.stringify(o))
          : localStorage.removeItem("unsavedTags");
      };
    var ot = function (t) {
      var o = localStorage.getItem("tags");
      if (o)
        try {
          o = (o = JSON.parse(o)).tags;
          for (var e = [], i = 0; i < o.length; i++) {
            var n = t.findIndex(function (t) {
              return t.tagName === o[i].tagName && t.tagValue === o[i].tagValue;
            });
            -1 == n && e.push(o[i]);
          }
          return (
            e.length != o.length &&
              e.length > 0 &&
              localStorage.setItem("tags", JSON.stringify({ tags: e })),
            void (0 == e.length && localStorage.removeItem("tags"))
          );
        } catch (o) {
          return localStorage.removeItem("tags"), t;
        }
    };
    this.GetPlatformDetails1 = function () {
      return "Testing string";
    };
    var et = function () {
      b && truepush.addTags(b.tags, b.callback),
        h && truepush.removeTags(h.tags, h.callback),
        x && truepush.getTags(x.callback);
    };
    const it = function () {
      let t = localStorage.getItem("unsavedTags");
      if (t)
        try {
          t = JSON.parse(t);
        } catch (o) {
          console.error(o), (t = []);
        }
      else t = [];
      t.length > 0 &&
        truepush.addTags(t, function (t, o) {
          console.log(t, o), t || localStorage.removeItem("unsavedTags");
        });
    };
    var nt = function (t) {
      "get" === t && (x = null),
        "add" === t && (b = null),
        "remove" === t && (h = null);
    };
    "permissions" in navigator &&
      navigator.permissions.query({ name: "notifications" }).then(function (t) {
        t.onchange = function () {
          "prompt" == t.state &&
            (localStorage.setItem("permission", "default"),
            localStorage.removeItem("subscriberId"),
            localStorage.removeItem("subscription"),
            localStorage.removeItem("tags")),
            "denied" == t.state && localStorage.setItem("permission", "denied");
        };
      });
  };
}