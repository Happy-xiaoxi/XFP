import {isChrome} from './isChrome.js';

export function setCookie(a, b, d) {
  let domain = document.domain;
  if (
    domain.endsWith(".com.cn") ||
    domain.endsWith(".org.cn") ||
    domain.endsWith(".net.cn")
  ) {
    domain = domain.split(".").slice(-3).join(".");
  } else {
    domain = domain.split(".").slice(-2).join(".");
  }
  if (isChrome()) {
    let exp = new Date();
    exp.setTime(exp.getTime() + d);
    document.cookie =
      a +
      "=" +
      encodeURIComponent(b) +
      ";domain=" +
      domain +
      ";path=/;expires=" +
      exp.toUTCString();
  } else {
    document.cookie =
      a + "=" + encodeURIComponent(b) + ";domain=" + domain + ";path=/;";
  }
}