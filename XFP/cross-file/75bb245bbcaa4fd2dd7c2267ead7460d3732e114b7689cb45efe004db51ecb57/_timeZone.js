export function timeZone() {
    return ("&tz=" + new Date().getTimezoneOffset()).replace("-", "%2D");
  }