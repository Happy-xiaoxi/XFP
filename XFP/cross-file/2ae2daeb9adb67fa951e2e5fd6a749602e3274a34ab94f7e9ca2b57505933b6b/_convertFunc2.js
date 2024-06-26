import {getParameterByName} from './_getParameterByName.js';
import {getDate} from './_getDate.js';
import {getDevice} from './_getDevice.js';
import {s4} from './_s4.js';
import {guid} from './_guid.js';
import {Set_Cookie} from './_Set_Cookie.js';
import {Get_Cookie} from './_Get_Cookie.js';
import {Delete_Cookie} from './_Delete_Cookie.js';

export function _convertFunc2() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  operate_relase = "";
  var OS_Name = navigator.appVersion;
  if (OS_Name.indexOf("Win") != -1) {
    operate = "Windows";
    if (
      OS_Name.indexOf("Windows 95") != -1 ||
      OS_Name.indexOf("Win95") != -1 ||
      OS_Name.indexOf("Windows_95") != -1
    ) {
      operate_relase = "Windows 95";
    } else if (
      OS_Name.indexOf("Windows 98") != -1 ||
      OS_Name.indexOf("Win98") != -1
    ) {
      operate_relase = "Win98";
    } else if (
      OS_Name.indexOf("Windows NT 5.0") != -1 ||
      OS_Name.indexOf("Windows 2000") != -1
    ) {
      operate_relase = "Windows 2000";
    } else if (
      OS_Name.indexOf("Windows NT 5.1") != -1 ||
      OS_Name.indexOf("Windows XP") != -1
    ) {
      operate_relase = "Windows XP";
    } else if (OS_Name.indexOf("Win16") != -1) {
      operate_relase = "Windows 3.11";
    } else if (OS_Name.indexOf("Windows NT 5.2") != -1) {
      operate_relase = "Windows Server 2003";
    } else if (OS_Name.indexOf("Windows NT 6.0") != -1) {
      operate_relase = "Windows Vista";
    } else if (OS_Name.indexOf("Windows NT 6.1") != -1) {
      operate_relase = "Windows 7";
    } else if (
      OS_Name.indexOf("Windows NT 4.0") != -1 ||
      OS_Name.indexOf("WinNT4.0") != -1 ||
      OS_Name.indexOf("WinNT") != -1 ||
      OS_Name.indexOf("Windows NT") != -1
    ) {
      operate_relase = "Windows NT 4.0";
    } else if (OS_Name.indexOf("Windows ME") != -1) {
      operate_relase = "Windows ME";
    }
  } else if (OS_Name.indexOf("Mac") != -1) {
    operate = "Mac OS";
  } else if (OS_Name.indexOf("X11") != -1) {
    operate = "Unix";
  } else if (OS_Name.indexOf("Linux") != -1) {
    operate = "Linux";
  } else if (OS_Name.indexOf("SunOS") != -1) {
    operate = "Sun OS";
  } else if (OS_Name.indexOf("OpenBSD") != -1) {
    operate = "Open BSD";
  } else if (OS_Name.indexOf("QNX") != -1) {
    operate = "QNX";
  } else if (OS_Name.indexOf("BeOS") != -1) {
    operate = "BeOS";
  } else if (OS_Name.indexOf("OS/2") != -1) {
    operate = "OS/2";
  } else if (
    OS_Name.indexOf("nuhk") != -1 ||
    OS_Name.indexOf("Googlebot") != -1 ||
    OS_Name.indexOf("Yammybot") != -1 ||
    OS_Name.indexOf("Openbot") != -1 ||
    OS_Name.indexOf("Slurp") != -1 ||
    OS_Name.indexOf("MSNBot") != -1 ||
    OS_Name.indexOf("Ask Jeeves/Teoma") != -1 ||
    OS_Name.indexOf("ia_archiver") != -1
  ) {
    operate = "Search Bot";
  } else {
    operate = "unknow";
  }

  var uuid = guid();

  var params = {};
  if (_maq) {
    for (var i in _maq) {
      x = _maq[i][0];
      if (x) {
        params[x] = _maq[i][1];
      }
    }
  }
  mid = getParameterByName("mid");
  var cookie_mid = Get_Cookie("mid");
  aff_sub = getParameterByName("aff_sub");
  if (aff_sub) {
    params.aff_sub = aff_sub;
  }
  if (mid) {
    params.mid = mid;
    Set_Cookie("mid", mid, 15, "/", "", "");
  } else if (cookie_mid) {
    params.mid = cookie_mid;
  }
  aid = getParameterByName("aid");
  var cookie_aid = Get_Cookie("aid");
  if (aid) {
    params.aid = aid;
    Set_Cookie("aid", aid, 15, "/", "", "");
  } else if (cookie_aid) {
    params.aid = cookie_aid;
  }
  utm_source = getParameterByName("utm_source");
  utm_medium = getParameterByName("utm_medium");
  utm_campaign = getParameterByName("utm_campaign");
  utm_content = getParameterByName("utm_content");
  utm_design = getParameterByName("utm_design");
  if (
    mid ||
    (!cookie_mid &&
      (utm_source || utm_medium || utm_campaign || utm_content || utm_design))
  ) {
    if (utm_source) {
      params.utm_source = utm_source;
      Set_Cookie("utm_source_ta", utm_source, 15, "/", "", "");
    } else {
      Delete_Cookie("utm_source_ta", "/", "");
    }
    if (utm_medium) {
      params.utm_medium = utm_medium;
      Set_Cookie("utm_medium", utm_medium, 15, "/", "", "");
    } else {
      Delete_Cookie("utm_medium", "/", "");
    }
    if (utm_campaign) {
      params.utm_campaign = utm_campaign;
      Set_Cookie("utm_campaign", utm_campaign, 15, "/", "", "");
    } else {
      Delete_Cookie("utm_campaign", "/", "");
    }
    if (utm_content) {
      params.utm_content = utm_content;
      Set_Cookie("utm_content", utm_content, 15, "/", "", "");
    } else {
      Delete_Cookie("utm_content", "/", "");
    }
    if (utm_design) {
      params.utm_design = utm_design;
      Set_Cookie("utm_design", utm_design, 15, "/", "", "");
    } else {
      Delete_Cookie("utm_design", "/", "");
    }
  } else {
    var cookie_utm_source = Get_Cookie("utm_source_ta");
    if (cookie_utm_source) {
      params.utm_source = cookie_utm_source;
    }
    var cookie_utm_medium = Get_Cookie("utm_medium");
    if (cookie_utm_medium) {
      params.utm_medium = cookie_utm_medium;
    }
    var cookie_utm_campaign = Get_Cookie("utm_campaign");
    if (cookie_utm_campaign) {
      params.utm_campaign = cookie_utm_campaign;
    }
    var cookie_utm_content = Get_Cookie("utm_content");
    if (cookie_utm_content) {
      params.utm_content = cookie_utm_content;
    }
    var cookie_utm_design = Get_Cookie("utm_design");
    if (cookie_utm_design) {
      params.utm_design = cookie_utm_design;
    }
  }
  params.devide = getDevice();
  params.user_agent = navigator.userAgent;
  var userLang = navigator.language || navigator.userLanguage;
  params.browser_name = bowser.name;
  params.browser_version = bowser.version;
  params.browser_date = getDate();
  params.browser_lang = userLang;
  params.operate = operate;
  params.operate_relase = operate_relase;
  url = window.location.href || "";
  var urlParts = url
    .replace("http://", "")
    .replace("https://", "")
    .split(/[/?#]/);
  var domain = urlParts[0];
  params.url = url;
  params.domain = domain;
  if (document) {
    params.title = document.title || "";
    params.refer_url = document.referrer || "";
    _fto = Get_Cookie("_fto");
    _fta = Get_Cookie("_fta");
    if (_fto) {
      Set_Cookie("_fto", 1, 0.6, "/", "", "");
      first_page = 0;
    } else {
      first_page = 1;
      if (_fta) {
        Set_Cookie("_ftreturn", 1, 36500, "/", "", "");
      } else {
        Set_Cookie("_ftreturn", 0, 36500, "/", "", "");
      }
    }
    if (!Get_Cookie("_fto")) {
      Set_Cookie("_fto", 1, 0.6, "/", "", "");
    }
    thisreferrer = document.referrer || "";
    first_refer_url = "";
    if (!Get_Cookie("_ftreferdomain")) {
      if (!thisreferrer) {
        thisreferrer_domain = "redirect";
        first_refer_url = "redirect";
      } else {
        first_refer_url = thisreferrer;
        thisreferrer_domain = thisreferrer
          .replace("http://", "")
          .replace("https://", "")
          .split(/[/?#]/)[0];
        t_domain = document.domain;
        t_domain = t_domain.match(/[^\.]*\.[^.]*$/)[0];
        if (thisreferrer_domain) {
          indexOf = thisreferrer_domain.indexOf(t_domain);
          if (indexOf != -1) {
            thisreferrer_domain = "redirect";
            first_refer_url = "redirect";
          }
        }
      }
      $pathname = window.location.pathname;
      $pathname = $pathname.replace("/", "");
      cl_activity = null;
      if (params.sku) {
        cl_activity = "sku_page";
        cl_activity_child = params.sku;
      } else if (params.category) {
        cl_activity = "category_page";
        cl_activity_child = params.category;
      } else if (params.search) {
        cl_activity = "search_page";
        searchtext = params.search.text;
        if (searchtext.length > 150) {
          searchtext = searchtext.substr(0, 150);
        }
        cl_activity_child = searchtext;
      } else if (!$pathname) {
        cl_activity = "home_page";
        cl_activity_child = "home_page";
      }
      if (cl_activity && cl_activity_child) {
        Set_Cookie("_ftactivity", cl_activity, 0.6, "/", "", "");
        Set_Cookie("_ftactivity_child", cl_activity_child, 0.6, "/", "", "");
      }
      Set_Cookie("_ftreferdomain", thisreferrer_domain, 0.6, "/", "", "");
      Set_Cookie("_ftreferurl", first_refer_url, 0.6, "/", "", "");
    } else {
      d_ftreferdomain = Get_Cookie("_ftreferdomain");
      Set_Cookie("_ftreferdomain", d_ftreferdomain, 0.6, "/", "", "");
      d_ftreferurl = Get_Cookie("_ftreferurl");
      Set_Cookie("_ftreferurl", d_ftreferurl, 0.6, "/", "", "");
      d_ftactivity = Get_Cookie("_ftactivity");
      d_ftactivity_child = Get_Cookie("_ftactivity_child");
      if (d_ftactivity && d_ftactivity_child) {
        Set_Cookie("_ftactivity", d_ftactivity, 0.6, "/", "", "");
        Set_Cookie("_ftactivity_child", d_ftactivity_child, 0.6, "/", "", "");
      }
    }
    params.first_referrer_domain = Get_Cookie("_ftreferdomain");
    params.first_referrer_url = Get_Cookie("_ftreferurl");
    cl_activity = Get_Cookie("_ftactivity");
    cl_activity_child = Get_Cookie("_ftactivity_child");
    if (cl_activity && cl_activity_child) {
      params.cl_activity = cl_activity;
      params.cl_activity_child = cl_activity_child;
    }
    params.is_return = Get_Cookie("_ftreturn");
    params.first_page = first_page;
    if ((cookie_uuid = Get_Cookie("_fta"))) {
      params.uuid = cookie_uuid;
    } else {
      params.uuid = uuid;
      Set_Cookie("_fta", uuid, 36500, "/", "", "");
    }
  }
  if (window && window.screen) {
    if (window.devicePixelRatio) {
      devicePixelRatio = window.devicePixelRatio;
      params.device_pixel_ratio = devicePixelRatio;
      params.resolution =
        (window.screen.width * devicePixelRatio || 0) +
        "x" +
        (window.screen.height * devicePixelRatio || 0);
    } else {
      params.resolution =
        (window.screen.width || 0) + "x" + (window.screen.height || 0);
    }
    params.color_depth = window.screen.colorDepth || 0;
  }
  var args = "";
  for (var i in params) {
    if (args != "") {
      args += "&";
    }
    args += i + "=" + encodeURIComponent(params[i]);
  }
  var img = new Image(1, 1);
  img.src = "//trace.tomtop.com/trace.php?" + args;
};