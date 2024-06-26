export function getPlatform() {
  if (/(wxwork)/i.test(navigator.userAgent)) {
    return "WeCom";
  } else {
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      return "wap";
    } else {
      if (
        navigator.platform.indexOf("Win") === 0 ||
        navigator.platform.indexOf("Mac") === 0
      ) {
        return "PC";
      } else {
        return "unknown";
      }
    }
  }
}