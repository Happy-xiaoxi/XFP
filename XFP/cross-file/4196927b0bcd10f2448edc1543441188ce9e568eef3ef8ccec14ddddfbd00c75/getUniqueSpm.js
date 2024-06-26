export function getUniqueSpm(a) {
  if (!a) {
    return "";
  }
  let tkid_array = a.split(",");
  let prefix_set = new Set();
  let new_tkid_array = [];
  for (let tj in tkid_array) {
    let tje = tkid_array[tj];
    let tje_array = tje.split("-");
    if (tje_array.length >= 6) {
      let module = tje_array[0];
      if (module) {
        if (module === "search" || module === "re") {
          module = "search-re";
          if (
            window.log.e_d.ref_product_id === undefined &&
            tje_array.length === 8
          ) {
            let t3 = tje_array[7].split("_");
            if (t3 && t3.length === 2) {
              window.log.e_d.ref_product_id = t3[1];
            }
          }
        }
        if (!prefix_set.has(module)) {
          new_tkid_array.push(tje);
          prefix_set.add(module);
        }
      }
    }
  }
  if (new_tkid_array.length >= 6) {
    new_tkid_array.splice(6, 100);
  }
  return new_tkid_array.join(",");
}