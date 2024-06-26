export function deleteAhoyCookie() {
  this.deleteData("ahoy_visit");
  this.deleteData("ahoy_visitor");
  this.deleteData("ahoy_events");
  return true;
}