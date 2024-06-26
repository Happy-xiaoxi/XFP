export function get_account_profile(s) {
  var p;
  if (
    u.visitor_service_override ||
    u.tag_config_server.indexOf("tealiumiq.com") === -1
  ) {
    p = [u.tag_config_server.split("//")[1], u.account, u.profile];
  } else {
    p = s.substring(s.indexOf(u.server_domain)).split("/");
  }
  return p;
}