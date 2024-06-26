export function getEnvironment() {
  var hostname = config.hostname;
  if (window.ahoyUserDefinedConfig.environment != undefined) {
    return window.ahoyUserDefinedConfig.environment;
  } else if (
    hostname.indexOf("staging") > -1 ||
    hostname.indexOf("int") > -1
  ) {
    return "staging";
  } else if (/\.?(vidio)\.com$|\.?analisis\.io$/.test(hostname)) {
    return "production";
  } else {
    return "development";
  }
}