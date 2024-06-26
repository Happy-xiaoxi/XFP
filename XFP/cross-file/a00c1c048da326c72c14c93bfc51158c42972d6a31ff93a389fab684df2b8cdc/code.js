import {isNotifAllowed} from './_isNotifAllowed.js';
import {CheckBrowserCampatability} from './_CheckBrowserCampatability.js';
import {isPrivateMode} from './_isPrivateMode.js';
import { _convertFunc } from './_convertFunc.js';
import { _convertFunc1 } from './_convertFunc1.js';
var key,
  browserData,
  subscription,
  permissionAllowed,
  iFrameReference,
  skipSubscriberReport,
  subscriberIdCallback,
  isSubscribed = !1,
  optinStatus = "disable",
  host = "https://sdk.truepush.com/",
  cdnUrl = "https://cdni.truepush.com/",
  imgUrl = "https://usimg.truepush.com/",
  subDomainsHost = "tr1.us",
  fromSubDomain = !1,
  EnableHTTPLocalTest = "false",
  version = "v2.0.4",
  defaultKey =
    "BKShchY7I9trZE-r3asUBs3uxgD-BxZGViDdHDsBBj1IOZN9So7Pu2pgEsveYOYlMeaUMYCKCCSnhy8Mo-C5WsU",
  fromIframe = !1,
  fromWordpress = !1,
  fromshopifyDomain = !1,
  forShopifyCall = !1,
  xhttp = new XMLHttpRequest();

  

_convertFunc1(0, this)
var desktopAllowedVersions = {
    chrome: 40,
    chromium: 40,
    edge: 17,
    firefox: 55,
    safari: 11.1,
    os_x: 10.9,
    opera: 37,
    yandex: 19,
  },
  mobileAllowedVersions = { chrome: 40, firefox: 44, opera: "all" };

_convertFunc(0, this)

  window.addEventListener("load", function () {
    var t = [];
    if (
      (window.truepush && (t = window.truepush),
      !window.truepush || !window.truepush.Init)
    ) {
      let o;
      truepush = new truepushSDK();
      for (let e = 0; e < t.length; e++)
        if ("function" == typeof t[e]) {
          (o = t[e]), t.splice(e, 1);
          break;
        }
      if (!o) return void console.error("initialization script not found");
      if ((truepush.push(o), t && 0 == t.length)) return;
      if ("allowed_cookies_personal_data" != truepush.GetUserConsent())
        return void console.log(
          "UserConsent for personal data is denied, Can not add tags."
        );
      for (let o = 0; o < t.length; o++) truepush.push(t[o]);
    }
  }),
  (loadAppJs = function () {
    var t = [];
    if (
      (window.truepush && (t = window.truepush),
      window.truepush && window.truepush.Init)
    )
      console.log("Already initialize truepush.");
    else {
      let o;
      truepush = new truepushSDK();
      for (let e = 0; e < t.length; e++)
        if ("function" == typeof t[e]) {
          (o = t[e]), t.splice(e, 1);
          break;
        }
      if (!o) return void console.error("initialization script not found");
      if ((truepush.push(o), t && 0 == t.length)) return;
      if ("allowed_cookies_personal_data" != truepush.GetUserConsent())
        return void console.log(
          "UserConsent for personal data is denied, Can not add tags."
        );
      for (let o = 0; o < t.length; o++) truepush.push(t[o]);
    }
  });
