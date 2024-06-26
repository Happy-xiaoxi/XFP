export function getEventUrl() {
  if (config.getEnvironment() == "staging") {
    return config.plentyHostname.staging + "/ahoy/events";
  } else if (config.getEnvironment() == "production") {
    return config.plentyHostname.production + "/ahoy/events";
  } else {
    return config.plentyHostname.development + "/ahoy/events";
  }
}