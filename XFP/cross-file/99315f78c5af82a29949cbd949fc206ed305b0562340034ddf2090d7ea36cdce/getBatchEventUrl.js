export function getBatchEventUrl() {
  if (config.getEnvironment() == "staging") {
    return config.plentyHostname.staging + "/events";
  } else if (config.getEnvironment() == "production") {
    return config.plentyHostname.production + "/events";
  } else {
    return config.plentyHostname.development + "/events";
  }
}