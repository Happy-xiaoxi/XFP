
import {e} from './_ne.js';
import {t} from './_nt.js';
import {o} from './_no.js';
import {n} from './_nn.js';
import {r} from './_nr.js';
import {a} from './_na.js';
import {c} from './_nc.js';
import {l} from './_nl.js';
import {u} from './_nu.js';
import {d} from './_nd.js';
import {p} from './_np.js';
import {h} from './_nh.js';
import {g} from './_ng.js';
import {m} from './_nm.js';
import {f} from './_nf.js';
import {_} from './_n_.js';
import {v} from './_nv.js';
import {w} from './_nw.js';
import {C} from './_MC.js';
import {S} from './_MS.js';
import {E} from './_ME.js';
import {T} from './_MT.js';
import {L} from './_ML.js';
import {R} from './_MR.js';
import {D} from './_MD.js';
import {q} from './_nq.js';
import {N} from './_MN.js';
import {M} from './_MM.js';
import {P} from './_MP.js';
import {U} from './_MU.js';
import {O} from './_MO.js';
import {F} from './_MF.js';
import {B} from './_MB.js';
import {W} from './_MW.js';
import {z} from './_nz.js';
import {j} from './_nj.js';
import {H} from './_MH.js';
import {K} from './_MK.js';
import {Q} from './_MQ.js';
import {G} from './_MG.js';
import {J} from './_MJ.js';
import {X} from './_MX.js';
import {Z} from './_MZ.js';
import {ee} from './_nee.js';
import {te} from './_nte.js';
import {oe} from './_noe.js';
import {ne} from './_nne.js';
import {se} from './_nse.js';
import {ie} from './_nie.js';
import {re} from './_nre.js';
import {ae} from './_nae.js';
import {ce} from './_nce.js';
import {le} from './_nle.js';
import {ue} from './_nue.js';
import {de} from './_nde.js';
import {pe} from './_npe.js';
import {he} from './_nhe.js';
import {ge} from './_nge.js';
import {me} from './_nme.js';
import {_e} from './_n_e.js';
import {ve} from './_nve.js';
  let s, i;
  try {
    s = localStorage.getItem("debug")?.replace(/^upscope:/, "");
  } catch (e) {}
 
  const y = {
    ".upscope___dialog-overlay": {
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      background: "#000000",
      "z-index": "2147483645",
      opacity: "0.7",
    },
    ".upscope___dialog": {
      display: "block",
      "z-index": "2147483646",
      background: "white",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      width: "80%",
      "max-width": "600px",
      padding: "15px 15px 0",
      "border-radius": "5px",
      overflow: "hidden",
    },
    ".upscope___dialog__title": {
      cursor: "default",
      display: "block",
      "font-size": "20px",
      margin: "3px 0 15px",
      "font-weight": "600",
      color: "#4c4c4c",
      "font-family":
        "'Avenir Next', Avenir, 'Lucida Grande', Helvetica, sans-serif",
    },
    ".upscope___dialog__text": {
      cursor: "default",
      display: "block",
      "font-size": "17px",
      "line-height": "22px",
      color: "#656565",
      "font-weight": "500",
      "margin-bottom": "30px",
      "font-family":
        "'Avenir Next', Avenir, 'Lucida Grande', Helvetica, sans-serif",
    },
    ".upscope___dialog__buttons-container": {
      background: "#f1f1f1",
      margin: "0 -15px",
      padding: "15px",
      "text-align": "right",
      display: "block",
      overflow: "hidden",
    },
    ".upscope___dialog__button, .upscope___dialog__button:hover, .upscope___dialog__button:active":
      {
        cursor: "pointer",
        background: "#0090ff",
        color: "white",
        padding: "0 10px",
        height: "36px",
        "line-height": "36px",
        display: "inline-block",
        "font-size": "17px",
        "font-weight": "600",
        "font-family":
          "'Avenir Next', Avenir, 'Lucida Grande', Helvetica, sans-serif",
        "text-decoration": "none",
        "border-radius": "3px",
        "margin-left": "15px",
        opacity: "0.8",
      },
    '@media "only screen and (max-width": 800px)': {
      ".upscope___dialog__buttons-container": { "padding-bottom": "0" },
      ".upscope___dialog__button, .upscope___dialog__button:hover, .upscope___dialog__button:active":
        { display: "block", margin: "0 0 15px", "text-align": "center" },
    },
    ".upscope___dialog__button:hover": { opacity: "1" },
    ".upscope___dialog__button.upscope___dialog__button--no": {
      background: "#dddddd",
      color: "#464646",
    },
    ".upscope___dialog__button.upscope___dialog__button--ok": {
      background: "#00d015",
    },
  };
  let b = null;
  class k {
    text;
    className;
    onClick;
    constructor(e, t, o) {
      (this.text = e), (this.className = t), (this.onClick = o);
    }
    render(e) {
      const t = document.createElement("a");
      (t.href = "#"),
        (t.textContent = this.text),
        (t.className =
          "upscope___dialog__button" +
          (this.className
            ? " upscope___dialog__button--" + this.className
            : "")),
        t.setAttribute("role", "button"),
        e.append(t),
        t.addEventListener("click", (e) => {
          e.isUpscopeBrowserInstruction ||
            (e.preventDefault(), e.stopPropagation(), this.onClick());
        });
    }
  }
  class I {
    title;
    text;
    callback;
    buttons = [];
    rendered = !1;
    container;
    keyboardListener;
    constructor(e, t, o) {
      (this.title = e), (this.text = t), (this.callback = o);
    }
    addButton(e, t, o) {
      this.buttons.push(
        new k(t, o, () => {
          this.clear(), this.callback && this.callback(e), delete this.callback;
        })
      );
    }
    clear() {
      this.rendered &&
        (this.keyboardListener &&
          document.removeEventListener("keydown", this.keyboardListener),
        this.container.remove?.());
    }
    render() {
      (this.rendered = !0), (this.container = v(document, y));
      const e = document.createElement("div");
      (e.className = "upscope___dialog-overlay"),
        1 === this.buttons.length &&
          (e.addEventListener("click", (e) => {
            this.buttons[0].onClick();
          }),
          (this.keyboardListener = (e) => {
            (27 !== e.keyCode && 13 !== e.keyCode && 8 !== e.keyCode) ||
              this.buttons[0].onClick();
          }),
          document.addEventListener("keydown", this.keyboardListener));
      const t = document.createElement("div");
      (t.className = "upscope___dialog"),
        t.setAttribute("role", "dialog"),
        t.setAttribute("aria-labelledby", "upscope___dialog__title"),
        t.setAttribute("aria-describedby", "upscope___dialog__text");
      const o = document.createElement("div");
      (o.className = "upscope___dialog__title"),
        (o.id = "upscope___dialog__title"),
        (o.textContent = this.title || n().hostname),
        t.append(o);
      const s = document.createElement("div");
      (s.className = "upscope___dialog__text"),
        (s.id = "upscope___dialog__text"),
        (s.textContent = this.text),
        t.append(s);
      const i = document.createElement("div");
      i.className = "upscope___dialog__buttons-container";
      for (const e of this.buttons) e.render(i);
      t.append(i),
        this.container.append(t),
        this.container.append(e),
        document.activeElement &&
          "function" == typeof document.activeElement.blur &&
          document.activeElement.blur();
    }
  }
  const V = [
    "region",
    "shortId",
    "lastConnectedAt",
    "waitingForCallAt",
    "lookupCodeSetAt",
    "lookupCode",
  ],
  Y = {
    async get(t) {
      if (e("storageImplementation"))
        return e("storageImplementation").getItem(t);
      let o =
        localStorage.getItem(`__upscope:${t}`) || J(`_upscope__${t}`) || null;
      if (null === o) return null;
      try {
        o = JSON.parse(o);
      } catch (e) {}
      return this.set(t, o), o;
    },
    async set(t, o) {
      if (e("storageImplementation"))
        return e("storageImplementation").setItem(t, o);
      (o = JSON.stringify(o)), localStorage.setItem(`__upscope:${t}`, o);
      const n = location.hostname.split(".");
      for (
        let e = n.length - 2;
        e >= 0 &&
        (X(`_upscope__${t}`, o, n.slice(e).join(".")),
        J(`_upscope__${t}`) !== o);
        e--
      );
    },
    async del(t) {
      if (e("storageImplementation"))
        return e("storageImplementation").removeItem(t);
      localStorage.removeItem(`__upscope:${t}`);
      const o = location.hostname.split(".");
      for (
        let e = o.length - 2;
        e >= 0 &&
        ((n = `_upscope__${t}`),
        (s = o.slice(e).join(".")),
        X(n, "", s, new Date(0)),
        null !== J(`_upscope__${t}`));
        e--
      );
      var n, s;
    },
    async clear() {
      await Promise.all(V.map((e) => this.del(e)));
    },
  };
  const x = {
      beta: !1,
      region: null,
      dataEndpoint: `${l("data", "ws")}/session`,
      pageviewsEndpoint: `${l("data-support")}/pageviews`,
      phoneEndpoint: l("phone"),
      javascriptEndpoint: l("js"),
      storageImplementation: null,
      proxyRedirectEndpoint: `${l("app")}/session?token=TOKEN&url=URL`,
      requireAuthorizationForSession: !1,
      integrateWithLivechat: !0,
      liveChatRewrite: !0,
      grabIdentityFromLivechat: !0,
      showUpscopeLink: !0,
      cursorColor: "black",
      enlargeCursor: !1,
      showTerminateButton: !0,
      useFingerprinting: !0,
      autoconnect: !0,
      trackConsole: !1,
      allowRemoteConsole: !1,
      allowRemoteClick: !0,
      allowRemoteScroll: !0,
      allowRemoteType: !0,
      allowAgentRedirect: !0,
      rewriteExternalLinks: !1,
      screenWakeLock: !0,
      collectHistory: !1,
      consoleAllowed: !0,
      drawingsTtlMs: 6e3,
      enableLookupCodeOnKey: !1,
      lookupCodeKey: 17,
      lookupCodeKeyRepetitions: 5,
      lookupCodeKeyTitle: "Co-browsing access code",
      lookupCodeKeyMessage: "Please give the agent this code: {%lookupCode%}",
      lookupCodeElement: null,
      injectLookupCodeButton: !1,
      lookupCodeButtonPages: ["*"],
      lookupCodeButtonStyle: "left: 0;bottom: 100px;",
      disconnectAfterSeconds: 900,
      proxyAssets: [
        "*://localhost/*",
        "*://localhost:*/*",
        "*://127.0.0.1/*",
        "*://127.0.0.1:*/*",
        "*://*.dev/*",
        "*://*.dev:*/*",
        "*://*.local/*",
      ],
      maskedElements: [],
      domChangesDelay: 100,
      ignoreBrowserSupport:
        "extension" !== window.__upscopeContext__ &&
        "off" === localStorage.getItem("upscope:browserDetect"),
      enableCanvases: !0,
      customCallController: null,
      callPromptText: "Would you like to join the voice call?",
      callPopupFailedMessage:
        "The audio popup failed to open. Please enable popups and try again.",
      callPopupFailedTitle: "Failed to open popup",
      callPopupNoInputTitle: "No microphone detected",
      callPopupNoInputMessage:
        "The audio call might fail because no microphone was detected.",
      callPopupNoOutputTitle: "No speakers detected",
      callPopupNoOutputMessage:
        "The audio call might fail because no speakers were detected.",
      callAudioAuthorizationFailedTitle: "Microphone access not granted",
      callAudioAuthorizationFailedMessage:
        "The call had to be disconnected because access to the microphone was not granted. Please try again.",
      callRingtone: `${l("js")}/assets/ringtone.mp3?v=2.2.119`,
      authorizationPromptTitle: "Co-browsing request",
      authorizationPromptMessage:
        "Would you like to let {%agentName%|our agent} help you navigate {%currentDomain%}?",
      endOfScreenshareMessage: null,
      callWaitMessage:
        "Please stay on this page. Our agent will call you here shortly.",
      translationsYes: "Yes",
      translationsNo: "No",
      translationsOk: "Okay",
      translationsStopSession: "End session",
      agentRequestButtonStyle: "left: 10px;bottom: 10px;",
      agentRequestButtonTitle: "Request agent help",
      agentRequestButtonSubtitle: "An agent can screen share with you now",
      agentRequestButtonRequestingTitle: "Looking for an available agent...",
      agentRequestButtonRequestingSubtitle: "Click to cancel request",
      agentRequestResultTitle: "Agent request",
      agentRequestNotAvailableText:
        "An agent is not currently available. Please try again later.",
      agentRequestAcceptedText:
        "An agent will screen share with you shortly. Please stay on this page.",
      showAgentRequestButton: "never",
      agentRequestButtonPages: ["*"],
      unavailableAgentRequestRedirectImmediately: !1,
      unavailableAgentRequestRedirectTo: null,
      fromProxy: !1,
      sfdcFieldLabel: "Screen_Share",
      sfdcFieldId: "Screen_Share__c",
      baseProxyUrl: "https://APIKEY.upscopeproxy.com",
      proxyDomain: ".upscopeproxy.com",
      regionWhitelist: [
        "us-east",
        "ap-southeast",
        "eu-central",
        "eu-west",
        "sa-east",
      ],
      needsProxy(e) {
        if (this.fromProxy) return !0;
        const t = new URL(e, location.href);
        return (
          "pdf" === t.pathname.split(".").pop() ||
          (!t.hostname.endsWith(location.hostname) &&
            !location.hostname.endsWith(t.hostname))
        );
      },
      onSessionRequest(e, t) {
        let o;
        a("info", "Screen sharing request received"),
          (o = this.authorizationPromptMessage.includes("{%agentName%|")
            ? t
              ? this.authorizationPromptMessage
                  .split("{%agentName%|")
                  .map((e, t) =>
                    0 === t ? e : e.slice(Math.max(0, e.indexOf("}") + 1))
                  )
                  .join(t)
              : this.authorizationPromptMessage
                  .split("{%agentName%|")
                  .map((e, t) =>
                    0 === t
                      ? e
                      : e.slice(0, Math.max(0, e.indexOf("}"))) +
                        e.slice(Math.max(0, e.indexOf("}") + 1))
                  )
                  .join("")
            : this.authorizationPromptMessage),
          (o = o.split("{%currentDomain%}").join(n().host)),
          S(this.authorizationPromptTitle, o).then(e);
      },
      onSessionStart() {
        a("info", "Screen sharing started");
      },
      onSessionEnd() {
        a("info", "Screen sharing ended"),
          this.endOfScreenshareMessage &&
            C(void 0, this.endOfScreenshareMessage);
      },
      onWaitingForCall() {
        a("info", "Found call name"),
          this.callWaitMessage && C(void 0, this.callWaitMessage);
      },
      onSessionContinue() {
        a("info", "Screen sharing continued");
      },
      onConnection: null,
      maskElementMiddleware(e) {
        if (
          ("type" in e && "password" === e.type) ||
          ("function" == typeof e.getAttribute &&
            "cc-number" === e.getAttribute("autocompletetype"))
        )
          return !0;
        let t = e;
        for (; t; ) {
          for (const e of this.maskedElements) {
            if ("function" == typeof t.matches && t.matches(e)) return !0;
            if (
              "function" == typeof t.msMatchesSelector &&
              t.msMatchesSelector(e)
            )
              return !0;
          }
          if (t.className && /\bno-upscope\b/.test(t.className)) return !0;
          t = t.parentElement;
        }
        return !1;
      },
      noRemoteElements: [],
      allowRemoteMiddleware(e) {
        if (this.maskElementMiddleware(e)) return !1;
        let t = e;
        for (; t; ) {
          for (const e of this.noRemoteElements) {
            if ("function" == typeof t.matches && t.matches(e)) return !1;
            if (
              "function" == typeof t.msMatchesSelector &&
              t.msMatchesSelector(e)
            )
              return !1;
          }
          t = t.parentElement;
        }
        return !0;
      },
      styleSheetContentFromRules: (e) =>
        "STYLE" === e.tagName && 0 === e.textContent?.trim().length,
    },
    A = {
      1: "ELEMENT_NODE",
      2: "ATTRIBUTE_NODE",
      3: "TEXT_NODE",
      4: "CDATA_SECTION_NODE",
      7: "PROCESSING_INSTRUCTION_NODE",
      8: "COMMENT_NODE",
      9: "DOCUMENT_NODE",
      10: "DOCUMENT_TYPE_NODE",
      11: "DOCUMENT_FRAGMENT_NODE",
    };
    async function fe(e, t) {
      r("Collecting asset %s (element: %o)", e, t);
      try {
        if (
          t &&
          (o = t) &&
          "[object CSSStyleSheet]" === Object.prototype.toString.apply(o)
        )
          return `text/css:${window.btoa(ve(t))}`;
        if (R("img", t))
          return _e(t)
            .replace(/^data:/, "")
            .replace(",", ":");
      } catch (e) {
        r("Unable to collect image / css for %o (%o), using fetch", t, e);
      }
      var o;
      try {
        return await h(
          new Promise((t, o) => {
            const n = new XMLHttpRequest();
            n.open("GET", e, !0),
              (n.responseType = "arraybuffer"),
              n.addEventListener("load", function (e) {
                if (200 !== this.status)
                  return o([this.status, String(this.response)]);
                const n = new Uint8Array(this.response);
                let s = n.length;
                const i = new Array(s);
                for (; s--; ) i[s] = String.fromCharCode(n[s]);
                const r = i.join(""),
                  a = this.getResponseHeader("content-type");
                if (!a) return o("No content type");
                t(a + ":" + window.btoa(r));
              }),
              n.send();
          }),
          5e3
        );
      } catch (t) {
        r("Could not collect asset %s (%o)", e, t);
      }
    }
  class we {
    connection;
    isChildFrame;
    active = !1;
    killers = [];
    assetsCache = {};
    styleSheetContents = {};
    sentAssets = [];
    upscopeId = 0;
    activateInterval;
    canvasCompressionOn = !1;
    canvasContents = {};
    canvasErrors = [];
    canvasCompressionOffTimeout;
    constructor(e, t = !1) {
      (this.connection = e), (this.isChildFrame = t);
    }
    sendEvent(e, t) {
      this.connection.sendBrowserEvent(e, t);
    }
    async activate(e = null) {
      r("Activating browser watcher"),
        (this.active = !0),
        await this.awaitDocumentLoaded(window.document),
        this.ensureHasIds(void 0, document, e),
        (this.activateInterval =
          this.activateInterval ||
          setInterval(
            () => this.activateForWindow(window, Boolean(e), e),
            2e3
          )),
        this.activateForWindow(window, Boolean(e), e);
    }
    async activateForWindow(e = window, t = !1, o = null) {
      if ((await this.awaitDocumentLoaded(e.document), !this.active)) return;
      const n = t ? o : "root";
      if (null !== n) {
        if (!e.document.__upscopeTrackingActive) {
          r("Activating events watchers for window %O", n);
          for (const o of (function (e, t, o, n) {
            return [
              ee(o),
              Z(o),
              te(o),
              pe(e, o),
              ne(o),
              se(e, t),
              ie(o),
              he(e, o),
              ae(o),
              ce(o),
              re(o),
              le(t),
              ge(e, o),
              de(o),
              ue(e, o),
              oe(o),
              me(n),
            ];
          })(this, e, e.document, t))
            o.detect(
              (e) => {
                this.killers.push(e);
              },
              async (e) => {
                const t = await o.encode(e);
                t && this.sendEvent(n, t);
              }
            );
        }
        $(e.document, (e) => this.activateForShadowRoot(n, e)),
          H(
            e.document,
            (e) => {
              e.__upscopeID &&
                ((e.__upscopeFrameActive = !0),
                e.contentWindow &&
                  this.activateForWindow(e.contentWindow, !0, e.__upscopeID));
            },
            (e, t) => {
              e.__upscopeID &&
                ((e.__upscopeFrameActive = !0),
                t.activate(this.sendEvent.bind(this), e.__upscopeID));
            }
          ),
          e.document.__upscopeTrackingActive ||
          (e !== window && !e.parent.document.__upscopeTrackingActive)
            ? (e.document.__upscopeTrackingActive = !0)
            : ((e.document.__upscopeTrackingActive = !0),
              this.sendEvent(n, { pageLoad: await this.getSnapshot(e) }));
      }
    }
    deactivateForWindow(e = window) {
      (e.document.__upscopeTrackingActive = !1),
        H(
          e.document,
          (e) => {
            (e.__upscopeFrameActive = !1),
              e.contentWindow && this.deactivateForWindow(e.contentWindow);
          },
          (e, t) => {
            (e.__upscopeFrameActive = !1), t.deactivate();
          },
          !0
        ),
        $(e.document, (e) => {
          e.__upscopeTrackingActive = !1;
        });
    }
    deactivate() {
      r("Deactivating events watchers"),
        this.activateInterval && clearInterval(this.activateInterval),
        delete this.activateInterval,
        (this.active = !1),
        this.removeIds();
      for (const e of this.killers)
        try {
          e();
        } catch (e) {
          r("Failed to kill listener (%o)", e);
        }
      (this.killers = []), this.deactivateForWindow();
    }
    async awaitDocumentLoaded(e) {
      const t = () =>
        "complete" === e.readyState || "interactive" === e.readyState;
      t() ||
        (await new Promise((e) => {
          const o = setInterval(() => {
            t() && (clearInterval(o), e());
          }, 100);
        }));
    }
    async getSnapshot(t = window, o = !1) {
      await g(() => Boolean(t.document.documentElement)), this.ensureHasIds();
      const n = { version: e("version") };
      let s;
      t === window &&
        ((this.sentAssets = []), (s = this.collectNewAssets(t.document, o)));
      const { doctype: i } = t.document;
      (n.doctype = i
        ? "<!DOCTYPE " +
          i.name +
          (i.publicId ? ' PUBLIC "' + i.publicId + '"' : "") +
          (!i.publicId && i.systemId ? " SYSTEM" : "") +
          (i.systemId ? ' "' + i.systemId + '"' : "") +
          ">"
        : void 0),
        (n.url = t.location.href);
      const a = t.document.querySelectorAll("base");
      (n.baseUrl = 0 === a.length ? t.location.href : a[0].href),
        (n.styleSheetsCount = t.document.styleSheets.length),
        (n.windowSize = { w: t.innerWidth, h: t.innerHeight }),
        (n.formValues = this.getFormValues(t.document));
      const c = this.encodeNode(t.document.documentElement).then((e) => {
        n.html = e;
      });
      (n.scrollPositions = this.getScrollPositions(t)),
        (n.scrollbarWidth = this.getScrollbarWidth(t.document)),
        (n.targetElementId = (() => {
          const e =
            location.hash.length > 0
              ? t.document.getElementById(location.hash.slice(1))
              : null;
          if (e) return e.__upscopeID;
        })()),
        (n.focusElementId =
          !t.document.activeElement || R("body", t.document.activeElement)
            ? void 0
            : t.document.activeElement.__upscopeID),
        (n.console = this.connection.consoleHandler?.console),
        (n.canvases = this.getCanvasUrls(t.document, o ? 1 : 0)),
        (n.maskedElementsSizes = this.getMaskedElementsSizes(t.document)),
        (n.styleSheetContents = this.getStyleSheetContents(t.document)),
        (n.animations = (() => {
          if (!t.document.getAnimations) return [];
          const e = [];
          for (const o of t.document.getAnimations()) {
            if ("[object Animation]" !== Object.prototype.toString.apply(o))
              continue;
            o.__upscopeEventSent = !0;
            const t = o.effect.target;
            if (!t) continue;
            const n = N(t);
            n && e.push({ elementId: n, ...U(o) });
          }
          return e;
        })()),
        this.active || t !== window || this.removeIds();
      try {
        s && (n.assets = await s);
      } catch (e) {
        r("Could not collect assets %o", e), (n.assets = {});
      }
      return await c, n;
    }
    async collectNewAssets(e, o = !1) {
      const n = {},
        s = [],
        i = document.createElement("a"),
        a = new Date();
      let c;
      s.push(...this.findAssetsInRoot(e)),
        $(e, (e) => {
          s.push(...this.findAssetsInRoot(e));
        }),
        H(
          e,
          (e) =>
            e.contentDocument &&
            s.push(...this.findAssetsInRoot(e.contentDocument))
        );
      do {
        if (Date.now() - a.getTime() > (o ? 1e3 : 6e3)) {
          r("Stopped collecting assets as it's been longer than 6 seconds");
          break;
        }
        const e = [];
        for (let [o, r, a] of s)
          if (
            o &&
            ((i.href = o),
            (o = i.href.split("#")[0]),
            o !== location.href.split("#")[0] && !this.sentAssets.includes(o))
          ) {
            if (!a && !this.shouldProxyAsset(o)) continue;
            if (o.startsWith("data:")) continue;
            const s =
              "function" == typeof window.upscope___proxyToUrl
                ? window.upscope___proxyToUrl(o)
                : o;
            this.assetsCache[s]
              ? (n[s] = this.assetsCache[s])
              : e.push(fe(o, t(r)).then((e) => [o, e])),
              this.sentAssets.push(o);
          }
        (c = await Promise.all(e)), (s.length = 0);
        for (const [e, t] of c) {
          if (void 0 !== t) {
            const o =
              "function" == typeof window.upscope___proxyToUrl
                ? window.upscope___proxyToUrl(e)
                : e;
            (n[o] = t), (this.assetsCache[o] = t);
          }
          t &&
            t.startsWith("text/css") &&
            s.push(
              ...K(window.atob(t.slice(t.indexOf(":") + 1))).map((t) => [
                new URL(t, e).href,
                null,
                !1,
              ])
            );
        }
      } while (c.length > 0);
      return n;
    }
    findAssetsInRoot(e) {
      const t = [];
      return (
        t.push(...[...e.styleSheets].map((e) => [e.href, e, !1])),
        D(e)
          ? t.push(...[...e.querySelectorAll("img")].map((e) => [e.src, e, !1]))
          : t.push(...[...e.images].map((e) => [e.src, e, !1])),
        t.push(
          ...[...e.querySelectorAll("use")].map((e) => [
            e.getAttribute("xlink:href") ||
              ("string" == typeof e.href ? e.href : null),
            null,
            !0,
          ])
        ),
        q(e) &&
          t.push(
            ...Object.values(this.getStyleSheetContents(e))
              .flatMap((e) => K(e))
              .map((e) => [e, null, !1])
          ),
        t.push(
          ...[...e.querySelectorAll("[style]")]
            .flatMap((e) => K(e.getAttribute("style")))
            .map((e) => [e, null, !1])
        ),
        t
      );
    }
    shouldProxyAsset(t) {
      if (t.length > 2e3) return !1;
      if (t.startsWith("blob:")) return !0;
      if (t.startsWith("chrome-extension:")) return !0;
      if (!t.startsWith("http://") && !t.startsWith("https://")) return !1;
      for (const o of e("proxyAssets")) if (c(o, t)) return !0;
      return !1;
    }
    async encodeNode(e) {
      if (T(e)) {
        const t = { tag: `${e.tagName}#${e.__upscopeID}`, c: [] };
        return (
          e.__upscopeMasked && (t.masked = !0),
          e.__upscopeNoRemoteControl && (t.rc = !1),
          "http://www.w3.org/2000/svg" === e.namespaceURI && (t.svg = 1),
          e.attributes.length > 0 &&
            (t.a = (() => {
              const t = {};
              for (const o of e.attributes)
                (t[o.name] = o.value),
                  e.__upscopeMasked &&
                    "value" === o.name &&
                    (t[o.name] = o.value.replace(/./g, "*"));
              return t;
            })()),
          (e.childNodes.length > 0 || e.shadowRoot) &&
            !e.__upscopeMasked &&
            (t.c = await (async () => {
              const t = [],
                o = [];
              for (const t of e.childNodes) o.push(this.encodeNode(t));
              for (const n of await Promise.all(o))
                n && !R("script", e) && t.push(n);
              return (
                e.shadowRoot && t.push(await this.encodeNode(e.shadowRoot)), t
              );
            })()),
          (R("iframe", e) || R("frame", e)) &&
            (O(e) || e.__upscopeFrameActive) &&
            (e.__upscopeChildFrameHandler
              ? (t.iframe = await e.__upscopeChildFrameHandler.getSnapshot(
                  e.__upscopeID
                ))
              : e.contentWindow &&
                j(e) &&
                (t.iframe = await this.getSnapshot(e.contentWindow))),
          R("img", e) && (t.isLoaded = Boolean(e.complete)),
          t
        );
      }
      return L(e)
        ? { text: e.textContent }
        : D(e)
        ? {
            shadowRoot: !0,
            c: await (async () => {
              const t = [],
                o = [];
              for (const t of e.childNodes) o.push(this.encodeNode(t));
              for (const n of await Promise.all(o))
                n && !R("script", e) && t.push(n);
              return t;
            })(),
            ss: ((e) => {
              if (!e) return;
              let t = "";
              for (const o of e) t += ve(o);
              return t;
            })(e.adoptedStyleSheets),
          }
        : void 0;
    }
    getScrollPositions(e) {
      return {
        window: { x: W(e), y: z(e) },
        elements: this.getRootScrollPositions(e.document),
      };
    }
    getRootScrollPositions(e) {
      const t = G(e),
        o = {};
      for (const e of t)
        (e.parentNode && e.parentNode.__upscopeMasked) ||
          R("html", e) ||
          (e.shadowRoot &&
            Object.assign(o, this.getRootScrollPositions(e.shadowRoot)),
          (0 === e.scrollLeft && 0 === e.scrollTop) ||
            (e.__upscopeID &&
              (o[e.__upscopeID] = { x: e.scrollLeft, y: e.scrollTop })));
      return o;
    }
    activateForShadowRoot(e, t) {
      if (t.__upscopeTrackingActive) return;
      t.__upscopeTrackingActive = !0;
      const o =
        ((n = t),
        {
          detect(e, t) {
            const o = {},
              s = function (e) {
                const n = e.path?.[0];
                if (!n || !T(n)) return;
                const s = N(n);
                s &&
                  (void 0 === o[s] &&
                    (o[s] = u((e) => {
                      delete o[s], t(e);
                    }, 100)),
                  o[s](e));
              };
            var i;
            n.addEventListener("scroll", s, !0),
              e(
                ((i = s),
                function () {
                  n.removeEventListener("scroll", i, !0);
                })
              );
          },
          encode(e) {
            const t = e.path[0],
              o = N(t);
            if (o && !t.__upscopeMasked)
              return {
                scroll: { elementId: o, x: t.scrollLeft, y: t.scrollTop },
              };
          },
        });
      var n;
      o.detect(
        (e) => {
          this.killers.push(e);
        },
        async (t) => {
          const n = await o.encode(t);
          "object" == typeof n && this.sendEvent(e, n);
        }
      );
    }
    getFormValues(e) {
      const t = {},
        o = e.querySelectorAll("input,textarea,select");
      for (const e of o) {
        if (!e.__upscopeID) continue;
        if (e.parentNode?.__upscopeMasked) continue;
        if (R("input", e) && "file" === e.type) continue;
        if (R("select", e)) {
          t[e.__upscopeID] = `selectedIndex:${e.selectedIndex}`;
          continue;
        }
        if (R("input", e) && ("checkbox" === e.type || "radio" === e.type)) {
          t[e.__upscopeID] = "checked:" + (e.checked ? 1 : 0);
          continue;
        }
        const o = e.__upscopeMasked ? e.value.replace(/./g, "*") : e.value;
        t[e.__upscopeID] = `value:${o}`;
      }
      return t;
    }
    getStyleSheetContents(t, o = !1) {
      const n = {},
        s = t.styleSheets;
      if (
        ((this.styleSheetContents[t.__upscopeRootId || "root"] =
          this.styleSheetContents[t.__upscopeRootId || "root"] || {}),
        this.styleSheetContents[t.__upscopeRootId || "root"][o ? 1 : 0])
      )
        return this.styleSheetContents[t.__upscopeRootId || "root"][o ? 1 : 0];
      const i = Date.now();
      for (const t of s) {
        const s = t.ownerNode;
        try {
          if (
            (!R("link", s) && !R("style", s)) ||
            !s.__upscopeID ||
            s.__upscopeError
          )
            continue;
          if (!o && !e("styleSheetContentFromRules")(s)) continue;
          n[s.__upscopeID] = ve(t);
        } catch (e) {
          (s.__upscopeError = !0),
            r("Could not retrieve content from stylesheet (%o)", e);
        }
      }
      const a = Date.now() - i;
      return (
        a > 100 &&
          ((this.styleSheetContents[t.__upscopeRootId || "root"][o ? 1 : 0] =
            n),
          setTimeout(
            () =>
              delete this.styleSheetContents[t.__upscopeRootId || "root"][
                o ? 1 : 0
              ],
            7 * a
          )),
        n
      );
    }
    getScrollbarWidth(e) {
      const t = e.createElement("div");
      if (
        ((t.style.width = "100px"),
        (t.style.height = "100px"),
        (t.style.overflow = "scroll"),
        (t.style.position = "absolute"),
        (t.style.top = "-9999px"),
        !e.body)
      )
        return 0;
      e.body.append(t);
      const o = t.offsetWidth - t.clientWidth;
      return t.remove(), o;
    }
    getCanvasUrls(t, o = 0) {
      if (!e("enableCanvases")) return {};
      0 === o && this.canvasCompressionOn && (o = 0.5),
        (this.canvasContents[t.__upscopeRootId || "root"] =
          this.canvasContents[t.__upscopeRootId || "root"] || {}),
        (this.canvasContents[t.__upscopeRootId || "root"][o] =
          this.canvasContents[t.__upscopeRootId || "root"][o] || {});
      const n = Date.now(),
        s = {},
        i = [],
        a = t.querySelectorAll("canvas,video");
      for (const e of a)
        if (
          e.__upscopeID &&
          O(e) &&
          (R("canvas", e) || "yes" === e.dataset.upscopeProxyStream) &&
          !this.canvasErrors.includes(e.__upscopeID) &&
          O(e)
        )
          try {
            this.canvasContents[t.__upscopeRootId || "root"][o][
              e.__upscopeID
            ] ||
              (i.push(e.__upscopeID),
              (this.canvasContents[t.__upscopeRootId || "root"][o][
                e.__upscopeID
              ] = _e(e, o))),
              (s[e.__upscopeID] =
                this.canvasContents[t.__upscopeRootId || "root"][o][
                  e.__upscopeID
                ]);
          } catch (t) {
            this.canvasErrors.push(e.__upscopeID),
              r("Ignoring canvas %o due to error %o", e, t);
          }
      const c = Date.now() - n;
      return (
        setTimeout(() => {
          for (const e of i)
            delete this.canvasContents[t.__upscopeRootId || "root"][o][e];
        }, 7 * Math.min(c, 1e3)),
        c > 800 &&
          (this.canvasCompressionOn || r("Turning canvas compression on"),
          (this.canvasCompressionOn = !0),
          this.canvasCompressionOffTimeout &&
            clearTimeout(this.canvasCompressionOffTimeout),
          (this.canvasCompressionOffTimeout = setTimeout(() => {
            this.canvasCompressionOn = !1;
          }, 1e4))),
        s
      );
    }
    getMaskedElementsSizes(e) {
      const t = {},
        o = G(e);
      for (const e of o)
        T(e) &&
          e.__upscopeID &&
          (e.parentNode?.__upscopeMasked ||
            (e.__upscopeMasked &&
              (t[e.__upscopeID] = `${e.offsetWidth}x${e.offsetHeight}`)));
      return t;
    }
    ensureHasIds(t, o = document, n = null, s) {
      n && (o.__upscopeRootId = n);
      const i = G(o);
      for (const o of i)
        void 0 === o.__upscopeID &&
          (s && s(o),
          (o.__upscopeID =
            (n ? n + ">" : "") + (t ? t + "-" : "") + String(this.upscopeId++)),
          (o.__upscopeMutationBatch = t),
          e("maskElementMiddleware")(o) && (o.__upscopeMasked = !0),
          (this.isChildFrame ||
            o.__upscopeMasked ||
            o.__upscopeDialogButton ||
            !e("allowRemoteMiddleware")(o)) &&
            (o.__upscopeNoRemoteControl = !0)),
          "upscope___overlay" !== o.id &&
            void 0 !== o.style &&
            "string" == typeof o.style.zIndex &&
            o.style.zIndex.length > 0 &&
            Number.parseInt(o.style.zIndex, 10) > 2147483645 &&
            (o.style.zIndex = "2147483645"),
          o.shadowRoot && this.ensureHasIds(t, o.shadowRoot, o.__upscopeID, s);
      H(
        o,
        (e) =>
          e.contentDocument &&
          this.ensureHasIds(t, e.contentDocument, e.__upscopeID, s)
      );
    }
    removeIdsFromElement(e, t = !1) {
      if (
        void 0 !== e.__upscopeID &&
        (delete e.__upscopeID,
        void 0 !== e.__upscopeMasked && delete e.__upscopeMasked,
        void 0 !== e.__upscopeMutationBatch && delete e.__upscopeMutationBatch,
        void 0 !== e.__upscopeNoRemoteControl &&
          delete e.__upscopeNoRemoteControl,
        void 0 !== e.__upscopeScrollable && delete e.__upscopeScrollable,
        e.shadowRoot && this.removeIds(e.shadowRoot),
        t)
      )
        for (const t of G(e)) this.removeIdsFromElement(t, !1);
    }
    removeIds(e = document) {
      r("Removing all elements IDs for document (%o)", e),
        void 0 !== e.__upscopeRootId && delete e.__upscopeRootId;
      for (const t of G(e)) this.removeIdsFromElement(t);
      H(
        e,
        (e) => e.contentDocument && this.removeIds(e.contentDocument),
        null,
        !0
      ),
        (this.upscopeId = 0);
    }
  }
  const ye = {
    "#upscope___overlay": {
      display: "none",
      position: "fixed",
      "z-index": "2147483646",
      width: "10000px",
      height: "10000px",
      top: "-5000px",
      left: "-5000px",
      opacity: "0",
      "pointer-events": "none",
      transition: "opacity 0.3s",
      "-webkit-transition": "opacity 0.3s",
      background:
        'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMDBweCIgaGVpZ2h0PSIxMDAwMHB4IiB2aWV3Qm94PSIwIDAgMTAwMDAgMTAwMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogIDxnIGlkPSJvdmVybGF5IiBmaWxsPSIjMDAwMDAwIj4NCiAgICAgIDxwYXRoIGQ9Ik0wLDAgTDEwMDAwLDAgTDEwMDAwLDEwMDAwIEwwLDEwMDAwIEwwLDAgTDAsMCBaIE01MDAwLDUwNTQgQzUwMjkuODIzMzgsNTA1NCA1MDU0LDUwMjkuODIzMzggNTA1NCw1MDAwIEM1MDU0LDQ5NzAuMTc2NjIgNTAyOS44MjMzOCw0OTQ2IDUwMDAsNDk0NiBDNDk3MC4xNzY2Miw0OTQ2IDQ5NDYsNDk3MC4xNzY2MiA0OTQ2LDUwMDAgQzQ5NDYsNTAyOS44MjMzOCA0OTcwLjE3NjYyLDUwNTQgNTAwMCw1MDU0IEw1MDAwLDUwNTQgWiIgaWQ9ImlubmVyLWNpcmNsZSI+PC9wYXRoPg0KICA8L2c+DQo8L3N2Zz4=")',
      "background-size": "50000px 50000px",
      "background-position": "center center",
    },
    "#upscope___overlay.upscope___overlay--show": {
      opacity: "0.4",
      transition:
        "background-size 0.3s linear, opacity 0.3s, top 0.1s, left 0.1s",
      "-webkit-transition":
        "background-size 0.3s linear, opacity 0.3s, top 0.1s, left 0.1s",
      "background-size": "10000px 10000px",
    },
    "#upscope___overlay.upscope___overlay--white": {
      background:
        'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMDAiIGhlaWdodD0iMTAwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDEwMDAwdjEwMDAwSDBWMHptNTAwMCA1MDU0YzI5LjggMCA1NC0yNC4yIDU0LTU0cy0yNC4yLTU0LTU0LTU0LTU0IDI0LjItNTQgNTQgMjQuMiA1NCA1NCA1NHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik01MDAwIDUwNTRjMjkuOCAwIDU0LTI0LjIgNTQtNTRzLTI0LjItNTQtNTQtNTQtNTQgMjQuMi01NCA1NCAyNC4yIDU0IDU0IDU0eiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjYiLz48L2c+PC9zdmc+")',
    },
    "#upscope___overlay.upscope___overlay--white.upscope___overlay--show": {
      opacity: "0.4",
    },
    ".upscope___svg": {
      "pointer-events": "none",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      "z-index": "2147483645",
    },
    "#upscope___drag-protection": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      "z-index": "2147483645",
      display: "none",
    },
    "@keyframes upscope___svg____line__animation": {
      from: { "stroke-dashoffset": "10000" },
      to: { "stroke-dashoffset": "0" },
    },
    ".upscope___svg___line": {
      fill: "none",
      "stroke-width": "14px",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      opacity: "0.6",
      "stroke-dasharray": "10000",
      "stroke-dashoffset": "0",
      transition: "opacity 1s",
      animation: "upscope___svg____line__animation 5s forwards",
    },
    ".upscope___svg___line.upscope___svg___line--disappear": {
      opacity: "0",
      "stroke-dashoffset": "0",
      "stroke-dasharray": "0",
    },
    ".upscope___svg___line.upscope___svg___line--gone": {
      display: "none",
      opacity: "0",
    },
  };
  class be {
    connection;
    hidePointerTimeout;
    clearPathsTimeout;
    currentPointerObserverId;
    pointerPosition = { x: 0, y: 0 };
    cursors = {};
    blurTimeouts = {};
    dragProtectionElement;
    doubleClickTracker = {};
    container;
    overlayElement;
    enlargeCursorStylesheet;
    constructor(e) {
      (this.connection = e),
        r("Initiating browser instructions receiver"),
        this.injectElements();
    }
    observerGone(e) {
      this.currentPointerObserverId === e &&
        (delete this.currentPointerObserverId, this.hidePointer()),
        this.cursors[e] && this.hideCursor(e);
    }
    receiveInstruction(t) {
      switch ((this.injectElements(), t.action)) {
        case "dataBounce":
          "data" in t &&
            "string" == typeof t.data &&
            this.connection.performDataBounce(t.data);
          break;
        case "scroll":
          "elementId" in t &&
            "string" == typeof t.elementId &&
            "x" in t &&
            "number" == typeof t.x &&
            "y" in t &&
            "number" == typeof t.y &&
            this.scroll(t.elementId, t.x, t.y);
          break;
        case "click":
          "elementId" in t &&
            "string" == typeof t.elementId &&
            "x" in t &&
            "number" == typeof t.x &&
            "y" in t &&
            "number" == typeof t.y &&
            this.click(t.elementId, t.observerId, t.x, t.y);
          break;
        case "dragStart":
          "elementId" in t &&
            "string" == typeof t.elementId &&
            "x" in t &&
            "number" == typeof t.x &&
            "y" in t &&
            "number" == typeof t.y &&
            this.dragStart(t.elementId, t.observerId, t.x, t.y);
          break;
        case "dragEnd":
          "x" in t &&
            "number" == typeof t.x &&
            "y" in t &&
            "number" == typeof t.y &&
            this.dragEnd(t.observerId, t.x, t.y);
          break;
        case "type":
          "elementId" in t &&
            "string" == typeof t.elementId &&
            "newValue" in t &&
            "string" == typeof t.newValue &&
            this.type(t.elementId, t.observerId, t.newValue);
          break;
        case "drawLine":
          if (
            "lineData" in t &&
            "object" == typeof t.lineData &&
            null !== t.lineData
          ) {
            const { lineData: e } = t;
            "path" in e &&
              "string" == typeof e.path &&
              "color" in e &&
              "string" == typeof e.color &&
              this.drawLine({ path: e.path, color: e.color });
          }
          break;
        case "sendSnapshot":
          "forceAssets" in t && t.forceAssets && e("proxyAssets", ["*"]),
            this.connection.sendSnapshot();
          break;
        case "showPointer":
          (this.currentPointerObserverId = t.observerId), this.showPointer();
          break;
        case "hidePointer":
          delete this.currentPointerObserverId, this.hidePointer();
          break;
        case "movePointer":
          "x" in t &&
            "number" == typeof t.x &&
            "y" in t &&
            "number" == typeof t.y &&
            this.movePointer(t.x, t.y);
          break;
        case "hideCursor":
          this.hideCursor(t.observerId);
          break;
        case "moveCursor":
          "x" in t &&
            "number" == typeof t.x &&
            "y" in t &&
            "number" == typeof t.y &&
            "color" in t &&
            "string" == typeof t.color &&
            this.moveCursor(t.x, t.y, t.color, t.agentName, t.observerId);
          break;
        case "reload":
          this.reload();
          break;
        case "redirect":
          "url" in t && "string" == typeof t.url && this.redirect(t.url);
          break;
        case "console":
          e("allowRemoteConsole") &&
          "command" in t &&
          "string" == typeof t.command
            ? this.connection.consoleHandler?.execute(t.command)
            : a("error", "Remote console not enabled");
          break;
        default:
          a("error", "Browser instruction not recognized", t);
      }
    }
    scroll(t, o, n) {
      if (!e("allowRemoteScroll")) return a("error", "Remote scroll disabled");
      const s = window.scrollX,
        i = window.scrollY,
        c = document.querySelectorAll("html")[0];
      let l = this.selectElement(t);
      const u = l;
      if (!l) return r("Element not found during scroll (%s)", t);
      for (; l && l !== c; ) {
        if (
          P(l) &&
          ((0 !== n &&
            l.scrollTop + n > 0 &&
            l.scrollTop + n + l.clientHeight < l.scrollHeight) ||
            (0 !== o &&
              l.scrollLeft + o > 0 &&
              l.scrollLeft + o + l.clientWidth < l.scrollWidth))
        ) {
          const e = l.scrollTop,
            t = l.scrollLeft;
          if (
            ((l.scrollTop += n),
            (l.scrollLeft += o),
            (o -= l.scrollLeft - t),
            0 === (n -= l.scrollTop - e) && 0 === o)
          )
            return;
        }
        if (l.parentNode === l.ownerDocument) {
          const e = l.ownerDocument.__upscopeRootId,
            t = l.ownerDocument.defaultView?.parent.document,
            o = t?.querySelectorAll("iframe,frame");
          for (const t of o || [])
            if (t.__upscopeID === e) {
              l = t;
              break;
            }
        } else l = l.parentNode;
      }
      window.scrollTo(s + o, i + n),
        (o -= window.scrollX - s),
        (n -= window.scrollY - i),
        (0 === o && 0 === n) ||
          !u ||
          this.dispatchEvent(u, WheelEvent, "wheel", { deltaX: o, deltaY: n });
    }
    dragStart(t, o, n, s) {
      if (!e("allowRemoteClick")) return a("error", "Remote click disabled");
      const i = this.selectElement(t);
      if (!i) return r("Element not found during click (%s)", t);
      if (i.__upscopeNoRemoteControl)
        return r("Remote clicking not allowed on this element");
      if (!this.cursors[o]) return r("Cursor not active, ignored dragStart");
      if (this.cursors[o].dragging)
        return r("Already dragging, ignored dragStart");
      (this.cursors[o].dragging = i),
        this.dragProtectionElement &&
          (this.dragProtectionElement.style.display = "block");
      for (const e of ["mouseover", "mouseenter", "mousedown"])
        this.dispatchEvent(i, MouseEvent, e, { x: n, y: s });
      const c = this.findDraggable(i);
      if (c) {
        (this.cursors[o].dragging = c),
          (this.cursors[o].dataTransfer =
            "function" == typeof DataTransfer ? new DataTransfer() : void 0);
        for (const e of ["drag", "dragstart"])
          this.dispatchEvent(c, DragEvent, e, {
            dataTransfer: this.cursors[o].dataTransfer,
            x: n,
            y: s,
          });
      }
    }
    findDraggable(e) {
      do {
        if (e.draggable) return e;
        e = e.parentNode;
      } while (e);
    }
    dragEnd(e, t, o) {
      if (!this.cursors[e] || !this.cursors[e].dragging)
        return r("Ignoring dragEnd (not dragging)");
      if (this.cursors[e].dragging?.draggable) {
        for (const n of ["mousemove", "mouseup"])
          this.dispatchEvent(this.cursors[e].dragging, MouseEvent, n, {
            x: t,
            y: o,
          });
        this.dispatchEvent(this.cursors[e].dragging, DragEvent, "dragend", {
          dataTransfer: this.cursors[e].dataTransfer,
          x: t,
          y: o,
        }),
          this.cursors[e].previousHover &&
            this.dispatchEvent(
              this.cursors[e].previousHover,
              DragEvent,
              "drop",
              { dataTransfer: this.cursors[e].dataTransfer, x: t, y: o }
            );
      } else if (this.cursors[e].previousHover)
        for (const n of ["mousemove", "mouseup", "click"])
          this.dispatchEvent(this.cursors[e].previousHover, MouseEvent, n, {
            x: t,
            y: o,
          });
      this.dragProtectionElement &&
        (this.dragProtectionElement.style.display = "none"),
        delete this.cursors[e].dragging,
        delete this.cursors[e].dataTransfer;
    }
    click(t, o, n, s) {
      if (!e("allowRemoteClick")) return a("error", "Remote click disabled");
      const i = this.selectElement(t);
      if (!i) return r("Element not found during click (%s)", t);
      if (i.__upscopeNoRemoteControl)
        return r("Remote clicking not allowed on this element");
      if (
        (this.cursors[o] &&
          this.cursors[o].element &&
          this.cursors[o].element.clickAnimation(),
        Boolean(window.MSInputMethodContext) && Boolean(document.documentMode))
      )
        return i.click();
      i.ownerDocument.activeElement !== i &&
        T(i.ownerDocument.activeElement) &&
        !R("body", i.ownerDocument.activeElement) &&
        this.dispatchEvent(i.ownerDocument.activeElement, FocusEvent, "blur");
      for (const e of [
        "mouseover",
        "mouseenter",
        "mousedown",
        "mouseup",
        "click",
      ])
        this.dispatchEvent(i, MouseEvent, e, { x: n, y: s });
      this.doubleClickTracker[o]
        ? (this.dispatchEvent(i, MouseEvent, "dblclick", { x: n, y: s }),
          delete this.doubleClickTracker[o])
        : ((this.doubleClickTracker[o] = !0),
          setTimeout(() => delete this.doubleClickTracker[o], 200));
    }
    type(t, o, n) {
      if (!e("allowRemoteType")) return a("error", "Remote typing disabled");
      const s = this.selectElement(t);
      if (!R("input", s) && !R("textarea", s) && !R("select", s))
        return r("Element not found during click (%s)", t);
      if (s.__upscopeNoRemoteControl)
        return r("Remote typing not allowed on this element");
      this.blurTimeouts[t] ||
        (this.dispatchEvent(s, FocusEvent, "focus"),
        this.dispatchEvent(s, FocusEvent, "focusin"));
      const i = s.value;
      s.value = n;
      const c = s._valueTracker;
      if (
        (c && c.setValue && c.setValue(i), R("input", s) || R("textarea", s))
      ) {
        const e = n.slice(-1),
          t = e.charCodeAt(0);
        this.dispatchEvent(s, KeyboardEvent, "keydown", { which: t, key: e }),
          this.dispatchEvent(s, KeyboardEvent, "keypress", {
            which: t,
            key: e,
          }),
          this.dispatchEvent(s, KeyboardEvent, "keyup", { which: t, key: e }),
          this.dispatchEvent(s, KeyboardEvent, "input");
      } else this.dispatchEvent(s, Event, "change");
      clearTimeout(this.blurTimeouts[t]),
        (this.blurTimeouts[t] = setTimeout(() => {
          this.dispatchEvent(s, FocusEvent, "blur"),
            this.dispatchEvent(s, FocusEvent, "focusout"),
            delete this.blurTimeouts[t];
        }, 800));
    }
    showPointer() {
      r("Showing pointer"),
        this.hidePointerTimeout && clearTimeout(this.hidePointerTimeout),
        (this.overlayElement.style.display = "block"),
        (this.overlayElement.style.top = this.pointerPosition.y - 5e3 + "px"),
        (this.overlayElement.style.left = this.pointerPosition.x - 5e3 + "px;"),
        (this.hidePointerTimeout = setTimeout(() => {
          this.overlayElement.className = "upscope___overlay--show";
        }, 20));
    }
    hidePointer() {
      r("Hiding pointer"),
        (this.overlayElement.className = ""),
        (this.hidePointerTimeout = setTimeout(() => {
          this.overlayElement.style.display = "none";
        }, 300));
    }
    movePointer(e, t) {
      (this.pointerPosition = { x: e, y: t }),
        (this.overlayElement.style.left = this.pointerPosition.x - 5e3 + "px"),
        (this.overlayElement.style.top = ` ${this.pointerPosition.y - 5e3}px`),
        (this.overlayElement.style.display = "block");
    }
    hideCursor(e) {
      r("Hiding pointer"),
        this.cursors[e] &&
          (this.cursors[e].dragging && this.dragEnd(e, 0, 0),
          this.cursors[e].disableTimeout &&
            clearTimeout(this.cursors[e].disableTimeout),
          this.cursors[e].previousHover &&
            (this.dispatchEvent(
              this.cursors[e].previousHover,
              MouseEvent,
              "mouseleave"
            ),
            this.dispatchEvent(
              this.cursors[e].previousHover,
              MouseEvent,
              "mouseout"
            )),
          this.cursors[e].element && this.cursors[e].element.remove(),
          delete this.cursors[e]);
    }
    hideAll() {
      this.hidePointer();
      for (const e in this.cursors)
        this.cursors.hasOwnProperty(e) && this.hideCursor(e);
    }
    moveCursor(t, o, n, s, i) {
      if (
        ((this.cursors[i] = this.cursors[i] || {}),
        (this.cursors[i].position = { x: t, y: o }),
        this.cursors[i].element ||
          (r("Showing pointer"),
          (this.cursors[i].element = this.injectCursor(n, s || "Agent", i))),
        (this.cursors[i].element.style.zIndex = "2147483646"),
        (this.cursors[i].element.style.pointerEvents = "none"),
        (this.cursors[i].element.style.position = "fixed"),
        (this.cursors[i].element.style.top = `${this.cursors[i].position.y}px`),
        (this.cursors[
          i
        ].element.style.left = `${this.cursors[i].position.x}px`),
        this.cursors[i].disableTimeout &&
          clearTimeout(this.cursors[i].disableTimeout),
        (this.cursors[i].disableTimeout = setTimeout(() => {
          this.hideCursor(i);
        }, 2e4)),
        !e("allowRemoteClick") && !e("allowRemoteScroll"))
      )
        return;
      this.cursors[i].dragging &&
        this.dispatchEvent(this.cursors[i].dragging, MouseEvent, "mousemove", {
          x: t,
          y: o,
        });
      const a = (function (e, t, o = []) {
        let n = document;
        for (
          ;
          n === document || (n && "contentDocument" in n && n.contentDocument);

        ) {
          if (n !== document) {
            const { top: o, left: s } = n.getBoundingClientRect();
            (e -= s), (t -= o);
          }
          const s = n === document ? document : n.contentDocument;
          if (
            ((n = s.elementFromPoint(e, t)),
            n && o.includes(n) && "elementsFromPoint" in document)
          ) {
            for (const i of s.elementsFromPoint(e, t))
              if (((n = null), !o.includes(i))) {
                n = i;
                break;
              }
          } else n && o.includes(n) && (n = null);
        }
        return n;
      })(
        t,
        o,
        [this.cursors[i].dragging, this.dragProtectionElement].filter(Boolean)
      );
      if (
        this.cursors[i].previousHover &&
        a !== this.cursors[i].previousHover
      ) {
        this.cursors[i].dragging?.draggable &&
          this.dispatchEvent(
            this.cursors[i].previousHover,
            DragEvent,
            "dragleave",
            { dataTransfer: this.cursors[i].dataTransfer, x: t, y: o }
          ),
          this.dispatchEvent(
            this.cursors[i].previousHover,
            MouseEvent,
            "mouseout",
            { relatedTarget: a || null, x: t, y: o }
          );
        let e = this.cursors[i].previousHover;
        for (; e; )
          (a && e.contains && e.contains(a)) ||
            this.dispatchEvent(e, MouseEvent, "mouseleave", {
              relatedTarget: a || null,
              x: t,
              y: o,
            }),
            (e = e.parentElement);
      }
      if (T(a)) {
        if (a !== this.cursors[i].previousHover) {
          this.cursors[i].dragging?.draggable &&
            (this.dispatchEvent(a, DragEvent, "dragover", {
              dataTransfer: this.cursors[i].dataTransfer,
              x: t,
              y: o,
            }),
            this.dispatchEvent(a, DragEvent, "dragenter", {
              dataTransfer: this.cursors[i].dataTransfer,
              x: t,
              y: o,
            })),
            this.dispatchEvent(a, MouseEvent, "mouseover", {
              relatedTarget: this.cursors[i].previousHover || null,
              x: t,
              y: o,
            });
          let e = a;
          for (; e; )
            (this.cursors[i].previousHover &&
              e.contains &&
              e.contains(this.cursors[i].previousHover)) ||
              this.dispatchEvent(e, MouseEvent, "mouseenter", {
                relatedTarget: this.cursors[i].previousHover || null,
                x: t,
                y: o,
              }),
              (e = e.parentElement);
        }
        this.dispatchEvent(a, MouseEvent, "mousemove", { x: t, y: o });
      }
      this.cursors[i].previousHover = a;
    }
    drawLine(t) {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      o.setAttributeNS(null, "class", "upscope___svg"),
        this.container.append(o);
      const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
      n.setAttributeNS(null, "class", "upscope___svg___line"),
        n.setAttributeNS(null, "d", t.path),
        n.setAttributeNS(null, "stroke", t.color),
        o.append(n),
        clearTimeout(this.clearPathsTimeout),
        (this.clearPathsTimeout = setTimeout(() => {
          const e = this.container.querySelectorAll(".upscope___svg");
          for (const t of e)
            t.__removed ||
              ((t.__removed = !0),
              t
                .querySelector(".upscope___svg___line")
                ?.setAttributeNS(
                  null,
                  "class",
                  "upscope___svg___line upscope___svg___line--disappear"
                ),
              setTimeout(() => {
                t.remove();
              }, 2e3));
        }, e("drawingsTtlMs")));
    }
    redirect(t) {
      if (!e("allowAgentRedirect"))
        return a("error", "Agent URL changes are not allowed");
      if (!/^http(s)?:\/\//.test(t)) return a("warn", "Invalid redirect URL");
      if (t.includes("?")) {
        let e = t.slice(t.indexOf("?") + 1);
        (e = e.replace(/[&?]__upscope_[A-z_]+=[\w.\d]+/g, "")),
          (t = `${t.slice(0, Math.max(0, t.indexOf("?")))}?${e}`);
      }
      (t +=
        (t.includes("?") ? "&" : "?") +
        "__upscope_short_id=" +
        this.connection.shortId),
        e("needsProxy")(t) &&
          (t = e("fromProxy")
            ? `${location.origin}/${t}`
            : e("proxyRedirectEndpoint")
                .replace("URL", encodeURIComponent(t))
                .replace(
                  "TOKEN",
                  encodeURIComponent(this.connection.proxyToken)
                )),
        (location.href = t);
    }
    reload() {
      if (!e("allowAgentRedirect"))
        return a("error", "Agent URL changes are not allowed");
      location.reload();
    }
    selectElement(e) {
      try {
        const t = e.split(">"),
          o = [];
        let n,
          s = document,
          i = t.shift();
        for (; i; ) {
          if (!s) return;
          o.push(i);
          const e = G(s);
          for (const t of e)
            if (t.__upscopeID === o.join(">")) {
              n = t;
              break;
            }
          (i = t.shift()),
            i && (s = n.contentDocument || n.shadowRoot || void 0);
        }
        return n;
      } catch (t) {
        return void r("Error selecting element " + e + " (%o)", t);
      }
    }
    dispatchEvent(e, t, o, n = {}) {
      try {
        void 0 !== n.x &&
          void 0 !== n.y &&
          (delete (n = {
            clientX: n.x,
            clientY: n.y,
            layerX: n.x,
            layerY: n.y,
            offsetX: n.x,
            offsetY: n.y,
            pageX: n.x + (e.ownerDocument.defaultView?.scrollX || 0),
            pageY: n.y + (e.ownerDocument.defaultView?.scrollY || 0),
            ...n,
          }).x,
          delete n.y);
        const s = new t(o, {
          view: e.ownerDocument.defaultView,
          bubbles: !0,
          cancelable: !0,
          ...n,
        });
        (s.isUpscopeBrowserInstruction = !0), e.dispatchEvent(s);
      } catch (e) {
        r("Error dispatching event %o", e);
      }
    }
    injectElements() {
      if (
        !this.container ||
        !document.getElementById("upscope___remote-control-container")
      ) {
        (this.container = v(document, ye, {
          id: "upscope___remote-control-container",
        })),
          r("Injecting overlay element");
        const e = document.createElement("div");
        (e.id = "upscope___overlay"),
          this.container.append(e),
          (this.overlayElement = e),
          r("Injecting drag protection overlay");
        const t = document.createElement("div");
        (t.id = "upscope___drag-protection"),
          this.container.append(t),
          (this.dragProtectionElement = t);
      }
      e("enlargeCursor") &&
        !this.enlargeCursorStylesheet &&
        ((this.enlargeCursorStylesheet = document.createElement("style")),
        (this.enlargeCursorStylesheet.id =
          "upscope___enlarge-cursor-stylesheet"),
        (this.enlargeCursorStylesheet.textContent = w({
          "*": {
            cursor: `url('data:image/svg+xml;upscope_enlarged_cursor=true;base64,${btoa(
              `<svg width="29px" height="39px" viewBox="0 0 29 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M22.0377359,21.3349459 L16.4085968,21.3349459 L19.3824816,28.4981468 C19.4886918,28.7439431 19.4886918,28.9897387 19.3824816,29.2355351 C19.2762715,29.4813315 19.0992548,29.6568998 18.8514308,29.762241 L16.2492816,30.9209941 C16.0368612,31.0263353 15.8067394,31.0263353 15.5589154,30.9209941 C15.3110914,30.8156529 15.1340748,30.6400845 15.0278646,30.3942882 L12.213295,23.5997815 L7.59315257,28.2874644 C7.30992572,28.603488 6.97359297,28.6737151 6.58415594,28.4981468 C6.19471892,28.3225784 6,28.0241114 6,27.6027467 L6,4.9543911 C6,4.53302635 6.19471892,4.24333808 6.58415594,4.0853263 C6.97359297,3.92731451 7.30992572,3.98876381 7.59315257,4.26967338 L22.728102,19.7021575 C23.0113289,19.9830671 23.0732851,20.3254259 22.9139698,20.7292341 C22.7546546,21.1330423 22.4625766,21.3349459 22.0377359,21.3349459 Z" id="path-1"></path><filter x="-52.9%" y="-25.9%" width="205.9%" height="166.7%" filterUnits="objectBoundingBox" id="filter-2"><feMorphology radius="2" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology><feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="m" fill-rule="nonzero"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><path stroke="#FFFFFF" stroke-width="2" d="M17.9064919,22.3349459 L20.3004477,28.1014878 C20.5160364,28.6004131 20.5160364,29.1332688 20.3004477,29.632194 C20.0922256,30.114071 19.7263822,30.4769212 19.2582265,30.6757602 L16.6935608,31.8168825 C16.2094267,32.056969 15.6750953,32.056969 15.1677245,31.8413037 C14.683964,31.6356742 14.3181206,31.272824 14.1039943,30.776994 L11.8665846,25.3757789 L8.33784454,28.9548727 C7.76310634,29.5961637 6.95900423,29.764063 6.17316507,29.4097862 C5.42678447,29.0732984 5,28.4191189 5,27.6027467 L5,4.9543911 C5,4.1262685 5.44118974,3.46989866 6.20818129,3.15869635 C6.96247518,2.85264604 7.72495058,2.99195295 8.30710831,3.56948254 L23.4322983,18.9921522 C24.0074862,19.5626341 24.1463989,20.3302428 23.8441901,21.0962358 C23.5352294,21.8793426 22.8761449,22.3349459 22.0377359,22.3349459 L17.9064919,22.3349459 Z" fill="${e(
                "cursorColor"
              )}" fill-rule="evenodd"></path></g></g></svg>`
            )}') 2 2, default`,
          },
        })),
        document.head.append(this.enlargeCursorStylesheet));
    }
    injectCursor(e, t, o) {
      const n = w({
          "background-image": `url('data:image/svg+xml;base64,${btoa(
            `<svg width="29px" height="39px" viewBox="0 0 29 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M22.0377359,21.3349459 L16.4085968,21.3349459 L19.3824816,28.4981468 C19.4886918,28.7439431 19.4886918,28.9897387 19.3824816,29.2355351 C19.2762715,29.4813315 19.0992548,29.6568998 18.8514308,29.762241 L16.2492816,30.9209941 C16.0368612,31.0263353 15.8067394,31.0263353 15.5589154,30.9209941 C15.3110914,30.8156529 15.1340748,30.6400845 15.0278646,30.3942882 L12.213295,23.5997815 L7.59315257,28.2874644 C7.30992572,28.603488 6.97359297,28.6737151 6.58415594,28.4981468 C6.19471892,28.3225784 6,28.0241114 6,27.6027467 L6,4.9543911 C6,4.53302635 6.19471892,4.24333808 6.58415594,4.0853263 C6.97359297,3.92731451 7.30992572,3.98876381 7.59315257,4.26967338 L22.728102,19.7021575 C23.0113289,19.9830671 23.0732851,20.3254259 22.9139698,20.7292341 C22.7546546,21.1330423 22.4625766,21.3349459 22.0377359,21.3349459 Z" id="path-1"></path><filter x="-52.9%" y="-25.9%" width="205.9%" height="166.7%" filterUnits="objectBoundingBox" id="filter-2"><feMorphology radius="2" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology><feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="m" fill-rule="nonzero"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><path stroke="#FFFFFF" stroke-width="2" d="M17.9064919,22.3349459 L20.3004477,28.1014878 C20.5160364,28.6004131 20.5160364,29.1332688 20.3004477,29.632194 C20.0922256,30.114071 19.7263822,30.4769212 19.2582265,30.6757602 L16.6935608,31.8168825 C16.2094267,32.056969 15.6750953,32.056969 15.1677245,31.8413037 C14.683964,31.6356742 14.3181206,31.272824 14.1039943,30.776994 L11.8665846,25.3757789 L8.33784454,28.9548727 C7.76310634,29.5961637 6.95900423,29.764063 6.17316507,29.4097862 C5.42678447,29.0732984 5,28.4191189 5,27.6027467 L5,4.9543911 C5,4.1262685 5.44118974,3.46989866 6.20818129,3.15869635 C6.96247518,2.85264604 7.72495058,2.99195295 8.30710831,3.56948254 L23.4322983,18.9921522 C24.0074862,19.5626341 24.1463989,20.3302428 23.8441901,21.0962358 C23.5352294,21.8793426 22.8761449,22.3349459 22.0377359,22.3349459 L17.9064919,22.3349459 Z" fill="${e}" fill-rule="evenodd"></path></g></g></svg>`
          )}')`,
          width: "29px",
          height: "39px",
          position: "absolute",
          top: "-4px",
          left: "-7px",
          "z-index": "2",
          "pointer-events": "none",
        }),
        s = w({
          background: e,
          "box-shadow": "0 2px 4px 0 rgba(0,0,0,0.1)",
          "border-radius": "0 4px 4px 4px",
          color: "white",
          "font-family": "Arial, sans-serif",
          "letter-spacing": "0.4px",
          position: "absolute",
          top: "25px",
          left: "22px",
          padding: "0 4px",
          "z-index": "3",
          "font-weight": "700",
          "font-size": "14px",
          "pointer-events": "none",
          "white-space": "nowrap",
        }),
        i = w({
          background: e,
          content: "''",
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-35px 0 0 -35px",
          width: "70px",
          height: "70px",
          "border-radius": "50%",
          "pointer-events": "none",
          "z-index": "1",
          opacity: "0",
          display: "none",
        }),
        r = document.createElement("div"),
        a = document.createElement("div"),
        c = document.createElement("div"),
        l = document.createElement("div");
      (a.style.cssText = n),
        (c.style.cssText = s),
        (l.style.cssText = i),
        (c.textContent = t),
        r.append(l),
        r.append(c),
        r.append(a),
        (r.id = "upscope___cursor__" + o),
        this.container.append(r);
      const u = [];
      return (
        (r.clickAnimation = () => {
          for (; u.length > 0; ) clearTimeout(u.pop());
          (l.style.display = "none"),
            (l.style.transition = "none"),
            u.push(
              setTimeout(() => {
                (l.style.opacity = "0"),
                  (l.style.transform = "scale3d(0, 0, 1)"),
                  (l.style.transition = "all 0.15s");
              }, 5),
              setTimeout(() => {
                (l.style.display = "block"), (l.style.opacity = "0.5");
              }, 10),
              setTimeout(() => {
                (l.style.opacity = "0"),
                  (l.style.transform = "scale3d(1.2, 1.2, 1)");
              }, 160)
            );
        }),
        r
      );
    }
  }
  const ke = {
    "#upscope___promo-link, #upscope___promo-link *": {
      "text-decoration": "none",
      "font-size": "12px",
      "font-family":
        "'Avenir Next', Avenir, 'Lucida Grande', Helvetica, sans-serif",
      "text-transform": "uppercase",
      "letter-spacing": "0.4px",
      "-webkit-font-smoothing": "subpixel-antialiased",
      "font-weight": "600",
      "user-select": "none",
    },
    "#upscope___promo-link": {
      "z-index": "2147483647",
      display: "none",
      "border-radius": "0 3px 0 0",
      padding: "2px 2px 2px 5px",
      position: "fixed",
      bottom: "0",
      left: "0",
      background: "rgba(255, 255, 255, 0.8)",
      color: "#515151",
      border: "1px solid rgba(0, 0, 0, 0.5)",
      "border-left": "none",
      "border-bottom": "none",
    },
    "#upscope___promo-link.upscope___promo-link--active, #upscope___promo-link.upscope___promo-link--deactivating":
      { display: "block" },
    "#upscope___promo-link__upscope-link": {
      position: "relative",
      cursor: "pointer",
      color: "black",
    },
    "#upscope___promo-link__icon": { "font-weight": "700" },
    "#upscope___promo-link__stop-button": {
      background: "#d90000",
      color: "white",
      "border-radius": "2px",
      padding: "0 3px",
      cursor: "pointer",
      "text-shadow": "0.3px 0 0 white",
    },
    "#upscope___promo-link__upscope-link + #upscope___promo-link__stop-button":
      { "margin-left": "10px" },
    "#upscope___promo-link__stop-button:hover": { background: "#a30000" },
    "#upscope___promo-link__stop-button:active": { background: "#770000" },
    "#upscope___promo-link.upscope___promo-link--deactivating #upscope___promo-link__stop-button":
      { display: "none" },
    "#upscope___promo-link.upscope___promo-link--deactivating #upscope___promo-link__screensharing-by":
      { display: "none" },
    "#upscope___promo-link__thank-you, #upscope___promo-link__learn-more": {
      display: "none",
    },
    "#upscope___promo-link.upscope___promo-link--deactivating #upscope___promo-link__thank-you, #upscope___promo-link.upscope___promo-link--deactivating #upscope___promo-link__learn-more":
      { display: "inline" },
  };
  class Ie {
    connection;
    active = !1;
    innerContainer;
    deactivationTimeout;
    constructor(e) {
      (this.connection = e),
        this._injectElements(),
        setInterval(this._injectElements.bind(this), 1e3),
        (this.connection = e),
        (this.active = !1),
        e
          .listen(["sessionStart", "sessionContinue"], this.activate.bind(this))
          .listen(["sessionEnd"], this.deactivate.bind(this));
    }
    activate() {
      r("Activating info button"),
        this._injectElements(),
        (this.active = !0),
        (this.innerContainer.className = "upscope___promo-link--active"),
        clearTimeout(this.deactivationTimeout);
    }
    deactivate() {
      r("Deactivating info button"),
        this._injectElements(),
        (this.active = !1),
        e("showUpscopeLink")
          ? ((this.innerContainer.className =
              "upscope___promo-link--deactivating"),
            (this.deactivationTimeout = setTimeout(() => {
              this.innerContainer.className = "";
            }, 3e4)))
          : (this.innerContainer.className = "");
    }
    _injectElements() {
      if (
        !this.innerContainer ||
        !document.querySelector("#upscope___promo-link-container")
      ) {
        r("Adding info button element");
        const t = v(document, ke, { id: "upscope___promo-link-container" }),
          o = document.createElement("div");
        if (((o.id = "upscope___promo-link"), e("showUpscopeLink"))) {
          const e = document.createElement("a");
          (e.id = "upscope___promo-link__upscope-link"),
            (e.href = `https://upscope.com/?utm_source=upscope&utm_campaign=promo-link&utm_audience=${
              n().hostname
            }`),
            (e.target = "_blank"),
            (e.rel = "noopener");
          const t = document.createElement("span");
          (t.id = "upscope___promo-link__screensharing-by"),
            (t.textContent = "Screensharing by ");
          const s = document.createElement("span");
          (s.id = "upscope___promo-link__thank-you"),
            (s.textContent = "Thank you for using ");
          const i = document.createElement("span");
          (i.id = "upscope___promo-link__icon"), (i.textContent = "Upscope");
          const r = document.createElement("span");
          (r.id = "upscope___promo-link__learn-more"),
            (r.textContent = ". Click to learn more."),
            e.append(t),
            e.append(s),
            e.append(i),
            e.append(r),
            o.append(e);
        }
        if (e("showTerminateButton")) {
          const t = document.createElement("a");
          (t.id = "upscope___promo-link__stop-button"),
            (t.href = "#"),
            (t.__upscopeDialogButton = !0),
            (t.textContent = e("translationsStopSession")),
            t.addEventListener("click", (e) => {
              e.preventDefault(), this.connection.stopSession();
            }),
            o.append(t);
        }
        (this.innerContainer = o),
          this.active &&
            (this.innerContainer.className = "upscope___promo-link--active"),
          t.append(o);
      }
    }
  }
  const Ce = {
    "#upscope___request-agent-button": {
      "background-image":
        "url(\"data:image/svg+xml,%3Csvg width='19' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.856 24.393a.825.825 0 0 1-.477.514c-.23.096-.46.118-.686.065-3.568-.82-6.675-2.472-9.321-4.954a20.246 20.246 0 0 1-5.456-8.701C-.16 7.858-.288 4.35.536.795A1.1 1.1 0 0 1 .894.21a.829.829 0 0 1 .673-.202H6.22c.24-.004.46.077.66.242.2.165.317.37.35.615l.94 5.21a.938.938 0 0 1-.1.624 1.296 1.296 0 0 1-.472.493L4.57 8.68a15.243 15.243 0 0 0 2.076 5.138 15.98 15.98 0 0 0 3.707 4.085l2.67-2.061c.208-.13.426-.2.651-.207a.946.946 0 0 1 .606.184l4.286 3.127c.207.137.341.331.402.583a.978.978 0 0 1-.072.697l-2.039 4.168z' fill='%2362BB00' fill-rule='evenodd' fill-opacity='.95'/%3E%3C/svg%3E\"), linear-gradient(0deg, #F8F8F8 0%, #FFFFFF 98%)",
      "background-size": "19px 25px, cover",
      "background-position": "left 15px center, 0 0",
      "background-repeat": "no-repeat",
      "box-shadow": "0 1px 5px 0 rgba(0,0,0,0.20)",
      "z-index": "2147483645",
      display: "none",
      position: "fixed",
      padding: "10px 10px 10px 44px",
      "font-family": "'Avenir Next', 'Avenir', 'Helvetica', sans-serif",
      "border-radius": "3px",
      cursor: "pointer",
      transition: "opacity 0.3s, box-shadow 0.3s",
      "user-select": "none",
      opacity: "0.95",
    },
    "#upscope___request-agent-button span": { display: "block" },
    "#upscope___request-agent-button__title, #upscope___request-agent-button__requesting-title":
      { "font-size": "16px", "font-weight": "500", "padding-right": "10px" },
    "#upscope___request-agent-button__subtitle,#upscope___request-agent-button__requesting-subtitle":
      { "font-size": "14px" },
    "#upscope___request-agent-button__requesting-title,#upscope___request-agent-button__requesting-subtitle":
      { visibility: "hidden", height: "0" },
    ".upscope___request-agent-button--pending #upscope___request-agent-button__requesting-title,.upscope___request-agent-button--pending #upscope___request-agent-button__requesting-subtitle":
      { visibility: "visible", height: "auto" },
    ".upscope___request-agent-button--pending #upscope___request-agent-button__title,.upscope___request-agent-button--pending #upscope___request-agent-button__subtitle":
      { visibility: "hidden", height: "0" },
    "#upscope___request-agent-button.upscope___request-agent-button--visible": {
      display: "block",
    },
    "#upscope___request-agent-button:hover": {
      opacity: "1",
      "box-shadow": "0 3px 15px 0 rgba(0,0,0,0.50)",
    },
    "#upscope___request-agent-button.upscope___request-agent-button--pending": {
      "background-image":
        "url(\"data:image/svg+xml,%3Csvg width='19' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.856 24.393a.825.825 0 0 1-.477.514c-.23.096-.46.118-.686.065-3.568-.82-6.675-2.472-9.321-4.954a20.246 20.246 0 0 1-5.456-8.701C-.16 7.858-.288 4.35.536.795A1.1 1.1 0 0 1 .894.21a.829.829 0 0 1 .673-.202H6.22c.24-.004.46.077.66.242.2.165.317.37.35.615l.94 5.21a.938.938 0 0 1-.1.624 1.296 1.296 0 0 1-.472.493L4.57 8.68a15.243 15.243 0 0 0 2.076 5.138 15.98 15.98 0 0 0 3.707 4.085l2.67-2.061c.208-.13.426-.2.651-.207a.946.946 0 0 1 .606.184l4.286 3.127c.207.137.341.331.402.583a.978.978 0 0 1-.072.697l-2.039 4.168z' fill='%23d0d0d0' fill-rule='evenodd' fill-opacity='.95'/%3E%3C/svg%3E\"), linear-gradient(0deg, #F8F8F8 0%, #FFFFFF 98%)",
      opacity: "0.85",
      cursor: "default",
    },
    "#upscope___request-agent-button__close": {
      position: "absolute",
      top: "8px",
      right: "8px",
      height: "14px",
      width: "14px",
      opacity: "0.6",
    },
    "#upscope___request-agent-button__close::before,#upscope___request-agent-button__close::after":
      {
        content: "''",
        width: "2px",
        background: "#535353",
        position: "absolute",
        left: "6px",
        height: "10px",
        top: "2px",
        "-webkit-transform": "rotate(45deg)",
        transform: "rotate(45deg)",
      },
    "#upscope___request-agent-button__close::after": {
      "-webkit-transform": "rotate(-45deg)",
      transform: "rotate(-45deg)",
    },
    "#upscope___request-agent-button__close:hover": { opacity: "1" },
    ".upscope___request-agent-button--pending #upscope___request-agent-button__close":
      { display: "none" },
  };
  class Se {
    connection;
    visible = !1;
    requesting = !1;
    buttonElement;
    constructor(t) {
      (this.connection = t),
        this._pageMatches()
          ? (this._injectElements(),
            setInterval(this._injectElements.bind(this), 1e3),
            "always" === e("showAgentRequestButton")
              ? this.activate()
              : t.listen(["agentsAvailable"], this.activate.bind(this)),
            t
              .listen(
                ["sessionStart", "sessionContinue"],
                this.deactivate.bind(this)
              )
              .listen(["sessionEnd"], this.activate.bind(this))
              .listen(["agentRequestUpdate"], this.onStatusChange.bind(this)))
          : r("Not showing agent request button as the page does not match");
    }
    activate() {
      r("Activating agent request button"),
        this._injectElements(),
        (this.visible = !0),
        (this.requesting = !1),
        this._toggleClass();
    }
    deactivate() {
      r("Deactivating agent request button"),
        this._injectElements(),
        (this.visible = !1),
        this.requesting && this.connection.cancelRequestAgent(),
        this._toggleClass();
    }
    onCloseButtonClick(e) {
      e.stopPropagation(), this.deactivate();
    }
    _toggleClass() {
      const e =
        (this.requesting ? "upscope___request-agent-button--pending" : "") +
        (this.visible ? " upscope___request-agent-button--visible" : "");
      this.buttonElement.className !== e && (this.buttonElement.className = e);
    }
    _pageMatches() {
      for (const t of e("agentRequestButtonPages"))
        if (c(t, n().href)) return !0;
      return !1;
    }
    onStatusChange(t) {
      switch (((this.requesting = "pending" === t), this._toggleClass(), t)) {
        case "accepted":
          C(e("agentRequestResultTitle"), e("agentRequestAcceptedText")),
            this.deactivate();
          break;
        case "unavailable":
          null === e("unavailableAgentRequestRedirectTo")
            ? C(e("agentRequestResultTitle"), e("agentRequestNotAvailableText"))
            : e("unavailableAgentRequestRedirectImmediately") &&
              e("unavailableAgentRequestRedirectTo")
            ? (location.href = e("unavailableAgentRequestRedirectTo"))
            : e("unavailableAgentRequestRedirectTo") &&
              C(
                e("agentRequestResultTitle"),
                e("agentRequestNotAvailableText")
              ).then(() => {
                location.href = e("unavailableAgentRequestRedirectTo");
              });
      }
    }
    onButtonClick() {
      this.requesting
        ? this.connection.cancelRequestAgent()
        : this.connection.requestAgent();
    }
    _injectElements() {
      if (
        !this.buttonElement ||
        !document.querySelector("#upscope___request-agent-button-container")
      ) {
        r("Adding agent request button element");
        const t = document.createElement("div"),
          o = document.createElement("span"),
          n = document.createElement("span"),
          s = document.createElement("span"),
          i = document.createElement("span"),
          a = document.createElement("span"),
          c = v(document, Ce, {
            id: "upscope___request-agent-button-container",
          });
        (t.id = "upscope___request-agent-button"),
          (t.style.cssText = e("agentRequestButtonStyle")),
          t.addEventListener("click", this.onButtonClick.bind(this)),
          (o.id = "upscope___request-agent-button__close"),
          o.addEventListener("click", this.onCloseButtonClick.bind(this)),
          (n.textContent = e("agentRequestButtonTitle")),
          (n.id = "upscope___request-agent-button__title"),
          (s.textContent = e("agentRequestButtonSubtitle")),
          (s.id = "upscope___request-agent-button__subtitle"),
          (i.textContent = e("agentRequestButtonRequestingTitle")),
          (i.id = "upscope___request-agent-button__requesting-title"),
          (a.textContent = e("agentRequestButtonRequestingSubtitle")),
          (a.id = "upscope___request-agent-button__requesting-subtitle"),
          t.append(o),
          t.append(n),
          t.append(s),
          t.append(i),
          t.append(a),
          c.append(t),
          (this.buttonElement = t);
      }
      this._toggleClass();
    }
  }
  const Ee = {
    "#upscope___lookup-code-button": {
      background: "#464646",
      "background-image":
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAABGdBTUEAALGPC/xhBQAAAYZJREFUSA3tVjFugzAUjUlPUKZIyVSpa2+A2BAXqThBD9ETcIMeAbEhbtC1UqcgZSI3KPQ9ioekGNvUrhhiySHA83uPxxf+m77vU8wjpq9B7nRjOATAR2D3hvilsEYIcTBaLGMxAi8A2fIHCzS8LrkZ0sXLou4JQtGJa3Capvuu615xPQZsd33fxTlkT+CpgiB4KYqiURoazbzDyL0LYR0HjJ1h6ulOBWQyNBNF0UeWZQ9hGG5V2L9cb9v2K8/zz7quH6k5V9QxhXyaIT8flBr8jxErE5I1I5NJkuRniePfsiwHU6Sl5lxCjqXN6G6GdDkxoYYgvL+LoVvo6z4NPWMOpnyJ2PAG+CAVmAfMi2FD4hK7/qKWheTyqW241p+QLCSbp3KJXV1Cyr0MSZ1QTzvuxtzPuOf4GtQA95aacwlVNMDWYFzAU+dDth8jcfWrS5SKpg2aaXK6bgHpDA2aMiG2k+zgAHxjlNKo6yO5qUGtoYW1FeB3ynbNFB4mJt+OMqEpkv+49g2gcw5a2MSfIAAAAABJRU5ErkJggg==')",
      "background-size": "18px 14px",
      "background-position": "right 5px center",
      "background-repeat": "no-repeat",
      "box-shadow": "1px 1px 2px 0 rgba(0, 0, 0, 0.3)",
      width: "60px",
      height: "40px",
      position: "fixed",
      cursor: "help",
      display: "block",
      color: "white",
      "font-family": "Courier New",
      "font-weight": "bold",
      "text-align": "right",
      "line-height": "40px",
      "padding-right": "30px",
      "font-size": "18px",
      transition: "transform 0.5s",
      "z-index": "2147483645",
      transform: "translateX(-75px)",
    },
    "#upscope___lookup-code-button:hover": { transform: "translateX(-68px)" },
    "#upscope___lookup-code-button.upscope___lookup-code-button--active": {
      transform: "translateX(-5px)",
    },
    '#upscope___lookup-code-button[data-align="right"]': {
      "background-position": "left 5px center",
      "padding-left": "30px",
      "padding-right": "0",
      transform: "translateX(75px)",
      "text-align": "left",
    },
    '#upscope___lookup-code-button[data-align="right"]:hover': {
      transform: "translateX(68px)",
    },
    '#upscope___lookup-code-button[data-align="right"].upscope___lookup-code-button--active':
      { transform: "translateX(5px)" },
  };
  class xe {
    connection;
    linkElement;
    resetTimeout;
    sequence = 0;
    sequenceStartedAt;
    constructor(t) {
      if (((this.connection = t), e("injectLookupCodeButton"))) {
        if (!this.pageMatchesForButton())
          return void r(
            "Not showing lookup code button as the page does not match"
          );
        this.injectButtonElements();
      }
      e("lookupCodeElement") && this.populateElement(),
        e("enableLookupCodeOnKey") && this.listenForKeySequence(),
        this.listenForTargetChange();
    }
    async handleButtonClick(e) {
      e.preventDefault(),
        sessionStorage.setItem("__upscope:lookupCodeClick", "true"),
        (this.linkElement.textContent = await this.connection.getLookupCode()),
        (this.linkElement.className = "upscope___lookup-code-button--active"),
        this.resetTimeout && clearTimeout(this.resetTimeout),
        (this.resetTimeout = setTimeout(() => {
          this.linkElement.className = "";
        }, 5e3));
    }
    pageMatchesForButton() {
      for (const t of e("lookupCodeButtonPages")) if (c(t, n().href)) return !0;
      return !1;
    }
    populateElement() {
      let t = 0,
        o = !1;
      setInterval(async () => {
        if (o && t % 10 != 0) return;
        const n =
          "string" == typeof e("lookupCodeElement")
            ? document.querySelector(e("lookupCodeElement"))
            : e("lookupCodeElement");
        n
          ? ((n.textContent = await this.connection.getLookupCode()),
            (o = !0),
            t++)
          : (o = !1);
      }, 100);
    }
    listenForKeySequence() {
      const e = (t) => {
        t &&
          (t.__upscopeLookupSequenceListenerActive ||
            t.addEventListener("keyup", this.handleKeyUp.bind(this)),
          (t.__upscopeLookupSequenceListenerActive = !0),
          H(t, (t) => t.contentDocument && e(t.contentDocument), null, !0));
      };
      e(document), setInterval(() => e(document), 1e3);
    }
    handleKeyUp(t) {
      this.sequence > 0 && t.keyCode !== e("lookupCodeKey")
        ? ((this.sequence = 0), delete this.sequenceStartedAt)
        : t.keyCode === e("lookupCodeKey")
        ? ((!this.sequenceStartedAt ||
            Date.now() - this.sequenceStartedAt.getTime() > 1e4) &&
            ((this.sequenceStartedAt = new Date()), (this.sequence = 0)),
          this.sequence++)
        : ((this.sequence = 0), delete this.sequenceStartedAt),
        this.sequence === e("lookupCodeKeyRepetitions") &&
          (this.showAlert(),
          sessionStorage.setItem("__upscope:lookupCodeClick", "true"),
          (this.sequence = 0),
          delete this.sequenceStartedAt);
    }
    async showAlert() {
      const t = await this.connection.getLookupCode();
      C(
        e("lookupCodeKeyTitle").split("{%lookupCode%}").join(t),
        e("lookupCodeKeyMessage").split("{%lookupCode%}").join(t)
      );
    }
    listenForTargetChange() {
      "#upscope-lookup-code" === location.hash &&
        (r("Page had #upscope-lookup-code target at pageload"),
        this.showAlert(),
        sessionStorage.setItem("__upscope:lookupCodeClick", "true"),
        history.replaceState(
          "",
          document.title,
          window.location.pathname + window.location.search
        )),
        window.addEventListener("hashchange", () => {
          "#upscope-lookup-code" === location.hash &&
            (r("User clicked on #upscope-lookup-code link"),
            this.showAlert(),
            sessionStorage.setItem("__upscope:lookupCodeClick", "true"),
            history.back());
        });
    }
    injectButtonElements() {
      if (
        !this.linkElement ||
        !document.querySelector("#upscope___lookup-code-button-container")
      ) {
        r("Adding promo link element");
        const t = document.createElement("div"),
          o = v(document, Ee, { id: "upscope___lookup-code-button-container" });
        (t.id = "upscope___lookup-code-button"),
          (t.title = "Screenshare code (by upscope.com)"),
          (t.style.cssText = e("lookupCodeButtonStyle").split(";").join(";")),
          e("lookupCodeButtonStyle").includes("right") &&
            (t.dataset.align = "right"),
          t.addEventListener("click", this.handleButtonClick.bind(this)),
          o.append(t),
          (this.linkElement = t);
      }
    }
  }
  const Ae = window,
    Te = window,
    Le = window,
    Re = window;
  function De() {
    try {
      return Re.FrontChat("user_id");
    } catch (e) {
      return;
    }
  }
  const qe = window,
    Ne = window,
    Me = window,
    Pe = window;
  function Ue() {
    try {
      const { id: e } = Pe.LiveChatWidget.get("customer_data");
      return e;
    } catch (e) {
      return;
    }
  }
  const Oe = window,
    Fe = window,
    Be = window,
    We = window,
    ze = window,
    je = window,
    He = window,
    $e = window,
    Ke = [
      {
        id: "chatra",
        isLive: !1,
        detect: () => void 0 !== Ae.Chatra,
        live(e) {
          (0, Ae.Chatra)("updateIntegrationData", { "Screen share": e });
        },
      },
      {
        id: "drift",
        isLive: !1,
        detect: () => void 0 !== Te.drift,
        live(e) {
          Te.drift.on("ready", () => {
            Te.drift.api.setUserAttributes({ screenShare: e });
          });
        },
      },
      {
        id: "freshchat",
        isLive: !1,
        detect: () => void 0 !== Le.fcWidget,
        live: (e) =>
          Le.fcWidget.user.update({ meta: { cf_upscope_screenshare: e } }),
        getIntegrationIdentifier: async () =>
          (await Le.fcWidget.user.get()).data.alias,
      },
      {
        id: "front",
        isLive: !1,
        detect: () => "function" == typeof Re.FrontChat && Boolean(De()),
        getIntegrationIdentifier: async () => (
          await h(
            g(() => Boolean(De)),
            1e4
          ),
          De()
        ),
        onOpen(e) {
          const t = setInterval(() => {
            const o = document.querySelector("#front-chat-container");
            o && o.clientHeight > 100 && (clearInterval(t), e());
          }, 1e3);
        },
      },
      {
        id: "happyfox",
        isLive: !1,
        detect: () => void 0 !== qe.HFCHAT_CONFIG,
        rewrite() {
          let e = 0;
          const t = setInterval(() => {
            e > 3e3 &&
              (a(
                "info",
                "To integrate with HappyFoxChat, you need to add the following to the installation code.",
                "\n\n    window.HFCHAT_CONFIG.onload = function (data) {\n      window.__upscopeHappyFoxChat = this;\n    };\n\n",
                "To turn off this warning (and not integrate with Happy Fox Chat), add \"integrateWithLivechat: false\" to the Upscope('init') configuration."
              ),
              clearInterval(t)),
              void 0 !== qe.__upscopeHappyFoxChat
                ? clearInterval(t)
                : (e += 100);
          }, 100);
        },
        live(e) {
          const t = setInterval(() => {
            void 0 !== qe.__upscopeHappyFoxChat &&
              (clearInterval(t),
              qe.__upscopeHappyFoxChat.setCustomFields(
                { ScreenShare: e },
                (e, t) => {
                  e &&
                    (a("error", "HappyFox Chat error", e),
                    a(
                      "info",
                      'To integrate with HappyFoxChat, you need to create a custom field of type "text" named "ScreenShare"'
                    ));
                }
              ));
          }, 100);
        },
      },
      {
        id: "helpscout",
        isLive: !1,
        detect: () => "function" == typeof Ne.Beacon,
        live(e) {
          Ne.Beacon("identify", { Screenshare: e });
        },
      },
      {
        id: "intercom",
        isLive: !1,
        detect: () => void 0 !== Me.Intercom,
        live(e) {
          Me.Intercom("update", { screenshare: e }),
            "object" == typeof Me.intercomSettings &&
              (Me.intercomSettings.screenshare = e);
        },
        async onOpen(e) {
          await g(() => Boolean(Me.Intercom.booted)), Me.Intercom("onShow", e);
        },
        getUserId() {
          if (Me.intercomSettings && Me.intercomSettings.user_id)
            return Me.intercomSettings.user_id;
        },
        getIdentities() {
          if (Me.intercomSettings && Me.intercomSettings.name)
            return [Me.intercomSettings.name];
        },
        getIntegrationIdentifier: async () => (
          await h(
            g(() => Boolean(Me.Intercom("getVisitorId"))),
            1e4
          ),
          Me.Intercom("getVisitorId")
        ),
      },
      {
        id: "livechat",
        isLive: !1,
        detect: () =>
          void 0 !== Pe.__lc || (void 0 !== Pe.LiveChatWidget && Boolean(Ue())),
        async live(e) {
          return (
            (this.watchLink = e),
            void 0 !== Pe.LiveChatWidget
              ? Pe.LiveChatWidget.call("update_session_variables", {
                  Screenshare: this.watchLink,
                })
              : (await g(() => Pe.LC_API.is_loaded()),
                Pe.LC_API.update_custom_variables([
                  { name: "Screenshare", value: this.watchLink },
                ]))
          );
        },
        onOpen(e) {
          if (
            (Pe.LiveChatWidget && Pe.LiveChatWidget.on("ready", e), Pe.__lc)
          ) {
            const t = Pe.LC_API.on_chat_started;
            Pe.LC_API.on_chat_started = (o) => {
              "function" == typeof t && t(), e();
            };
          }
        },
        getCustomerData: () => Pe.LiveChatWidget.get("customer_data"),
        getUserId() {
          if (Pe.LiveChatWidget) {
            const { email: e } = this.getCustomerData();
            return e || void 0;
          }
          if (Pe.__lc) {
            if (!Pe.__lc.visitor) return;
            if (!Pe.__lc.visitor.email) return;
            return Pe.__lc.visitor.email;
          }
        },
        getIdentities() {
          if (Pe.LiveChatWidget) {
            const { name: e } = this.getCustomerData();
            return e ? [e] : void 0;
          }
          if (Pe.__lc) {
            if (!Pe.__lc.visitor) return;
            if (!Pe.__lc.visitor.name) return;
            return [Pe.__lc.visitor.name];
          }
        },
        async getIntegrationIdentifier() {
          let e;
          return (
            await h(
              g(() => {
                e = Pe.LiveChatWidget ? Ue() : Pe.LC_API.get_visitor_id();
                try {
                  return /^(?:[\dA-z]+-){4}[\dA-z]+$/.test(e);
                } catch (e) {
                  return !1;
                }
              }),
              1e4
            ),
            e || void 0
          );
        },
      },
      {
        id: "olark",
        isLive: !1,
        detect: () => void 0 !== Oe.olark,
        rewrite() {
          this.lastSentSnippet = [];
          const e = this;
          d(window, "olark", (...t) => {
            if ("api.chat.updateVisitorStatus" === t[0]) {
              let { snippet: o } = t[1];
              (e.lastSentSnippet = "object" == typeof o ? o : [o]),
                (o = e.lastSentSnippet.slice()),
                o.push("Screenshare: " + this.watchLink),
                (t[1].snippet = o);
            }
            Oe.__original__olark(...t);
          });
        },
        live(e) {
          (this.watchLink = e),
            Oe.olark("api.chat.updateVisitorStatus", {
              snippet: this.lastSentSnippet,
            });
        },
      },
      {
        id: "reamaze",
        isLive: !1,
        detect: () =>
          void 0 !== Fe._support &&
          document.documentElement.innerHTML.includes("reamaze"),
        live(e) {
          const t = setInterval(() => {
            if (void 0 !== Fe.Reamaze) {
              clearInterval(t);
              try {
                (Fe._support.custom_fields = Fe._support.custom_fields || {}),
                  (Fe._support.custom_fields["Screen share"] = {
                    type: "hidden",
                    value: e,
                  }),
                  Fe.Reamaze.reload();
              } catch (e) {
                a("error", "Error with reamaze api", e);
              }
            }
          }, 100);
        },
      },
      {
        id: "sendinblue",
        isLive: !1,
        detect: () => void 0 !== Be.SibConversations,
        live(e) {
          (0, Be.SibConversations)("updateIntegrationData", {
            "Screen share": e,
          });
        },
      },
      {
        id: "sfdc",
        isLive: !1,
        detect: () => void 0 !== We.embedded_svc,
        async live(t) {
          await g(() => We.embedded_svc.settings);
          const o = {
            label: e("sfdcFieldLabel"),
            value: t,
            transcriptFields: [e("sfdcFieldId")],
            displayToAgent: !0,
          };
          We.embedded_svc.settings.extraPrechatFormDetails
            ? "function" ==
              typeof We.embedded_svc.settings.extraPrechatFormDetails.push
              ? We.embedded_svc.settings.extraPrechatFormDetails.push(o)
              : a("error", "Error integrating with SFDC chat")
            : (We.embedded_svc.settings.extraPrechatFormDetails = [o]);
        },
      },
      {
        id: "tawk",
        isLive: !1,
        detect: () => void 0 !== ze.Tawk_API,
        live(e) {
          if (sessionStorage.getItem("upscope:added-tawk-event")) return;
          const t = setInterval(() => {
            if (
              "function" == typeof ze.Tawk_API.addEvent &&
              "function" == typeof ze.Tawk_API.getStatus &&
              "online" === ze.Tawk_API.getStatus()
            ) {
              clearInterval(t);
              try {
                ze.Tawk_API.addEvent("upscope", { Screenshare: e }),
                  sessionStorage.setItem("upscope:added-tawk-event", "true");
              } catch (e) {
                a("info", "Error with tawk api", e);
              }
            }
          }, 100);
        },
      },
      {
        id: "twilio_flex",
        isLive: !1,
        detect: () => void 0 !== je.Twilio,
        async getIntegrationIdentifier() {
          await h(
            g(() => Boolean(localStorage.getItem("TWILIO_WEBCHAT_WIDGET"))),
            1e4
          );
          const { conversationSid: e } = JSON.parse(
            localStorage.getItem("TWILIO_WEBCHAT_WIDGET")
          );
          return e;
        },
      },
      {
        id: "zendesk",
        isLive: !1,
        detect: () =>
          (void 0 !== He.$zopim && void 0 !== He.$zopim.livechat) ||
          void 0 !== He.zE,
        getUserId() {
          if (He.$zopim) {
            const e = He.$zopim.livechat.getEmail() || null;
            if (!e) return;
            return e;
          }
        },
        getIdentities() {
          if (He.$zopim) {
            const e = He.$zopim.livechat.getName() || null;
            if (!e) return;
            return [e];
          }
        },
        onOpen(e) {
          if (
            (He.$zopim && He.$zopim.livechat.setOnChatStart(e),
            void 0 !== He.zE)
          )
            switch (He.zE.widget) {
              case "classic":
                He.zE("webWidget:on", "open", e);
                break;
              case "messenger":
                He.zE("messenger:on", "open", e);
            }
        },
        getIntegrationIdentifier: async () => (
          await h(
            g(() => document.cookie.includes("__zlcmid=")),
            1e4
          ),
          document.cookie.split("__zlcmid=").pop()?.split(";").shift()?.trim()
        ),
      },
      {
        id: "zoho",
        isLive: !1,
        detect: () =>
          "object" == typeof $e.$zoho && void 0 !== $e.$zoho.salesiq,
        live(e) {
          const t = setInterval(() => {
            if (
              $e.$zoho.salesiq.visitor &&
              "function" == typeof $e.$zoho.salesiq.visitor.info
            ) {
              clearInterval(t);
              try {
                $e.$zoho.salesiq.visitor.info({ "Screen share": e });
              } catch (e) {
                a("info", "Error with zoho api", e);
              }
            }
          }, 100);
        },
      },
    ];
  class Qe {
    connection;
    integrations = [];
    integrationIds = [];
    integrationUserUniqueId;
    integrationUserIdentities;
    watchLink;
    constructor(e) {
      (this.connection = e), (this.connection = e), this.init();
    }
    init() {
      if (
        (r("Initiating live chat integration system"),
        this.trySetup(),
        this.integrations.length > 0)
      )
        return;
      let e = 0;
      const t = setInterval(() => {
        e++,
          (e > 20 && e < 40 && e % 4 != 0) ||
            (e > 40 && e % 15 != 0) ||
            (this.trySetup(), this.integrations.length > 0 && clearInterval(t));
      }, 500);
    }
    trySetup() {
      if ((this._detect(), 0 !== this.integrations.length)) {
        window.Upscope._integrations = this.integrationIds;
        for (const t of this.integrations)
          if (e("grabIdentityFromLivechat"))
            try {
              let e = t.getUserId?.(),
                o = t.getIdentities?.();
              (this.integrationUserUniqueId =
                e ?? this.integrationUserUniqueId),
                (this.integrationUserIdentities =
                  o ?? this.integrationUserIdentities),
                r("Retrieved identities from live chat %s (%o)", t.id, [e, o]);
            } catch (e) {
              r(
                "Error while retrieving identities from live chat %s. (%o)",
                t.id,
                e
              );
            }
        this.rewrite(),
          this.trackOpens(),
          this.getIntegrationIdentifier(),
          this.watchLink && this.live(this.watchLink);
      }
    }
    async live(e) {
      this.watchLink = e;
      for (const t of this.integrations)
        if (t.live && !t.isLive)
          try {
            await t.live(e),
              (t.isLive = !0),
              r("Watch link added to live chat %s", t.id);
          } catch (e) {
            r("Error adding watch link to live chat %s. (%o)", t.id, e);
          }
    }
    rewrite() {
      if (e("liveChatRewrite"))
        for (const e of this.integrations)
          if (e.rewrite)
            try {
              e.rewrite(), r("Patched live chat object %s", e.id);
            } catch (t) {
              r("Error while patching live chat object %s. (%o)", e.id, t);
            }
    }
    async trackOpens() {
      for (const e of this.integrations)
        if (e.onOpen)
          try {
            e.onOpen(() => {
              this.connection.connectToSocket(),
                sessionStorage.setItem("__upscope:integrationOpened", "true"),
                setTimeout(() => {
                  this.connection.historyCollector?.log(
                    "contact",
                    "Started chat conversation"
                  ),
                    this.connection.historyCollector?.save();
                }, 100);
            }),
              r("Tracked live chat (%s) opens", e.id);
          } catch (e) {
            r("Error while tracking live chat opens. (%o)", e);
          }
    }
    async getIntegrationIdentifier() {
      if (0 === this.integrations.length) return;
      const e = [];
      for (const t of this.integrations)
        if (t.getIntegrationIdentifier)
          try {
            const o = await t.getIntegrationIdentifier();
            o && e.push(`${t.id}:${o}`),
              r("Got unique identifier from %s: %s", t.id, o);
          } catch (e) {
            r("Could not get identifier from %s. (%o)", t.id, e);
          }
      e.length > 0 && this.connection.updateConnection({ integrationIds: e });
    }
    _detect() {
      (this.integrations = Ke.filter((e) => e.detect())),
        this.integrations
          ? ((this.integrationIds = this.integrations.map((e) => e.id)),
            r("Live chat integrations found: %O", this.integrationIds))
          : r("No live chat integration found");
    }
  }
  const Ge = ["error", "warn", "info", "log", "debug"],
    Ve =
      (navigator.userAgent && navigator.userAgent.includes("MSIE")) ||
      (navigator.appVersion && navigator.appVersion.indexOf("Trident/") > 0);
  class Ye {
    connection;
    console = [];
    consoleItemId = 0;
    watchInitiated = !1;
    constructor(e) {
      (this.connection = e), this.rewrite(), this.trackErrors();
    }
    add(e, t, o) {
      if (this.console.length > 500) return;
      let n = JSON.stringify(t);
      (!n || n.length > 1e5) &&
        void 0 !== t &&
        (n = JSON.stringify(t.toString().slice(0, 1e5)));
      const s = {
        id: this.consoleItemId++,
        timestamp: Date.now(),
        level: e,
        message: n,
        stack: o?.slice(0, 1e5),
      };
      this.console.push(s),
        "active" === this.connection.sessionStatus &&
          this.connection.sendBrowserEvent("root", { console: s }),
        500 === this.console.length &&
          a("warn", "Stopped logging console errors after 500 items.");
    }
    execute(e) {
      r("Received remote command %s", e),
        this.add("input", e),
        a("info", "Remote console »", e);
      const t = (e, t) => {
        if (t) return this.add("error", t.message);
        this.add("output", e), a("info", "Remote console «", e);
      };
      !(function (o, n, s, i) {
        try {
          t(eval.call(window, e));
        } catch (e) {
          t(null, e instanceof Error ? e : void 0);
        }
      })();
    }
    rewrite() {
      for (const e of Ge)
        d(window.console, e, (...t) => {
          if (this.console.length <= 500)
            try {
              const o = Ve
                ? null
                : new Error().stack?.toString().split("\n").splice(2);
              let n = t.join(" ");
              n && this.add(e, n, o?.map((e) => e.trim()).join("\n"));
            } catch (e) {
              a("error", "Error logging console item", e);
            }
          console[`__original__${e}`](...t);
        });
    }
    trackErrors() {
      window.addEventListener("error", (e) => {
        try {
          this.add(
            "error",
            e.message,
            Ve || null === e.error || void 0 === e.error.stack
              ? null
              : e.error.stack
                  .toString()
                  .split("\n")
                  .map((e) => e.trim())
                  .join("\n")
          );
        } catch (t) {
          a("error", "Error logging console error", e, t);
        }
      });
    }
  }
  class Je {
    connection;
    callback;
    audio;
    ringing = !1;
    constructor(e) {
      this.connection = e;
    }
    handleResponse(e) {
      this.callback && (this.callback(e), this.hide());
    }
    show(t) {
      (this.callback = t),
        (this.ringing = !0),
        S(void 0, e("callPromptText")).then(this.handleResponse.bind(this)),
        e("callRingtone") &&
          ((this.audio ??= new Audio(e("callRingtone"))),
          (this.audio.loop = !0),
          this.audio.play());
    }
    hide() {
      this.ringing &&
        (delete this.callback, (this.ringing = !1), E(), this.audio?.pause());
    }
  }
  const Xe = ["success", "error", "info", "warn", "contact"];
  class Ze {
    connection;
    storage = new et();
    autoSaveIsOn = !1;
    pendingSave = !1;
    pendingEvent = !1;
    slowScreenshotWait;
    currentPageview;
    constructor(e) {
      (this.connection = e), this.pageview(), this.addEventsTracking();
    }
    async pageview() {
      this.currentPageview && this.storage.add(this.currentPageview),
        (this.currentPageview = {
          version: e("version"),
          pageviewId: p(),
          screenshot: void 0,
          ts: String(new Date()),
          tse: String(new Date()),
          url: n().href,
          events: [],
        }),
        await g(() => "complete" === document.readyState),
        this.updateScreenshot(),
        sessionStorage.getItem("__upscope:historyAutoSaveOn") &&
          this.turnAutoSaveOn();
    }
    log(e, t) {
      if (!Xe.includes(e)) throw new Error(`Event log type ${e} not supported`);
      if (!t || t.trim().length < 1) throw new Error("Event log text required");
      this.addEvent("log", { type: e, text: t });
    }
    enterFrom() {
      const e = document.referrer,
        t = e && f(e).hostname;
      !t ||
        n().hostname.includes(t) ||
        t.includes(n().hostname) ||
        this.addEvent("enter_from", { url: e });
    }
    leaveTo() {
      const e = document.activeElement?.href,
        t = e && window.URL && f(e).hostname;
      !t ||
        n().hostname.includes(t) ||
        t.includes(n().hostname) ||
        this.addEvent("leave_to", { url: e });
    }
    click(e) {
      if (
        R("a", e) &&
        (!R("input", e) || !["button", "submit", "reset"].includes(e.type))
      )
        return;
      let o = t(e.id),
        n = t(e.textContent?.trim()) || t(e.value);
      (o = o ? _(o) : void 0),
        (n = n ? _(n) : void 0),
        (o || n) &&
          (r("Detected click %o", { label: n, id: o }),
          this.addEvent("click", { label: n, id: o }));
    }
    form(o) {
      let n = t(o.id) || t(o.name),
        s = t(o.labels?.[0]?.textContent?.trim());
      if (((n = n ? _(n) : void 0), (s = s ? _(s) : void 0), !n && !s)) return;
      let i,
        a,
        c = !1;
      if (
        R("input", o) &&
        ["text", "tel", "number", "search", "url", "email"].includes(o.type)
      )
        (a = "text"), (i = _(o.value));
      else if (R("input", o) && "password" === o.type)
        (a = "password"), (i = void 0), (c = !0);
      else if (R("input", o) && "checkbox" === o.type)
        (a = "bool"), (i = o.checked);
      else if (R("input", o) && "file" === o.type && o.value) a = "file";
      else {
        if (!R("select", o)) return;
        (a = "multiple"),
          (i = _(o.options[o.selectedIndex]?.textContent?.trim() || o.value));
      }
      e("maskElementMiddleware")(o) && ((i = void 0), (c = !0)),
        r("Detected form input %o", {
          label: s,
          id: n,
          value: i,
          redacted: c,
          formType: a,
        }),
        this.addEvent("form", {
          label: s,
          id: n,
          value: i,
          redacted: c,
          formType: a,
        });
    }
    async save() {
      if (!this.pendingSave) {
        this.pendingSave = !0;
        try {
          await g(() => !this.pendingEvent),
            await g(() => Boolean(this.connection.shortId));
          const e = await this.storage.get();
          e.length > 0 &&
            (await this.connection.sendPageviews(e), r("Saved pageviews")),
            this.storage.clear(),
            (this.currentPageview.events = []),
            (this.currentPageview.screenshot = void 0);
        } catch (e) {
          r("Could not save pageviews");
        }
        this.turnAutoSaveOn(), (this.pendingSave = !1);
      }
    }
    turnAutoSaveOn() {
      this.autoSaveIsOn ||
        ((this.autoSaveIsOn = !0),
        this.storage.noStorage(),
        sessionStorage.setItem("__upscope:historyAutoSaveOn", "true"),
        setInterval(this.save.bind(this), 1e3));
    }
    addEventsTracking() {
      this.enterFrom(),
        document.addEventListener(
          "click",
          (e) => e.target && this.click(e.target)
        ),
        document.addEventListener(
          "input",
          (e) => e.target && this.form(e.target)
        ),
        window.addEventListener("beforeunload", () => this.leaveTo());
    }
    addEvent(e, t) {
      (this.pendingEvent = !0),
        ("label" in t || "id" in t) &&
          (this.currentPageview.events = this.currentPageview.events.filter(
            (o) =>
              o.type !== e ||
              (o.details.id || o.details.label) !== (t.id || t.label)
          )),
        this.currentPageview.events.push({
          eventId: p(),
          ts: new Date(),
          type: e,
          details: t,
        }),
        (this.currentPageview.tse = String(new Date())),
        this.storage.add(this.currentPageview),
        this.updateScreenshot();
    }
    async updateScreenshot() {
      try {
        if (this.slowScreenshotWait) return;
        this.slowScreenshotWait = !0;
        const e = new Date();
        r("Taking screenshot for events");
        const t = JSON.stringify(
          await this.connection.browserWatcher.getSnapshot(window, !0)
        );
        t.length < 8e5 || this.autoSaveIsOn
          ? (this.currentPageview.screenshot = t)
          : r("Screenshot is too big: discarding"),
          await this.storage.add(this.currentPageview);
        const o = Date.now() - e.getTime(),
          n = Math.max(5e3, 19 * o);
        r("Screenshot took %sms, will wait %sms before next", o, n),
          setTimeout(() => delete this.slowScreenshotWait, n);
      } finally {
        this.pendingEvent = !1;
      }
    }
  }
  class et {
    useMemory = !1;
    pendingChanges = !1;
    pageviews = [];
    noStorage() {
      this.useMemory = !0;
    }
    async add(e) {
      await g(() => !this.pendingChanges);
      try {
        let t = await this.get();
        (this.pendingChanges = !0),
          t.some((t) => t.pageviewId === e.pageviewId)
            ? (t = t.map((t) => (t.pageviewId === e.pageviewId ? e : t)))
            : t.unshift(e),
          this.useMemory ||
            sessionStorage.setItem("__upscope:pageviews", JSON.stringify(t)),
          (this.pageviews = t);
      } catch (e) {
        try {
          sessionStorage.removeItem("__upscope:pageviews");
        } catch (e) {}
      } finally {
        this.pendingChanges = !1;
      }
    }
    async clear() {
      await g(() => !this.pendingChanges);
      try {
        (this.pendingChanges = !0),
          sessionStorage.removeItem("__upscope:pageviews"),
          delete this.pageviews;
      } finally {
        this.pendingChanges = !1;
      }
    }
    async get() {
      await g(() => !this.pendingChanges);
      try {
        if (this.useMemory) return this.pageviews || [];
        this.pendingChanges = !0;
        const e = sessionStorage.getItem("__upscope:pageviews"),
          t = e ? JSON.parse(e) : [],
          o = [];
        for (const e of t)
          if (
            (o.length > 5 && delete e.screenshot,
            Date.now() - new Date(e.tse).getTime() < 864e3 && o.push(e),
            30 === o.length)
          )
            break;
        return o;
      } finally {
        this.pendingChanges = !1;
      }
    }
  }
  class tt {
    connection;
    killers = [];
    active = !1;
    constructor(e) {
      (this.connection = e),
        e
          .listen(["sessionStart", "sessionContinue"], this.activate.bind(this))
          .listen(["sessionEnd"], this.deactivate.bind(this));
    }
    activate(e = document) {
      this.active = !0;
      const t = this._handleEvent.bind(this);
      e.addEventListener("click", t),
        e.addEventListener("submit", t),
        this.killers.push(() => {
          e.removeEventListener("click", t), e.removeEventListener("submit", t);
        }),
        H(e, (e) => e.contentDocument && this.activate(e.contentDocument));
    }
    deactivate() {
      this.active = !1;
      for (const e of this.killers) e();
      this.killers.length = 0;
    }
    redirect(e) {
      this.active && (e = this._rewriteLink(e)), (location.href = e);
    }
    _handleEvent(t) {
      if (t.__upscopeIsProxyRewritten) return;
      const o = t.target;
      let n;
      if (
        (s = t) &&
        "[object MouseEvent]" === Object.prototype.toString.apply(s) &&
        R("a", o) &&
        e("needsProxy")(o.href)
      ) {
        t.preventDefault();
        const e = o.href,
          s = o.target;
        (o.href = this._rewriteLink(o.href)),
          t.isUpscopeBrowserInstruction && (o.target = "_self"),
          (n = () => {
            (o.href = e), (o.target = s);
          });
      } else {
        if (
          !(
            (function (e) {
              return (
                !!e &&
                "[object SubmitEvent]" === Object.prototype.toString.apply(e)
              );
            })(t) &&
            R("form", o) &&
            e("needsProxy")(o.action)
          )
        )
          return;
        {
          t.preventDefault();
          const e = o.action;
          (o.action = this._rewriteLink(o.action)),
            (n = () => {
              o.action = e;
            });
        }
      }
      var s;
      const i = new t.constructor(t.type, t);
      (i.__upscopeIsProxyRewritten = !0), o.dispatchEvent(i), n();
    }
    _rewriteLink(t) {
      return (
        (t +=
          (t.includes("?") ? "&" : "?") +
          "__upscope_short_id=" +
          this.connection.shortId),
        e("proxyRedirectEndpoint")
          .replace("URL", encodeURIComponent(t))
          .replace("TOKEN", encodeURIComponent(this.connection.proxyToken))
      );
    }
  }
  function ot(t = "all") {
    return (
      !!e("ignoreBrowserSupport") ||
      ("function" == typeof window.MutationObserver &&
        "function" == typeof document.querySelectorAll &&
        ("audio" !== t || "function" == typeof window.RTCDataChannel))
    );
  }
  async function nt() {
    let e,
      t = 0;
    for (const e in navigator) t++;
    try {
      e = await navigator.getBattery();
    } catch (t) {
      e = null;
    }
    return (function (e) {
      let t = 0;
      for (let o = 0; o < e.length; o++)
        (t = (t << 5) - t + e.charCodeAt(o)), (t = Math.trunc(t));
      return String(Math.abs(t));
    })(
      [
        navigator.userAgent,
        navigator.platform,
        navigator.cookieEnabled,
        navigator.languages,
        navigator.deviceMemory,
        navigator.hardwareConcurrency,
        screen.width,
        screen.height,
        screen.colorDepth,
        screen.pixelDepth,
        screen.availTop,
        screen.availHeight,
        screen.availWidth,
        t,
        e ? e.charging : null,
        window.matchMedia
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
          : null,
        st(),
      ]
        .flat()
        .map(String)
        .join(":")
    );
  }
  function st() {
    const e = document.createElement("canvas"),
      t = e.getContext("2d"),
      o = "upscope.io";
    return (
      (t.textBaseline = "top"),
      (t.font = '14px "Arial"'),
      (t.textBaseline = "alphabetic"),
      t.rotate(0.05),
      (t.fillStyle = "#f60"),
      t.fillRect(125, 1, 62, 20),
      (t.fillStyle = "#069"),
      t.fillText(o, 2, 15),
      (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
      t.fillText(o, 4, 17),
      e.toDataURL()
    );
  }
  class it {
    connection;
    screenWakeLock;
    screenWakeListener;
    constructor(e) {
      (this.connection = e),
        e.listen(
          ["sessionStart", "sessionContinue"],
          this.keepScreenAwake.bind(this)
        ),
        e.listen(["sessionEnd"], this.releaseScreenAwake.bind(this));
    }
    keepScreenAwake() {
      "wakeLock" in navigator &&
        (navigator.wakeLock
          .request("screen")
          .then((e) => {
            r("Screen wake lock acquired"), (this.screenWakeLock = e);
          })
          .catch((e) => {
            r("Wake lock error: ", e.name, e.message);
          }),
        this.screenWakeListener ||
          ((this.screenWakeListener = () => {
            this.screenWakeLock &&
              "visible" === document.visibilityState &&
              this.keepScreenAwake();
          }),
          document.addEventListener(
            "visibilitychange",
            this.screenWakeListener
          )));
    }
    releaseScreenAwake() {
      this.screenWakeLock
        ?.release()
        .then(() => {
          r("Screen wake lock released");
        })
        .catch((e) => {
          r("Wake lock error: ", e.name, e.message);
        }),
        delete this.screenWakeLock,
        this.screenWakeListener &&
          (document.removeEventListener(
            "visibilitychange",
            this.screenWakeListener
          ),
          delete this.screenWakeListener);
    }
  }
  const rt = [
    "connect",
    "getWatchLink",
    "getLookupCode",
    "getUserId",
    "getShortId",
    "requestAgent",
  ];
  class at {
    agentsAvailable = !1;
    brokenConnectionTimeout;
    connectionActiveSince;
    connectionHasJustBeenReset = !1;
    currentUrl = n().href;
    doNotReconnect = !1;
    socketIdleDisconnected = !1;
    eventId = 0;
    listeners = {};
    lookupCode;
    pageLoadId = p();
    sessionStatus;
    shortId;
    shortIdFromQueryString;
    socketShouldBeOpen = !1;
    socketStatus;
    uniqueConnectionId;
    waitBeforeReconnect = 0;
    ws;
    connected = !1;
    instrumentedQueuePush = !1;
    sessionActiveAfterDisconnect = !1;
    idlenessReporterActive = !1;
    urlChangesInterval;
    reconnectTimeout;
    lastActivityAt = new Date();
    callToken;
    sessionRatingInfo;
    proxyToken;
    idleDisconnectManagerActive = !1;
    phoneController = new Je(this);
    consoleHandler =
      e("trackConsole") && !e("fromProxy") ? new Ye(this) : void 0;
    browserWatcher = new we(this);
    browserInstructionsReceiver = new be(this);
    integration =
      e("integrateWithLivechat") && !e("fromProxy") ? new Qe(this) : void 0;
    linkProxyRewrite =
      e("rewriteExternalLinks") && !e("fromProxy") ? new tt(this) : void 0;
    lookupCodeController = new xe(this);
    historyCollector = e("collectHistory") ? new Ze(this) : void 0;
    requestAgentButtonController =
      "never" !== e("showAgentRequestButton") ? new Se(this) : void 0;
    terminateButtonController =
      e("showUpscopeLink") || e("showTerminateButton") ? new Ie(this) : void 0;
    screenWakeLock = e("screenWakeLock") && e("beta") ? new it(this) : void 0;
    constructor() {
      r("Setting up Upscope connection manager"),
        this.checkQueryString(),
        this.lookForNamedCall(),
        this.startConnectionManager();
    }
    async startConnectionManager(t = !0) {
      if (
        (await this.setRegion(),
        t &&
          (e("autoconnect") ||
            (await this.hasRecentlyBeenConnected()) ||
            this.isPriorityConnection()))
      )
        this.connectToSocket(this.isPriorityConnection());
      else {
        const e = setInterval(async () => {
          if (this.socketStatus || this.doNotReconnect)
            return void clearInterval(e);
          const o =
              t &&
              ((await this.hasRecentlyBeenConnected()) ||
                this.isPriorityConnection()),
            n = window.Upscope.q.some((e) => rt.includes(e[0]));
          (o || n) && (this.connectToSocket(!0), clearInterval(e));
        }, 1e3);
      }
    }
    async connectToSocket(t = !0) {
      if (
        !this.doNotReconnect &&
        !this.socketConnected() &&
        "connecting" !== this.socketStatus
      ) {
        if (
          ((this.socketStatus = "connecting"),
          window.Upscope.q.some((e) => "reset" === e[0])
            ? (r(
                'A "reset" command is waiting in the Queue during connection. Resetting ids'
              ),
              (window.Upscope.q = window.Upscope.q.filter(
                (e) => "reset" !== e[0]
              )),
              await this.resetIdentities())
            : await this.getIdsFromStorage(),
          window.Upscope.q.some((e) => "updateConnection" === e[0]))
        ) {
          r(
            'Some "updateConnection" command is waiting in the Queue during connection. Updating connection details before we connect.'
          );
          const e = window.Upscope.q
            .filter((e) => "updateConnection" === e[0])
            .map((e) => e[1]);
          window.Upscope.q = window.Upscope.q.filter(
            (e) => "updateConnection" !== e[0]
          );
          for (const t of e) this.updateConnection(t);
        }
        if ((t && Y.set("lastConnectedAt", new Date()), !ot("all")))
          return (this.socketStatus = void 0), this.reportUnsupportedBrowser();
        r("Setting up websocket connection"),
          (this.socketShouldBeOpen = !0),
          (this.socketIdleDisconnected = !1),
          (this.ws = new WebSocket(
            e("dataEndpoint") +
              "?apiKey=" +
              e("apiKey") +
              "&version=" +
              e("version") +
              (this.isPriorityConnection() ? "&priority=1" : "")
          )),
          this.ws.addEventListener("open", async () => {
            r("Websocket connection opened"),
              (this.waitBeforeReconnect = 0),
              (this.socketStatus = "connected"),
              this.emit("hello", await this.encodeConnectionInfo()),
              this.onServerPing();
          }),
          this.ws.addEventListener("close", () => {
            r("Websocket connection closed"),
              this.socketConnected &&
                (r(
                  "Will end session in 10 seconds after web socket connection closed"
                ),
                (this.sessionActiveAfterDisconnect = !1),
                setTimeout(() => {
                  if (
                    this.socketConnected() &&
                    this.sessionActiveAfterDisconnect
                  )
                    return r(
                      "Socket connected again, will not be ending session"
                    );
                  this.handleEndSession();
                }, 2e4)),
              (this.socketStatus = void 0),
              this.socketShouldBeOpen &&
                !this.socketIdleDisconnected &&
                this.attemptReconnect();
          }),
          this.ws.addEventListener("error", () => {
            r("Websocket connection error");
          }),
          this.ws.addEventListener(
            "message",
            this.handleSocketMessage.bind(this)
          ),
          this.startIdleDisconnectManager();
      }
    }
    onHandshakeComplete() {
      (this.socketStatus = "ready"),
        (this.connectionHasJustBeenReset = !1),
        this.processQueue(),
        this.instrumentQueuePush(),
        this.startUrlChangesInterval(),
        this.reportPageFocus(),
        this.integration?.live(this.getWatchLink()),
        this.fireEvent("connection");
    }
    instrumentQueuePush() {
      if (this.instrumentedQueuePush) return;
      this.instrumentedQueuePush = !0;
      const e = window.Upscope.q.push;
      window.Upscope.q.push = (...t) => (
        e.call(window.Upscope.q, ...t),
        "ready" === this.socketStatus && this.processQueue(),
        window.Upscope.q.length
      );
    }
    socketConnected() {
      return "connected" === this.socketStatus || "ready" === this.socketStatus;
    }
    async emit(e, t) {
      await this.waitForSocketWritable(),
        "pong" !== e && this.touchLastActivityAt(),
        "hello" !== e && (await this.waitForConnectionReady());
      const o = JSON.stringify({ c: e, d: t });
      this.ws.send(o);
    }
    async waitForSocketWritable() {
      if (
        (this.socketConnected() || this.connectToSocket(!1),
        !this.ws || 1 !== this.ws.readyState)
      )
        return g(() => 1 === this.ws?.readyState);
    }
    async waitForConnectionReady() {
      if (
        (this.socketConnected() || this.connectToSocket(!1),
        "ready" !== this.socketStatus)
      )
        return g(() => "ready" === this.socketStatus);
    }
    attemptReconnect() {
      if (this.reconnectTimeout || this.doNotReconnect) return;
      (this.waitBeforeReconnect += 1e3), (this.socketStatus = "reconnecting");
      const e = Math.floor(15 * Math.random()) - 10,
        t = this.isPriorityConnection()
          ? 500
          : this.waitBeforeReconnect * (e > 0 ? e : 1);
      r("Waiting %d seconds before reconnecting", Math.ceil(t / 1e3)),
        (this.reconnectTimeout = setTimeout(() => {
          this.connectToSocket(!1), delete this.reconnectTimeout;
        }, t));
    }
    startIdleDisconnectManager() {
      if (!e("disconnectAfterSeconds") || e("disconnectAfterSeconds") < 1)
        return;
      if (this.idleDisconnectManagerActive) return;
      (this.idleDisconnectManagerActive = !0), this.touchLastActivityAt();
      const t = (e) => {
        e.__upscopeIdleManagerActive ||
          (r("Adding event listeners to check for page activeness"),
          e.document.addEventListener(
            "mousemove",
            this.touchLastActivityAt.bind(this),
            !0
          ),
          e.document.addEventListener(
            "scroll",
            this.touchLastActivityAt.bind(this),
            !0
          ),
          e.document.addEventListener(
            "keydown",
            this.touchLastActivityAt.bind(this),
            !0
          ),
          (e.__upscopeIdleManagerActive = !0)),
          H(e.document, (e) => (e.contentWindow ? t(e.contentWindow) : null));
      };
      let o = new Date();
      t(window),
        setInterval(() => {
          const e =
            (Date.now() - this.lastActivityAt.getTime()) / 1e3 < 20 ? 10 : 60;
          (Date.now() - o.getTime()) / 1e3 < e || (t(window), (o = new Date()));
        }, 1e3),
        setInterval(() => {
          if (!this.socketShouldBeOpen) return;
          const t =
            (Date.now() - this.lastActivityAt.getTime()) / 1e3 <
            e("disconnectAfterSeconds");
          t && !1 === this.doNotReconnect && !this.socketStatus
            ? (this.connectToSocket(!1),
              r("Reconnecting to server after activity"))
            : t ||
              !this.socketConnected() ||
              this.sessionStatus ||
              ((this.socketIdleDisconnected = !0),
              this.ws?.close(),
              this.startConnectionManager(!1),
              r("Disconnecting from server due to inactivity"));
        }, 1e3);
    }
    async resetConnection(e = !0) {
      this.fireEvent("connectionReset"),
        await this.stopSession(),
        await this.resetIdentities(),
        (this.connectionHasJustBeenReset = !0),
        this.ws?.close(),
        e
          ? this.connectToSocket()
          : ((this.socketShouldBeOpen = !1), this.startConnectionManager(!1));
    }
    async setRegion() {
      const t =
        e("region") ||
        (await Y.get("region")) ||
        window.Upscope.__defaultRegion;
      t &&
        (function (t) {
          let o = e("regionWhitelist");
          return null === o || o.includes(t);
        })(t) &&
        (e("dataEndpoint", `${l(`data--${t}`, "ws")}/session`),
        e("pageviewsEndpoint", `${l(`data-support--${t}`)}/pageviews`),
        e("region", t),
        Y.set("region", t));
    }
    async getIdsFromStorage() {
      if (
        (r("Finding saved IDs"),
        (this.uniqueConnectionId = t(
          sessionStorage.getItem("__upscope:uniqueConnectionId")
        )),
        (this.connectionActiveSince = sessionStorage.getItem(
          "__upscope:connectionActiveSince"
        )
          ? new Date(sessionStorage.getItem("__upscope:connectionActiveSince"))
          : void 0),
        this.connectionActiveSince ||
          ((this.connectionActiveSince = new Date()),
          sessionStorage.setItem(
            "__upscope:connectionActiveSince",
            String(this.connectionActiveSince)
          )),
        (this.shortId = t(await Y.get("shortId"))),
        (this.lookupCode = t(await Y.get("lookupCode"))),
        !this.shortId &&
          this.shortIdFromQueryString &&
          ((this.shortId = this.shortIdFromQueryString),
          Y.set("shortId", this.shortId)),
        this.lookupCode)
      ) {
        const e = await Y.get("lookupCodeSetAt");
        (!e || Date.now() - new Date(e).getTime() > 36e5) &&
          delete this.lookupCode;
      }
      r(
        "Found IDs: shortID (%s), uniqueConnectionId (%s), lookupCode (%s)",
        this.shortId,
        this.uniqueConnectionId,
        this.lookupCode
      );
    }
    async encodeConnectionInfo() {
      const t = this.integration?.integrationUserIdentities,
        s = this.integration?.integrationUserUniqueId;
      let i;
      try {
        e("useFingerprinting") && (i = await h(nt(), 1e3));
      } catch (e) {
        r("Error with fingerprinting browser %o", e);
      }
      return {
        activeSince: String(this.connectionActiveSince),
        agentPrompt: e("agentPrompt"),
        allowAgentRedirect: e("allowAgentRedirect"),
        allowRemoteClick: e("allowRemoteClick"),
        allowRemoteConsole: e("allowRemoteConsole"),
        allowRemoteScroll: e("allowRemoteScroll"),
        allowRemoteType: e("allowRemoteType"),
        apiKey: e("apiKey"),
        audioSupported: ot("audio"),
        callName: e("callName"),
        currentUrl: n().href,
        fingerprint: i,
        hasFocus: "visible" === document.visibilityState,
        identities: void 0 === e("identities") ? t : e("identities"),
        integration: this.integration?.integrationIds?.join(",") ?? null,
        integrationIds: o(e("integrationIds")),
        jsConfiguration: e("jsConfiguration"),
        lookupCode: this.lookupCode,
        proxied: !0 === e("fromProxy"),
        requireAuthorizationForSession: e("requireAuthorizationForSession"),
        reset: this.connectionHasJustBeenReset,
        shortId: this.shortId,
        tags: o(e("tags")),
        timestamp: Date.now(),
        uniqueConnectionId: this.uniqueConnectionId,
        uniqueId: void 0 === e("uniqueId") ? s : e("uniqueId"),
        version: e("version"),
      };
    }
    handleSocketMessage(e) {
      const { c: t, d: o } = JSON.parse(e.data);
      switch (
        ("ping" !== t && r("Received instruction %s with data %O", t, o), t)
      ) {
        case "ping":
          return this.onServerPing(), void this.emit("pong");
        case "youAre":
          return (async (e) => {
            const [t, o] = e;
            this.shortId !== t && Y.set("shortId", t),
              this.uniqueConnectionId !== o &&
                sessionStorage.setItem("__upscope:uniqueConnectionId", o),
              (this.uniqueConnectionId = o),
              (this.shortId = t),
              this.onHandshakeComplete();
          })(o);
        case "apiKeyError":
        case "dataError":
          return ((e) => {
            const [t, o] = e;
            a(t, o);
          })(o);
        case "welcomeBack":
          this.onHandshakeComplete();
          break;
        case "doNotReconnect":
          this.doNotReconnect = !0;
          break;
        case "beginSession":
          return this.onServerBeginSession(o);
        case "continueSession":
          return this.onServerContinueSession();
        case "sessionUpdate":
          return this.onServerSessionUpdate(o);
        case "endSession":
          return this.handleEndSession();
        case "browserInstruction":
          return this.onServerBrowserInstruction(o);
        case "newObserver":
          return this.fireEvent("newObserver", [o]);
        case "observerGone":
          return (
            this.fireEvent("observerGone", [o]),
            this.browserInstructionsReceiver.observerGone(o)
          );
        case "callStart":
          return this.onCallStart(o);
        case "callEnd":
          return this.onServerCallEnd();
        case "callAccepted":
          return this.onServerCallAccepted();
        case "agentsAvailable":
          return (
            (this.agentsAvailable = !0),
            this.fireEvent("agentsAvailable"),
            void r("Agents are available")
          );
        case "requestStatus":
          return this.onServerRequestStatus(o);
        case "sessionRatingToken":
          this.sessionRatingInfo = o;
          break;
        case "proxyToken":
          this.proxyToken = o.token;
          break;
        case "closeRatingScreen":
          a("info", "Closing rating screen");
          break;
        default:
          return a("error", "Unrecognized connection message", t);
      }
    }
    async reportUnsupportedBrowser() {
      const e = new XMLHttpRequest();
      e.open("POST", `${l("data")}/unsupported-user/`),
        e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        e.send(JSON.stringify({ user: await this.encodeConnectionInfo() })),
        e.addEventListener("load", () => {
          if (e.status > 299)
            return a(
              "error",
              "Problem reporting unsupported browser",
              e.status,
              e.response
            );
          const { shortId: t } = JSON.parse(e.response);
          (this.shortId = t),
            Y.set("shortId", t),
            this.integration?.live(this.getWatchLink());
        });
    }
    async sendPageviews(t) {
      return new Promise((o, n) => {
        const s = {
            user: { apiKey: e("apiKey"), shortId: this.shortId },
            pageviews: t,
          },
          i = new XMLHttpRequest();
        i.open("POST", e("pageviewsEndpoint")),
          i.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
          i.send(JSON.stringify(s)),
          i.addEventListener("load", () => {
            i.status > 299 &&
              (r(
                "Pageview reporting returned code %d (%o)",
                i.status,
                i.response
              ),
              n(new Error("Problem reporting pageviews"))),
              200 === i.status && o();
          });
      });
    }
    onServerPing() {
      this.connected &&
        (this.brokenConnectionTimeout &&
          (clearInterval(this.brokenConnectionTimeout),
          delete this.brokenConnectionTimeout),
        (this.brokenConnectionTimeout = setTimeout(() => {
          r(
            "Disconnecting because the server has not sent a ping for too long"
          ),
            this.ws?.close();
        }, 6e4)));
    }
    isPriorityConnection() {
      return Boolean(
        sessionStorage.getItem("__upscope:everActive") ||
          sessionStorage.getItem("__upscope:integrationOpened") ||
          sessionStorage.getItem("__upscope:lookupCodeClick") ||
          sessionStorage.getItem("__upscope:namedCall") ||
          e("fromProxy")
      );
    }
    async hasRecentlyBeenConnected() {
      const e = await Y.get("lastConnectedAt");
      return !!e && Date.now() - new Date(e).getTime() < 864e5;
    }
    checkQueryString() {
      if (!location.search.includes("__upscope_")) return;
      const t =
        (location.search.includes("__upscope_call_for=") &&
          location.search
            .split(/[?|&]__upscope_call_for=/)
            .pop()
            .split("&")
            .shift()) ||
        void 0;
      t && e("callName", t);
      const o =
        (location.search.includes("__upscope_unique_id=") &&
          location.search
            .split(/[?|&]__upscope_unique_id=/)
            .pop()
            .split("&")
            .shift()) ||
        void 0;
      o && e("uniqueId", o);
      const n =
        (location.search.includes("__upscope_short_id=") &&
          location.search
            .split(/[?|&]__upscope_short_id=/)
            .pop()
            .split("&")
            .shift()) ||
        void 0;
      n && (this.shortIdFromQueryString = n);
      let s = location.search.replace(/[&?]__upscope_[A-z_]+=[^&]+/g, "");
      s.startsWith("&") && (s = "?" + s.slice(1)),
        window.history &&
          window.history.replaceState(
            null,
            "",
            location.origin + location.pathname + s
          );
    }
    async lookForNamedCall() {
      if (!e("callName")) return;
      const t = await Y.get("waitingForCallAt");
      (t && Date.now() - new Date(t).getTime() < 864e5) ||
        (Y.set("waitingForCallAt", new Date()),
        this.fireEvent("waitingForCall"),
        sessionStorage.setItem("__upscope:namedCall", "true"));
    }
    startUrlChangesInterval() {
      this.urlChangesInterval =
        this.urlChangesInterval ||
        setInterval(() => {
          this.currentUrl !== n().href &&
            ((this.currentUrl = n().href),
            r("Detected url changed to %s", this.currentUrl),
            this.emit("connectionUpdate", { currentUrl: this.currentUrl }));
        }, 1e3);
    }
    async onServerBeginSession(t) {
      this.sessionActiveAfterDisconnect = !0;
      let o = !0;
      sessionStorage.setItem("__upscope:everActive", "true"),
        r("Starting screen share"),
        e("requireAuthorizationForSession") &&
          (r("Will request authorization from user for screen share"),
          this.emit("sessionStatusUpdate", "pendingRequest"),
          (this.sessionStatus = "pendingRequest"),
          (o = await new Promise((o) => {
            e("onSessionRequest")(o, t.requestingAgent),
              this.fireEvent("sessionRequest");
          }))),
        setTimeout(() => {
          if ("active" === this.sessionStatus)
            return this.emit("sessionStatusUpdate", "active");
          o
            ? (r(
                "User approved request or no approval was needed. Screen share begins now"
              ),
              this.emit("sessionStatusUpdate", "active"),
              (this.sessionStatus = "active"),
              this.browserWatcher.activate(),
              this.fireEvent("sessionStart"))
            : (r("User did not approve screen share. Terminating session now."),
              this.emit("stopSession"));
        }, 50);
    }
    async onCallStart(t) {
      r("Received phone call request"),
        (this.callToken = t),
        this.fireEvent("callStart");
      const o = await new Promise((t) => {
        "function" == typeof e("customCallController")
          ? e("customCallController")(t)
          : this.phoneController.show(t);
      });
      r("Phone call " + (o ? "authorized" : "refused")),
        o ? this.acceptCall() : this.endCall();
    }
    async acceptCall() {
      this.emit("acceptCall");
      const t = window.open(
        `${e("phoneEndpoint")}?region=${e("region")}&token=${this.callToken}`,
        "upscope-phone",
        "toolbar=no,top=0,left=0,width=600,height=400"
      );
      let o = !1,
        n = !1;
      const s = (t) => {
        switch (t.data) {
          case "upscope-phone:opened":
            o = !0;
            break;
          case "upscope-phone:authorized":
            n = !0;
            break;
          case "upscope-phone:no-input":
            C(e("callPopupNoInputTitle"), e("callPopupNoInputMessage"));
            break;
          case "upscope-phone:no-output":
            C(e("callPopupNoOutputTitle"), e("callPopupNoOutputMessage"));
        }
      };
      window.addEventListener("message", s);
      try {
        if (
          (r("Will wait 5 seconds for the call popup to open"),
          await m(5e3),
          !o)
        )
          return (
            C(e("callPopupFailedTitle"), e("callPopupFailedMessage")),
            this.endCall(),
            void t?.close()
          );
        if (
          (r("Will wait 5 seconds for the call audio to be authorized"),
          await m(5e3),
          !n)
        )
          return (
            C(
              e("callAudioAuthorizationFailedTitle"),
              e("callAudioAuthorizationFailedMessage")
            ),
            this.endCall(),
            void t?.close()
          );
      } finally {
        window.removeEventListener("message", s);
      }
    }
    endCall() {
      this.emit("endCall");
    }
    onServerCallAccepted() {
      this.phoneController.hide(), this.fireEvent("callAccepted");
    }
    onServerRequestStatus(e) {
      r("Agent request is now %s", e),
        this.fireEvent("agentRequestUpdate", [e]);
    }
    requestAgent() {
      r("Requesting agent"), this.emit("requestAgent");
    }
    cancelRequestAgent() {
      r("Canceling agent request"), this.emit("cancelRequestAgent");
    }
    onServerCallEnd() {
      this.phoneController.hide(), this.fireEvent("callEnd");
    }
    async getLookupCode() {
      if ((await this.connectToSocket(!0), !this.lookupCode)) {
        let e = "";
        for (let t = 0; t < 4; t++) e += String(Math.floor(10 * Math.random()));
        (this.lookupCode = e),
          this.socketConnected() &&
            this.emit("connectionUpdate", { lookupCode: this.lookupCode });
      }
      return (
        Y.set("lookupCodeSetAt", new Date()),
        Y.set("lookupCode", this.lookupCode),
        this.lookupCode
      );
    }
    async onServerContinueSession() {
      if (
        (sessionStorage.setItem("__upscope:everActive", "true"),
        (this.sessionActiveAfterDisconnect = !0),
        "active" === this.sessionStatus)
      )
        return this.sendSnapshot();
      (this.sessionStatus = "active"),
        this.browserWatcher.activate(),
        this.fireEvent("sessionContinue");
    }
    onServerSessionUpdate(e) {
      "active" !== this.sessionStatus &&
        ((this.sessionStatus = e.status),
        "active" === e.status &&
          (E(),
          (this.sessionStatus = "active"),
          this.browserWatcher.activate(),
          this.fireEvent("sessionStart")));
    }
    handleEndSession() {
      this.sessionStatus && E(),
        "active" === this.sessionStatus &&
          (r("Ending session"),
          this.browserWatcher.deactivate(),
          this.browserInstructionsReceiver.hideAll(),
          this.fireEvent("sessionEnd")),
        this.phoneController.hide(),
        delete this.sessionStatus,
        Y.del("waitingForCallAt");
    }
    async stopSession() {
      r("Stopping session"),
        await this.emit("stopSession"),
        this.handleEndSession();
    }
    onServerBrowserInstruction(e) {
      "active" === this.sessionStatus &&
        this.browserInstructionsReceiver.receiveInstruction(e);
    }
    async sendSnapshot() {
      const e = await this.browserWatcher.getSnapshot();
      this.sendBrowserEvent("root", { snapShot: e });
    }
    performDataBounce(e) {
      this.sendBrowserEvent("root", { dataBounce: e });
    }
    sendBrowserEvent(e, t) {
      "console" in t &&
        this.eventId < 100 &&
        r(
          "Sending browser event for iframe %s: %s (%o)",
          e,
          Object.keys(t)[0],
          t
        );
      const o = { ...t, ts: Date.now() };
      this.emit("browserEvent", [`${this.pageLoadId}:${this.eventId++}`, e, o]);
    }
    updateConnection(t) {
      t.identities &&
        ["list of identities here", "undefined", "null"].includes(
          "string" == typeof t.identities
            ? t.identities
            : t.identities.join(" ")
        ) &&
        delete t.identities,
        t.uniqueId &&
          ["USER UNIQUE ID", "undefined", "null"].includes(t.uniqueId) &&
          delete t.uniqueId,
        t.tags &&
          "#list #of #tags #here" ===
            ("string" == typeof t.tags ? t.tags : t.tags.join(" ")) &&
          delete t.tags;
      for (const o of [
        "identities",
        "uniqueId",
        "tags",
        "integrationIds",
        "callName",
        "agentPrompt",
        "allowRemoteConsole",
        "allowRemoteClick",
        "allowRemoteScroll",
        "allowRemoteType",
        "allowAgentRedirect",
      ])
        void 0 !== t[o] && e(o, t[o]);
      this.socketConnected() &&
        (ot("all")
          ? this.emit("connectionUpdate", t)
          : this.reportUnsupportedBrowser(),
        this.lookForNamedCall());
    }
    getWatchLink() {
      return "https://upscope.io/w/" + this.shortId;
    }
    reportPageFocus() {
      this.idlenessReporterActive ||
        (window.addEventListener("focus", () => {
          "ready" === this.socketStatus &&
            (r("Detected focus on page"), this.emit("focus"));
        }),
        (this.idlenessReporterActive = !0));
    }
    touchLastActivityAt() {
      this.lastActivityAt = new Date();
    }
    async fireEvent(t, o = []) {
      if (void 0 !== this.listeners[t])
        for (const e of this.listeners[t]) setTimeout(() => e(...o), 0);
      if ("sessionRequest" === t) return;
      const n = "on" + t.charAt(0).toUpperCase() + t.slice(1);
      "function" == typeof e(n) && e(n).apply(e(), o);
    }
    listen(e, t) {
      for (const o of e)
        (this.listeners[o] = this.listeners[o] || []),
          this.listeners[o].push(t);
      return this;
    }
    unlisten(e, t) {
      for (const o of e)
        void 0 !== this.listeners[o] &&
          (this.listeners[o] = this.listeners[o].filter((e) => e !== t));
      return this;
    }
    async resetIdentities() {
      Y.clear(),
        delete this.shortId,
        delete this.lookupCode,
        e("identities", void 0),
        e("uniqueId", void 0),
        e("tags", void 0),
        e("integrationIds", void 0),
        sessionStorage.removeItem("__upscope:uniqueConnectionId");
      for (const e in sessionStorage)
        sessionStorage.hasOwnProperty(e) &&
          e.startsWith("__upscope:") &&
          sessionStorage.removeItem(e);
    }
    processQueue() {
      for (let e of window.Upscope.q) {
        (e = [...e]),
          r("Received js command %s with args %o", e[0], e.slice(1));
        try {
          switch (e[0]) {
            case "updateConnection":
              if (void 0 === e[1]) throw new Error("An argument is required");
              this.updateConnection(e[1]);
              break;
            case "reset":
              this.resetConnection(e[1]);
              break;
            case "stopSession":
              this.stopSession();
              break;
            case "requestAgent":
              this.requestAgent();
              break;
            case "cancelRequestAgent":
              this.cancelRequestAgent();
              break;
            case "newPageview":
              if (!this.historyCollector)
                throw new Error("History collection not enabled");
              this.historyCollector.pageview();
              break;
            case "logEvent":
              if (!this.historyCollector)
                throw new Error("History collection not enabled");
              this.historyCollector.log(e[1], e[2]);
              break;
            case "saveHistory":
              if (!this.historyCollector)
                throw new Error("History collection not enabled");
              this.historyCollector.save();
              break;
            case "submitRating":
              this.sessionRatingInfo &&
                this.emit("submitRating", {
                  token: this.sessionRatingInfo.token,
                  ...e[1],
                });
              break;
            case "getUserId":
            case "getShortId":
              if (void 0 === e[1]) throw new Error("A callback is required");
              e[1](this.shortId);
              break;
            case "getWatchLink":
              if (void 0 === e[1]) throw new Error("A callback is required");
              e[1](this.getWatchLink());
              break;
            case "getLookupCode":
              if (void 0 === e[1]) throw new Error("A callback is required");
              this.getLookupCode().then((t) => e[1](t));
              break;
            case "redirect":
              if ("string" != typeof e[1]) throw new Error("A URL is required");
              if (!this.linkProxyRewrite) throw new Error("Proxy not enabled");
              this.linkProxyRewrite.redirect(e[1]);
              break;
            case "on":
              if (void 0 === e[1] || "function" == typeof e[1])
                throw new Error("An event type is required");
              if ("function" != typeof e[e.length - 1])
                throw new Error("An function is required");
              this.listen(e.slice(1, -1), e[e.length - 1]);
              break;
            case "init":
              a(
                "warn",
                "It looks like you're trying to load Upscope more than once!"
              );
              break;
            case "connect":
              break;
            default:
              a("error", "Command " + String(e[0]) + " is not recognized");
          }
        } catch (t) {
          a(
            "error",
            "Error processing command " + e[0],
            t,
            "(learn more here: https://docs.upscope.com/javascript-sdk/sdk-functions/#:~:text=" +
              e[0] +
              ")"
          );
        }
      }
      window.Upscope.q.length = 0;
    }
  }
  class ct {
    parentFrameHandler;
    childFrameHandler;
    constructor() {
      this.listenToParent(), this.listenToChildren();
    }
    async isChild() {
      if (this.parentFrameHandler) return !0;
      if (!window.parent || window.parent === window)
        return r("Parent is self, not a child");
      r("Will contact parent window");
      const t =
        "extension" === window.__upscopeContext__ && window.top !== window;
      return (
        window.parent.postMessage(
          { __upscopeApiKey: e("apiKey"), c: "register" },
          "*"
        ),
        await Promise.race([m(500), g(() => Boolean(this.parentFrameHandler))]),
        void 0 !== this.parentFrameHandler || t
      );
    }
    listenToParent() {
      window.addEventListener("message", (t) => {
        t.source === window.parent &&
          t.data.__upscopeApiKey === e("apiKey") &&
          ((this.parentFrameHandler ??= new lt()),
          this.parentFrameHandler.handle(t.data));
      });
    }
    listenToChildren() {
      window.addEventListener("message", (t) => {
        const o = [...document.querySelectorAll("iframe,frame")].find(
          (e) => e.contentWindow === t.source
        );
        o &&
          t.data.__upscopeApiKey === e("apiKey") &&
          ((o.__upscopeChildFrameHandler =
            o.__upscopeChildFrameHandler || new ut(o)),
          o.__upscopeChildFrameHandler.handle(t.data));
      });
    }
  }
  class lt {
    consoleHandler = null;
    watcher = new we(this);
    constructor() {}
    sendBrowserEvent(t, o) {
      window.parent.postMessage(
        { __upscopeApiKey: e("apiKey"), c: "event", iframe: t, event: o },
        "*"
      );
    }
    handle(e) {
      const { c: t } = e;
      switch (t) {
        case "registered":
          return r("Parent frame recognized child frame");
        case "activate":
          if (this.watcher.active) return;
          return (
            r("Parent frame asked to activate, rootId is %s", e.rootId),
            this.activate(e.rootId)
          );
        case "deactivate":
          return r("Parent frame asked to deactivate"), this.deactivate();
        case "getSnapshot":
          return (
            r("Parent frame asked for snapshot"), this.getSnapshot(e.rootId)
          );
      }
    }
    activate(e) {
      this.watcher.activate(e);
    }
    deactivate() {
      this.watcher.deactivate();
    }
    async getSnapshot(t) {
      this.watcher.ensureHasIds(void 0, document, t);
      const o = await this.watcher.getSnapshot();
      window.parent.postMessage(
        { __upscopeApiKey: e("apiKey"), c: "snapshot", snapshot: o },
        "*"
      );
    }
  }
  class ut {
    iframe;
    eventListener;
    snapshotListener;
    constructor(e) {
      this.iframe = e;
    }
    handle(t) {
      r("Received message %o from iframe %o", t, this.iframe);
      const { c: o } = t;
      switch (o) {
        case "register":
          return (
            r("Child iframe %o asked to register", this.iframe),
            this.iframe.contentWindow?.postMessage(
              { __upscopeApiKey: e("apiKey"), c: "registered" },
              "*"
            )
          );
        case "event":
          return (
            r("Child iframe %o sent event %o", this.iframe, t.event),
            void (this.eventListener && this.eventListener(t.iframe, t.event))
          );
        case "snapshot":
          r("Child iframe %o sent snapshot %o", this.iframe, t.snapshot),
            this.snapshotListener && this.snapshotListener(t.snapshot);
      }
    }
    activate(t, o) {
      (this.eventListener = t),
        this.iframe.contentWindow?.postMessage(
          { __upscopeApiKey: e("apiKey"), c: "activate", rootId: o },
          "*"
        );
    }
    deactivate() {
      delete this.eventListener,
        this.iframe.contentWindow?.postMessage(
          { __upscopeApiKey: e("apiKey"), c: "deactivate" },
          "*"
        );
    }
    getSnapshot(t) {
      return Promise.race([
        new Promise((o) => {
          this.iframe.contentWindow?.postMessage(
            { __upscopeApiKey: e("apiKey"), c: "getSnapshot", rootId: t },
            "*"
          ),
            (this.snapshotListener = (e) => {
              o(e), delete this.snapshotListener;
            });
        }),
        m(5e3),
      ]);
    }
  }
  const dt = "2.2.119";
  !(function (e, t) {
    if (void 0 === t)
      return console.error(
        "The Upscope javascript snippet was not installed correctly."
      );
    if (void 0 !== e.Upscope._config)
      return console.warn("The Upscope javascript code was loaded twice.");
    if (
      "extension" !== e.__upscopeContext__ &&
      "string" == typeof localStorage.getItem("upscopeTestingKey")
    ) {
      const [t, o] = localStorage.getItem("upscopeTestingKey").split(":");
      if (o !== e.Upscope.__defaultConfiguration.apiKey) {
        delete e.Upscope.__defaultConfiguration,
          delete e.Upscope.__defaultRegion;
        const n = document.createElement("script");
        (n.type = "text/javascript"),
          (n.async = !0),
          "development" === t
            ? (n.src = "http://data.upscope.local/code/" + o + ".js")
            : "staging" === t &&
              (n.src = "https://code.upscope.xyz/" + o + ".js");
        const s = document.querySelectorAll("script")[0];
        return (
          s.parentNode.insertBefore(n, s),
          void console.warn(
            "The Upscope code is now in testing replacement mode"
          )
        );
      }
    }
    if (
      void 0 !== e.Prototype &&
      e.Array &&
      e.Array.prototype &&
      void 0 !== e.Array.prototype.toJSON
    )
      return console.error(
        "This page uses a version of Prototype.js that will break JSON (and Upscope). See here: https://docs.upscope.com/javascript-sdk/installation/#prototypejs"
      );
    let o = !1;
    try {
      e.parent !== e && void 0 !== e.parent.Upscope && (o = !0);
    } catch (e) {
      r("No access to parent window.");
    }
    if (o)
      return void (
        "extension" !== e.__upscopeContext__ &&
        console.warn(
          "Upscope is already loaded in the parent window, terminating."
        )
      );
    async function n() {
      const o = t.q.shift();
      let [n, s] = o;
      if (((s = s || {}), "init" !== n))
        return console.error('The first command must be "init"');
      const i = { ...x };
      if (e.Upscope.__defaultConfiguration) {
        Object.assign(i, e.Upscope.__defaultConfiguration);
        const t = Object.keys(e.Upscope.__defaultConfiguration),
          o = Object.keys(s);
        t.some((e) => o.includes(e)) && (i.jsConfiguration = !0);
      } else i.jsConfiguration = !0;
      return (
        Object.assign(i, s),
        r("PAGELOAD - Initiating Upscope version %s", dt),
        location.href && r("Current page is: %s", location.href),
        document.referrer && r("Previous page was: %s", document.referrer),
        i.apiKey
          ? (null !== i.uniqueId &&
              void 0 !== i.uniqueId &&
              ["USER UNIQUE ID", "undefined", "null"].includes(i.uniqueId) &&
              delete i.uniqueId,
            null !== i.identities &&
              void 0 !== i.identities &&
              ["list of identities here", "undefined", "null"].includes(
                Array.isArray(i.identities)
                  ? i.identities.join(" ")
                  : i.identities
              ) &&
              delete i.identities,
            null !== i.tags &&
              void 0 !== i.tags &&
              "#list #of #tags #here" ===
                (Array.isArray(i.tags) ? i.tags.join(" ") : i.tags) &&
              delete i.tags,
            null !== i.integrationIds &&
              void 0 !== i.integrationIds &&
              "integration_name:resource_id" ===
                (Array.isArray(i.integrationIds)
                  ? i.integrationIds.join(" ")
                  : i.integrationIds) &&
              delete i.integrationIds,
            (i.version = dt),
            (e.Upscope._config = i),
            await g(() => Boolean(document.body)),
            (await new ct().isChild())
              ? a("info", "attached to parent iframe")
              : void new at())
          : console.error("API key required")
      );
    }
    e.Upscope._version = dt;
    const s = t.q.push;
    t.q.length > 0
      ? n()
      : (t.q.push = function (...e) {
          return (t.q.push = s), s.apply(t.q, e), n(), t.q.length;
        }),
      setTimeout(() => {
        void 0 === e.Upscope._config &&
          "extension" !== e.__upscopeContext__ &&
          console.warn(
            'Please remember to call Upscope("init"); for Upscope to work!'
          );
      }, 1e4);
  })(window, window.Upscope);

