export function prepareAndSendVisitsData() {
  var jsonData = this.visitBuilder.construct({
    visit_token: this.visitId,
    visitor_token: this.visitorId,
    falcon_version: this.falconVersion,
  });
  this.helpers.post(
    this.config.visitsUrl,
    JSON.stringify(jsonData),
    this.setReady
  );
}