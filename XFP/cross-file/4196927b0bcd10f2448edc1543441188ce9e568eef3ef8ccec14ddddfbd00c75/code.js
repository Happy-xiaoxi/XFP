import {getAction1} from './getAction1.js';
import {getAction2} from './getAction2.js';
import {setCookie} from './setCookie.js';
import {getCookie} from './getCookie.js';
import {removeCookie} from './removeCookie.js';
import {uuid} from './uuid.js';
import {uuidx} from './uuidx.js';
import {getCanvasId} from './getCanvasId.js';
import {getArgFromStr} from './getArgFromStr.js';
import {addArgToUrl} from './addArgToUrl.js';
import {replaceUrlParamVal} from './replaceUrlParamVal.js';
import {getTerminal} from './getTerminal.js';
import {getPlatform} from './getPlatform.js';
import {getDate} from './getDate.js';
import {getUniqueSpm} from './getUniqueSpm.js';
import {getSeriesTrackID} from './getSeriesTrackID.js';
import {getTrackID} from './getTrackID.js';
import {sendBigdataLogs} from './sendBigdataLogs.js';
import {checkShouldSendPageView} from './checkShouldSendPageView.js';
import {beginObserve} from './beginObserve.js';
import {setUserIdToCookie} from './setUserIdToCookie.js';
import { setVisitUserId  } from './setVisitUserId.js';
import {getData} from './getData.js';
import {on} from './on.js';
import {onload} from './onload.js';
import {onunload} from './onunload.js';
import {getNetType} from './getNetType.js';
import {getSocialNetworkingSite} from './getSocialNetworkingSite.js';
import {getTrackerDataFrom} from './getTrackerDataFrom.js';
import {getTrackerData} from './getTrackerData.js';
import {getSessionId} from './getSessionId.js';
import {getUserId} from './getUserId.js';
import {getClientType} from './getClientType.js';
import {getClientEdition} from './getClientEdition.js';
import {getField} from './getField.js';
import {getWxUserInfo} from './getWxUserInfo.js';
import {getQueryString} from './getQueryString.js';
import {addQueryString} from './addQueryString.js';
import {each} from './each.js';
import {extend} from './extend.js';
import {indexOf} from './indexOf.js';
import {send} from './send.js';
import {objectToQuery} from './objectToQuery.js';
import {getXPath} from './getXPath.js';
// import {params} from './params.js';
import {addElementClickListener} from './addElementClickListener.js';
import {launch} from './launch.js';
import {pageView} from './pageView.js';
import {pageLeave} from './pageLeave.js';
import {elementView} from './elementView.js';
import {elementClick} from './elementClick.js';
import {report} from './report.js';
import {reportPoint} from './reportPoint.js';

var tracker_ua_base = (function () {
  var z = "Samsung",
    q = "Sharp",
    d = "Sony Ericsson",
    w = "Motorola",
    b = "LG",
    n = "Huawei",
    A = "HTC",
    f = "Coolpad",
    g = "Asus",
    C = "Acer";
  var y = " based device";
  var D = {
    SAMSUNG: {
      "GT-S3370C": [z, "Corby 3G"],
      "GT-S3650": [z, "Corby"],
      "GT-S3653": [z, "Corby"],
      "GT-S3850": [z, "Corby II"],
      "GT-S5230": [z, "Star"],
      "GT-S5230W": [z, "Star"],
      "GT-S5233": [z, "Star"],
      "GT-S5260": [z, "Star II"],
      "GT-S5560": [z, "Marvel"],
      "GT-S5620": [z, "Monte"],
      "GT-S7550": [z, "Blue Earth"],
      "GT-S8000": [z, "Jet"],
      "GT-S8003": [z, "Jet"],
      "SGH-F480": [z, "Tocco"],
      "SGH-T528g": [z, "Straight Talk"],
      "GT-B3410": [z, "Star Qwerty"],
      "GT-B5310": [z, "Corby Pro"],
      "GT-B7722": [z, "Star Duos"],
      "GT-C6712": [z, "Star II Duos"],
    },
  };
  var e = {
    SAMSUNG: {
      "GT- S5250": [z, "Wave 525"],
      "GT-S5250": [z, "Wave 525"],
      "GT-S5253": [z, "Wave 525"],
      "GT-S5330": [z, "Wave 533"],
      "GT-S5380": [z, "Wave Y"],
      "GT-S5380D": [z, "Wave Y"],
      "GT-S5380K": [z, "Wave Y"],
      "GT-S5750E": [z, "Wave 575"],
      "GT-S5753E": [z, "Wave 575"],
      "GT-S7230B": [z, "Wave 723"],
      "GT-S7230E": [z, "Wave 723"],
      "GT-S7233E": [z, "Wave 723"],
      "GT-S7250": [z, "Wave M"],
      "GT-S7250D": [z, "Wave M"],
      "GT-S8500": [z, "Wave"],
      "GT-S8500C": [z, "Wave"],
      "GT-S8500R": [z, "Wave"],
      "GT-S8500T": [z, "Wave"],
      "GT-S8530": [z, "Wave II"],
      "GT-S8600": [z, "Wave 3"],
      "SHW-M410": [z, "Wave 3"],
    },
  };
  var B = {
    "GT-B7300": [z, "Omnia Lite"],
    "GT-B7610": [z, "Omnia Pro"],
    "GT-i8000": [z, "Omnia 2"],
    "GT-I8000": [z, "Omnia 2"],
    "GT-I8000U": [z, "Omnia 2"],
    M1i: [d, "M1i Aspen"],
  };
  var s = {
    Android: [null, null],
    "google sdk": [null, null],
    sdk: [null, null],
    generic: [null, null],
    "generic x86": [null, null],
    "amd brazos": ["AMD", "Fusionbased device"],
    "ODROID-A": ["Hardkernel", "ODROID-A developer tablet", "tablet"],
    "youwave custom": ["Youwave", "Android on PC", "desktop"],
    "ASUS Transformer TF300T": ["Asus", "Transformer Pad 300", "tablet"],
    "ASUS Transformer Pad TF300T": ["Asus", "Transformer Pad 300", "tablet"],
    "ASUS Transformer Pad TF300TG": ["Asus", "Transformer Pad 300", "tablet"],
    "ASUS Transformer Pad TF700T": [
      "Asus",
      "Transformer Pad Infinity 700",
      "tablet",
    ],
    "ASUS Transformer Pad TF700K": [
      "Asus",
      "Transformer Pad Infinity 700",
      "tablet",
    ],
    "ASUS Transformer TF700K": [
      "Asus",
      "Transformer Pad Infinity 700",
      "tablet",
    ],
    PadFone: ["Asus", "Padfone", "tablet"],
    "OMS TTD": ["Asus", "Eee Pc T10"],
    "ASUS T20": ["Asus", "Eee Pc T20"],
    ETBW11AA: ["Asus", "Tough"],
    "Dell Aero": ["Dell", "Aero"],
    "Dell M01M": ["Dell", "Mini 5", "tablet"],
    "Dell Streak": ["Dell", "Streak", "tablet"],
    "001DL": ["Dell", "Streak", "tablet"],
    "101DL": ["Dell", "Streak Pro", "tablet"],
    GS01: ["Dell", "Streak Pro", "tablet"],
    "Dell Streak Pro": ["Dell", "Streak Pro", "tablet"],
    streak7: ["Dell", "Streak 7", "tablet"],
    "Dell Streak 7": ["Dell", "Streak 7", "tablet"],
    "Dell Streak 10 Pro": ["Dell", "Streak 10 Pro", "tablet"],
    "Dell V04B": ["Dell", "Streak V04B", "tablet"],
    "Dell Venue": ["Dell", "Venue"],
    "Dell XCD35": ["Dell", "XCD35"],
    XCD35: ["Dell", "XCD35"],
    "Google Ion": ["Google", "Ion"],
    "Nexus One": ["Google", "Nexus One"],
    NexusOne: ["Google", "Nexus One"],
    "HTC Nexus One": ["Google", "Nexus One"],
    "Nexus S": ["Google", "Nexus S"],
    "Google Nexus S": ["Google", "Nexus S"],
    "Nexus S 4G": ["Google", "Nexus S 4G"],
    "Dooderbutt-4.0.3-v1": ["Google", "Nexus S 4G"],
    "Nexus 7": ["Google", "Nexus 7", "tablet"],
    Touchpad: ["HP", "TouchPad", "tablet"],
    "HP Touchpad": ["HP", "TouchPad", "tablet"],
    "cm tenderloin": ["HP", "TouchPad", "tablet"],
    "aokp tenderloin": ["HP", "TouchPad", "tablet"],
    "Huawei MediaPad": ["Huawei", "MediaPad", "tablet"],
    "HUAWEI MediaPad": ["Huawei", "MediaPad", "tablet"],
    "Huawei S7-312u": ["Huawei", "MediaPad", "tablet"],
    "MediaPad 10 FHD": ["Huawei", "MediaPad", "tablet"],
    "Huawei C8500": ["Huawei", "C8500"],
    "Huawei C8500S": ["Huawei", "C8500"],
    "Huawei C8600": ["Huawei", "C8600"],
    "Huawei C8650": ["Huawei", "C8650"],
    "Huawei C8650+": ["Huawei", "C8650"],
    "Huawei C8800": ["Huawei", "IDEOS X5"],
    "Huawei C8810": ["Huawei", "Ascend G300"],
    "Huawei C8812": ["Huawei", "Ascend C8812"],
    "Huawei C8812E": ["Huawei", "Ascend C8812"],
    "Huawei C8825D": ["Huawei", "Ascend C8825D"],
    "Huawei C8860E": ["Huawei", "Honor"],
    "Huawei M835": ["Huawei", "M835"],
    "Huawei M860": ["Huawei", "Ascend"],
    "Huawei M921": ["Huawei", "M921"],
    "Huawei S8520": ["Huawei", "S8520"],
    "Huawei S8600": ["Huawei", "S8600"],
    "Huawei T8300": ["Huawei", "T8300"],
    "Huawei T8600": ["Huawei", "T8600"],
    "Huawei T8830": ["Huawei", "T8830"],
    T8830: ["Huawei", "T8830"],
    T8620: ["Huawei", "T8620"],
    "Huawei T8828": ["Huawei", "T8828"],
    "Huawei U8220": ["Huawei", "U8220"],
    "Huawei u8500": ["Huawei", "IDEOS X2"],
    "Huawei U8815": ["Huawei", "Ascend G300"],
    "Huawei U8825D": ["Huawei", "Ascend G330D"],
    "Huawei U8850": ["Huawei", "Vision"],
    "Huawei U8652": ["Huawei", "Sonic"],
    "Huawei U8800-51": ["Huawei", "IDEOS X5"],
    "Huawei U8818": ["Huawei", "Ascend G300"],
    "Huawei U9000": ["Huawei", "Ascend X"],
    "Huawei IDEOS U8500": ["Huawei", "IDEOS X2"],
    "Huawei IDEOS U8650": ["Huawei", "Sonic"],
    "Huawei IDEOS X3": ["Huawei", "IDEOS X3"],
    "Huawei Ideos X5": ["Huawei", "IDEOS X5"],
    "Huawei Ideos X5 1.12.9(ret4rt)": ["Huawei", "IDEOS X5"],
    "Huawei SONIC": ["Huawei", "Sonic"],
    "Huawei 8100-9": ["Huawei", "U8100"],
    FUSIONideos: ["Huawei", "IDEOS"],
    "Gnappo Ideos": ["Huawei", "IDEOS"],
    Ideos: ["Huawei", "IDEOS"],
    "IDEOS X5": ["Huawei", "IDEOS X5"],
    "Ideos S7": ["Huawei", "IDEOS S7", "tablet"],
    "IDEOS S7": ["Huawei", "IDEOS S7", "tablet"],
    "IDEOS S7 Slim": ["Huawei", "IDEOS S7", "tablet"],
    "Huawei S7": ["Huawei", "IDEOS S7", "tablet"],
    SONIC: ["Huawei", "Sonic"],
    "Kyivstar Aqua": ["Huawei", "Sonic"],
    "Lucky Ultra Sonic U8650": ["Huawei", "Sonic"],
    "Turkcell T20": ["Huawei", "Sonic"],
    "MTC 950": ["Huawei", "U8160"],
    "MTC 955": ["Huawei", "Sonic"],
    "MTC Evo": ["Huawei", "C8500"],
    "MTC Android": ["Huawei", "U8110"],
    S31HW: ["Huawei", "Pocket WiFi S"],
    S41HW: ["Huawei", "Pocket WiFi S II"],
    "007HW": ["Huawei", "Vision"],
    UM840: ["Huawei", "Evolution"],
    M860: ["Huawei", "Ascend"],
    M865: ["Huawei", "Ascend II"],
    M886: ["Huawei", "Glory"],
    C8150: ["Huawei", "IDEOS"],
    c8500: ["Huawei", "C8500"],
    C8500: ["Huawei", "C8500"],
    C8500S: ["Huawei", "C8500"],
    C8600: ["Huawei", "C8600"],
    c8650: ["Huawei", "C8650"],
    C8650: ["Huawei", "C8650"],
    c8800: ["Huawei", "C8800"],
    C8800: ["Huawei", "C8800"],
    c8810: ["Huawei", "Ascend G300C"],
    C8812: ["Huawei", "Ascend C8812"],
    S8600: ["Huawei", "S8600"],
    U8100: ["Huawei", "U8100"],
    U8110: ["Huawei", "U8110"],
    u8120: ["Huawei", "U8120"],
    U8120: ["Huawei", "U8120"],
    U8180: ["Huawei", "IDEOS X1"],
    U8220: ["Huawei", "Pulse"],
    U8300: ["Huawei", "U8300"],
    U8350: ["Huawei", "Boulder"],
    U8150: ["Huawei", "IDEOS"],
    U8160: ["Huawei", "U8160"],
    U8500: ["Huawei", "IDEOS X2"],
    "U8500 HiQQ": ["Huawei", "U8500 HiQQ Edition"],
    U8510: ["Huawei", "IDEOS X3"],
    u8650: ["Huawei", "Sonic"],
    U8650: ["Huawei", "Sonic"],
    "U8650-1": ["Huawei", "Sonic"],
    U8660: ["Huawei", "Sonic"],
    u8800: ["Huawei", "IDEOS X5"],
    U8800: ["Huawei", "IDEOS X5"],
    "U8800+": ["Huawei", "IDEOS X5"],
    U8800X: ["Huawei", "IDEOS X5"],
    U8800pro: ["Huawei", "IDEOS X5 Pro"],
    U8800PRO: ["Huawei", "IDEOS X5 Pro"],
    U8800Pro: ["Huawei", "IDEOS X5 Pro"],
    u8800pro: ["Huawei", "IDEOS X5 Pro"],
    "U8800 Pro": ["Huawei", "IDEOS X5 Pro"],
    U8818: ["Huawei", "Ascend G300"],
    U8850: ["Huawei", "Vision"],
    u8860: ["Huawei", "Honor"],
    U8860: ["Huawei", "Honor"],
    U9000: ["Huawei", "Ascend X"],
    U9200: ["Huawei", "Ascend P1"],
    "U9200-1": ["Huawei", "Ascend P1"],
    U9500: ["Huawei", "Ascend D1"],
    U9501L: ["Huawei", "Ascend D LTE"],
    U9510: ["Huawei", "Ascend D quad"],
    U9510E: ["Huawei", "Ascend D quad"],
    Comet: ["Huawei", "Comet"],
    GS02: ["Huawei", "Honor"],
    GS03: ["Huawei", "Ascend P1"],
    "DroniX-0.5": ["Huawei", "U8180"],
    "MTS-SP101": ["Huawei", "C8511"],
    TSP21: ["Huawei", "U8110"],
    M8: ["Meizu", "M8"],
    M9: ["Meizu", "M9"],
    M040: ["Meizu", "M040"],
    "M9-unlocked": ["Meizu", "M9"],
    "meizu m9": ["Meizu", "M9"],
    "MEIZU M9": ["Meizu", "M9"],
    "MEIZU MX": ["Meizu", "MX"],
    M030: ["Meizu", "MX M030"],
    M031: ["Meizu", "MX M031"],
    M032: ["Meizu", "MX M032"],
    X903: ["Oppo", "Find Me X903"],
    X905: ["Oppo", "Find 3 X905"],
    R805: ["Oppo", "R805"],
    R801: ["Oppo", "R801"],
    R811: ["Oppo", "R811"],
    X909: ["Oppo", "X909"],
    OPPOR801: ["Oppo", "R801"],
    OPPOX905: ["Oppo", "Find 3 X905"],
    OPPOX907: ["Oppo", "Find 3 X907"],
    X907: ["Oppo", "Find 3 X907"],
    X9015: ["Oppo", "Find X9015"],
    OPPOX9017: ["Oppo", "Finder X9017"],
    OPPOU701: ["Oppo", "OPPOU701"],
    OPPOR807: ["Oppo", "Real R807"],
    OPPOR805: ["Oppo", "Real R805"],
    R807: ["Oppo", "Real R807"],
    OPPOT703: ["Oppo", "T703"],
    "GT-S7568": ["Samsung", "S7568"],
    "WellcoM-A99": ["WellcoM", "A99"],
    N12: ["Window", "N12", "tablet"],
    N12R: ["Window", "N12R", "tablet"],
    N50: ["Window", "N50", "tablet"],
    N50DT: ["Window", "N50DT", "tablet"],
    N50GT: ["Window", "N50GT", "tablet"],
    "N50GT A": ["Window", "N50GT-A", "tablet"],
    N70: ["Window", "N70", "tablet"],
    "N70 DUAL CORE": ["Window", "N70 Dual Core", "tablet"],
    N80: ["Window", "N80", "tablet"],
    N90: ["Window", "N90", "tablet"],
    "N90 DUAL CORE2 V12": ["Window", "N90 Dual Core", "tablet"],
    "MI-ONE": ["Xiaomi", "MI-ONE"],
    "MI-ONE C1": ["Xiaomi", "MI-ONE C1"],
    "MI-ONE Plus": ["Xiaomi", "MI-ONE Plus"],
    "MI 1S": ["Xiaomi", "MI-ONE Plus"],
    "MI 1SC": ["Xiaomi", "MI-ONE 1SC"],
    "mione plus": ["Xiaomi", "MI-ONE Plus"],
    "MI-TWO": ["Xiaomi", "MI-TWO"],
    "MI 2": ["Xiaomi", "MI-TWO"],
    "MI 2S": ["Xiaomi", "MI-TWO Plus"],
    "MI 2SC": ["Xiaomi", "MI-TWO Plus"],
    "ZTE Libra": ["ZTE", "Libra"],
    "ZTE-T T9": ["ZTE", "Light Tab T9", "tablet"],
    V9: ["ZTE", "Light Tab V9", "tablet"],
    "V9e+": ["ZTE", "Light Tab 2", "tablet"],
    V9A: ["ZTE", "Light Tab 2", "tablet"],
    "Light Tab 2W": ["ZTE", "Light Tab 2", "tablet"],
    "Light Tab 2": ["ZTE", "Light Tab 2", "tablet"],
    V9C: ["ZTE", "Light Tab 3", "tablet"],
    V55: ["ZTE", "Optik", "tablet"],
    Acqua: ["ZTE", "Acqua"],
    Blade: ["ZTE", "Blade"],
    "Blade-V880": ["ZTE", "Blade"],
    "ZTE-U V880": ["ZTE", "Blade"],
    "Blade-opda": ["ZTE", "Blade"],
    "ZTE-BLADE": ["ZTE", "Blade"],
    "ZTE Blade": ["ZTE", "Blade"],
    "ZTE V880": ["ZTE", "Blade"],
    "ZTE-U(V)880+": ["ZTE", "Blade"],
    V880: ["ZTE", "Blade"],
    a5: ["ZTE", "Blade"],
    Blade2: ["ZTE", "Blade 2"],
    "Blade S": ["ZTE", "Blade S"],
    X500: ["ZTE", "Score"],
    "ZTE-X500": ["ZTE", "Score"],
    Skate: ["ZTE", "Skate"],
    "ZTE Skate": ["ZTE", "Skate"],
    "ZTE-Skate": ["ZTE", "Skate"],
    "ZTE-SKATE": ["ZTE", "Skate"],
    "ZTE-V960": ["ZTE", "Skate"],
    "ZTE-U V960": ["ZTE", "Skate"],
    "ZTE Racer": ["ZTE", "Racer"],
    "ZTE-RACER": ["ZTE", "Racer"],
    "MTC 916": ["ZTE", "Racer"],
    Racer: ["ZTE", "Racer"],
    RacerII: ["ZTE", "Racer 2"],
    RACERII: ["ZTE", "Racer 2"],
    "ZTE Roamer": ["ZTE", "Roamer"],
    N860: ["ZTE", "Warp"],
    N880: ["ZTE", "Blade"],
    "i-mobile i691": ["i-Mobile", "i691"],
    "i-mobile i695": ["i-Mobile", "i695"],
    "i-mobile i858": ["i-Mobile", "i858"],
    "i-mobile 3G 8500": ["i-Mobile", "3G 8500"],
    "i-mobile I-Note": ["i-Mobile", "i-Note", "tablet"],
    "Optimus Boston": ["Optimus", "Boston"],
    "Optimus San Francisco": ["Optimus", "San Francisco"],
    "Optimus Monte Carlo": ["Optimus", "Monte Carlo"],
    "Orange Boston": ["Orange", "Boston"],
    "Orange Monte Carlo": ["Orange", "Monte Carlo"],
    "San Francisco": ["Orange", "San Francisco"],
    "San Francisco for Orange": ["Orange", "San Francisco"],
    "Orange San Francisco": ["Orange", "San Francisco"],
    MOVE: ["T-Mobile", "MOVE"],
    "T-Mobile G1": ["T-Mobile", "G1"],
    "T-Mobile G2": ["T-Mobile", "G2"],
    "T-Mobile G2 Touch": ["T-Mobile", "G2"],
    "LG-P999": ["T-Mobile", "G2x"],
    "LG-E739": ["T-Mobile", "myTouch"],
    "T-Mobile myTouch 3G": ["T-Mobile", "myTouch 3G"],
    "T-Mobile myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"],
    "T-Mobile Espresso": ["T-Mobile", "myTouch 3G Slide"],
    "HTC myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"],
    "T-Mobile myTouch 4G": ["T-Mobile", "myTouch 4G"],
    "HTC Glacier": ["T-Mobile", "myTouch 4G"],
    "HTC Panache": ["T-Mobile", "myTouch 4G"],
    myTouch4G: ["T-Mobile", "myTouch 4G"],
    "My Touch 4G": ["T-Mobile", "myTouch 4G"],
    "HTC Mytouch 4G": ["T-Mobile", "myTouch 4G"],
    "HTC My Touch 4G": ["T-Mobile", "myTouch 4G"],
    "HTC mytouch4g": ["T-Mobile", "myTouch 4G"],
    "HTC myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"],
    "myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"],
    "T-Mobile myTouch Q": ["T-Mobile", "myTouch Q"],
    "LG-C800": ["T-Mobile", "myTouch Q"],
    "Pulse Mini": ["T-Mobile", "Pulse Mini"],
    "Vodafone 845": ["Vodafone", "845 Nova"],
    "Vodafone 858": ["Vodafone", "858 Smart"],
    "Vodafone 945": ["Vodafone", "945"],
    "Vodafone Smart II": ["Vodafone", "Smart II"],
    SmartTab10: ["Vodafone", "SmartTab 10", "tablet"],
    "SCH-N719": ["Samsung", "Galaxy Note II"],
    "Coolpad 8190": ["Coolpad", "8190"],
    U705T: ["Oppo", "Ulike2"],
    "Coolpad 8020+": ["Coolpad", "8020"],
    "Huawei Y310-5000": ["Huawei", "Y310"],
    "GT-S7572": ["Samsung", "Galaxy Trend Duos II"],
    "Lenovo A278t": ["Lenovo", "A278t"],
    "Lenovo A690": ["Lenovo", "A690"],
    "GT-I8262D": ["Samsung", "LePhone I8262D"],
    "Lenovo A278t": ["Lenovo", "A278t"],
    "MI 2C": ["Xiaomi", "MI-TWO"],
    "Coolpad 8070": ["Coolpad", "8070"],
    R813T: ["Oppo", "R813T"],
    "ZTE U930": ["ZTE", "U930"],
    "Lenovo A360": ["Lenovo", "LePhone A360"],
    "SCH-N719": ["Samsung", "Galaxy Note II"],
    "Coolpad 8010": ["Coolpad", "8010"],
    "LENOVO-Lenovo-A288t": ["Lenovo", "A288t"],
    U701T: ["Oppo", "U701T"],
    ZTEU795: ["Coolpad", "U795"],
    "Haier-HT-I617": ["Haier", "I617"],
    ZTEU880s: ["ZTE", "T-U880"],
    "GT-S6352": ["Samsung", "GT-S6352"],
    "GT-S7568": ["Samsung", "GT-S7568"],
    "K-Touch T619+": ["K-Touch", "T619"],
    "MI 2A": ["Xiaomi", "MI-TWO A"],
    "GT-N7108": ["Samsung", "Galaxy Note II"],
    "K-Touch T621": ["K-Touch", "T621"],
    "LENOVO-Lenovo-A298t": ["Lenovo", "A298"],
    "Coolpad 8150": ["Coolpad", "8150"],
    "5860S": ["Coolpad", "5860"],
    ZTEU807: ["ZTE", "U807"],
    "SCH-I739": ["Samsung", "SCH-I739"],
    "SCH-I829": ["Samsung", "SCH-I829"],
    "HS-E830": ["Hisense", "E830"],
    "HS-E920": ["Hisense", "E920"],
    "Lenovo S720": ["Lenovo", "S720"],
    "MI 2C": ["Xiaomi", "MI-TWO"],
    "OPPO R813T": ["Oppo", "R813"],
    "SCH-I879": ["Samsung", "Galaxy Note"],
    "GT-S6102E": ["Samsung", "Galaxy Y Duos"],
  };
  var t = {
    9600: "Bold",
    9650: "Bold",
    9700: "Bold",
    9780: "Bold",
    9790: "Bold",
    9900: "Bold",
    9930: "Bold",
    8300: "Curve",
    8310: "Curve",
    8320: "Curve",
    8330: "Curve",
    "8350i": "Curve",
    8520: "Curve",
    8530: "Curve",
    8900: "Curve",
    9220: "Curve",
    9300: "Curve",
    9330: "Curve",
    9350: "Curve",
    9360: "Curve",
    9370: "Curve",
    9380: "Curve",
    8100: "Pearl",
    8110: "Pearl",
    8120: "Pearl",
    8130: "Pearl",
    8220: "Pearl",
    8230: "Pearl",
    9100: "Pearl",
    9105: "Pearl",
    9530: "Storm",
    9550: "Storm",
    9670: "Style",
    9800: "Torch",
    9810: "Torch",
    9850: "Torch",
    9860: "Torch",
    9630: "Tour",
    9981: "Porsche P",
  };
  var h = function () {
    this.initialize.apply(this, Array.prototype.slice.call(arguments));
  };
  h.prototype = {
    initialize: function (E) {
      this.original = E.value || null;
      this.alias = E.alias || null;
    },
  };
  var x = function () {
    this.initialize.apply(this, arguments);
  };
  x.prototype = {
    initialize: function (F, E) {
      this.options = {
        useFeatures: (E && E.useFeatures) || false,
        detectCamouflage: (E && E.detectCamouflage) || true,
      };
      this.browser = { stock: true, hidden: false, channel: "" };
      this.engine = {};
      this.os = {};
      this.device = { type: "desktop", identified: false };
      this.camouflage = false;
      this.features = [];
      this.detect(F);
    },
    detect: function (E) {
      if (E.match("Unix")) {
        this.os.name = "Unix";
      }
      if (E.match("FreeBSD")) {
        this.os.name = "FreeBSD";
      }
      if (E.match("OpenBSD")) {
        this.os.name = "OpenBSD";
      }
      if (E.match("NetBSD")) {
        this.os.name = "NetBSD";
      }
      if (E.match("SunOS")) {
        this.os.name = "Solaris";
      }
      if (E.match("Linux")) {
        this.os.name = "Linux";
        if (E.match("CentOS")) {
          this.os.name = "CentOS";
          if ((match = /CentOS\/[0-9\.\-]+el([0-9_]+)/.exec(E))) {
            this.os.version = new h({ value: match[1].replace(/_/g, ".") });
          }
        }
        if (E.match("Debian")) {
          this.os.name = "Debian";
        }
        if (E.match("Fedora")) {
          this.os.name = "Fedora";
          if ((match = /Fedora\/[0-9\.\-]+fc([0-9]+)/.exec(E))) {
            this.os.version = new h({ value: match[1] });
          }
        }
        if (E.match("Gentoo")) {
          this.os.name = "Gentoo";
        }
        if (E.match("Kubuntu")) {
          this.os.name = "Kubuntu";
        }
        if (E.match("Mandriva Linux")) {
          this.os.name = "Mandriva";
          if ((match = /Mandriva Linux\/[0-9\.\-]+mdv([0-9]+)/.exec(E))) {
            this.os.version = new h({ value: match[1] });
          }
        }
        if (E.match("Mageia")) {
          this.os.name = "Mageia";
          if ((match = /Mageia\/[0-9\.\-]+mga([0-9]+)/.exec(E))) {
            this.os.version = new h({ value: match[1] });
          }
        }
        if (E.match("Red Hat")) {
          this.os.name = "Red Hat";
          if ((match = /Red Hat[^\/]*\/[0-9\.\-]+el([0-9_]+)/.exec(E))) {
            this.os.version = new h({ value: match[1].replace(/_/g, ".") });
          }
        }
        if (E.match("Ubuntu")) {
          this.os.name = "Ubuntu";
          if ((match = /Ubuntu\/([0-9.]*)/.exec(E))) {
            this.os.version = new h({ value: match[1] });
          }
        }
      }
      if (
        E.match("iPhone( Simulator)?;") ||
        E.match("iPad;") ||
        E.match("iPod;") ||
        E.match(/iPhone\s*\d*s?[cp]?;/i)
      ) {
        this.os.name = "iOS";
        this.os.version = new h({ value: "1.0" });
        if ((match = /OS (.*) like Mac OS X/.exec(E))) {
          this.os.version = new h({ value: match[1].replace(/_/g, ".") });
        }
        if (E.match("iPhone Simulator;")) {
          this.device.type = "emulator";
        } else {
          if (E.match("iPod;")) {
            this.device.type = "media";
            this.device.manufacturer = "Apple";
            this.device.model = "iPod Touch";
          } else {
            if (E.match("iPhone;") || E.match(/iPhone\s*\d*s?[cp]?;/i)) {
              this.device.type = "mobile";
              this.device.manufacturer = "Apple";
              this.device.model = "iPhone";
            } else {
              this.device.type = "tablet";
              this.device.manufacturer = "Apple";
              this.device.model = "iPad";
            }
          }
        }
        this.device.identified = true;
      } else {
        if (E.match("Mac OS X")) {
          this.os.name = "Mac OS X";
          if ((match = /Mac OS X (10[0-9\._]*)/.exec(E))) {
            this.os.version = new h({ value: match[1].replace(/_/g, ".") });
          }
        }
      }
      if (E.match("Windows")) {
        this.os.name = "Windows";
        var match;
        if ((match = /Windows NT ([0-9]\.[0-9])/.exec(E))) {
          this.os.version = a(match[1]);
          switch (match[1]) {
            case "6.2":
              this.os.version = new h({ value: match[1], alias: "8" });
              break;
            case "6.1":
              this.os.version = new h({ value: match[1], alias: "7" });
              break;
            case "6.0":
              this.os.version = new h({ value: match[1], alias: "Vista" });
              break;
            case "5.2":
              this.os.version = new h({
                value: match[1],
                alias: "Server 2003",
              });
              break;
            case "5.1":
              this.os.version = new h({ value: match[1], alias: "XP" });
              break;
            case "5.0":
              this.os.version = new h({ value: match[1], alias: "2000" });
              break;
            default:
              this.os.version = new h({
                value: match[1],
                alias: "NT " + this.os.version,
              });
          }
        }
        if (
          E.match("Windows 95") ||
          E.match("Win95") ||
          E.match("Win 9x 4.00")
        ) {
          this.os.version = new h({ value: "4.0", alias: "95" });
        }
        if (
          E.match("Windows 98") ||
          E.match("Win98") ||
          E.match("Win 9x 4.10")
        ) {
          this.os.version = new h({ value: "4.1", alias: "98" });
        }
        if (
          E.match("Windows ME") ||
          E.match("WinME") ||
          E.match("Win 9x 4.90")
        ) {
          this.os.version = new h({ value: "4.9", alias: "ME" });
        }
        if (E.match("Windows XP") || E.match("WinXP")) {
          this.os.name = new h({ value: "5.1", alias: "XP" });
        }
        if (E.match("WP7")) {
          this.os.name = "Windows Phone";
          this.os.version = new h({ value: "7.0", details: 2 });
          this.device.type = "mobile";
          this.browser.mode = "desktop";
        }
        if (E.match("Windows CE") || E.match("WinCE") || E.match("WindowsCE")) {
          if (E.match(" IEMobile")) {
            this.os.name = "Windows Mobile";
            if (E.match(" IEMobile 8")) {
              this.os.version = new h({ value: "6.5", details: 2 });
            }
            if (E.match(" IEMobile 7")) {
              this.os.version = new h({ value: "6.1", details: 2 });
            }
            if (E.match(" IEMobile 6")) {
              this.os.version = new h({ value: "6.0", details: 2 });
            }
          } else {
            this.os.name = "Windows CE";
            if ((match = /WindowsCEOS\/([0-9.]*)/.exec(E))) {
              this.os.version = new h({ value: match[1], details: 2 });
            }
            if ((match = /Windows CE ([0-9.]*)/.exec(E))) {
              this.os.version = new h({ value: match[1], details: 2 });
            }
          }
          this.device.type = "mobile";
        }
        if (E.match("Windows Mobile")) {
          this.os.name = "Windows Mobile";
          this.device.type = "mobile";
        }
        if ((match = /WindowsMobile\/([0-9.]*)/.exec(E))) {
          this.os.name = "Windows Mobile";
          this.os.version = new h({ value: match[1], details: 2 });
          this.device.type = "mobile";
        }
        if (E.match("Windows Phone [0-9]")) {
          this.os.name = "Windows Mobile";
          this.os.version = new h({
            value: E.match(/Windows Phone ([0-9.]*)/)[1],
            details: 2,
          });
          this.device.type = "mobile";
        }
        if (E.match("Windows Phone OS")) {
          this.os.name = "Windows Phone";
          this.os.version = new h({
            value: E.match(/Windows Phone OS ([0-9.]*)/)[1],
            details: 2,
          });
          if (this.os.version < 7) {
            this.os.name = "Windows Mobile";
          }
          if ((match = /IEMobile\/[^;]+; ([^;]+); ([^;]+)[;|\)]/.exec(E))) {
            this.device.manufacturer = match[1];
            this.device.model = match[2];
          }
          this.device.type = "mobile";
          var N = this.device.manufacturer;
          var J = m(this.device.model);
          if (
            typeof WINDOWS_PHONE_MODELS[N] !== "undefined" &&
            typeof WINDOWS_PHONE_MODELS[N][J] !== "undefined"
          ) {
            this.device.manufacturer = WINDOWS_PHONE_MODELS[N][J][0];
            this.device.model = WINDOWS_PHONE_MODELS[N][J][1];
            this.device.identified = true;
          }
          if (N === "Microsoft" && J === "XDeviceEmulator") {
            this.device.manufacturer = null;
            this.device.model = null;
            this.device.type = "emulator";
            this.device.identified = true;
          }
        }
      }
      if (E.match("Android")) {
        this.os.name = "Android";
        this.os.version = null;
        if (
          (match =
            /Android(?: )?(?:AllPhone_|CyanogenMod_)?(?:\/)?v?([0-9.]+)/.exec(
              E.replace("-update", ".")
            ))
        ) {
          this.os.version = new h({ value: match[1], details: 3 });
        }
        if (E.match("Android Eclair")) {
          this.os.version = new h({ value: "2.0", details: 3 });
        }
        this.device.type = "mobile";
        if (this.os.version >= 3) {
          this.device.type = "tablet";
        }
        if (this.os.version >= 4 && E.match("Mobile")) {
          this.device.type = "mobile";
        }
        if (
          (match =
            /Eclair; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?) Build\/([^\/]*)\//.exec(
              E
            ))
        ) {
          this.device.model = match[1];
        } else {
          if ((match = /; ([^;]*[^;\s])\s+Build/.exec(E))) {
            this.device.model = match[1];
          } else {
            if (
              (match =
                /[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; ([^;]*[^;\s]);\s+Build/.exec(
                  E
                ))
            ) {
              this.device.model = match[1];
            } else {
              if (
                (match =
                  /\(([^;]+);U;Android\/[^;]+;[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(
                    E
                  ))
              ) {
                this.device.model = match[1];
              } else {
                if (
                  (match = /;\s?([^;]+);\s?[0-9]+\*[0-9]+;\s?CTC\/2.0/.exec(E))
                ) {
                  this.device.model = match[1];
                } else {
                  if ((match = /zh-cn;\s*(.*?)(\/|build)/i.exec(E))) {
                    this.device.model = match[1];
                  } else {
                    if (
                      (match =
                        /Android [^;]+; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; )?([^)]+)\)/.exec(
                          E
                        ))
                    ) {
                      if (
                        !E.match(/[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?/)
                      ) {
                        this.device.model = match[1];
                      }
                    } else {
                      if ((match = /^(.+?)\/\S+/i.exec(E))) {
                        this.device.model = match[1];
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (
          this.device.model &&
          this.device.model.substring(0, 7) === "Android"
        ) {
          this.device.model = null;
        }
        if (this.device.model) {
          var J = m(this.device.model);
          if (typeof s[J] !== "undefined") {
            this.device.manufacturer = s[J][0];
            this.device.model = s[J][1];
            if (typeof s[J][2] !== "undefined") {
              this.device.type = s[J][2];
            }
            this.device.identified = true;
          }
          if (
            J === "Emulator" ||
            J === "x86 Emulator" ||
            J === "x86 VirtualBox" ||
            J === "vm"
          ) {
            this.device.manufacturer = null;
            this.device.model = null;
            this.device.type = "emulator";
            this.device.identified = true;
          }
        }
        if (E.match("HP eStation")) {
          this.device.manufacturer = "HP";
          this.device.model = "eStation";
          this.device.type = "tablet";
          this.device.identified = true;
        }
        if (E.match("Pre/1.0")) {
          this.device.manufacturer = "Palm";
          this.device.model = "Pre";
          this.device.identified = true;
        }
        if (E.match("Pre/1.1")) {
          this.device.manufacturer = "Palm";
          this.device.model = "Pre Plus";
          this.device.identified = true;
        }
        if (E.match("Pre/1.2")) {
          this.device.manufacturer = "Palm";
          this.device.model = "Pre 2";
          this.device.identified = true;
        }
        if (E.match("Pre/3.0")) {
          this.device.manufacturer = "HP";
          this.device.model = "Pre 3";
          this.device.identified = true;
        }
        if (E.match("Pixi/1.0")) {
          this.device.manufacturer = "Palm";
          this.device.model = "Pixi";
          this.device.identified = true;
        }
        if (E.match("Pixi/1.1")) {
          this.device.manufacturer = "Palm";
          this.device.model = "Pixi Plus";
          this.device.identified = true;
        }
        if (E.match("P160UN?A?/1.0")) {
          this.device.manufacturer = "HP";
          this.device.model = "Veer";
          this.device.identified = true;
        }
      }
      if (E.match("GoogleTV")) {
        this.os.name = "Google TV";
        if (E.match("Chrome/5.")) {
          this.os.version = new h({ value: "1" });
        }
        if (E.match("Chrome/11.")) {
          this.os.version = new h({ value: "2" });
        }
        this.device.type = "television";
      }
      if (E.match("WoPhone")) {
        this.os.name = "WoPhone";
        if ((match = /WoPhone\/([0-9\.]*)/.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
        this.device.type = "mobile";
      }
      if (E.match("BlackBerry")) {
        this.os.name = "BlackBerry OS";
        if (!E.match("Opera")) {
          if ((match = /BlackBerry([0-9]*)\/([0-9.]*)/.exec(E))) {
            this.device.model = match[1];
            this.os.version = new h({ value: match[2], details: 2 });
          }
          if ((match = /; BlackBerry ([0-9]*);/.exec(E))) {
            this.device.model = match[1];
          }
          if ((match = /Version\/([0-9.]*)/.exec(E))) {
            this.os.version = new h({ value: match[1], details: 2 });
          }
          if (this.os.version >= 10) {
            this.os.name = "BlackBerry";
          }
          if (typeof this.device.model !== "undefined") {
            if (typeof t[this.device.model] !== "undefined") {
              this.device.model =
                "BlackBerry " + t[this.device.model] + " " + this.device.model;
            } else {
              this.device.model = "BlackBerry " + this.device.model;
            }
          } else {
            this.device.model = "BlackBerry";
          }
        } else {
          this.device.model = "BlackBerry";
        }
        this.device.manufacturer = "RIM";
        this.device.type = "mobile";
        this.device.identified = true;
      }
      if (E.match("RIM Tablet OS")) {
        this.os.name = "BlackBerry Tablet OS";
        this.os.version = new h({
          value: E.match(/RIM Tablet OS ([0-9.]*)/)[1],
          details: 2,
        });
        this.device.manufacturer = "RIM";
        this.device.model = "BlackBerry PlayBook";
        this.device.type = "tablet";
        this.device.identified = true;
      } else {
        if (E.match("PlayBook")) {
          if ((match = /Version\/(10[0-9.]*)/.exec(E))) {
            this.os.name = "BlackBerry";
            this.os.version = new h({ value: match[1], details: 2 });
            this.device.manufacturer = "RIM";
            this.device.model = "BlackBerry PlayBook";
            this.device.type = "tablet";
            this.device.identified = true;
          }
        }
      }
      if (E.match("(?:web|hpw)OS")) {
        this.os.name = "webOS";
        this.os.version = new h({
          value: E.match(/(?:web|hpw)OS\/([0-9.]*)/)[1],
        });
        if (E.match("tablet")) {
          this.device.type = "tablet";
        } else {
          this.device.type = "mobile";
        }
        this.device.manufacturer = E.match("hpwOS") ? "HP" : "Palm";
        if (E.match("Pre/1.0")) {
          this.device.model = "Pre";
        }
        if (E.match("Pre/1.1")) {
          this.device.model = "Pre Plus";
        }
        if (E.match("Pre/1.2")) {
          this.device.model = "Pre2";
        }
        if (E.match("Pre/3.0")) {
          this.device.model = "Pre3";
        }
        if (E.match("Pixi/1.0")) {
          this.device.model = "Pixi";
        }
        if (E.match("Pixi/1.1")) {
          this.device.model = "Pixi Plus";
        }
        if (E.match("P160UN?A?/1.0")) {
          this.device.model = "Veer";
        }
        if (E.match("TouchPad/1.0")) {
          this.device.model = "TouchPad";
        }
        if (E.match("Emulator/") || E.match("Desktop/")) {
          this.device.type = "emulator";
          this.device.manufacturer = null;
          this.device.model = null;
        }
        this.device.identified = true;
      }
      if (E.match("Symbian") || E.match("Series[ ]?60") || E.match("S60")) {
        this.os.name = "Series60";
        if (E.match("SymbianOS/9.1") && !E.match("Series60")) {
          this.os.version = new h({ value: "3.0" });
        }
        if ((match = /Series60\/([0-9.]*)/.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
        if ((match = /Nokia([^\/;]+)[\/|;]/.exec(E))) {
          if (match[1] !== "Browser") {
            this.device.manufacturer = "Nokia";
            this.device.model = match[1];
            this.device.identified = true;
          }
        }
        if ((match = /Vertu([^\/;]+)[\/|;]/.exec(E))) {
          this.device.manufacturer = "Vertu";
          this.device.model = match[1];
          this.device.identified = true;
        }
        if ((match = /Symbian; U; ([^;]+); [a-z][a-z]\-[a-z][a-z]/i.exec(E))) {
          this.device.manufacturer = "Nokia";
          this.device.model = match[1];
          this.device.identified = true;
        }
        if ((match = /Samsung\/([^;]*);/.exec(E))) {
          this.device.manufacturer = z;
          this.device.model = match[1];
          this.device.identified = true;
        }
        this.device.type = "mobile";
      }
      if (E.match("Series40")) {
        this.os.name = "Series40";
        if ((match = /Nokia([^\/]+)\//.exec(E))) {
          this.device.manufacturer = "Nokia";
          this.device.model = match[1];
          this.device.identified = true;
        }
        this.device.type = "mobile";
      }
      if (E.match("MeeGo")) {
        this.os.name = "MeeGo";
        this.device.type = "mobile";
        if ((match = /Nokia([^\)]+)\)/.exec(E))) {
          this.device.manufacturer = "Nokia";
          this.device.model = match[1];
          this.device.identified = true;
        }
      }
      if (E.match("Maemo")) {
        this.os.name = "Maemo";
        this.device.type = "mobile";
        if ((match = /(N[0-9]+)/.exec(E))) {
          this.device.manufacturer = "Nokia";
          this.device.model = match[1];
          this.device.identified = true;
        }
      }
      if (E.match("Tizen")) {
        this.os.name = "Tizen";
        if ((match = /Tizen[\/ ]([0-9.]*)/.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
        this.device.type = "mobile";
        if ((match = /\(([^;]+); ([^\/]+)\//.exec(E))) {
          if (match[1] !== "Linux") {
            this.device.manufacturer = match[1];
            this.device.model = match[2];
            if (
              typeof TIZEN_MODELS[this.device.manufacturer] !== "undefined" &&
              typeof TIZEN_MODELS[this.device.manufacturer][
                this.device.model
              ] !== "undefined"
            ) {
              var N = this.device.manufacturer;
              var J = m(this.device.model);
              this.device.manufacturer = TIZEN_MODELS[N][J][0];
              this.device.model = TIZEN_MODELS[N][J][1];
              this.device.identified = true;
            }
          }
        }
      }
      if (E.match("[b|B]ada")) {
        this.os.name = "Bada";
        if ((match = /[b|B]ada\/([0-9.]*)/.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
        this.device.type = "mobile";
        if ((match = /\(([^;]+); ([^\/]+)\//.exec(E))) {
          this.device.manufacturer = match[1];
          this.device.model = m(match[2]);
        }
        if (
          typeof e[this.device.manufacturer] !== "undefined" &&
          typeof e[this.device.manufacturer][this.device.model] !== "undefined"
        ) {
          var N = this.device.manufacturer;
          var J = m(this.device.model);
          this.device.manufacturer = e[N][J][0];
          this.device.model = e[N][J][1];
          this.device.identified = true;
        }
      }
      if (E.match(/BREW/i) || E.match("BMP; U")) {
        this.os.name = "Brew";
        this.device.type = "mobile";
        if ((match = /BREW; U; ([0-9.]*)/i.exec(E))) {
          this.os.version = new h({ value: match[1] });
        } else {
          if ((match = /;BREW\/([0-9.]*)/i.exec(E))) {
            this.os.version = new h({ value: match[1] });
          }
        }
        if (
          (match =
            /\(([^;]+);U;REX\/[^;]+;BREW\/[^;]+;(?:.*;)?[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(
              E
            ))
        ) {
          this.device.model = match[1];
        }
        if (this.device.model) {
          var J = m(this.device.model);
          if (typeof BREW_MODELS[J] !== "undefined") {
            this.device.manufacturer = BREW_MODELS[J][0];
            this.device.model = BREW_MODELS[J][1];
            this.device.identified = true;
          }
        }
      }
      if (E.match(/\(MTK;/)) {
        this.os.name = "MTK";
        this.device.type = "mobile";
      }
      if (E.match("CrOS")) {
        this.os.name = "Chrome OS";
        this.device.type = "desktop";
      }
      if (E.match("Joli OS")) {
        this.os.name = "Joli OS";
        this.device.type = "desktop";
        if ((match = /Joli OS\/([0-9.]*)/i.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
      }
      if (E.match("Haiku")) {
        this.os.name = "Haiku";
        this.device.type = "desktop";
      }
      if (E.match("QNX")) {
        this.os.name = "QNX";
        this.device.type = "mobile";
      }
      if (E.match("OS/2; Warp")) {
        this.os.name = "OS/2 Warp";
        this.device.type = "desktop";
        if ((match = /OS\/2; Warp ([0-9.]*)/i.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
      }
      if (E.match("Grid OS")) {
        this.os.name = "Grid OS";
        this.device.type = "tablet";
        if ((match = /Grid OS ([0-9.]*)/i.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
      }
      if (E.match(/AmigaOS/i)) {
        this.os.name = "AmigaOS";
        this.device.type = "desktop";
        if ((match = /AmigaOS ([0-9.]*)/i.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
      }
      if (E.match(/MorphOS/i)) {
        this.os.name = "MorphOS";
        this.device.type = "desktop";
        if ((match = /MorphOS ([0-9.]*)/i.exec(E))) {
          this.os.version = new h({ value: match[1] });
        }
      }
      if (E.match("Kindle") && !E.match("Fire")) {
        this.os.name = "";
        this.device.manufacturer = "Amazon";
        this.device.model = "Kindle";
        this.device.type = "ereader";
        if (E.match("Kindle/2.0")) {
          this.device.model = "Kindle 2";
        }
        if (E.match("Kindle/3.0")) {
          this.device.model = "Kindle 3 or later";
        }
        this.device.identified = true;
      }
      if (E.match("nook browser")) {
        this.os.name = "Android";
        this.device.manufacturer = "Barnes & Noble";
        this.device.model = "NOOK";
        this.device.type = "ereader";
        this.device.identified = true;
      }
      if (E.match("bookeen/cybook")) {
        this.os.name = "";
        this.device.manufacturer = "Bookeen";
        this.device.model = "Cybook";
        this.device.type = "ereader";
        if (E.match("Orizon")) {
          this.device.model = "Cybook Orizon";
        }
        this.device.identified = true;
      }
      if (E.match("EBRD1101")) {
        this.os.name = "";
        this.device.manufacturer = "Sony";
        this.device.model = "Reader";
        this.device.type = "ereader";
        this.device.identified = true;
      }
      if (E.match("Iriver ;")) {
        this.os.name = "";
        this.device.manufacturer = "iRiver";
        this.device.model = "Story";
        this.device.type = "ereader";
        if (E.match("EB07")) {
          this.device.model = "Story HD EB07";
        }
        this.device.identified = true;
      }
      if (E.match("Nintendo Wii")) {
        this.os.name = "";
        this.device.manufacturer = "Nintendo";
        this.device.model = "Wii";
        this.device.type = "gaming";
        this.device.identified = true;
      }
      if ((match = /Winbox Evo2/.exec(E))) {
        this.os.name = "";
        this.device.manufacturer = "Winbox";
        this.device.model = "Evo2";
        this.device.type = "television";
        this.device.identified = true;
      }
      if ((match = /^Roku\/DVP-([0-9]+)/.exec(E))) {
        this.device.manufacturer = "Roku";
        this.device.type = "television";
        switch (match[1]) {
          case "2000":
            this.device.model = "HD";
            break;
          case "2050":
            this.device.model = "XD";
            break;
          case "2100":
            this.device.model = "XDS";
            break;
          case "2400":
            this.device.model = "LT";
            break;
          case "3000":
            this.device.model = "2 HD";
            break;
          case "3050":
            this.device.model = "2 XD";
            break;
          case "3100":
            this.device.model = "2 XS";
            break;
        }
        this.device.identified = true;
      }
      if (
        (match = /HbbTV\/1.1.1 \([^;]*;\s*([^;]*)\s*;\s*([^;]*)\s*;/.exec(E))
      ) {
        var F = match[1].trim();
        var L = match[2].trim();
        if (!this.device.manufacturer && F !== "" && F !== "vendorName") {
          switch (F) {
            case "LGE":
              this.device.manufacturer = "LG";
              break;
            case "TOSHIBA":
              this.device.manufacturer = "Toshiba";
              break;
            case "smart":
              this.device.manufacturer = "Smart";
              break;
            case "tv2n":
              this.device.manufacturer = "TV2N";
              break;
            default:
              this.device.manufacturer = F;
          }
          if (!this.device.model && L !== "" && L !== "modelName") {
            switch (L) {
              case "GLOBAL_PLAT3":
                this.device.model = "NetCast TV";
                break;
              case "SmartTV2012":
                this.device.model = "Smart TV 2012";
                break;
              case "videoweb":
                this.device.model = "Videoweb";
                break;
              default:
                this.device.model = L;
            }
            if (F === "Humax") {
              this.device.model = this.device.model.toUpperCase();
            }
            this.device.identified = true;
            this.os.name = "";
          }
        }
        this.device.type = "television";
      }
      if (E.match("InettvBrowser")) {
        this.device.type = "television";
      }
      if (E.match("MIDP")) {
        this.device.type = "mobile";
      }
      if (!this.device.model && !this.device.manufacturer) {
        var I = [];
        if (!E.match(/^(Mozilla|Opera)/)) {
          if ((match = /^(?:MQQBrowser\/[0-9\.]+\/)?([^\s]+)/.exec(E))) {
            match[1] = match[1].replace(/_TD$/, "");
            match[1] = match[1].replace(/_CMCC$/, "");
            match[1] = match[1].replace(/[_ ]Mozilla$/, "");
            match[1] = match[1].replace(/ Linux$/, "");
            match[1] = match[1].replace(/ Opera$/, "");
            match[1] = match[1].replace(/\/[0-9].*$/, "");
            I.push(match[1]);
          }
        }
        if ((match = /[0-9]+x[0-9]+; ([^;]+)/.exec(E))) {
          I.push(match[1]);
        }
        if ((match = /[0-9]+X[0-9]+ ([^;\/\(\)]+)/.exec(E))) {
          I.push(match[1]);
        }
        if ((match = /Windows NT 5.1; ([^;]+); Windows Phone/.exec(E))) {
          I.push(match[1]);
        }
        if ((match = /\) PPC; (?:[0-9]+x[0-9]+; )?([^;\/\(\)]+)/.exec(E))) {
          I.push(match[1]);
        }
        if ((match = /\(([^;]+); U; Windows Mobile/.exec(E))) {
          I.push(match[1]);
        }
        if ((match = /Vodafone\/1.0\/([^\/]+)/.exec(E))) {
          I.push(match[1]);
        }
        if ((match = /\ ([^\s]+)$/.exec(E))) {
          I.push(match[1]);
        }
        for (var H = 0; H < I.length; H++) {
          if (!this.device.model && !this.device.manufacturer) {
            var J = m(I[H]);
            var O = false;
            if (this.os.name === "Android") {
              if (typeof s[J] !== "undefined") {
                this.device.manufacturer = s[J][0];
                this.device.model = s[J][1];
                if (typeof s[J][2] !== "undefined") {
                  this.device.type = s[J][2];
                }
                this.device.identified = true;
                O = true;
              }
            }
            if (
              !this.os.name ||
              this.os.name === "Windows" ||
              this.os.name === "Windows Mobile" ||
              this.os.name === "Windows CE"
            ) {
              if (typeof B[J] !== "undefined") {
                this.device.manufacturer = B[J][0];
                this.device.model = B[J][1];
                this.device.type = "mobile";
                this.device.identified = true;
                if (this.os.name !== "Windows Mobile") {
                  this.os.name = "Windows Mobile";
                  this.os.version = null;
                }
                O = true;
              }
            }
          }
          if (!O) {
            if ((match = /^GIONEE-([^\s]+)/.exec(I[H]))) {
              this.device.manufacturer = "Gionee";
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /^HTC_?([^\/_]+)(?:\/|_|$)/.exec(I[H]))) {
              this.device.manufacturer = A;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /^HUAWEI-([^\/]*)/.exec(I[H]))) {
              this.device.manufacturer = n;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /(?:^|\()LGE?(?:\/|-|_|\s)([^\s]*)/.exec(I[H]))) {
              this.device.manufacturer = b;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /^MOT-([^\/_]+)(?:\/|_|$)/.exec(I[H]))) {
              this.device.manufacturer = w;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /^Motorola_([^\/_]+)(?:\/|_|$)/.exec(I[H]))) {
              this.device.manufacturer = w;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /^Nokia([^\/]+)(?:\/|$)/.exec(I[H]))) {
              this.device.manufacturer = "Nokia";
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
              if (!this.os.name) {
                this.os.name = "Series40";
              }
            }
            if ((match = /^SonyEricsson([^\/_]+)(?:\/|_|$)/.exec(I[H]))) {
              this.device.manufacturer = d;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              this.device.identified = true;
            }
            if ((match = /^SAMSUNG-([^\/_]+)(?:\/|_|$)/.exec(I[H]))) {
              this.device.manufacturer = z;
              this.device.model = m(match[1]);
              this.device.type = "mobile";
              if (this.os.name === "Bada") {
                var N = "SAMSUNG";
                var J = m(this.device.model);
                if (
                  typeof e[N] !== "undefined" &&
                  typeof e[N][J] !== "undefined"
                ) {
                  this.device.manufacturer = e[N][J][0];
                  this.device.model = e[N][J][1];
                  this.device.identified = true;
                }
              } else {
                if ((match = /Jasmine\/([0-9.]*)/.exec(E))) {
                  var K = match[1];
                  var N = "SAMSUNG";
                  var J = m(this.device.model);
                  if (
                    typeof D[N] !== "undefined" &&
                    typeof D[N][J] !== "undefined"
                  ) {
                    this.device.manufacturer = D[N][J][0];
                    this.device.model = D[N][J][1];
                    this.device.identified = true;
                    this.os.name = "Touchwiz";
                    this.os.version = new h({ value: "2.0" });
                  }
                } else {
                  if ((match = /Dolfin\/([0-9.]*)/.exec(E))) {
                    var K = match[1];
                    var N = "SAMSUNG";
                    var J = m(this.device.model);
                    if (
                      typeof e[N] !== "undefined" &&
                      typeof e[N][J] !== "undefined"
                    ) {
                      this.device.manufacturer = e[N][J][0];
                      this.device.model = e[N][J][1];
                      this.device.identified = true;
                      this.os.name = "Bada";
                      switch (K) {
                        case "2.0":
                          this.os.version = new h({ value: "1.0" });
                          break;
                        case "2.2":
                          this.os.version = new h({ value: "1.2" });
                          break;
                        case "3.0":
                          this.os.version = new h({ value: "2.0" });
                          break;
                      }
                    }
                    if (
                      typeof D[N] !== "undefined" &&
                      typeof D[N][J] !== "undefined"
                    ) {
                      this.device.manufacturer = D[N][J][0];
                      this.device.model = D[N][J][1];
                      this.device.identified = true;
                      this.os.name = "Touchwiz";
                      switch (K) {
                        case "1.0":
                          this.os.version = new h({ value: "1.0" });
                          break;
                        case "1.5":
                          this.os.version = new h({ value: "2.0" });
                          break;
                        case "2.0":
                          this.os.version = new h({ value: "3.0" });
                          break;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if ((match = /\((?:LG[-|\/])(.*) (?:Browser\/)?AppleWebkit/.exec(E))) {
        this.device.manufacturer = b;
        this.device.model = match[1];
        this.device.type = "mobile";
        this.device.identified = true;
      }
      if (
        (match =
          /^Mozilla\/5.0 \((?:Nokia|NOKIA)(?:\s?)([^\)]+)\)UC AppleWebkit\(like Gecko\) Safari\/530$/.exec(
            E
          ))
      ) {
        this.device.manufacturer = "Nokia";
        this.device.model = match[1];
        this.device.type = "mobile";
        this.device.identified = true;
        this.os.name = "Series60";
      }
      if (E.match("Safari")) {
        if (this.os.name === "iOS") {
          this.browser.stock = true;
          this.browser.hidden = true;
          this.browser.name = "Safari";
          this.browser.version = null;
        }
        if (this.os.name === "Mac OS X" || this.os.name === "Windows") {
          this.browser.name = "Safari";
          this.browser.stock = this.os.name === "Mac OS X";
          if ((match = /Version\/([0-9\.]+)/.exec(E))) {
            this.browser.version = new h({ value: match[1] });
          }
          if (E.match(/AppleWebKit\/[0-9\.]+\+/)) {
            this.browser.name = "WebKit Nightly Build";
            this.browser.version = null;
          }
        }
      }
      if (E.match("MSIE")) {
        this.browser.name = "Internet Explorer";
        if (
          E.match("IEMobile") ||
          E.match("Windows CE") ||
          E.match("Windows Phone") ||
          E.match("WP7")
        ) {
          this.browser.name = "Mobile Internet Explorer";
        }
        if ((match = /MSIE ([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match(/Opera/i)) {
        this.browser.stock = false;
        this.browser.name = "Opera";
        if ((match = /Opera[\/| ]([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        if ((match = /Version\/([0-9.]*)/.exec(E))) {
          if (parseFloat(match[1]) >= 10) {
            this.browser.version = new h({ value: match[1] });
          } else {
            this.browser.version = null;
          }
        }
        if (this.browser.version && E.match("Edition Labs")) {
          this.browser.version.type = "alpha";
          this.browser.channel = "Labs";
        }
        if (this.browser.version && E.match("Edition Next")) {
          this.browser.version.type = "alpha";
          this.browser.channel = "Next";
        }
        if (E.match("Opera Tablet")) {
          this.browser.name = "Opera Mobile";
          this.device.type = "tablet";
        }
        if (E.match("Opera Mobi")) {
          this.browser.name = "Opera Mobile";
          this.device.type = "mobile";
        }
        if ((match = /Opera Mini;/.exec(E))) {
          this.browser.name = "Opera Mini";
          this.browser.version = null;
          this.browser.mode = "proxy";
          this.device.type = "mobile";
        }
        if ((match = /Opera Mini\/(?:att\/)?([0-9.]*)/.exec(E))) {
          this.browser.name = "Opera Mini";
          this.browser.version = new h({ value: match[1], details: -1 });
          this.browser.mode = "proxy";
          this.device.type = "mobile";
        }
        if (this.browser.name === "Opera" && this.device.type === "mobile") {
          this.browser.name = "Opera Mobile";
          if (E.match(/BER/)) {
            this.browser.name = "Opera Mini";
            this.browser.version = null;
          }
        }
        if (E.match("InettvBrowser")) {
          this.device.type = "television";
        }
        if (E.match("Opera TV") || E.match("Opera-TV")) {
          this.browser.name = "Opera";
          this.device.type = "television";
        }
        if (E.match("Linux zbov")) {
          this.browser.name = "Opera Mobile";
          this.browser.mode = "desktop";
          this.device.type = "mobile";
          this.os.name = null;
          this.os.version = null;
        }
        if (E.match("Linux zvav")) {
          this.browser.name = "Opera Mini";
          this.browser.version = null;
          this.browser.mode = "desktop";
          this.device.type = "mobile";
          this.os.name = null;
          this.os.version = null;
        }
      }
      if (E.match("Firefox")) {
        this.browser.stock = false;
        this.browser.name = "Firefox";
        if ((match = /Firefox\/([0-9ab.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        if (this.browser.version.type === "alpha") {
          this.browser.channel = "Aurora";
        }
        if (this.browser.version.type === "beta") {
          this.browser.channel = "Beta";
        }
        if (E.match("Fennec")) {
          this.device.type = "mobile";
        }
        if (E.match("Mobile; rv")) {
          this.device.type = "mobile";
        }
        if (E.match("Tablet; rv")) {
          this.device.type = "tablet";
        }
        if (this.device.type === "mobile" || this.device.type === "tablet") {
          this.browser.name = "Firefox Mobile";
        }
      }
      if (E.match("Namoroka")) {
        this.browser.stock = false;
        this.browser.name = "Firefox";
        if ((match = /Namoroka\/([0-9ab.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        this.browser.channel = "Namoroka";
      }
      if (E.match("Shiretoko")) {
        this.browser.stock = false;
        this.browser.name = "Firefox";
        if ((match = /Shiretoko\/([0-9ab.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        this.browser.channel = "Shiretoko";
      }
      if (E.match("Minefield")) {
        this.browser.stock = false;
        this.browser.name = "Firefox";
        if ((match = /Minefield\/([0-9ab.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        this.browser.channel = "Minefield";
      }
      if (E.match("Firebird")) {
        this.browser.stock = false;
        this.browser.name = "Firebird";
        if ((match = /Firebird\/([0-9ab.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("SeaMonkey")) {
        this.browser.stock = false;
        this.browser.name = "SeaMonkey";
        if ((match = /SeaMonkey\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("Netscape")) {
        this.browser.stock = false;
        this.browser.name = "Netscape";
        if ((match = /Netscape[0-9]?\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("[k|K]onqueror/")) {
        this.browser.name = "Konqueror";
        if ((match = /[k|K]onqueror\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if ((match = /(?:Chrome|CrMo|CriOS)\/([0-9.]*)/.exec(E))) {
        this.browser.stock = false;
        this.browser.name = "Chrome";
        this.browser.version = new h({ value: match[1] });
        if (this.os.name === "Android") {
          switch (match[1].split(".", 3).join(".")) {
            case "16.0.912":
              this.browser.channel = "Beta";
              break;
            case "18.0.1025":
              this.browser.version.details = 1;
              break;
            default:
              this.browser.channel = "Nightly";
              break;
          }
        } else {
          switch (match[1].split(".", 3).join(".")) {
            case "0.2.149":
            case "0.3.154":
            case "0.4.154":
            case "1.0.154":
            case "2.0.172":
            case "3.0.195":
            case "4.0.249":
            case "4.1.249":
            case "5.0.375":
            case "6.0.472":
            case "7.0.517":
            case "8.0.552":
            case "9.0.597":
            case "10.0.648":
            case "11.0.696":
            case "12.0.742":
            case "13.0.782":
            case "14.0.835":
            case "15.0.874":
            case "16.0.912":
            case "17.0.963":
            case "18.0.1025":
            case "19.0.1084":
            case "20.0.1132":
            case "21.0.1180":
              if (this.browser.version.minor === 0) {
                this.browser.version.details = 1;
              } else {
                this.browser.version.details = 2;
              }
              break;
            default:
              this.browser.channel = "Nightly";
              break;
          }
        }
      }
      if (E.match("chromeframe")) {
        this.browser.stock = false;
        this.browser.name = "Chrome Frame";
        if ((match = /chromeframe\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("Chromium")) {
        this.browser.stock = false;
        this.browser.channel = "";
        this.browser.name = "Chromium";
        if ((match = /Chromium\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("BrowserNG")) {
        this.browser.name = "Nokia Browser";
        if ((match = /BrowserNG\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({
            value: match[1],
            details: 3,
            builds: false,
          });
        }
      }
      if (E.match("NokiaBrowser")) {
        this.browser.name = "Nokia Browser";
        if ((match = /NokiaBrowser\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1], details: 3 });
        }
      }
      if (E.match("Maemo[ |_]Browser")) {
        this.browser.name = "MicroB";
        if ((match = /Maemo[ |_]Browser[ |_]([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1], details: 3 });
        }
      }
      if (E.match("Iris")) {
        this.browser.name = "Iris";
        this.device.type = "mobile";
        this.device.model = null;
        this.device.manufacturer = null;
        this.os.name = "Windows Mobile";
        this.os.version = null;
        if ((match = /Iris\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        if ((match = / WM([0-9]) /.exec(E))) {
          this.os.version = new h({ value: match[1] + ".0" });
        } else {
          this.browser.mode = "desktop";
        }
      }
      if (E.match("Jasmine")) {
        this.browser.name = "Jasmine";
        if ((match = /Jasmine\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("Boxee")) {
        this.browser.name = "Boxee";
        this.device.type = "television";
        if ((match = /Boxee\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if (E.match("Espial")) {
        this.browser.name = "Espial";
        this.os.name = "";
        this.os.version = null;
        if (this.device.type !== "television") {
          this.device.type = "television";
          this.device.model = null;
          this.device.manufacturer = null;
        }
        if ((match = /Espial\/([0-9.]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
      }
      if ((match = /ANTGalio\/([0-9.]*)/.exec(E))) {
        this.browser.name = "ANT Galio";
        this.browser.version = new h({ value: match[1], details: 3 });
        this.device.type = "television";
      }
      if ((match = /NX\/([0-9.]*)/.exec(E))) {
        this.browser.name = "NetFront NX";
        this.browser.version = new h({ value: match[1], details: 2 });
        if ((match = /DTV/i.exec(E))) {
          this.device.type = "television";
        } else {
          if ((match = /mobile/i.exec(E))) {
            this.device.type = "mobile";
          } else {
            this.device.type = "desktop";
          }
        }
        this.os.name = null;
        this.os.version = null;
      }
      if (E.match(/Obigo/i)) {
        this.browser.name = "Obigo";
        if ((match = /Obigo\/([0-9.]*)/i.exec(E))) {
          this.browser.version = new h({ value: match[1] });
        }
        if ((match = /Obigo\/([A-Z])([0-9.]*)/i.exec(E))) {
          this.browser.name = "Obigo " + match[1];
          this.browser.version = new h({ value: match[2] });
        }
        if ((match = /Obigo-([A-Z])([0-9.]*)\//i.exec(E))) {
          this.browser.name = "Obigo " + match[1];
          this.browser.version = new h({ value: match[2] });
        }
      }
      if (E.match("UCWEB")) {
        this.browser.stock = false;
        this.browser.name = "UC Browser";
        if ((match = /UCWEB([0-9]*[.][0-9]*)/.exec(E))) {
          this.browser.version = new h({ value: match[1], details: 3 });
        }
        if (this.os.name === "Linux") {
          this.os.name = "";
        }
        this.device.type = "mobile";
        if ((match = /^IUC \(U;\s?iOS ([0-9\.]+);/.exec(E))) {
          this.os.name = "iOS";
          this.os.version = new h({ value: match[1] });
        }
        if (
          (match =
            /^JUC \(Linux; U; ([0-9\.]+)[^;]*; [^;]+; ([^;]*[^\s])\s*; [0-9]+\*[0-9]+\)/.exec(
              E
            ))
        ) {
          var J = m(match[2]);
          this.os.name = "Android";
          this.os.version = new h({ value: match[1] });
          if (typeof s[J] !== "undefined") {
            this.device.manufacturer = s[J][0];
            this.device.model = s[J][1];
            if (typeof s[J][2] !== "undefined") {
              this.device.type = s[J][2];
            }
            this.device.identified = true;
          }
        }
      }
      if (E.match(/\) UC /)) {
        this.browser.stock = false;
        this.browser.name = "UC Browser";
      }
      if ((match = /UCBrowser\/([0-9.]*)/.exec(E))) {
        this.browser.stock = false;
        this.browser.name = "UC Browser";
        this.browser.version = new h({ value: match[1], details: 2 });
      }
      if ((match = /Ninesky(?:-android-mobile(?:-cn)?)?\/([0-9.]*)/.exec(E))) {
        this.browser.name = "NineSky";
        this.browser.version = new h({ value: match[1] });
        if (this.os.name !== "Android") {
          this.os.name = "Android";
          this.os.version = null;
          this.device.manufacturer = null;
          this.device.model = null;
        }
      }
      if ((match = /Skyfire\/([0-9.]*)/.exec(E))) {
        this.browser.name = "Skyfire";
        this.browser.version = new h({ value: match[1] });
        this.device.type = "mobile";
        this.os.name = "Android";
        this.os.version = null;
      }
      if ((match = /DolphinHDCN\/([0-9.]*)/.exec(E))) {
        this.browser.name = "Dolphin";
        this.browser.version = new h({ value: match[1] });
        this.device.type = "mobile";
        if (this.os.name !== "Android") {
          this.os.name = "Android";
          this.os.version = null;
        }
      }
      if ((match = /Dolphin\/INT/.exec(E))) {
        this.browser.name = "Dolphin";
        this.device.type = "mobile";
      }
      if ((match = /(M?QQBrowser)\/([0-9.]*)/.exec(E))) {
        this.browser.name = "QQ Browser";
        var K = match[2];
        if (K.match(/^[0-9][0-9]$/)) {
          K = K[0] + "." + K[1];
        }
        this.browser.version = new h({ value: K, details: 2 });
        this.browser.channel = "";
        if (!this.os.name && match[1] === "QQBrowser") {
          this.os.name = "Windows";
        }
      }
      if ((match = /(iBrowser)\/([0-9.]*)/.exec(E))) {
        this.browser.name = "iBrowser";
        var K = match[2];
        if (K.match(/[0-9][0-9]/)) {
          K = K[0] + "." + K[1];
        }
        this.browser.version = new h({ value: K, details: 2 });
        this.browser.channel = "";
      }
      if ((match = /Puffin\/([0-9.]*)/.exec(E))) {
        this.browser.name = "Puffin";
        this.browser.version = new h({ value: match[1], details: 2 });
        this.device.type = "mobile";
        if (this.os.name === "Linux") {
          this.os.name = null;
          this.os.version = null;
        }
      }
      if (E.match("360EE")) {
        this.browser.stock = false;
        this.browser.name = "360 Extreme Explorer";
        this.browser.version = null;
      }
      if ((match = /Midori\/([0-9.]*)/.exec(E))) {
        this.browser.name = "Midori";
        this.browser.version = new h({ value: match[1] });
        if (this.os.name !== "Linux") {
          this.os.name = "Linux";
          this.os.version = null;
        }
        this.device.manufacturer = null;
        this.device.model = null;
        this.device.type = "desktop";
      }
      var G = [
        { name: "AdobeAIR", regexp: /AdobeAIR\/([0-9.]*)/ },
        { name: "Awesomium", regexp: /Awesomium\/([0-9.]*)/ },
        { name: "Canvace", regexp: /Canvace Standalone\/([0-9.]*)/ },
        { name: "Ekioh", regexp: /Ekioh\/([0-9.]*)/ },
        { name: "JavaFX", regexp: /JavaFX\/([0-9.]*)/ },
        { name: "GFXe", regexp: /GFXe\/([0-9.]*)/ },
        { name: "LuaKit", regexp: /luakit/ },
        { name: "Titanium", regexp: /Titanium\/([0-9.]*)/ },
        { name: "OpenWebKitSharp", regexp: /OpenWebKitSharp/ },
        { name: "Prism", regexp: /Prism\/([0-9.]*)/ },
        { name: "Qt", regexp: /Qt\/([0-9.]*)/ },
        { name: "QtEmbedded", regexp: /QtEmbedded/ },
        { name: "QtEmbedded", regexp: /QtEmbedded.*Qt\/([0-9.]*)/ },
        { name: "RhoSimulator", regexp: /RhoSimulator/ },
        { name: "UWebKit", regexp: /UWebKit\/([0-9.]*)/ },
        { name: "PhantomJS", regexp: /PhantomJS\/([0-9.]*)/ },
        { name: "Google Web Preview", regexp: /Google Web Preview/ },
        { name: "Google Earth", regexp: /Google Earth\/([0-9.]*)/ },
        { name: "EA Origin", regexp: /Origin\/([0-9.]*)/ },
        { name: "SecondLife", regexp: /SecondLife\/([0-9.]*)/ },
        { name: "Valve Steam", regexp: /Valve Steam/ },
        { name: "Songbird", regexp: /Songbird\/([0-9.]*)/ },
        { name: "Thunderbird", regexp: /Thunderbird\/([0-9.]*)/ },
        { name: "Abrowser", regexp: /Abrowser\/([0-9.]*)/ },
        { name: "arora", regexp: /[Aa]rora\/([0-9.]*)/ },
        { name: "Baidu Browser", regexp: /M?BaiduBrowser\/([0-9.]*)/i },
        { name: "Camino", regexp: /Camino\/([0-9.]*)/ },
        { name: "Canure", regexp: /Canure\/([0-9.]*)/, details: 3 },
        { name: "CometBird", regexp: /CometBird\/([0-9.]*)/ },
        {
          name: "Comodo Dragon",
          regexp: /Comodo_Dragon\/([0-9.]*)/,
          details: 2,
        },
        { name: "Conkeror", regexp: /[Cc]onkeror\/([0-9.]*)/ },
        {
          name: "CoolNovo",
          regexp: /(?:CoolNovo|CoolNovoChromePlus)\/([0-9.]*)/,
          details: 3,
        },
        {
          name: "ChromePlus",
          regexp: /ChromePlus(?:\/([0-9.]*))?$/,
          details: 3,
        },
        { name: "Daedalus", regexp: /Daedalus ([0-9.]*)/, details: 2 },
        { name: "Demobrowser", regexp: /demobrowser\/([0-9.]*)/ },
        { name: "Dooble", regexp: /Dooble(?:\/([0-9.]*))?/ },
        { name: "DWB", regexp: /dwb(?:-hg)?(?:\/([0-9.]*))?/ },
        { name: "Epiphany", regexp: /Epiphany\/([0-9.]*)/ },
        { name: "FireWeb", regexp: /FireWeb\/([0-9.]*)/ },
        { name: "Flock", regexp: /Flock\/([0-9.]*)/, details: 3 },
        { name: "Galeon", regexp: /Galeon\/([0-9.]*)/, details: 3 },
        { name: "Helium", regexp: /HeliumMobileBrowser\/([0-9.]*)/ },
        { name: "iCab", regexp: /iCab\/([0-9.]*)/ },
        { name: "Iceape", regexp: /Iceape\/([0-9.]*)/ },
        { name: "IceCat", regexp: /IceCat ([0-9.]*)/ },
        { name: "Iceweasel", regexp: /Iceweasel\/([0-9.]*)/ },
        { name: "InternetSurfboard", regexp: /InternetSurfboard\/([0-9.]*)/ },
        { name: "Iron", regexp: /Iron\/([0-9.]*)/, details: 2 },
        { name: "Isis", regexp: /BrowserServer/ },
        { name: "Jumanji", regexp: /jumanji/ },
        { name: "Kazehakase", regexp: /Kazehakase\/([0-9.]*)/ },
        { name: "KChrome", regexp: /KChrome\/([0-9.]*)/, details: 3 },
        { name: "K-Meleon", regexp: /K-Meleon\/([0-9.]*)/ },
        {
          name: "Leechcraft",
          regexp: /Leechcraft(?:\/([0-9.]*))?/,
          details: 2,
        },
        { name: "Lightning", regexp: /Lightning\/([0-9.]*)/ },
        { name: "Lunascape", regexp: /Lunascape[\/| ]([0-9.]*)/, details: 3 },
        { name: "iLunascape", regexp: /iLunascape\/([0-9.]*)/, details: 3 },
        { name: "Maxthon", regexp: /Maxthon[\/ ]([0-9.]*)/, details: 3 },
        { name: "MiniBrowser", regexp: /MiniBr?owserM\/([0-9.]*)/ },
        { name: "MiniBrowser", regexp: /MiniBrowserMobile\/([0-9.]*)/ },
        { name: "MixShark", regexp: /MixShark\/([0-9.]*)/ },
        {
          name: "Motorola WebKit",
          regexp: /MotorolaWebKit\/([0-9.]*)/,
          details: 3,
        },
        {
          name: "NetFront LifeBrowser",
          regexp: /NetFrontLifeBrowser\/([0-9.]*)/,
        },
        {
          name: "Netscape Navigator",
          regexp: /Navigator\/([0-9.]*)/,
          details: 3,
        },
        { name: "Odyssey", regexp: /OWB\/([0-9.]*)/ },
        { name: "OmniWeb", regexp: /OmniWeb/ },
        { name: "Orca", regexp: /Orca\/([0-9.]*)/ },
        { name: "Origyn", regexp: /Origyn Web Browser/ },
        { name: "Palemoon", regexp: /Pale[mM]oon\/([0-9.]*)/ },
        { name: "Phantom", regexp: /Phantom\/V([0-9.]*)/ },
        { name: "Polaris", regexp: /Polaris\/v?([0-9.]*)/i, details: 2 },
        { name: "QtCreator", regexp: /QtCreator\/([0-9.]*)/ },
        { name: "QtQmlViewer", regexp: /QtQmlViewer/ },
        { name: "QtTestBrowser", regexp: /QtTestBrowser\/([0-9.]*)/ },
        { name: "QtWeb", regexp: /QtWeb Internet Browser\/([0-9.]*)/ },
        { name: "QupZilla", regexp: /QupZilla\/([0-9.]*)/ },
        { name: "Roccat", regexp: /Roccat\/([0-9]\.[0-9.]*)/ },
        { name: "Raven for Mac", regexp: /Raven for Mac\/([0-9.]*)/ },
        { name: "rekonq", regexp: /rekonq/ },
        { name: "RockMelt", regexp: /RockMelt\/([0-9.]*)/, details: 2 },
        { name: "Sleipnir", regexp: /Sleipnir\/([0-9.]*)/, details: 3 },
        { name: "SMBrowser", regexp: /SMBrowser/ },
        { name: "Sogou Explorer", regexp: /SE 2.X MetaSr/ },
        { name: "SunChrome", regexp: /SunChrome\/([0-9.]*)/ },
      ];
      for (var M = 0; M < G.length; M++) {
        if ((match = G[M].regexp.exec(E))) {
          this.browser.name = G[M].name;
          this.browser.channel = "";
          this.browser.stock = false;
          if (match[1]) {
            this.browser.version = new h({
              value: match[1],
              details: G[M].details || null,
            });
          } else {
            this.browser.version = null;
          }
        }
      }
      if ((match = /WebKit\/([0-9.]*)/i.exec(E))) {
        this.engine.name = "Webkit";
        this.engine.version = new h({ value: match[1] });
      }
      if ((match = /Browser\/AppleWebKit([0-9.]*)/i.exec(E))) {
        this.engine.name = "Webkit";
        this.engine.version = new h({ value: match[1] });
      }
      if ((match = /KHTML\/([0-9.]*)/.exec(E))) {
        this.engine.name = "KHTML";
        this.engine.version = new h({ value: match[1] });
      }
      if (/Gecko/.exec(E) && !/like Gecko/i.exec(E)) {
        this.engine.name = "Gecko";
        if ((match = /; rv:([^\)]+)\)/.exec(E))) {
          this.engine.version = new h({ value: match[1] });
        }
      }
      if ((match = /Presto\/([0-9.]*)/.exec(E))) {
        this.engine.name = "Presto";
        this.engine.version = new h({ value: match[1] });
      }
      if ((match = /Trident\/([0-9.]*)/.exec(E))) {
        this.engine.name = "Trident";
        this.engine.version = new h({ value: match[1] });
        if (this.browser.name === "Internet Explorer") {
          if (
            a(this.engine.version) === 6 &&
            parseFloat(this.browser.version) < 10
          ) {
            this.browser.version = new h({ value: "10.0" });
            this.browser.mode = "compat";
          }
          if (
            a(this.engine.version) === 5 &&
            parseFloat(this.browser.version) < 9
          ) {
            this.browser.version = new h({ value: "9.0" });
            this.browser.mode = "compat";
          }
          if (
            a(this.engine.version) === 4 &&
            parseFloat(this.browser.version) < 8
          ) {
            this.browser.version = new h({ value: "8.0" });
            this.browser.mode = "compat";
          }
        }
        if (this.os.name === "Windows Phone") {
          if (
            a(this.engine.version) === 5 &&
            parseFloat(this.os.version) < 7.5
          ) {
            this.os.version = new h({ value: "7.5" });
          }
        }
      }
      if (this.os.name === "Android" && this.browser.stock) {
        this.browser.hidden = true;
      }
      if (this.os.name === "iOS" && this.browser.name === "Opera Mini") {
        this.os.version = null;
      }
      if (this.browser.name === "Midori" && this.engine.name !== "Webkit") {
        this.engine.name = "Webkit";
        this.engine.version = null;
      }
      if (this.device.type === "television" && this.browser.name === "Opera") {
        this.browser.name = "Opera Devices";
        switch (true) {
          case this.engine.version.is("2.10"):
            this.browser.version = new h({ value: 3.2 });
            break;
          case this.engine.version.is("2.9"):
            this.browser.version = new h({ value: 3.1 });
            break;
          case this.engine.version.is("2.8"):
            this.browser.version = new h({ value: 3 });
            break;
          case this.engine.version.is("2.7"):
            this.browser.version = new h({ value: 2.9 });
            break;
          case this.engine.version.is("2.6"):
            this.browser.version = new h({ value: 2.8 });
            break;
          case this.engine.version.is("2.4"):
            this.browser.version = new h({ value: 10.3 });
            break;
          case this.engine.version.is("2.3"):
            this.browser.version = new h({ value: 10 });
            break;
          case this.engine.version.is("2.2"):
            this.browser.version = new h({ value: 9.7 });
            break;
          case this.engine.version.is("2.1"):
            this.browser.version = new h({ value: 9.6 });
            break;
          default:
            this.browser.version = null;
        }
        this.os.name = null;
        this.os.version = null;
      }
      if (this.options.detectCamouflage) {
        if (
          (match = /Mac OS X 10_6_3; ([^;]+); [a-z]{2}-(?:[a-z]{2})?\)/.exec(E))
        ) {
          this.browser.name = "";
          this.browser.version = null;
          this.browser.mode = "desktop";
          this.os.name = "Android";
          this.os.version = null;
          this.engine.name = "Webkit";
          this.engine.version = null;
          this.device.model = match[1];
          this.device.type = "mobile";
          var J = m(this.device.model);
          if (typeof s[J] !== "undefined") {
            this.device.manufacturer = s[J][0];
            this.device.model = s[J][1];
            if (typeof s[J][2] !== "undefined") {
              this.device.type = s[J][2];
            }
            this.device.identified = true;
          }
          this.features.push("foundDevice");
        }
        if ((match = /Linux Ventana; [a-z]{2}-[a-z]{2}; (.+) Build/.exec(E))) {
          this.browser.name = "";
          this.browser.version = null;
          this.browser.mode = "desktop";
          this.os.name = "Android";
          this.os.version = null;
          this.engine.name = "Webkit";
          this.engine.version = null;
          this.device.model = match[1];
          this.device.type = "mobile";
          var J = m(this.device.model);
          if (typeof s[J] !== "undefined") {
            this.device.manufacturer = s[J][0];
            this.device.model = s[J][1];
            if (typeof s[J][2] !== "undefined") {
              this.device.type = s[J][2];
            }
            this.device.identified = true;
          }
          this.features.push("foundDevice");
        }
        if (this.browser.name === "Safari") {
          if (
            this.os.name !== "iOS" &&
            /AppleWebKit\/([0-9]+.[0-9]+)/i.exec(E)[1] !==
              /Safari\/([0-9]+.[0-9]+)/i.exec(E)[1]
          ) {
            this.features.push("safariMismatch");
            this.camouflage = true;
          }
          if (this.os.name === "iOS" && !E.match(/^Mozilla/)) {
            this.features.push("noMozillaPrefix");
            this.camouflage = true;
          }
          if (!/Version\/[0-9\.]+/.exec(E)) {
            this.features.push("noVersion");
            this.camouflage = true;
          }
        }
        if (this.browser.name === "Chrome") {
          if (
            !/(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/.exec(
              E
            )
          ) {
            this.features.push("wrongVersion");
            this.camouflage = true;
          }
        }
        if (this.options.useFeatures) {
          if (window.ActiveXObject) {
            this.features.push("trident");
            if (
              typeof this.engine.name !== "undefined" &&
              this.engine.name !== "Trident"
            ) {
              this.camouflage =
                typeof this.browser.name === "undefined" ||
                this.browser.name !== "Maxthon";
            }
          }
          if (window.opera) {
            this.features.push("presto");
            if (
              typeof this.engine.name !== "undefined" &&
              this.engine.name !== "Presto"
            ) {
              this.camouflage = true;
            }
            if (this.browser.name === "Internet Explorer") {
              this.camouflage = true;
            }
          }
          if ("getBoxObjectFor" in document || "mozInnerScreenX" in window) {
            this.features.push("gecko");
            if (
              typeof this.engine.name !== "undefined" &&
              this.engine.name !== "Gecko"
            ) {
              this.camouflage = true;
            }
            if (this.browser.name === "Internet Explorer") {
              this.camouflage = true;
            }
          }
          if (
            "WebKitCSSMatrix" in window ||
            "WebKitPoint" in window ||
            "webkitStorageInfo" in window ||
            "webkitURL" in window
          ) {
            this.features.push("webkit");
            if (
              typeof this.engine.name !== "undefined" &&
              this.engine.name !== "Webkit"
            ) {
              this.camouflage = true;
            }
            if (this.browser.name === "Internet Explorer") {
              this.camouflage = true;
            }
          }
          if (
            this.engine.name === "Webkit" &&
            {}.toString.toString().indexOf("\n") === -1
          ) {
            this.features.push("v8");
            if (this.browser !== null && this.browser.name === "Safari") {
              this.camouflage = true;
            }
          }
          if (this.device.model === "iPad") {
            if (
              screen.width !== 0 &&
              screen.height !== 0 &&
              screen.width !== 768 &&
              screen.height !== 1024 &&
              screen.width !== 1024 &&
              screen.height !== 768
            ) {
              this.features.push("sizeMismatch");
              this.camouflage = true;
            }
          }
          if (this.device.model === "iPhone" || this.device.model === "iPod") {
            if (
              screen.width !== 0 &&
              screen.height !== 0 &&
              screen.width !== 320 &&
              screen.height !== 480 &&
              screen.width !== 480 &&
              screen.height !== 320
            ) {
              this.features.push("sizeMismatch");
              this.camouflage = true;
            }
          }
          if (this.os.name === "iOS" && this.os.version) {
            if (
              this.os.version.isOlder("4.0") &&
              "sandbox" in document.createElement("iframe")
            ) {
              this.features.push("foundSandbox");
              this.camouflage = true;
            }
            if (this.os.version.isOlder("4.2") && "WebSocket" in window) {
              this.features.push("foundSockets");
              this.camouflage = true;
            }
            if (this.os.version.isOlder("5.0") && !!window.Worker) {
              this.features.push("foundWorker");
              this.camouflage = true;
            }
            if (this.os.version.isNewer("2.1") && !window.applicationCache) {
              this.features.push("noAppCache");
              this.camouflage = true;
            }
          }
          if (
            this.os.name !== "iOS" &&
            this.browser.name === "Safari" &&
            this.browser.version
          ) {
            if (
              this.browser.version.isOlder("4.0") &&
              !!window.applicationCache
            ) {
              this.features.push("foundAppCache");
              this.camouflage = true;
            }
            if (
              this.browser.version.isOlder("4.1") &&
              !!(window.history && history.pushState)
            ) {
              this.features.push("foundHistory");
              this.camouflage = true;
            }
            if (
              this.browser.version.isOlder("5.1") &&
              !!document.documentElement.webkitRequestFullScreen
            ) {
              this.features.push("foundFullscreen");
              this.camouflage = true;
            }
            if (this.browser.version.isOlder("5.2") && "FileReader" in window) {
              this.features.push("foundFileReader");
              this.camouflage = true;
            }
          }
        }
      }
    },
  };
  function m(E) {
    E = typeof E === "undefined" ? "" : E;
    E = E.replace(/_TD$/, "");
    E = E.replace(/_CMCC$/, "");
    E = E.replace(/_/g, " ");
    E = E.replace(/^\s+|\s+$/g, "");
    E = E.replace(/\/[^/]+$/, "");
    E = E.replace(/\/[^/]+ Android\/.*/, "");
    E = E.replace(/^tita on /, "");
    E = E.replace(/^Android on /, "");
    E = E.replace(/^Android for /, "");
    E = E.replace(/^ICS AOSP on /, "");
    E = E.replace(/^Full AOSP on /, "");
    E = E.replace(/^Full Android on /, "");
    E = E.replace(/^Full Cappuccino on /, "");
    E = E.replace(/^Full MIPS Android on /, "");
    E = E.replace(/^Full Android/, "");
    E = E.replace(/^Acer ?/i, "");
    E = E.replace(/^Iconia /, "");
    E = E.replace(/^Ainol /, "");
    E = E.replace(/^Coolpad ?/i, "Coolpad ");
    E = E.replace(/^ALCATEL /, "");
    E = E.replace(/^Alcatel OT-(.*)/, "one touch $1");
    E = E.replace(/^YL-/, "");
    E = E.replace(/^Novo7 ?/i, "Novo7 ");
    E = E.replace(/^GIONEE /, "");
    E = E.replace(/^HW-/, "");
    E = E.replace(/^Huawei[ -]/i, "Huawei ");
    E = E.replace(/^SAMSUNG[ -]/i, "");
    E = E.replace(/^SonyEricsson/, "");
    E = E.replace(/^Lenovo Lenovo/, "Lenovo");
    E = E.replace(/^LNV-Lenovo/, "Lenovo");
    E = E.replace(/^Lenovo-/, "Lenovo ");
    E = E.replace(/^(LG)[ _\/]/, "$1-");
    E = E.replace(/^(HTC.*)\s(?:v|V)?[0-9.]+$/, "$1");
    E = E.replace(/^(HTC)[-\/]/, "$1 ");
    E = E.replace(/^(HTC)([A-Z][0-9][0-9][0-9])/, "$1 $2");
    E = E.replace(/^(Motorola[\s|-])/, "");
    E = E.replace(/^(Moto|MOT-)/, "");
    E = E.replace(/-?(orange(-ls)?|vodafone|bouygues)$/i, "");
    E = E.replace(/http:\/\/.+$/i, "");
    E = E.replace(/^\s+|\s+$/g, "");
    return E;
  }
  function a(E) {
    E = E.toString();
    var G = E.split(".");
    var F = G.shift();
    return parseFloat(F + "." + G.join(""));
  }
  return x;
})();
var tracker_ua_device = function (b) {
  var d = tracker_ua_base;
  var h = new d(b);
  var a;
  var g;
  if (h.device.type === "mobile" || h.device.type === "tablet") {
    if (
      (a = b.match(
        /(ZTE|Samsung|Motorola|HTC|Coolpad|Huawei|Lenovo|LG|Sony Ericsson|Oppo|TCL|Vivo|Sony|Meizu|Nokia)/i
      ))
    ) {
      h.device.manufacturer = a[1];
      if (h.device.model && h.device.model.indexOf(a[1]) >= 0) {
        h.device.model = h.device.model.replace(a[1], "");
      }
    }
    if ((a = b.match(/(iPod|iPad|iPhone)/i))) {
      h.device.manufacturer = "Apple";
      h.device.model = a[1];
    } else {
      if (
        (a = b.match(
          /[-\s](Galaxy[\s-_]nexus|Galaxy[\s-_]\w*[\s-_]\w*|Galaxy[\s-_]\w*|SM-\w*|GT-\w*|s[cgp]h-\w*|shw-\w*|ATIV|i9070|omnia|s7568|A3000|A3009|A5000|A5009|A7000|A7009|A8000|C101|C1116|C1158|E400|E500F|E7000|E7009|G3139D|G3502|G3502i|G3508|G3508J|G3508i|G3509|G3509i|G3558|G3559|G3568V|G3586V|G3589W|G3606|G3608|G3609|G3812|G388F|G5108|G5108Q|G5109|G5306W|G5308W|G5309W|G550|G600|G7106|G7108|G7108V|G7109|G7200|G720NO|G7508Q|G7509|G8508S|G8509V|G9006V|G9006W|G9008V|G9008W|G9009D|G9009W|G9198|G9200|G9208|G9209|G9250|G9280|I535|I679|I739|I8190N|I8262|I879|I879E|I889|I9000|I9060|I9082|I9082C|I9082i|I9100|I9100G|I9108|I9128|I9128E|I9128i|I9152|I9152P|I9158|I9158P|I9158V|I9168|I9168i|I9190|I9192|I9195|I9195I|I9200|I9208|I9220|I9228|I9260|I9268|I9300|I9300i|I9305|I9308|I9308i|I939|I939D|I939i|I9500|I9502|I9505|I9507V|I9508|I9508V|I959|J100|J110|J5008|J7008|N7100|N7102|N7105|N7108|N7108D|N719|N750|N7505|N7506V|N7508V|N7509V|N900|N9002|N9005|N9006|N9008|N9008S|N9008V|N9009|N9100|N9106W|N9108V|N9109W|N9150|N916|N9200|P709|P709E|P729|S6358|S7278|S7278U|S7562C|S7562i|S7898i|b9388)[\s\)]/i
        ))
      ) {
        h.device.manufacturer = "Samsung";
        h.device.model = a[1]
          .replace(/Galaxy S VI/i, "Galaxy S6")
          .replace(/Galaxy S V/i, "Galaxy S5")
          .replace(/Galaxy S IV/i, "Galaxy S4")
          .replace(/Galaxy s III/i, "Galaxy S3")
          .replace(/Galaxy S II/i, "Galaxy S2")
          .replace(/Galaxy S I/i, "Galaxy S1")
          .replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1");
      } else {
        if (
          h.device.manufacturer &&
          h.device.manufacturer.toLowerCase() === "samsung" &&
          h.device.model
        ) {
          h.device.model = h.device.model
            .replace(/Galaxy S VI/i, "Galaxy S6")
            .replace(/Galaxy S V/i, "Galaxy S5")
            .replace(/Galaxy S IV/i, "Galaxy S4")
            .replace(/Galaxy s III/i, "Galaxy S3")
            .replace(/Galaxy S II/i, "Galaxy S2")
            .replace(/Galaxy S I/i, "Galaxy S1")
            .replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1");
        } else {
          if (
            (a = b.match(
              /(Huawei[\s-_](\w*[-_]?\w*)|\s(7D-\w*|ALE-\w*|ATH-\w*|CHE-\w*|CHM-\w*|Che1-\w*|Che2-\w*|D2-\w*|G616-\w*|G620S-\w*|G621-\w*|G660-\w*|G750-\w*|GRA-\w*|Hol-\w*|MT2-\w*|MT7-\w*|PE-\w*|PLK-\w*|SC-\w*|SCL-\w*|H60-\w*|H30-\w*)[\s\)])/i
            ))
          ) {
            h.device.manufacturer = "Huawei";
            if (a[2]) {
              h.device.model = a[2];
            } else {
              if (a[3]) {
                h.device.model = a[3];
              }
            }
            if ((a = h.device.model.match(/(\w*)[\s-_]+[a-z0-9]+/i))) {
              h.device.model = a[1];
            }
          } else {
            if ((a = b.match(/;\s(mi|m1|m2|m3|m4|hm)(\s*\w*)[\s\)]/i))) {
              if ((g = b.match(/(meitu|MediaPad)/i))) {
                h.device.manufacturer = g[1];
                h.device.model = "";
              } else {
                if (a[2].length > 0 && !/\s/.test(a[2])) {
                  if ((g = a[2].match(/(\d)/i))) {
                    h.device.model = a[1] + "-" + g[1];
                  }
                } else {
                  h.device.manufacturer = "Xiaomi";
                  if (a[2] && a[2].length > 0) {
                    a[2] = a[2].replace(/\s/, "");
                    h.device.model = (
                      a[1].substr(a[1].length - 2) +
                      "-" +
                      a[2]
                    ).replace(/m(\d)-/i, "MI-$1");
                  } else {
                    h.device.model = a[1]
                      .substr(a[1].length - 2)
                      .replace(/m(\d)/i, "MI-$1");
                  }
                  if (/(mi|hm)(-\d)/i.test(h.device.model)) {
                    if ((a = h.device.model.match(/(mi|hm)(-\ds)/i))) {
                      h.device.model = a[1] + a[2];
                    } else {
                      if ((a = h.device.model.match(/(mi|hm)(-\d{2})/i))) {
                        h.device.model = a[1];
                      } else {
                        if ((a = h.device.model.match(/(mi|hm)(-\d)[A-Z]/i))) {
                          h.device.model = a[1] + a[2];
                        }
                      }
                    }
                  }
                  if ((a = h.device.model.match(/(mi|hm)(-\dg)/i))) {
                    h.device.model = a[1];
                  }
                }
              }
            } else {
              if (/build\/HM\d{0,7}\)/i.test(b)) {
                h.device.manufacturer = "Xiaomi";
                h.device.model = "HM";
              } else {
                if ((a = b.match(/redmi\s?(\d+)?/i))) {
                  h.device.manufacturer = "Xiaomi";
                  h.device.model = "HM-" + a[1];
                } else {
                  if (
                    h.device.manufacturer &&
                    h.device.manufacturer.toLowerCase() === "xiaomi" &&
                    h.device.model
                  ) {
                    if ((a = h.device.model.match(/mi-one/i))) {
                      h.device.model = "MI-1";
                    } else {
                      if ((a = h.device.model.match(/mi-two/i))) {
                        h.device.model = "MI-2";
                      } else {
                        if ((a = h.device.model.match(/\d{6}/i))) {
                          h.device.model = "";
                        } else {
                          if ((a = h.device.model.match(/redmi/i))) {
                            h.device.model = h.device.model
                              .toUpperCase()
                              .replace(/redmi/i, "HM");
                          } else {
                            if (
                              (a = h.device.model.match(/(m\d)[\s-_](s?)/i))
                            ) {
                              h.device.model = a[1].replace(/m/, "MI-") + a[2];
                            } else {
                              if (
                                (a = h.device.model.match(
                                  /(hm|mi)[\s-_](\d?)[a-rt-z]/i
                                ))
                              ) {
                                if (
                                  (g = h.device.model.match(
                                    /(mi|hm)[\s-_](note|pad)(\d?s?)/i
                                  ))
                                ) {
                                  h.device.model = g[1] + "-" + g[2] + g[3];
                                } else {
                                  h.device.model = a[2]
                                    ? a[1] + "-" + a[2]
                                    : a[1];
                                }
                              } else {
                                if ((a = h.device.model.match(/hm/i))) {
                                  if (
                                    (a =
                                      h.device.model.match(
                                        /(hm)[\s-_](\d{2})/i
                                      ))
                                  ) {
                                    h.device.model = "HM";
                                  } else {
                                    if (
                                      (a =
                                        h.device.model.match(
                                          /(hm)[\s-_](\ds)/i
                                        ))
                                    ) {
                                      h.device.model = "HM-" + a[2];
                                    } else {
                                      if (
                                        (a =
                                          h.device.model.match(
                                            /(hm)[\s-_](\d)[a-z]/i
                                          ))
                                      ) {
                                        h.device.model = "HM-" + a[2];
                                      } else {
                                        h.device.model = "HM";
                                      }
                                    }
                                  }
                                  if (/hm-\dg/.test(h.device.model)) {
                                    h.device.model = "HM";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (
                      (a = b.match(
                        /(vivo[\s-_](\w*)|\s(E1\w?|E3\w?|E5\w?|V1\w?|V2\w?|S11\w?|S12\w?|S1\w?|S3\w?|S6\w?|S7\w?|S9\w?|X1\w?|X3\w?|X520\w?|X5\w?|X5Max|X5Max+|X5Pro|X5SL|X710F|X710L|Xplay|Xshot|Xpaly3S|Y11\w?|Y11i\w?|Y11i\w?|Y13\w?|Y15\w?|Y17\w?|Y18\w?|Y19\w?|Y1\w?|Y20\w?|Y22\w?|Y22i\w?|Y23\w?|Y27\w?|Y28\w?|Y29\w?|Y33\w?|Y37\w?|Y3\w?|Y613\w?|Y622\w?|Y627\w?|Y913\w?|Y923\w?|Y927\w?|Y928\w?|Y929\w?|Y937\w?)[\s\)])/i
                      ))
                    ) {
                      h.device.manufacturer = "Vivo";
                      h.device.model = a[1];
                      h.device.model = h.device.model.replace(
                        /(viv[\s-_]|vivo[\s-_]|bbg[\s-_])/i,
                        ""
                      );
                      if (
                        (a = h.device.model.match(
                          /([a-z]+[0-9]+)i?[a-z]?[\s-_]?/i
                        ))
                      ) {
                        h.device.model = a[1];
                      }
                    } else {
                      if (
                        (a = b.match(
                          /(Oppo[\s-_](\w*)|\s(1100|1105|1107|3000|3005|3007|6607|A100|A103|A105|A105K|A109|A109K|A11|A113|A115|A115K|A121|A125|A127|A129|A201|A203|A209|A31|A31c|A31t|A31u|A51kc|A520|A613|A615|A617|E21W|Find|Mirror|N5110|N5117|N5207|N5209|R2010|R2017|R6007|R7005|R7007|R7c|R7t|R8000|R8007|R801|R805|R807|R809T|R8107|R8109|R811|R811W|R813T|R815T|R815W|R817|R819T|R8200|R8205|R8207|R821T|R823T|R827T|R830|R830S|R831S|R831T|R833T|R850|Real|T703|U2S|U521|U525|U529|U539|U701|U701T|U705T|U705W|X9000|X9007|X903|X905|X9070|X9077|X909|Z101|R829T)[\s\)])/i
                        ))
                      ) {
                        h.device.manufacturer = "Oppo";
                        if (a[2]) {
                          h.device.model = a[2];
                        } else {
                          if (a[3]) {
                            h.device.model = a[3];
                          }
                        }
                        if (
                          (a = h.device.model.match(/([a-z]+[0-9]+)-?(plus)/i))
                        ) {
                          h.device.model = a[1] + "-" + a[2];
                        } else {
                          if (
                            (a = h.device.model.match(/(\w*-?[a-z]+[0-9]+)/i))
                          ) {
                            h.device.model = a[1];
                          }
                        }
                      } else {
                        if (
                          h.device.manufacturer &&
                          h.device.manufacturer.toLowerCase() === "oppo" &&
                          h.device.model
                        ) {
                          if (
                            (a = h.device.model.match(
                              /([a-z]+[0-9]+)-?(plus)/i
                            ))
                          ) {
                            h.device.model = a[1] + "-" + a[2];
                          } else {
                            if (
                              (a = h.device.model.match(/(\w*-?[a-z]+[0-9]+)/i))
                            ) {
                              h.device.model = a[1];
                            }
                          }
                        } else {
                          if (
                            (a = b.match(
                              /\s(mx\d*\w*|mz-(\w*))\s(\w*)\s*\w*\s*build/i
                            ))
                          ) {
                            h.device.manufacturer = "Meizu";
                            var f = a[2] ? a[2] : a[1];
                            if (a[3]) {
                              h.device.model = f + "-" + a[3];
                            } else {
                              h.device.model = f + "";
                            }
                          } else {
                            if ((a = b.match(/M463C|M35\d/i))) {
                              h.device.manufacturer = "Meizu";
                              h.device.model = a[1];
                            } else {
                              if (
                                h.device.manufacturer &&
                                h.device.manufacturer.toLowerCase() === "zte" &&
                                h.device.model
                              ) {
                                if (
                                  (a = h.device.model.match(/([a-z]?[0-9]+)/i))
                                ) {
                                  h.device.model = a[1];
                                }
                              } else {
                                if (
                                  (a = b.match(
                                    /(Nubia[-_\s](\w*)|(NX501|NX505J|NX506J|NX507J|NX503A|nx\d+\w*)[\s\)])/i
                                  ))
                                ) {
                                  h.device.manufacturer = "Nubia";
                                  if (a[2]) {
                                    h.device.model = a[2];
                                  } else {
                                    if (a[3]) {
                                      h.device.model = a[3];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (h.device.manufacturer) {
      h.device.manufacturer =
        h.device.manufacturer.substr(0, 1).toUpperCase() +
        h.device.manufacturer.substr(1).toLowerCase();
    }
    if (h.device.model) {
      h.device.model = h.device.model.toUpperCase().replace(/-+|_+|\s+/g, " ");
      h.device.model = h.device.model
        .match(/\s*(\w*\s*\w*)/)[1]
        .replace(/\s+/, "-");
      if (h.device.manufacturer === "Samsung") {
        h.device.model =
          {
            "SCH-I95": "GT-I950",
            "SCH-I93": "GT-I930",
            "SCH-I86": "GT-I855",
            "SCH-N71": "GT-N710",
            "SCH-I73": "GT-S789",
            "SCH-P70": "GT-I915",
          }[h.device.model] || h.device.model;
      } else {
        if (h.device.manufacturer === "Huawei") {
          h.device.model =
            { CHE1: "CHE", CHE2: "CHE", G620S: "G621", C8817D: "G621" }[
              h.device.model
            ] || h.device.model;
        }
      }
    }
    if (h.device.manufacturer && h.device.manufacturer === "Xiaomi") {
      if ((a = h.device.model.match(/(hm|mi)-(note)/i))) {
        h.device.model = a[1] + "-" + a[2];
      } else {
        if ((a = h.device.model.match(/(hm|mi)-(\ds?)/i))) {
          h.device.model = a[1] + "-" + a[2];
        } else {
          if ((a = h.device.model.match(/(hm|mi)-(\d)[a-rt-z]/i))) {
            h.device.model = a[1] + "-" + a[2];
          }
        }
      }
    }
  }
  if (h.device.type === "desktop") {
    if ((a = b.match(/(Mac OS X [0-9\._]*)/i))) {
      h.device.manufacturer = "Apple";
      h.device.model = a[1];
    }
    if ((a = /360se(?:[ \/]([\w.]+))?/i.exec(b))) {
      h.browser.name = "360 security Explorer";
      h.browser.version = { original: a[1] };
    } else {
      if ((a = /the world(?:[ \/]([\w.]+))?/i.exec(b))) {
        h.browser.name = "the world";
        h.browser.version = { original: a[1] };
      } else {
        if ((a = /tencenttraveler ([\w.]+)/i.exec(b))) {
          h.browser.name = "tencenttraveler";
          h.browser.version = { original: a[1] };
        } else {
          if ((a = /LBBROWSER/i.exec(b))) {
            h.browser.name = "LBBROWSER";
          }
        }
      }
    }
  } else {
    if (h.device.type === "mobile" || h.device.type === "tablet") {
      if ((a = /BaiduHD\s+([\w.]+)/i.exec(b))) {
        h.browser.name = "BaiduHD";
        h.browser.version = { original: a[1] };
      } else {
        if ((a = /360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/i.exec(b))) {
          h.browser.name = "360 Browser";
          h.browser.version = { original: a[1] };
        } else {
          if ((a = /flyflow\/([\w.]+)/i.exec(b))) {
            h.browser.name = "Baidu Browser";
            h.browser.version = { original: a[1] };
          } else {
            if ((a = /baiduhd ([\w.]+)/i.exec(b))) {
              h.browser.name = "Baidu HD";
              h.browser.version = { original: a[1] };
            } else {
              if ((a = /baidubrowser\/([\d\.]+)\s/i.exec(b))) {
                h.browser.name = "baidubrowser";
                h.browser.version = { original: a[1] };
              } else {
                if ((a = /LieBaoFast\/([\w.]+)/i.exec(b))) {
                  h.browser.name = "LieBao Fast";
                  h.browser.version = { original: a[1] };
                } else {
                  if ((a = /LieBao\/([\w.]+)/i.exec(b))) {
                    h.browser.name = "LieBao";
                    h.browser.version = { original: a[1] };
                  } else {
                    if ((a = /Sogou\w+\/([0-9\.]+)/i.exec(b))) {
                      h.browser.name = "SogouMobileBrowser";
                      h.browser.version = { original: a[1] };
                    } else {
                      if ((a = /bdbrowser\w+\/([0-9\.]+)/i.exec(b))) {
                        h.browser.name = "百度国际";
                        h.browser.version = { original: a[1] };
                      } else {
                        if (
                          h.os.name === "Android" &&
                          /safari/i.test(b) &&
                          (a = /chrome\/([0-9\.]+)/i.exec(b))
                        ) {
                          if ((g = b.match(/\s+(\w+Browser)\/?([\d\.]*)/))) {
                            h.browser.name = g[1];
                            if (g[2]) {
                              h.browser.version = { original: g[2] };
                            } else {
                              h.browser.version = { original: a[1] };
                            }
                          } else {
                            h.browser.name = "Android Chrome";
                            h.browser.version = { original: a[1] };
                          }
                        } else {
                          if (
                            h.os.name === "Android" &&
                            /safari/i.test(b) &&
                            (a = /version\/([0-9\.]+)/i.exec(b))
                          ) {
                            if ((g = b.match(/\s+(\w+Browser)\/?([\d\.]*)/))) {
                              h.browser.name = g[1];
                              if (g[2]) {
                                h.browser.version = { original: g[2] };
                              } else {
                                h.browser.version = { original: a[1] };
                              }
                            } else {
                              h.browser.name = "Android Browser";
                              h.browser.version = { original: a[1] };
                            }
                          } else {
                            if (
                              /(ipad|iphone).* applewebkit\/.* mobile/i.test(b)
                            ) {
                              h.browser.name = "Safari";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if ((a = b.match(/baiduboxapp\/?([\d\.]*)/i))) {
    h.browser.name = "";
    if (a[1]) {
      h.browser.version = { original: a[1] };
    }
  } else {
    if (/BaiduLightAppRuntime/i.test(b)) {
      h.browser.name = "";
    } else {
      if (/Weibo/i.test(b)) {
        h.browser.name = "";
      } else {
        if (/MQQ/i.test(b)) {
          h.browser.name = "";
        } else {
          if (/hao123/i.test(b)) {
            h.browser.name = "hao123";
          }
        }
      }
    }
  }
  if ((a = /MicroMessenger\/([\w.]+)/i.exec(b))) {
    h.browser.name = "";
    var e = a[1].replace(/_/g, ".");
    g = /(\d+\.\d+\.\d+\.\d+)/.exec(e);
    if (g) {
      e = g[1];
    }
    h.browser.version = { original: e };
  }
  if ((a = /UCBrowser\/([\w.]+)/i.exec(b))) {
    h.browser.name = "UC Browser";
    h.browser.version = { original: a[1] };
  }
  if ((a = /OPR\/([\w.]+)/i.exec(b))) {
    h.browser.name = "Opera";
    h.browser.version = { original: a[1] };
  } else {
    if ((a = /OPiOS\/([\w.]+)/i.exec(b))) {
      h.browser.name = "Opera";
      h.browser.version = { original: a[1] };
    } else {
      if (/Trident\/7/i.test(b) && /rv:11/i.test(b)) {
        h.browser.name = "Internet Explorer";
        h.browser.version = { major: "11", original: "11" };
      } else {
        if (/Edge\/12/i.test(b) && /Windows Phone|Windows NT/i.test(b)) {
          h.browser.name = "Microsoft Edge";
          h.browser.version = { major: "12", original: "12" };
        } else {
          if ((a = /miuibrowser\/([\w.]+)/i.exec(b))) {
            h.browser.name = "miui browser";
            h.browser.version = { original: a[1] };
          }
        }
      }
    }
  }
  if (!h.browser.name) {
    if ((a = /Safari\/([\w.]+)/i.exec(b) && /Version/i.test(b))) {
      h.browser.name = "Safari";
    }
  }
  if (h.browser.name && !h.browser.version) {
    if ((a = /Version\/([\w.]+)/i.exec(b))) {
      h.browser.version = { original: a[1] };
    }
  }
  if (h.os.name === "Windows" || /Windows/i.test(b)) {
    h.os.name = "Windows";
    if (/NT 6.3/i.test(b)) {
      h.os.version = { alias: "8.1", original: "8.1" };
    } else {
      if (/NT 6.4/i.test(b) || /NT 10.0/i.test(b)) {
        h.os.version = { alias: "10", original: "10" };
      }
    }
  } else {
    if (h.os.name === "Mac OS X") {
      h.os.name = "Mac OS X";
      if ((a = /Mac OS X[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i.exec(b))) {
        h.os.version = {
          alias: a[1].replace(/_/g, "."),
          original: a[1].replace(/_/g, "."),
        };
      } else {
        h.os.version = { alias: "", original: "" };
      }
    } else {
      if (/Android/i.test(h.os.name)) {
        if (
          (a = b.match(
            /Android[\s\_\-\/i686]?[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i
          ))
        ) {
          h.os.version = { alias: a[1], original: a[1] };
        }
      }
    }
  }
  return h;
};
window.bigdataLogs = [];
window.log = {};
window.log.e_d = {};
window.log.page_start_time = new Date().getTime();
window.log.page_url = window.location.href;
Date.prototype.format = function (a) {
  let o = {
    "y+": this.getFullYear(),
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds(),
  };
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(a)) {
      if (k === "y+") {
        a = a.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
      } else {
        if (k === "S+") {
          let lens = RegExp.$1.length;
          lens = lens === 1 ? 3 : lens;
          a = a.replace(
            RegExp.$1,
            ("00" + o[k]).substr(("" + o[k]).length - 1, lens)
          );
        } else {
          a = a.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
    }
  }
  return a;
};
String.prototype.hashCode = function () {
  let hash = 0;
  if (this.length === 0) {
    return hash;
  }
  for (let i = 0; i < this.length; i++) {
    let c = this.charCodeAt(i);
    hash = (hash << 5) - hash + c;
    hash = hash & hash;
  }
  hash = Math.abs(hash);
  return hash;
};


(function () {
  let datalog = {};
  datalog.setVisitUserId = setVisitUserId;
  window.lca = datalog;
})(window);

try {
  let _tracker_session_id_ = getCookie("_tracker_session_id_");
  if (!_tracker_session_id_) {
    setCookie("_tracker_session_id_", uuid(), 30 * 60 * 1000);
  }
  let userId = getCookie("eqxiu_user_id");
  setUserIdToCookie(userId);
  let _tracker_distinct_id_ = getCookie("_tracker_distinct_id_");
  if (_tracker_distinct_id_ == null) {
    _tracker_distinct_id_ = uuidx();
    setCookie(
      "_tracker_distinct_id_",
      _tracker_distinct_id_,
      100 * 365 * 24 * 60 * 60 * 1000
    );
  }
  let debug = document.URL.indexOf("env=dev");
  if (debug > -1) {
    setCookie("bigdata_debug", "1", 3600 * 1000 * 6);
  }
  let devInnerIdx = document.URL.indexOf("dev=inner");
  if (devInnerIdx > -1) {
    window.log.inner = true;
  }
} catch (err) {
  console.log(err);
}
window.log.b_t = "def";
window.log.b_v = "0";
if (window.ilog) {
  let autoHeatmap = window.ilog.autoHeatmap;
  if (autoHeatmap === false || autoHeatmap === true) {
    window.log.autoHeatmap = autoHeatmap;
    delete window.ilog.autoHeatmap;
  }
  let start_track = window.ilog.start_track;
  if (start_track === false || start_track === true) {
    window.log.start_track = start_track;
    delete window.ilog.start_track;
  }
}
(function (t) {
  const f = {
    2: "h5",
    10: "ls",
    11: "form",
    7: "print",
    14: "h5i",
    15: "video",
    18: "ebook",
    17: "solution",
    16: "print",
  };
  const z = { 2: "h5", 4: "ls", 5: "form", 3: "print", 6: "h5i", 7: "video" };
  const m = document.URL.match(/(detail\/|sourceProductId=)(\d+)/);
  if (m != null && m.length >= 3) {
    window.log.e_d.product_id = m[2];
    window.log.pid = m[2];
  }
  const q =
    document.URL.match(/sourceFrom=(\d+)/) ||
    document.referrer.match(/sourceFrom=(\d+)/);
  if (q != null && q.length >= 2) {
    window.log.product = z[q[1]];
  }
  const A = document.referrer.match(/(detail\/|sourceProductId=)(\d+)/);
  if (A != null && A.length >= 3) {
    window.log.e_d.ref_product_id = A[2];
  }
  const s = document.URL.match(
    /\/(c|h2\/create|collect-platform|fe|gc|video\/subEditor\/collectionEdtior)\/(\w+)[?]?/
  );
  if (s != null && s.length >= 3) {
    window.log.scene_id = s[2];
    window.log.e_d.unm = "";
  }
  const x = document.URL.match(/\/video\/editor[?]?/);
  if (x != null && x.length >= 0) {
    window.log.e_d.unm = "";
  }
  const e = document.URL.match(/\/video\/editor\/(\d+)\/(\w+)[?]?/);
  if (e != null && e.length >= 3) {
    window.log.scene_id = e[2];
  }
  let current_url = document.URL;
  const y = getArgFromStr(current_url, "IDEA_ID");
  const d = getArgFromStr(current_url, "UNIT_ID");
  const b = getArgFromStr(current_url, "PLAN_ID");
  if (y && d && b) {
    setCookie("feedback", current_url, 7 * 86400 * 1000);
  }
  if (
    document.referrer.indexOf("eqxiu.com") === -1 &&
    document.referrer.length > 10
  ) {
    setCookie("_tracker_landing_page_", window.location.href, 3600000);
  }

  function w(B) {
    let class_arr = ["eqx-header", "store-aside__scroll"];
    for (let i = 0; i < class_arr.length; i++) {
      let node = document.getElementsByClassName(class_arr[i]);
      if (node && node.length > 0) {
        node = node[0];
        if (node.contains(B)) {
          return true;
        }
      }
    }
    return false;
  }
  function n() {
    let temp_url = document.URL;
    let final_tracker_spm = "end";
    let tracker_spm_from_ref = getArgFromStr(document.referrer, "spm");
    if (tracker_spm_from_ref) {
      final_tracker_spm = tracker_spm_from_ref + "," + final_tracker_spm;
    }
    let tracker_spm_from_cookie = getCookie("_tracker_spm");
    if (tracker_spm_from_cookie) {
      final_tracker_spm = tracker_spm_from_cookie + "," + final_tracker_spm;
      removeCookie("_tracker_spm");
    }
    final_tracker_spm = getUniqueSpm(final_tracker_spm);
    if (final_tracker_spm) {
      if (temp_url.indexOf("spm") > 0) {
        temp_url = replaceUrlParamVal(temp_url, "spm", final_tracker_spm);
      } else {
        let hash_idx = document.URL.indexOf("#");
        if (hash_idx > -1) {
          let separator = "&";
          if (document.URL.indexOf("?") === -1) {
            separator = "?";
          }
          temp_url =
            temp_url.slice(0, hash_idx) +
            separator +
            "spm=" +
            final_tracker_spm +
            temp_url.slice(hash_idx);
        } else {
          temp_url = addArgToUrl(temp_url, "spm", final_tracker_spm);
        }
      }
    }
    if (document.URL !== temp_url) {
      window.history.replaceState(
        { remark: "new url with tk_id" },
        document.title,
        temp_url
      );
      window.log.page_url = temp_url;
    }
  }
  n();
  window.sessionStorage.removeItem("spm");
  let user_active_dur = 0;
  let mouse_last_move_time = new Date().getTime();
  let timed_start_time = new Date().getTime();
  function g() {
    let timeOut = 60 * 1000;
    function B() {
      let currentTime = new Date().getTime();
      if (mouse_last_move_time - timed_start_time > 0) {
        user_active_dur = user_active_dur + timeOut;
      }
      timed_start_time = currentTime;
    }
    window.setInterval(B, 60000);
  }
  document.addEventListener("mousemove", function () {
    mouse_last_move_time = new Date().getTime();
  });
  document.addEventListener("visibilitychange", function () {
    let currentTime = new Date().getTime();
    if (document.hidden) {
      user_active_dur = user_active_dur + currentTime - timed_start_time;
    } else {
      mouse_last_move_time = currentTime;
      timed_start_time = currentTime;
    }
  });
  g();
  let helper = {};
  let proxySend = new Proxy(helper.send, {
    apply: function (I, F, H) {
      I(H[0], H[1]);
      const G = collect;
      let params2 = G.params();
      const E = getCookie("urt");
      const C = getCookie("bigdata_report_register");
      const D = E != null && new Date().getTime() - Number(E) < 1800 * 1000;
      const B = params2.u_i && params2.u_i.length > 5 && C == null;
      if (D && B) {
        params2.rdt = "3";
        params2.product = "max";
        params2.b_t = "def";
        params2.e_t = "element_click";
        params2.cat = "user";
        params2.act = "register";
        let land = getCookie("_tracker_landing_page_");
        if (land) {
          params2.e_d.landing_page = land;
        }
        removeCookie("_tracker_landing_page_");
        helper.send(G.server, params2);
        setCookie("bigdata_report_register", 1, 100 * 365 * 86400 * 1000);
      }
    },
  });
  helper.uuid = uuid;
  helper.getQueryString = getQueryString;
  helper.addQueryString = addQueryString;
  helper.each = each;
  helper.extend = extend;
  helper.indexOf = indexOf;
  helper.send = send;
  helper.objectToQuery = objectToQuery;
  helper.getXPath = getXPath;
  const a = ["product", "unm", "b_t", "b_v", "client_type", "client_edition"];
  helper.getData = getData;
  helper.on = on;
  helper.onload = onload;
  helper.onload = onload;
  helper.onunload = onunload;
  helper.onbeforeunload = onbeforeunload;
  helper.getNetType = getNetType;
  helper.getSocialNetworkingSite = getSocialNetworkingSite;
  helper.getTrackerDataFrom = getTrackerDataFrom;
  helper.getTrackerData = getTrackerData;
  helper.getSessionId = getSessionId;
  helper.getUserId = getUserId;
  helper.getClientType = getClientType;
  helper.getClientEdition = getClientEdition;
  helper.getField = getField;
  helper.getWxUserInfo = getWxUserInfo;
  let collect = {
    server: "//datalog.eqxiu.com/p.gif",
    sdk: "tracker.js",
    ver: "7.1.18",
  };
  collect.params = function (B) {
    let p = {};
    p.element_data = {};
    p.sdk = collect.sdk;
    p.ver = collect.ver;
    p.d_i = getCookie("_tracker_distinct_id_") || window._tracker_distinct_id_;
    if (document) {
      p.url = document.URL || "";
      p.tit = helper.getField(helper, "unm") || document.title || "";
      p.ref = document.referrer || "";
    }
    if (navigator) {
      p.u_a = navigator.userAgent || "";
    }
    let device = tracker_ua_device(p.u_a);
    if (device && device.browser) {
      p.bro = device.browser.name || "";
    }
    if (device && device.os) {
      p.os = device.os.name || "";
      if (device.os.version) {
        p.o_v = device.os.version.original || "";
      }
    }
    if (device && device.engine) {
      p.eng = device.engine.name || "";
    }
    if (device && device.device) {
      p.man = device.device.manufacturer || "";
      p.mod = device.device.model || "";
    }
    p.sns = helper.getSocialNetworkingSite();
    p.n_t = helper.getNetType();
    p.s_i = helper.getSessionId();
    p.c_i = getCanvasId();
    p.u_i = helper.getUserId(helper);
    p.c_p = helper.getClientType();
    p.ter = getTerminal();
    p.p_l = getPlatform() || "";
    p.b_v = helper.getClientEdition() || window.log.b_v;
    p.b_t = helper.getField("b_t") || window.log.b_t;
    p.product = window.log.product || helper.getField("product");
    p.pid = window.log.pid || "";
    p.tk_id = "";
    p.scene_id = (window.scene && window.scene.id) || window.log.scene_id || "";
    p.scene_c_u = (window.scene && window.scene.userId) || "";
    p.scene_code = (window.scene && window.scene.code) || "";
    p.scene_bizType = (window.scene && window.scene.bizType) || "";
    if (window.log && window.log.page_start_time) {
      p.dur = new Date().getTime() - window.log.page_start_time;
    } else {
      p.dur = 1;
    }
    p.e_d = helper.getData(B);
    if (B) {
      let level2_fields = [
        "activity_id",
        "team_id",
        "mat_product",
        "product_id",
      ];
      p.e_p = helper.getXPath(B);
      let bd_attr = B.getAttribute("bd_attr");
      if (bd_attr) {
        p.rdt = "3";
        let kv_pairs = bd_attr.split("&");
        for (let idx in kv_pairs) {
          let kv = kv_pairs[idx].split("=");
          if (kv.length === 2 && kv[0] && kv[1]) {
            if (kv[0] === "loc") {
              p.loc = kv[1];
            } else {
              if (level2_fields.indexOf(kv[0]) > -1) {
                if (p.e_d) {
                  p.e_d[kv[0]] = kv[1];
                } else {
                  p.e_d = {};
                  p.e_d[kv[0]] = kv[1];
                }
              }
            }
          }
        }
      }
    }
    return p;
  };
  let heatClickCallBack = function (B) {
    let params = collect.params(B.target);
    params.rdt = "11";
    params.cat = "heatmap";
    params.act = "heatmap_click";
    params.element_data.c_x = B.clientX;
    params.element_data.c_y = B.clientY;
    let now = new Date().getTime();
    let last_elem_path = window.localStorage.getItem("last_elem_path");
    let last_store_time = window.localStorage.getItem("last_store_time");
    if (
      last_elem_path &&
      last_store_time &&
      (last_elem_path !== params.e_p || now - Number(last_store_time) > 2000)
    ) {
      proxySend(collect.server, params);
    }
    window.localStorage.setItem("last_elem_path", params.e_p);
    window.localStorage.setItem("last_store_time", now);
  };
  
  // collect.params = params;
  collect.addElementClickListener = addElementClickListener;
  collect.launch = launch;
  collect.pageView = pageView;
  collect.pageLeave = pageLeave;
  collect.elementView = elementView;
  collect.elementClick = elementClick;
  collect.report = report;
  collect.reportPoint = reportPoint;
  
  let _tracker_launch_ = getCookie("_tracker_launch_");
  if (_tracker_launch_ == null) {
    collect.launch();
    _tracker_launch_ = "1";
    setCookie("_tracker_launch_", _tracker_launch_, 24 * 60 * 60 * 1000);
  }
  setTimeout(function () {
    collect.pageView();
    collect.addElementClickListener();
  }, 1500);
  collect.reportPoint();

  helper.onunload(function () {
    collect.pageLeave();
    sendBigdataLogs();
  });
  window._tracker_api_ = collect;
})(window);
sendBigdataLogs();
if (!(window.log && window.log.e_d && window.log.e_d.unm === "")) {
  checkShouldSendPageView();
}
