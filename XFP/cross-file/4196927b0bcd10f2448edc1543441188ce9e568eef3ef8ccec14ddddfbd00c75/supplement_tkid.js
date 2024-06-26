export function supplement_tkid(a, b) {
  if (a && b) {
    let arr = b.split("-");
    try {
      if (arr.length === 6) {
        let idx = a.parentElement.dataset.index;
        if (idx) {
          arr.push(idx);
        } else {
          let ul_array = a.parentElement.parentElement.parentElement.children;
          let ul = a.parentElement.parentElement;
          let ul_div_children = ul.children;
          let div_current = a.parentElement;
          idx =
            [].indexOf.call(ul_div_children, div_current) * ul_array.length +
            [].indexOf.call(ul_array, ul);
          arr.push(idx);
        }
      }
      let tdata = a.getAttribute("_tracker_data_");
      if (tdata && arr.length === 7) {
        let tjson = JSON.parse(tdata);
        let product_id = tjson.product_id;
        let type = tjson.type;
        arr.push(type + "_" + product_id);
      }
    } catch (d) {
      console.log("json parse error!");
    }
    return arr.join("-");
  }
  return "";
}