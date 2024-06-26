export function send () {
  return this.crossDomain ? this.sendCrossDomain() : this.sendSameDomain();
}