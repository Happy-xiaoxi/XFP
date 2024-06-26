import {fetchGumResponseAndStoreItInLocalStorage} from './fetchGumResponseAndStoreItInLocalStorage.js';
import {parseJSON} from './parseJSON.js';
import {getTld} from './getTld.js';
import {canWriteCookies} from './canWriteCookies.js';
import {canWriteLocalStorage} from './canWriteLocalStorage.js';
import {canWrite} from './canWrite.js';
import {createGumRequest} from './createGumRequest.js';
import {extractHostname} from './extractHostname.js';
import {getHighestAccessibleUrl} from './getHighestAccessibleUrl.js';
import {getHighestAccessibleWindow} from './getHighestAccessibleWindow.js';
import {callClientCallback} from './callClientCallback.js';
import {callClientCallbackFromLocalStorageOrDefault} from './callClientCallbackFromLocalStorageOrDefault.js';
import {init} from './init.js';
import {logCounter} from './logCounter.js';
import {logElapsedTime} from './logElapsedTime.js';
import {logError} from './logError.js';
import {sendMetrics} from './sendMetrics.js';
import {getCookie} from './getCookie.js';
import {setCookieOnMainDomain} from './setCookieOnMainDomain.js';
import {deleteCookie} from './deleteCookie.js';
import {hasCookieStorage} from './hasCookieStorage.js';
import {__extends} from './__extends.js';
import {__awaiter} from './__awaiter.js';
import {__generator} from './__generator.js';

  window.GUM_DOMAIN = "gum.criteo.com";
  window.CONFIG_CSM_DOMAIN_NAME = "csm.jp2.as.criteo.net";
  window.CALLER_ID = "72";
  window.CONFIG_JS_CALLBACK = TRC.getRTUS;
  window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS = 0;
  var extendStatics = function (e, t) {
    return (extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(e, t);
  };

  var PUBLIC_TOP_TLDS = [
    "co.id",
    "co.il",
    "co.jp",
    "co.kr",
    "co.nz",
    "co.th",
    "co.uk",
    "com.au",
    "com.br",
    "com.mx",
    "com.my",
    "com.pl",
    "com.sg",
    "com.tr",
    "com.vn",
  ];

  var TCFCompatibleConsentProvider = (function () {
    function e(e, t, n) {
      void 0 === n && (n = function (e) {}),
        (this.tcfv1ConsentProvider = e),
        (this.tcfv2ConsentProvider = t),
        (this.logger = n);
    }
    return (
      (e.prototype.getReadyToRetrieveProvider = function () {
        return this.tcfv2ConsentProvider.hasCallerFunctionInFrame()
          ? this.tcfv2ConsentProvider
          : this.tcfv1ConsentProvider.hasCallerFunctionInFrame()
          ? this.tcfv1ConsentProvider
          : void 0 !== this.tcfv2ConsentProvider.getCMPFrame()
          ? this.tcfv2ConsentProvider
          : void 0 !== this.tcfv1ConsentProvider.getCMPFrame()
          ? this.tcfv1ConsentProvider
          : void 0;
      }),
      (e.prototype.retrieveConsentForPassback = function (e) {
        var t = this.getReadyToRetrieveProvider();
        void 0 === t &&
          (this.logger("No compatible GDPR privacy provider found"), e(void 0)),
          t === this.tcfv1ConsentProvider
            ? this.tcfv1ConsentProvider.retrieveConsentForPassback(e)
            : t === this.tcfv2ConsentProvider &&
              this.tcfv2ConsentProvider.retrieveConsent(e);
      }),
      (e.prototype.retrieveConsent = function (e) {
        var t = this.getReadyToRetrieveProvider();
        void 0 === t &&
          (this.logger("No compatible GDPR privacy provider found"), e(void 0)),
          null == t || t.retrieveConsent(e);
      }),
      (e.prototype.readyToRetrieve = function () {
        return (
          this.tcfv2ConsentProvider.readyToRetrieve() ||
          this.tcfv1ConsentProvider.readyToRetrieve()
        );
      }),
      e
    );
  })();
  function tryParseJson(e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return;
    }
  }
  var TCDataEventStatus,
    CRITEO_VENDOR_ID = 91,
    TCFv1ConsentProvider = (function () {
      function e(e, t, n) {
        void 0 === n && (n = function (e) {}),
          (this.cmpCallbacks = {}),
          (this.currentWindow = e),
          (this.timeout = t.tcfTimeout),
          (this.pingTimeout = t.tcfPingTimeout),
          (this.pingDelay = t.tcfPingDelay),
          (this.cmpAutoDetect = t.cmpAutoDetect),
          (this.logger = n);
      }
      return (
        (e.prototype.getCMPFrame = function () {
          for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
              t.frames.__cmpLocator && (e = t);
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent;
          }
          return e;
        }),
        (e.prototype.hasCallerFunctionInFrame = function () {
          return "function" == typeof this.currentWindow.__cmp;
        }),
        (e.prototype.readyToRetrieve = function () {
          return (
            this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
          );
        }),
        (e.prototype.pingWithTimeout = function (o, e, t, n) {
          function r(e, t) {
            i.logger(t), clearTimeout(e), n();
          }
          var i = this;
          return window.setTimeout(function () {
            var n = window.setTimeout(function () {
              r(o, "Timeout: Unable to get ping return after " + e + "ms");
            }, e);
            i.executeCommand("ping", null, function (e, t) {
              clearTimeout(n),
                t
                  ? (i.logger("GDPR CMP ping returned"),
                    !0 !== e.cmpLoaded &&
                      r(o, "GDPR ping returned cmpLoaded which is not true"),
                    i.logger("GDPR ping returned cmpLoaded which is true"))
                  : r(o, "Error sending ping to GDPR CMP");
            });
          }, t);
        }),
        (e.prototype.retrieveConsent = function (e) {
          this.executeRetrieveConsent("getConsentData", null, e);
        }),
        (e.prototype.retrieveConsentForPassback = function (e) {
          this.executeRetrieveConsent(
            "getVendorConsents",
            [CRITEO_VENDOR_ID],
            e
          );
        }),
        (e.prototype.executeRetrieveConsent = function (e, t, n) {
          var o = this,
            r = !1,
            i = window.setTimeout(function () {
              (r = !0),
                o.logger(
                  "Timeout: Unable to resolve GDPR consent after " +
                    o.timeout +
                    "ms"
                ),
                n(void 0);
            }, this.timeout),
            a =
              !1 !== this.cmpAutoDetect
                ? this.pingWithTimeout(
                    i,
                    this.pingTimeout,
                    this.pingDelay,
                    function () {
                      (r = !0),
                        o.logger(
                          "Timeout: Unable to ping GDPR API after " +
                            o.pingTimeout +
                            "ms"
                        ),
                        n(void 0);
                    }
                  )
                : void 0;
          this.executeCommand(e, t, function (e, t) {
            clearTimeout(a),
              r ||
                (clearTimeout(i),
                t
                  ? (o.logger("GDPR consent retrieved"),
                    o.processConsentData(e, n))
                  : (o.logger("Error retrieving GDPR consent data from CMP"),
                    n(void 0)));
          });
        }),
        (e.prototype.processConsentData = function (e, t) {
          if (e) {
            var n = {};
            void 0 !== e.consentData && (n.consentData = e.consentData),
              void 0 !== e.gdprApplies && (n.gdprApplies = !!e.gdprApplies),
              t(n);
          } else
            this.logger("Unable to read GDPR consent data from CMP"), t(void 0);
        }),
        (e.prototype.executeCommand = function (e, t, n) {
          var i = this;
          if (!this.hasCallerFunctionInFrame()) {
            this.logger("No GDPR CMP defined on current frame");
            var a = this.getCMPFrame();
            (this.currentWindow.__cmp = function (e, t, n) {
              if (!a)
                return (
                  i.logger("GDPR CMP not found in any frame"),
                  void n({ msg: "GDPR CMP not found in any frame" }, !1)
                );
              var o = Math.random().toString(10),
                r = { __cmpCall: { command: e, parameter: t, callId: o } };
              (i.cmpCallbacks[o] = n), a.postMessage(r, "*");
            }),
              this.currentWindow.addEventListener(
                "message",
                function (e) {
                  var t =
                    "string" == typeof e.data ? tryParseJson(e.data) : e.data;
                  if (
                    t &&
                    t.__cmpReturn &&
                    t.__cmpReturn.callId &&
                    t.__cmpReturn.returnValue
                  ) {
                    var n = t.__cmpReturn;
                    i.cmpCallbacks &&
                      i.cmpCallbacks[n.callId] &&
                      (i.cmpCallbacks[n.callId](n.returnValue, n.success),
                      delete i.cmpCallbacks[n.callId]);
                  }
                },
                !1
              );
          }
          this.currentWindow.__cmp(e, t, n);
        }),
        e
      );
    })(),
    TCF_V2_VERSION = 2;
  !(function (e) {
    (e.LOADED = "tcloaded"),
      (e.UI_SHOWN = "cmpuishown"),
      (e.USER_ACTION_COMPLETE = "useractioncomplete");
  })((TCDataEventStatus = TCDataEventStatus || {}));
  var StorageOrigin,
    PrivateModeStatus,
    TCFv2ConsentProvider = (function () {
      function e(e, t, n) {
        void 0 === n && (n = function (e) {}),
          (this.cmpCallbacks = {}),
          (this.currentWindow = e),
          (this.timeout = t.tcfTimeout),
          (this.pingTimeout = t.tcfPingTimeout),
          (this.pingDelay = t.tcfPingDelay),
          (this.cmpAutoDetect = t.cmpAutoDetect),
          (this.logger = n);
      }
      return (
        (e.prototype.getCMPFrame = function () {
          for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
              t.frames.__tcfapiLocator && (e = t);
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent;
          }
          return e;
        }),
        (e.prototype.hasCallerFunctionInFrame = function () {
          return "function" == typeof this.currentWindow.__tcfapi;
        }),
        (e.prototype.readyToRetrieve = function () {
          return (
            this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
          );
        }),
        (e.prototype.pingWithTimeout = function (n, e, t, o) {
          function r(e, t) {
            i.logger(t), clearTimeout(e), o();
          }
          var i = this;
          return window.setTimeout(function () {
            var t = window.setTimeout(function () {
              r(
                n,
                "Timeout: Unable to get TCFv2 ping return after " + e + "ms"
              );
            }, e);
            i.executeCommand("ping", TCF_V2_VERSION, function (e) {
              clearTimeout(t),
                i.logger("TCFv2 CMP ping returned in ms"),
                "error" === e.cmpStatus
                  ? r(n, "Error status on ping to TCFv2 CMP")
                  : !0 !== e.cmpLoaded
                  ? r(n, "TCFv2 ping returned cmpLoaded = false")
                  : i.logger("TCFv2 ping returned cmpLoaded = true");
            });
          }, t);
        }),
        (e.prototype.retrieveConsent = function (n) {
          var o,
            r,
            i = this,
            a = !1,
            s = window.setTimeout(function () {
              (a = !0),
                r === TCDataEventStatus.UI_SHOWN
                  ? (i.logger(
                      "Timeout: User hasn't confirm their consent settings after " +
                        i.timeout +
                        "ms"
                    ),
                    n(o))
                  : (i.logger(
                      "Timeout: Unable to resolve TCFv2 consent after " +
                        i.timeout +
                        "ms"
                    ),
                    n(void 0));
            }, this.timeout),
            u =
              !1 !== this.cmpAutoDetect
                ? this.pingWithTimeout(
                    s,
                    this.pingTimeout,
                    this.pingDelay,
                    function () {
                      (a = !0),
                        i.logger(
                          "Timeout: Unable to ping TCFv2 API after " +
                            i.pingTimeout +
                            "ms"
                        ),
                        n(void 0);
                    }
                  )
                : void 0;
          this.executeCommand(
            "addEventListener",
            TCF_V2_VERSION,
            function (e, t) {
              clearTimeout(u),
                a ||
                  ((r = e.eventStatus) !== TCDataEventStatus.UI_SHOWN &&
                    clearTimeout(s),
                  t
                    ? (i.logger("TCFv2 consent retrieved in ms"),
                      e ||
                        (i.logger("Unable to read GDPR consent data from CMP"),
                        n(void 0)),
                      (o = i.processResponseData(e)),
                      (r !== TCDataEventStatus.LOADED &&
                        r !== TCDataEventStatus.USER_ACTION_COMPLETE) ||
                        n(o))
                    : (i.logger("Error retrieving TCFv2 consent data from CMP"),
                      n(void 0)));
            }
          );
        }),
        (e.prototype.processResponseData = function (e) {
          var t,
            n,
            o = {};
          return (
            void 0 !== e.tcString && (o.consentData = e.tcString),
            void 0 !== e.gdprApplies && (o.gdprApplies = !!e.gdprApplies),
            (o.version = e.tcfPolicyVersion
              ? e.tcfPolicyVersion
              : TCF_V2_VERSION),
            (o.purposes =
              null === (t = null == e ? void 0 : e.purpose) || void 0 === t
                ? void 0
                : t.consents),
            (o.vendorConsents =
              null === (n = null == e ? void 0 : e.vendor) || void 0 === n
                ? void 0
                : n.consents),
            o
          );
        }),
        (e.prototype.executeCommand = function (e, t, n, o) {
          var a = this;
          if (!this.hasCallerFunctionInFrame()) {
            this.logger("No TCFv2 CMP defined on current frame");
            var s = this.getCMPFrame();
            (this.currentWindow.__tcfapi = function (e, t, n, o) {
              if (!s)
                return (
                  a.logger("TCFv2 CMP not found in any frame"),
                  void n({ msg: "TCFv2 CMP not found in any frame" }, !1)
                );
              var r = Math.random().toString(10),
                i = {
                  __tcfapiCall: {
                    command: e,
                    version: t,
                    parameter: o,
                    callId: r,
                  },
                };
              (a.cmpCallbacks[r] = n), s.postMessage(i, "*");
            }),
              this.currentWindow.addEventListener(
                "message",
                function (e) {
                  var t =
                    "string" == typeof e.data ? tryParseJson(e.data) : e.data;
                  if (
                    t &&
                    t.__tcfapiReturn &&
                    t.__tcfapiReturn.callId &&
                    t.__tcfapiReturn.returnValue
                  ) {
                    var n = t.__tcfapiReturn;
                    a.cmpCallbacks &&
                      a.cmpCallbacks[n.callId] &&
                      "function" == typeof a.cmpCallbacks[n.callId] &&
                      (a.cmpCallbacks[n.callId](n.returnValue, n.success),
                      n.returnValue.eventStatus !==
                        TCDataEventStatus.UI_SHOWN &&
                        delete a.cmpCallbacks[n.callId]);
                  }
                },
                !1
              );
          }
          this.currentWindow.__tcfapi(e, t, n, o);
        }),
        e
      );
    })(),
    USPAPI_VERSION = 1,
    CCPAConsentProvider = (function () {
      function e(e, t, n) {
        void 0 === n && (n = function (e) {}),
          (this.uspapiCallbacks = {}),
          (this.currentWindow = e),
          (this.timeout = t.uspApiTimeout),
          (this.logger = n);
      }
      return (
        (e.prototype.getCMPFrame = function () {
          for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
              t.frames.__uspapiLocator && (e = t);
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent;
          }
          return e;
        }),
        (e.prototype.hasCallerFunctionInWindow = function () {
          return "function" == typeof this.currentWindow.__uspapi;
        }),
        (e.prototype.readyToRetrieve = function () {
          return (
            this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame()
          );
        }),
        (e.prototype.retrieveConsent = function (n) {
          var o = this,
            r = !1,
            i = window.setTimeout(function () {
              (r = !0),
                o.logger(
                  "Timeout: Unable to resolve CCPA consent after " +
                    o.timeout +
                    "ms"
                ),
                n(void 0);
            }, this.timeout);
          this.executeCommand("getUSPData", USPAPI_VERSION, function (e, t) {
            r ||
              (clearTimeout(i),
              t
                ? (o.logger("CCPA consent retrieved"),
                  o.processResponseData(e, n))
                : (o.logger("Error retrieving CCPA consent data from CMP"),
                  n(void 0)));
          });
        }),
        (e.prototype.processResponseData = function (e, t) {
          e
            ? t(e)
            : (this.logger("Unable to read CCPA consent data from CMP"),
              t(void 0));
        }),
        (e.prototype.executeCommand = function (e, t, n) {
          var i = this;
          if (!this.hasCallerFunctionInWindow()) {
            this.logger("No CCPA CMP defined on current frame");
            var a = this.getCMPFrame();
            (this.currentWindow.__uspapi = function (e, t, n) {
              if (!a)
                return (
                  i.logger("CCPA CMP not found in any frame"),
                  void n({ msg: "CCPA CMP not found in any frame" }, !1)
                );
              var o = Math.random().toString(10),
                r = { __uspapiCall: { command: e, parameter: t, callId: o } };
              (i.uspapiCallbacks[o] = n), a.postMessage(r, "*");
            }),
              this.currentWindow.addEventListener(
                "message",
                function (e) {
                  var t =
                    "string" == typeof e.data ? tryParseJson(e.data) : e.data;
                  if (
                    t &&
                    t.__uspapiReturn &&
                    t.__uspapiReturn.callId &&
                    t.__uspapiReturn.returnValue
                  ) {
                    var n = t.__uspapiReturn;
                    i.uspapiCallbacks &&
                      i.uspapiCallbacks[n.callId] &&
                      (i.uspapiCallbacks[n.callId](n.returnValue, n.success),
                      delete i.uspapiCallbacks[n.callId]);
                  }
                },
                !1
              );
          }
          this.currentWindow.__uspapi(e, t, n);
        }),
        (e.prototype.hasUserOptOut = function (e) {
          return !(
            !e ||
            !e.uspString ||
            "1YNY" === e.uspString.toUpperCase() ||
            "1YNN" === e.uspString.toUpperCase() ||
            "1YN-" === e.uspString.toUpperCase() ||
            "1-N-" === e.uspString.toUpperCase() ||
            "1---" === e.uspString
          );
        }),
        e
      );
    })(),
    GPP_VERSION_10 = "1.0",
    GPP_VERSION_11 = "1.1",
    GPPConsentProvider = (function () {
      function e(e, t, n) {
        void 0 === n && (n = function (e) {}),
          (this.cmpCallbacks = {}),
          (this.currentWindow = e),
          (this.timeout = t.gppTimeout),
          (this.pingTimeout = t.gppPingTimeout),
          (this.pingDelay = t.gppPingDelay),
          (this.logger = n);
      }
      return (
        (e.prototype.getCMPFrame = function () {
          for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
              void 0 !== t && t.frames.__gppLocator && (e = t);
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent;
          }
          return e;
        }),
        (e.prototype.hasCallerFunctionInFrame = function () {
          return "function" == typeof this.currentWindow.__gpp;
        }),
        (e.prototype.readyToRetrieve = function () {
          return (
            this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
          );
        }),
        (e.prototype.retrieveConsent = function (n) {
          function o(e, t) {
            r.logger(t),
              clearTimeout(e),
              (i = !0),
              r.logger(
                "Timeout: Unable to ping GPP after " + r.pingTimeout + "ms"
              ),
              n(void 0);
          }
          var r = this,
            i = !1,
            a = window.setTimeout(function () {
              (i = !0),
                r.logger(
                  "Timeout: Unable to resolve GPP consent after " +
                    r.timeout +
                    "ms"
                ),
                n(void 0);
            }, this.timeout);
          window.setTimeout(function () {
            var t = window.setTimeout(function () {
              o(
                a,
                "Timeout: Unable to get GPP ping return after " +
                  r.pingTimeout +
                  "ms"
              );
            }, r.pingTimeout);
            r.executeCommand("ping", function (e) {
              clearTimeout(t),
                r.logger("GPP CMP ping has responsed"),
                e.gppVersion === GPP_VERSION_10
                  ? (r.logger("Detected GPP CMP 1.0"),
                    "error" === e.cmpStatus
                      ? o(a, "Error status on ping to GPP CMP")
                      : "loaded" === e.cmpStatus
                      ? (r.logger("GPP ping returned cmpStatus = loaded"),
                        r.executeCommand("getGPPData", function (e, t) {
                          i ||
                            (clearTimeout(a),
                            t
                              ? (r.logger("GPP consent retrieved"),
                                r.processResponseData(e, n))
                              : (r.logger(
                                  "Error retrieving GPP consent data from CMP"
                                ),
                                n(void 0)));
                        }))
                      : o(a, "GPP ping returned cmpStatus != loaded"))
                  : e.gppVersion === GPP_VERSION_11
                  ? (r.logger("Detected GPP CMP 1.1"),
                    "ready" === e.signalStatus
                      ? (clearTimeout(a),
                        r.logger("GPP consent retrieved"),
                        r.processResponseData(e, n))
                      : r.executeCommand("addEventListener", function (e, t) {
                          i ||
                            ("signalStatus" === e.eventName &&
                              "ready" === e.pingData.signalStatus &&
                              (clearTimeout(a),
                              r.logger("GPP consent retrieved"),
                              r.processResponseData(e.pingData, n)));
                        }))
                  : o(a, "Unknown GPP version " + e.gppVersion);
            });
          }, this.pingDelay);
        }),
        (e.prototype.processResponseData = function (e, t) {
          if (e) {
            var n = {};
            void 0 !== e.gppString && (n.gpp = e.gppString),
              void 0 !== e.applicableSections &&
                (n.gppSid = e.applicableSections),
              t(n);
          } else
            this.logger("Unable to read GPP consent data from CMP"), t(void 0);
        }),
        (e.prototype.executeCommand = function (e, t, n) {
          var i = this;
          if (!this.hasCallerFunctionInFrame()) {
            this.logger("No GPP CMP defined on current frame");
            var a = this.getCMPFrame();
            (this.currentWindow.__gpp = function (e, t, n) {
              if (!a)
                return (
                  i.logger("GPP CMP not found in any frame"),
                  void t({ msg: "GPP CMP not found in any frame" }, !1)
                );
              var o = Math.random().toString(10),
                r = { __gppCall: { command: e, parameter: n, callId: o } };
              (i.cmpCallbacks[o] = t), a.postMessage(r, "*");
            }),
              this.currentWindow.addEventListener(
                "message",
                function (e) {
                  var t =
                    "string" == typeof e.data ? tryParseJson(e.data) : e.data;
                  if (
                    t &&
                    t.__gppReturn &&
                    t.__gppReturn.callId &&
                    t.__gppReturn.returnValue
                  ) {
                    var n = t.__gppReturn;
                    i.cmpCallbacks &&
                      i.cmpCallbacks[n.callId] &&
                      "function" == typeof i.cmpCallbacks[n.callId] &&
                      (i.cmpCallbacks[n.callId](n.returnValue, n.success),
                      delete i.cmpCallbacks[n.callId]);
                  }
                },
                !1
              );
          }
          this.currentWindow.__gpp(e, t, n);
        }),
        e
      );
    })(),
    ConsentManager = (function () {
      function e(e, t, n, o, r, i, a, s) {
        void 0 === t && (t = 1e4),
          void 0 === n && (n = 50),
          void 0 === o && (o = 1e3),
          void 0 === r && (r = 50),
          void 0 === i && (i = 1e4),
          void 0 === a && (a = 50),
          void 0 === s && (s = 1e3);
        var u = {
            tcfTimeout: t,
            tcfPingTimeout: n,
            tcfPingDelay: o,
            uspApiTimeout: r,
            gppTimeout: i,
            gppPingTimeout: a,
            gppPingDelay: s,
          },
          c = { uspApiTimeout: t },
          l = new TCFv1ConsentProvider(e, u),
          d = new TCFv2ConsentProvider(e, u);
        (this.tcfPrivacyProvider = new TCFCompatibleConsentProvider(l, d)),
          (this.ccpaConsentProvider = new CCPAConsentProvider(e, c)),
          (this.gppConsentProvider = new GPPConsentProvider(e, u));
      }
      return (
        (e.prototype.retrieveConsentGDPR = function () {
          return e.retrieveConsent(this.tcfPrivacyProvider)();
        }),
        (e.prototype.retrieveConsentCCPA = function () {
          return e.retrieveConsent(this.ccpaConsentProvider)();
        }),
        (e.prototype.retrieveConsentGPP = function () {
          return e.retrieveConsent(this.gppConsentProvider)();
        }),
        (e.retrieveConsent = function (n) {
          return function () {
            return new Promise(function (e, t) {
              n.readyToRetrieve() ? n.retrieveConsent(e) : e(void 0);
            });
          };
        }),
        e
      );
    })();

  !(function (e) {
    (e[(e.None = 0)] = "None"),
      (e[(e.Cookie = 1)] = "Cookie"),
      (e[(e.LocalStorage = 2)] = "LocalStorage"),
      (e[(e.Delegation = 4)] = "Delegation");
  })((StorageOrigin = StorageOrigin || {})),
    (function (e) {
      (e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.Deactivated = 1)] = "Deactivated"),
        (e[(e.Activated = 2)] = "Activated");
    })((PrivateModeStatus = PrivateModeStatus || {}));
  var _a,
    _b,
    rtusHandleTimeoutId,
    rtusInitTime,
    AllUserData = (function () {
      function e(e) {
        this.userDataHandlers = e;
      }
      return (
        (e.prototype.getSid = function () {
          return this.userDataHandlers.sid().fromAllStorages();
        }),
        (e.prototype.getIdCpy = function () {
          return this.userDataHandlers.idCpy().fromAllStorages();
        }),
        (e.prototype.getLocalWebId = function () {
          return this.userDataHandlers.localWebId().fromAllStorages();
        }),
        (e.prototype.getOptOut = function () {
          return this.userDataHandlers.optOut().fromAllStorages();
        }),
        (e.prototype.getBundle = function () {
          return this.userDataHandlers.bundle().fromAllStorages();
        }),
        e
      );
    })(),
    UserData = (function () {
      function t(e, t) {
        (this.value = e), (this.origin = t);
      }
      return (
        (t.fromUserIdentificationData = function (e) {
          return new t(e.value, e.origin);
        }),
        (t.fromValue = function (e) {
          return new t(e, StorageOrigin.None);
        }),
        (t.prototype.hasValue = function () {
          return (
            "" !== String(this.value) &&
            null !== this.value &&
            void 0 !== this.value
          );
        }),
        t
      );
    })(),
    StorableUserData = (function (a) {
      function e(e, t, n, o, r) {
        var i = a.call(this, n, o) || this;
        return (
          (i.storageKey = e),
          (i.expirationTimeHours = t),
          (i.storageAdapter = r),
          i
        );
      }
      return (
        __extends(e, a),
        (e.prototype.hasValue = function () {
          return (
            "" !== String(this.value) &&
            null !== this.value &&
            void 0 !== this.value
          );
        }),
        (e.prototype.saveOnAllStorages = function () {
          if (this.hasValue()) {
            var e =
              "boolean" == typeof this.value
                ? this.value
                  ? "1"
                  : "0"
                : String(this.value);
            this.storageAdapter.writeToAllStorages(
              this.storageKey,
              e,
              this.expirationTimeHours
            );
          }
        }),
        (e.prototype.toJSON = function () {
          return { value: this.value, origin: this.origin };
        }),
        e
      );
    })(UserData),
    StorableUserDataHandlers = (function () {
      function t(e) {
        this.storageAdapter = e;
      }
      return (
        (t.prototype.sid = function () {
          return this.createGuid(t.SID_COOKIE_NAME);
        }),
        (t.prototype.idCpy = function () {
          return this.createGuid(t.IDCPY_COOKIE_NAME);
        }),
        (t.prototype.localWebId = function () {
          return this.createGuid(t.LWID_COOKIE_NAME);
        }),
        (t.prototype.optOut = function () {
          return new StorableUserDataHandler(
            Boolean,
            t.OPTOUT_COOKIE_NAME,
            t.OPTOUT_RETENTION_TIME_HOUR,
            this.storageAdapter
          );
        }),
        (t.prototype.bundle = function () {
          return this.createGuid(t.BUNDLE_COOKIE_NAME);
        }),
        (t.prototype.createGuid = function (e) {
          return new StorableUserDataHandler(
            String,
            e,
            t.GUID_RETENTION_TIME_HOUR,
            this.storageAdapter
          );
        }),
        (t.SID_COOKIE_NAME = "cto_sid"),
        (t.IDCPY_COOKIE_NAME = "cto_idcpy"),
        (t.LWID_COOKIE_NAME = "cto_lwid"),
        (t.OPTOUT_COOKIE_NAME = "cto_optout"),
        (t.BUNDLE_COOKIE_NAME = "cto_bundle"),
        (t.GUID_RETENTION_TIME_HOUR = 9360),
        (t.OPTOUT_RETENTION_TIME_HOUR = 43200),
        t
      );
    })(),
    StorableUserDataHandler = (function () {
      function e(e, t, n, o) {
        (this.type = e),
          (this.storageKey = t),
          (this.expirationTimeHours = n),
          (this.storageAdapter = o);
      }
      return (
        (e.prototype.fromAllStorages = function () {
          var e = this.storageAdapter.readFromAllStorages(this.storageKey),
            t =
              "boolean" == typeof new this.type().valueOf()
                ? "1" === e.value
                : e.value;
          return this.create(t, e.origin);
        }),
        (e.prototype.fromValue = function (e) {
          return this.create(e, StorageOrigin.None);
        }),
        (e.prototype.removeFromAllStorages = function () {
          this.storageAdapter.removeFromAllStorages(this.storageKey);
        }),
        (e.prototype.create = function (e, t) {
          return new StorableUserData(
            this.storageKey,
            this.expirationTimeHours,
            e,
            t,
            this.storageAdapter
          );
        }),
        e
      );
    })(),
    Syncframe = (function () {
      function e(e, t, n) {
        (this.criteoGlobalVendorListId = 91),
          (this.window = e),
          (this.document = e.document),
          (this.userDataHandlers = new StorableUserDataHandlers(t)),
          (n = null != n ? n : "gum.criteo.com"),
          (this.syncframeOrigin = "https://" + n),
          (this.syncframeEndpoint = "https://" + n + "/syncframe"),
          this.window.criteo_syncframe_state ||
            (this.window.criteo_syncframe_state = { syncframeRequested: !1 }),
          this.window.criteo_syncframe_state.appendSyncframeRequestQueue ||
            (this.window.criteo_syncframe_state.appendSyncframeRequestQueue =
              []);
      }
      return (
        (e.prototype.getSyncframeListener = function (n, o) {
          var r = this;
          return function (e) {
            if (
              !r.discardMessageFromOtherFrames(e) ||
              r.window.criteo_syncframe_state.ForceSyncframeMessageHandling
            ) {
              var t = e.data;
              (null == t ? void 0 : t.requestId) === n &&
                (e.stopImmediatePropagation(),
                r.handleSyncframeResponse(t, o),
                (r.window.criteo_syncframe_state.firstSyncframeCompleted = !0),
                (r.window.criteo_syncframe_state.syncframeRequested = !1),
                r.tryUnqueueAppendSyncframeRequests());
            }
          };
        }),
        (e.prototype.userBundleHasAlreadyBeenRetrieved = function () {
          return this.userDataHandlers.bundle().fromAllStorages().hasValue();
        }),
        (e.prototype.canDropSyncframe = function () {
          return !this.window.criteo_syncframe_state.syncframeRequested;
        }),
        (e.prototype.discardMessageFromOtherFrames = function (e) {
          return !e.data || e.origin != this.syncframeOrigin;
        }),
        (e.prototype.appendGumIframeIfDoesNotExist = function (e, t, n) {
          var o,
            r = this;
          !0 ===
            (null === (o = this.window.criteo_syncframe_state) || void 0 === o
              ? void 0
              : o.firstSyncframeCompleted) ||
          this.userBundleHasAlreadyBeenRetrieved()
            ? this.appendGumIframe(e, t, n)
            : this.canDropSyncframe()
            ? this.appendGumIframe(e, t, n)
            : this.queueAppendSyncframeRequest(function () {
                return r.appendGumIframeIfDoesNotExist(e, t, n);
              });
        }),
        (e.prototype.doOnCompletedDom = function (e) {
          var t = this;
          if (this.window.addEventListener)
            if ("complete" === this.document.readyState) e();
            else {
              var n = function () {
                t.window.removeEventListener("load", n),
                  t.document.removeEventListener("DOMContentLoaded", n),
                  e();
              };
              this.window.addEventListener("load", n, !1),
                this.document.addEventListener("DOMContentLoaded", n, !1);
            }
        }),
        (e.prototype.appendGumIframe = function (e, t, n) {
          t();
          var o = e();
          if (this.consentAllowsSyncframeToBeDropped(o.consent)) {
            this.window.addEventListener(
              "message",
              this.getSyncframeListener(o.requestId, n),
              !0
            );
            var r = this.createIFrame(o);
            this.document.body.appendChild(r),
              (this.window.criteo_syncframe_state.syncframeRequested = !0);
          } else this.handleSyncframeResponse({}, n);
        }),
        (e.prototype.consentAllowsSyncframeToBeDropped = function (e) {
          var t;
          return (
            2 !== (null == e ? void 0 : e.gdprVersion) ||
            !0 !== (null == e ? void 0 : e.gdprApplies) ||
            !0 ===
              (null === (t = null == e ? void 0 : e.vendorConsents) ||
              void 0 === t
                ? void 0
                : t[this.criteoGlobalVendorListId])
          );
        }),
        (e.prototype.queueAppendSyncframeRequest = function (e) {
          void 0 !==
            this.window.criteo_syncframe_state.appendSyncframeRequestQueue &&
            this.window.criteo_syncframe_state.appendSyncframeRequestQueue.push(
              e
            );
        }),
        (e.prototype.tryUnqueueAppendSyncframeRequests = function () {
          for (
            var e,
              t,
              n =
                null ===
                  (e =
                    this.window.criteo_syncframe_state
                      .appendSyncframeRequestQueue) || void 0 === e
                  ? void 0
                  : e.shift();
            void 0 !== n;

          )
            n(),
              (n =
                null ===
                  (t =
                    this.window.criteo_syncframe_state
                      .appendSyncframeRequestQueue) || void 0 === t
                  ? void 0
                  : t.shift());
        }),
        (e.prototype.createIFrame = function (e) {
          var t,
            n = this.document.createElement("iframe"),
            o = {
              uid: e.uid,
              lwid: e.localWebId,
              bundle: e.bundle,
              optout: e.optoutCookie,
              sid: e.secureIdCookie,
              tld: e.topLevelDomain,
              topUrl: e.topUrl,
              version:
                "string" == typeof e.version
                  ? null === (t = e.version) || void 0 === t
                    ? void 0
                    : t.replace(/\./g, "_")
                  : e.version,
              cw: e.canWriteCookie,
              lsw: e.canWriteLocalStorage,
              origin: e.origin,
              pm: e.privateMode,
              rtusCallerId: e.rtusCallerId,
              requestId: e.requestId,
            },
            r = [];
          return (
            r.push("origin=" + e.origin),
            r.push("topUrl=" + e.topUrl),
            e.consent &&
              (void 0 !== e.consent.gdprApplies &&
                r.push("gdpr=" + (e.consent.gdprApplies ? 1 : 0)),
              void 0 !== e.consent.consentData &&
                r.push("gdpr_consent=" + e.consent.consentData),
              void 0 !== e.consent.uspString &&
                r.push("us_privacy=" + e.consent.uspString),
              void 0 !== e.consent.gppString &&
                r.push("gpp=" + e.consent.gppString),
              void 0 !== e.consent.gppSectionIds &&
                r.push("gpp_sid=" + e.consent.gppSectionIds)),
            e.isDebug && r.push("debug=1"),
            (n.src =
              this.syncframeEndpoint +
              "?" +
              r.join("&") +
              "#" +
              JSON.stringify(o)),
            (n.width = "0"),
            (n.height = "0"),
            (n.frameBorder = "0"),
            (n.style.borderWidth = "0px"),
            (n.style.margin = "0px"),
            (n.style.display = "none"),
            (n.title = "Criteo GUM iframe"),
            n
          );
        }),
        e
      );
    })(),
    RtusSyncframe = (function (r) {
      function e(e, t) {
        var n,
          o =
            r.call(
              this,
              t,
              e.storageAdapter,
              null === (n = t) || void 0 === n ? void 0 : n.GUM_DOMAIN
            ) || this;
        return (o.adapter = e), (o.adapter = e), o;
      }
      return (
        __extends(e, r),
        (e.prototype.discardMessageFromOtherFrames = function (e) {
          return (
            r.prototype.discardMessageFromOtherFrames.call(this, e) ||
            !("function" == typeof this.window.fetch)
          );
        }),
        (e.prototype.handleSyncframeResponse = function (e) {
          e.optout
            ? (this.adapter.logCounter("Origin.FromSyncframeOptout"),
              this.userDataHandlers.sid().removeFromAllStorages(),
              this.userDataHandlers.idCpy().removeFromAllStorages(),
              this.userDataHandlers.optOut().fromValue(!0).saveOnAllStorages(),
              this.userDataHandlers.bundle().removeFromAllStorages())
            : (e.uid &&
                (this.adapter.logCounter("Origin.FromSyncframeIdcpy"),
                this.userDataHandlers
                  .idCpy()
                  .fromValue(e.uid)
                  .saveOnAllStorages()),
              e.bundle &&
                (this.adapter.logCounter("Origin.FromSyncframeBundle"),
                this.userDataHandlers
                  .bundle()
                  .fromValue(e.bundle)
                  .saveOnAllStorages()),
              e.removeSid
                ? (this.adapter.logCounter("Origin.FromSyncframeRemoveSid"),
                  this.userDataHandlers.sid().removeFromAllStorages(),
                  this.adapter.removeRtusResponse())
                : e.sid &&
                  (this.adapter.logCounter("Origin.FromSyncframeSid"),
                  this.userDataHandlers
                    .sid()
                    .fromValue(e.sid)
                    .saveOnAllStorages()),
              e.sid || e.uid || e.bundle || this.adapter.sendMetrics()),
            this.adapter.onSyncframeResponseHandled();
        }),
        (e.prototype.fetchUserData = function () {
          return new AllUserData(this.userDataHandlers);
        }),
        (e.prototype.appendGumIFrameOnCompletedDomIfItDoesNotExist = function (
          e
        ) {
          var t = this,
            n = Math.random().toString();
          this.doOnCompletedDom(function () {
            return t.appendGumIframeIfDoesNotExist(
              function () {
                return t.createSyncframeRequest(e(), n);
              },
              function () {
                return t.adapter.logCounter("Events.SyncframeDropped");
              }
            );
          });
        }),
        (e.prototype.createSyncframeRequest = function (e, t) {
          return {
            uid: this.userDataHandlers.idCpy().fromAllStorages().toJSON(),
            localWebId: this.userDataHandlers
              .localWebId()
              .fromAllStorages()
              .toJSON(),
            bundle: this.userDataHandlers.bundle().fromAllStorages().toJSON(),
            optoutCookie: this.userDataHandlers
              .optOut()
              .fromAllStorages()
              .toJSON(),
            secureIdCookie: this.userDataHandlers
              .sid()
              .fromAllStorages()
              .toJSON(),
            topLevelDomain: e.topLevelDomain,
            topUrl: e.topUrl,
            version: void 0,
            canWriteCookie: e.canWriteCookie,
            canWriteLocalStorage: e.canWriteLocalStorage,
            origin: "rtus",
            privateMode: void 0,
            consent: e.consent,
            rtusCallerId: parseInt(this.window.CALLER_ID, 10),
            isDebug: !1,
            requestId: t,
          };
        }),
        e
      );
    })(Syncframe),
    LocalStorage = (function () {
      function e(e) {
        this.window = e;
      }
      return (
        (e.prototype.setItem = function (e, t) {
          if (this.hasStorages())
            try {
              this.window.localStorage.setItem(e, t);
            } catch (e) {}
        }),
        (e.prototype.getItem = function (e) {
          return this.hasStorages()
            ? this.window.localStorage.getItem(e)
            : null;
        }),
        (e.prototype.removeItem = function (e) {
          if (this.hasStorages()) return this.window.localStorage.removeItem(e);
        }),
        (e.prototype.hasStorages = function () {
          try {
            return this.window.localStorage && this.window.sessionStorage;
          } catch (e) {
            return !1;
          }
        }),
        e
      );
    })(),
    RtusStorageAdapter = (function () {
      function e() {
        this.storage = new LocalStorage(window);
      }
      return (
        (e.prototype.readFromAllStorages = function (e) {
          var t = getCookie(document, e),
            n = this.storage.getItem(e);
          return t || n
            ? {
                value: t || n,
                origin:
                  (t && StorageOrigin.Cookie) |
                  (n && StorageOrigin.LocalStorage),
              }
            : { value: null, origin: StorageOrigin.None };
        }),
        (e.prototype.removeFromAllStorages = function (e) {
          deleteCookie(document, e), this.storage.removeItem(e);
        }),
        (e.prototype.writeToAllStorages = function (e, t, n) {
          setCookieOnMainDomain(document, e, t, n), this.storage.setItem(e, t);
        }),
        e
      );
    })(),
    CsmClient = (function () {
      function e(e, t, n) {
        var o = this;
        void 0 === t && (t = ""),
          void 0 === n && (n = 100),
          (this._eventsQueue = []),
          (this.CSM_BASE_DOMAIN = e),
          (this.SAMPLING_RATIO = n || 100),
          (this.METRIC_PREFIX = t || ""),
          window.addEventListener("pagehide", function () {
            return o.flushEventQueue();
          });
      }
      return (
        (e.prototype.logCounter = function (e) {
          var t =
            "entry=c~" +
            (this.METRIC_PREFIX ? this.METRIC_PREFIX + "." : "") +
            (e || "") +
            "~1";
          this._eventsQueue.push(t);
        }),
        (e.prototype.logHistogram = function (e, t) {
          var n =
            "entry=h~" +
            (this.METRIC_PREFIX ? this.METRIC_PREFIX + "." : "") +
            (e || "") +
            "~" +
            t;
          this._eventsQueue.push(n);
        }),
        (e.prototype.logError = function (e, t, n) {
          void 0 === n && (n = null);
          var o = (t && t.message) || t,
            r = "string" == typeof n ? [n] : n,
            i = [this.METRIC_PREFIX, e]
              .concat(r)
              .reduce(function (e, t) {
                return e.concat((t && t.split(".")) || []);
              }, [])
              .filter(function (e) {
                return null != e && null != e && "" != e;
              })
              .map(function (e) {
                return "&tag=" + encodeURIComponent(e);
              })
              .join(""),
            a =
              "https://" +
              this.CSM_BASE_DOMAIN +
              "/iex?gPath=" +
              (this.METRIC_PREFIX ? this.METRIC_PREFIX + "." : "") +
              encodeURIComponent(e) +
              "&msg=" +
              encodeURIComponent(o) +
              i;
          this.logPixel(a);
        }),
        (e.prototype.sendMetrics = function () {
          this.flushEventQueue();
        }),
        (e.prototype.flushEventQueue = function () {
          if (0 < this._eventsQueue.length) {
            var e =
              "https://" +
              this.CSM_BASE_DOMAIN +
              "/iev?" +
              this._eventsQueue.join("&");
            this.logPixel(e), (this._eventsQueue = []);
          }
        }),
        (e.prototype.logPixel = function (e) {
          if (!this.CSM_BASE_DOMAIN) return console.log("Pixel", e);
          var t = Math.floor(100 * Math.random());
          this.SAMPLING_RATIO <= t ||
            ("function" == typeof navigator.sendBeacon
              ? navigator.sendBeacon(e)
              : (new Image().src = e));
        }),
        e
      );
    })(),
    consentManager = new ConsentManager(window),
    localStorage = new LocalStorage(window),
    cookiesWriteable = !1,
    localStorageWritable = !1,
    gdprConsent = void 0,
    ccpaConsent = void 0,
    gppConsent = void 0,
    currentScriptSrc = document.currentScript.src,
    rtusResponseLsKey = "cto_rtus",
    rtusResponseLsKeyWithCallerId = rtusResponseLsKey + "_" + window.CALLER_ID,
    jsonDelimiterRegex = /\(({[^}]*})\)/g,
    clientCallbackCalled = !1,
    rtusCalledViaFetch = !1,
    defaultRtusResponse = { status: "Unknown", userid: "" },
    csmClient =
      null !==
        (_b =
          null === (_a = window.CRTO_DEPENDENCIES) || void 0 === _a
            ? void 0
            : _a.RTUS_CSM_CLIENT) && void 0 !== _b
        ? _b
        : new CsmClient(window.CONFIG_CSM_DOMAIN_NAME, "Idfs.Rtus"),
    syncframe = new RtusSyncframe(
      {
        logCounter: logCounter,
        onSyncframeResponseHandled: function () {
          var e = syncframe.fetchUserData(),
            t = e.getSid(),
            n = e.getOptOut(),
            o = e.getIdCpy(),
            r = e.getBundle();
          logElapsedTime(
            "Duration.BeforeRtusFetchFromNewSyncframe",
            rtusInitTime
          ),
            fetchGumResponseAndStoreItInLocalStorage(t, n, o, r)
              .then(function () {
                logElapsedTime(
                  "Duration.AfterRtusFetchFromNewSyncframe",
                  rtusInitTime
                ),
                  logCounter("Events.AfterRtusFetchFromNewSyncframe");
              })
              .then(function () {
                return callClientCallbackFromLocalStorageOrDefault();
              });
        },
        sendMetrics: sendMetrics,
        removeRtusResponse: function () {
          localStorage.removeItem(rtusResponseLsKey),
            localStorage.removeItem(rtusResponseLsKeyWithCallerId);
        },
        storageAdapter: new RtusStorageAdapter(),
      },
      window
    ),
    getRtusResponseFromLocalStorage = function () {
      return (
        localStorage.getItem(rtusResponseLsKeyWithCallerId) ||
        localStorage.getItem(rtusResponseLsKey)
      );
    };

  init();

