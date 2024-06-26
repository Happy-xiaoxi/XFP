export function refreshVisitId() {
  if (!this.visitId) {
    this.visitId = this.helpers.generateUUID();
  }
  this.visitStorage.setData("ahoy_visit", this.visitId, this.config.visitTtl);
  window.ahoyUserDefinedConfig.visitId = this.visitId;
}