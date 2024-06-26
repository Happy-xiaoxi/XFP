export function getVisitUrl() {
  if (config.getEnvironment() == "staging") {
    return config.plentyHostname.staging + "/ahoy/visits";
  } else if (config.getEnvironment() == "production") {
    return config.plentyHostname.production + "/ahoy/visits";
  } else {
    return config.plentyHostname.development + "/ahoy/visits";
  }
}