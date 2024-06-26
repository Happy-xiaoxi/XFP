export function getAction2(a) {
  let bd_attr = a.getAttribute("bd_attr");
  let obj = {};
  if (bd_attr) {
    let level1_fields = ["product", "cat", "act", "b_t", "b_v"];
    obj.rdt = "3";
    let kv_pairs = bd_attr.split("&");
    for (let idx in kv_pairs) {
      let kv = kv_pairs[idx].split("=");
      if (kv.length === 2 && kv[0] && kv[1]) {
        if (level1_fields.indexOf(kv[0]) > -1) {
          obj[kv[0]] = kv[1];
        }
      }
    }
  }
  return obj;
}