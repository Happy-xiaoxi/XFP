export function getLoadIframeDuration(a) {
    if (
      window.hasOwnProperty("performance") &&
      !!window.performance.getEntriesByName
    ) {
      var b = performance.getEntriesByName(a, "resource"),
        c = b[0];
      return c && c.duration;
    }
  }