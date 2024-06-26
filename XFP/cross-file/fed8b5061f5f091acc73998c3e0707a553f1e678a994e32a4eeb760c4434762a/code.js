import  {
  Logger,
  loggerWindowOnLoadInitForLog,
  loggerAddSearchBoxEventLog,
  loggerUpdateUserInfo,
  loggerListenerIframes,
  loggerAddScript,
  loggerResendLogObjectInStorage
} from './Logger.js'
var logger = new Logger();
var LOG_CHOBROD_CONSTANTS = {
    WEB_ALL_DOMAIN: ".chobrod.com",
    WEB_DOMAIN: "chobrod.com",
    WEB_KEY_API: "chobrod",
  },
  LOG_CONSTANTS = {
    BATDONGSAN_WEB_ID: 1,
    TOPBANK_WEB_ID: 2,
    BANXEHOI_WEB_ID: 3,
    TINNHAC_WEB_ID: 4,
    TINXE_WEB_ID: 5,
    CHOBROD_WEB_ID: 6,
    CINTAMOBIL_WEB_ID: 7,
    PHIKOTSE_WEB_ID: 8,
    NAIJAUTO_WEB_ID: 9,
    URL: {
      EXPERIMENTAL_DESIGN_JS:
        "https://log." +
        LOG_CHOBROD_CONSTANTS.WEB_DOMAIN +
        "/js/chobrod/ed.js?v=" +
        new Date().toISOString().substring(0, 13),
      SELLER_BUYER_TRACK_JS:
        "https://log." +
        LOG_CHOBROD_CONSTANTS.WEB_DOMAIN +
        "/js/chobrod/user_log.js?v=" +
        new Date().toISOString().substring(0, 13),
      SELLER_BUYER_CHECK_JS:
        "https://log." +
        LOG_CHOBROD_CONSTANTS.WEB_DOMAIN +
        "/js/chobrod/seller_check.js?v=" +
        new Date().toISOString().substring(0, 13),
      USER_HANDLER: "/Chat/ProcessRequest",
      LOG_SERVER:
        "https://log." +
        LOG_CHOBROD_CONSTANTS.WEB_DOMAIN +
        "/" +
        LOG_CHOBROD_CONSTANTS.WEB_KEY_API +
        "lp",
      LOG_SERVER_IMAGE_REQUEST:
        "https://log." +
        LOG_CHOBROD_CONSTANTS.WEB_DOMAIN +
        "/" +
        LOG_CHOBROD_CONSTANTS.WEB_KEY_API +
        "lg",
    },
    COOKIE: {
      USER_INFO_KEY_COOKIE: "uichobrod",
      USER_SESSION_KEY: "usidchobrod",
      SESSION_KEY: "sidchobrod",
    },
    LOCAL_STORAGE: {
      IP_LOCATION_ADDRESS_KEY: "ipLocationAdress",
      LOG_CLICK_COOKIE_KEY: "logClickCookie",
      LOG_CLICK_IFRAME_COOKIE_KEY: "logClickIframeCookie",
      LOG_ENTER_UP_COOKIE_KEY: "logEnterUpCookie",
      VERSIONS: "experimental_design_versions",
      LOG_TIME_ON_SITE_KEY: "logTimeOnSitePreviousPage",
    },
    CLIENT_IP: {
      KEY_IP_ADDRESS_RESPONSE: "ip",
      KEY_CITY_ADDRESS_RESPONSE: "city_name",
      KEY_REGION_ADDRESS_RESPONSE: "city_name",
      KEY_COUNTRY_ADDRESS_RESPONSE: "country_name",
    },
    SEND_LOG_TYPE: { IMAGE: "image", XHR: "xhr", BEACON: "beacon" },
    ACTION_TYPE: {
      PAGE_VIEW: 185,
      WINDOW_SCROLL: 188,
      CLICK_LOCATION: 189,
      CLICK_LINK_NOIBAT: 190,
      MOUSE_CLICK: 191,
      MOUSE_MOVE_OVER: 192,
      MOUSE_MOVE_STOP: 193,
      UNLOAD: 194,
      ENTER_UP: 195,
      IFRAME_CLICK: 196,
      SPECIAL_IMPRESSION_LOAD: 197,
      SPECIAL_DIRECT_OTHER_SITE: 198,
      TOUCH_START: 201,
      BROWSER_ACTIVE: 211,
      BROWSER_DEACTIVE: 212,
    },
    SPECIAL_IMPRESSION_POSITION: {},
    THRESHOLD: {
      COOKIE_LENGTH: 32,
      TOKEN_LENGTH: 32,
      GET_REQUEST_MAX_LENGTH: 2048,
      USER_SESSION_TIMEOUT: 3650,
      SROLL_PIXEL_MAX: 400,
      MOUSE_MOUVE_STOP_TIMEOUT: 1e3,
      SEARCH_BOX_TAG_TIMEOUT: 300,
      SCROLL_TIMEOUT: 1e3,
      IP_ADDRESS_COOKIE_TIMEOUT: 0.5,
      USER_INFO_KEY_COOKIE: 3650,
      USER_INFO_KEY_COOKIE_NEED_UPDATE: 7,
      MAX_LENGTH_OUTER_HTML: 512,
      GET_SELECTOR_CSS_PATH_TIMEOUT: 500,
    },
    KEY_CODE: { ENTER: 13, UP: 38, DOWN: 40, PAGE_UP: 33, PAGE_DOWN: 34 },
    current_pagey_offset: 0,
    ID_SEARCH_BOXS: ["KeywordSearch", "search-carprice"],
    CSS_OBJECT_LOG_MOUSE_MOVES: [],
  },
  globalVar = {
    loadedTime: 0,
    lastPressKeyTime: 0,
    currentKeycode: 0,
    lastScrollTime: 0,
    lastMouseMoveStopTime: 0,
    mousePositionX: -1,
    mousePositionY: -1,
    isLogPageView: !1,
    tracking: !0,
    start_time_active_tab: 0,
    is_active: !0,
    time_on_site: new Number(0),
    ip_cache_time: 3e4,
    url_get_ip:
      "https://log." +
      LOG_CHOBROD_CONSTANTS.WEB_DOMAIN +
      "/IpLocationApi/location",
  },
  userInfo = {
    id: "",
    name: "",
    fullname: "",
    email: "",
    mobile: "",
    sex: "",
    date: "",
  };

var allKeyLocalStorage = Object.keys(localStorage);
try {
  for (var i = 0; i < allKeyLocalStorage.length; i++) {
    (key = allKeyLocalStorage[i]).startsWith(
      LOG_CONSTANTS.LOCAL_STORAGE.LOG_TIME_ON_SITE_KEY
    ) && loggerResendLogObjectInStorage(key);
  }
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  for (i = 0; i < allKeyLocalStorage.length; i++) {
    (key = allKeyLocalStorage[i]).startsWith(
      LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_COOKIE_KEY
    ) && loggerResendLogObjectInStorage(key);
  }
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  for (i = 0; i < allKeyLocalStorage.length; i++) {
    (key = allKeyLocalStorage[i]).startsWith(
      LOG_CONSTANTS.LOCAL_STORAGE.LOG_ENTER_UP_COOKIE_KEY
    ) && loggerResendLogObjectInStorage(key);
  }
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  for (i = 0; i < allKeyLocalStorage.length; i++) {
    var key;
    (key = allKeyLocalStorage[i]).startsWith(
      LOG_CONSTANTS.LOCAL_STORAGE.LOG_CLICK_IFRAME_COOKIE_KEY
    ) && loggerResendLogObjectInStorage(key);
  }
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  var userInfoStr = logger.getCookie(LOG_CONSTANTS.COOKIE.USER_INFO_KEY_COOKIE),
    needGetUserInfo = !1;
  if (userInfoStr && void 0 !== userInfoStr && "" != userInfoStr) {
    var objUserInfo = JSON.parse(decodeURIComponent(userInfoStr));
    if (
      null != objUserInfo &&
      null != objUserInfo &&
      null != objUserInfo.id &&
      null != objUserInfo.id
    ) {
      var currentDate = new Date(),
        savedDate = objUserInfo.date;
      Math.floor((currentDate.getTime() - savedDate) / 1e3 / 3600 / 24) >=
      LOG_CONSTANTS.THRESHOLD.USER_INFO_KEY_COOKIE_NEED_UPDATE
        ? (needGetUserInfo = !0)
        : ((userInfo.email = objUserInfo.email),
          (userInfo.id = objUserInfo.id),
          (userInfo.name = objUserInfo.name),
          (userInfo.mobile = objUserInfo.mobile),
          (userInfo.fullname = objUserInfo.fullname),
          (userInfo.sex = objUserInfo.sex),
          (userInfo.date = objUserInfo.date));
    } else needGetUserInfo = !0;
  } else needGetUserInfo = !0;
  needGetUserInfo && loggerUpdateUserInfo();
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  var ipInformation = logger.getIPLocationAddress();
  (ipInformation ||
    null == ipInformation ||
    null == ipInformation.time ||
    null == ipInformation.time ||
    parseInt(ipInformation.time) + globalVar.ip_cache_time <
      new Date().getTime()) &&
    logger.getIPLocationAddressFromAPI();
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  loggerWindowOnLoadInitForLog();
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  loggerAddSearchBoxEventLog();
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  window.addEventListener
    ? window.addEventListener("mousedown", function (e) {
        logger.mouseClickLog(e);
      })
    : window.attachEvent &&
      window.attachEvent("mousedown", function (e) {
        logger.mouseClickLog(e);
      });
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  window.onscroll = function () {
    (globalVar.lastScrollTime = new Date().getTime()),
      setTimeout(function () {
        try {
          if (
            new Date().getTime() - globalVar.lastScrollTime >=
            LOG_CONSTANTS.THRESHOLD.SCROLL_TIMEOUT
          ) {
            var e = logger.createData();
            try {
              logger.getImpDataBanner(e);
            } catch (e) {
              globalVar.tracking && console.log(e);
            }
            var t = logger.createLogObject(
              LOG_CONSTANTS.ACTION_TYPE.WINDOW_SCROLL,
              e
            );
            t.prepareLogObjectData(logger), logger.sendLog(t);
          }
        } catch (e) {
          globalVar.tracking && console.log(e);
        }
      }, LOG_CONSTANTS.THRESHOLD.SCROLL_TIMEOUT);
  };
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  window.addEventListener
    ? window.addEventListener("keyup", function (e) {
        13 === e.keyCode && logger.windowOnEnterEventLog(e);
      })
    : window.attachEvent &&
      window.attachEvent("keyup", function (e) {
        13 === e.keyCode && logger.windowOnEnterEventLog(e);
      });
} catch (e) {
  console.log(e);
}
try {
  window.addEventListener
    ? window.addEventListener("beforeunload", function () {
        logger.timeOnSiteLog();
      })
    : window.attachEvent &&
      window.attachEvent("beforeunload", function () {
        logger.timeOnSiteLog();
      });
} catch (e) {
  globalVar.tracking && console.log(e);
}
try {
  window.addEventListener
    ? window.addEventListener("mousemove", function (e) {
        logger.mouseMoveAndStopLog(e);
      })
    : window.attachEvent &&
      window.attachEvent("mousemove", function (e) {
        logger.mouseMoveAndStopLog(e);
      });
} catch (e) {
  globalVar.tracking && console.log(e);
}
loggerListenerIframes(),
  loggerAddScript(LOG_CONSTANTS.URL.EXPERIMENTAL_DESIGN_JS),
  loggerAddScript(LOG_CONSTANTS.URL.SELLER_BUYER_TRACK_JS),
  loggerAddScript(LOG_CONSTANTS.URL.SELLER_BUYER_CHECK_JS),
  (globalVar.start_time_active_tab = new Number(new Date().getTime())),
  document.addEventListener(
    "visibilitychange",
    function () {
      document.hidden
        ? logger.handleBrowserTabDeactive()
        : logger.handleBrowserTabActive();
    },
    !1
  ),
  window.addEventListener(
    "focus",
    function () {
      logger.handleBrowserTabActive();
    },
    !1
  ),
  window.addEventListener(
    "blur",
    function () {
      logger.handleBrowserTabDeactive();
    },
    !1
  );
try {
  document.addEventListener(
    "visibilitychange",
    function () {
      document.hidden
        ? logger.logBrowserTabDeactive()
        : logger.logBrowserTabActive();
    },
    !1
  ),
    window.addEventListener(
      "focus",
      function () {
        logger.logBrowserTabActive();
      },
      !1
    ),
    window.addEventListener(
      "blur",
      function () {
        logger.logBrowserTabDeactive();
      },
      !1
    );
} catch (e) {
  console.log(e);
}
