export function is_in_sample_group(b) {
  var group = "100";
  if (u.tag_config_sampling === "" || u.tag_config_sampling === "100") {
    return true;
  }
  if (b["cp.utag_main_dc_group"]) {
    group = b["cp.utag_main_dc_group"];
  } else {
    group = Math.floor(Math.random() * 100) + 1;
    utag.loader.SC("utag_main", { dc_group: group });
  }
  if (parseInt(group) <= parseInt(u.tag_config_sampling)) {
    return true;
  } else {
    return false;
  }
}