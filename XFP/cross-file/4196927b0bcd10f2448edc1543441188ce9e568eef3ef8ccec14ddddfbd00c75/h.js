import {getArgFromStr} from './getArgFromStr.js';
import {getCookie} from './getCookie.js';
  export function h() {
    const D =
      getArgFromStr(document.referrer, "ad_tk_id") ||
      getCookie("_tracker_ad_tk_id");
    let temp_url = document.URL;
    if (D) {
      try {
        const C = D.split("-")[5];
        const B = getDate(C);
        if (new Date().getTime() - B.getTime() < 7200000) {
          if (temp_url.indexOf("ad_tk_id") < 0) {
            temp_url = addArgToUrl(temp_url, "ad_tk_id", D);
          } else {
            temp_url = temp_url.replace(
              /ad_tk_id=[a-zA-Z0-9-]{11,100}/,
              "ad_tk_id=" + D
            );
          }
        }
      } catch (E) {
        console.log("ad tk id occurs some error !");
      }
    }
    let show_tk_id = getCookie("_tracker_pro_tk_id");
    if (show_tk_id) {
      temp_url = addArgToUrl(temp_url, "ext_link", "1");
      removeCookie("_tracker_pro_tk_id");
    }
    if (document.URL !== temp_url) {
      window.history.replaceState(
        { remark: "new url with tk_id" },
        document.title,
        temp_url
      );
    }
    return temp_url;
  }