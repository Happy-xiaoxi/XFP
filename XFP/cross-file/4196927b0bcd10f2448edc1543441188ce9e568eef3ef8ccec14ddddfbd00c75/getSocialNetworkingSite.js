export function getSocialNetworkingSite() {
  let ua = window.navigator.userAgent.toLocaleLowerCase();
  if (ua.match(/MicroMessenger/i) === "micromessenger") {
    return "weixin";
  }
  if (ua.match(/Weibo/i) === "weibo") {
    return "weibo";
  }
  if (ua.match(/QQ\//i) === "qq/") {
    return "qq";
  }
  if (ua.match(/qzone\//i) === "qzone/") {
    return "qzone";
  }
  if (ua.match(/tieba\//i) === "tieba/") {
    return "tieba";
  }
  if (ua.match(/momoWebView\//i) === "momoWebView/") {
    return "momo";
  }
  if (ua.match(/douban/i) === "douban") {
    return "douban";
  }
  if (ua.match(/zhihu/i) === "zhihu") {
    return "zhihu";
  }
  return "unknown";
}