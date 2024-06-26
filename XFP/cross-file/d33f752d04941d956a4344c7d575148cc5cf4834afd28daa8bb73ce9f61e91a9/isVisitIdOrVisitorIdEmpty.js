export function isVisitIdOrVisitorIdEmpty() {
  this.visitId = this.visitStorage.getData("ahoy_visit")
    ? this.visitStorage.getData("ahoy_visit")
    : window.ahoyUserDefinedConfig.visitId;
  this.visitorId = this.visitStorage.getData("ahoy_visitor")
    ? this.visitStorage.getData("ahoy_visitor")
    : window.ahoyUserDefinedConfig.visitorId;
  return !this.visitId || !this.visitorId;
}