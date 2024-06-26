export function getTerminal() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return "iOS";
  } else {
    if (/(Android)/i.test(navigator.userAgent)) {
      return "Android";
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