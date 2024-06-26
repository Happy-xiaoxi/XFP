export function refreshVisitorId() {
  if (!this.visitorId) {
    this.visitorId = this.helpers.generateUUID();
    this.visitId = null;
  }
  this.visitStorage.setData(
    "ahoy_visitor",
    this.visitorId,
    this.config.visitorTtl
  );
  window.ahoyUserDefinedConfig.visitorId = this.visitorId;
}