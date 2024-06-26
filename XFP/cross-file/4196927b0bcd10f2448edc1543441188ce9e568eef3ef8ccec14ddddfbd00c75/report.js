export function report(C) {
  let that = this;
  let params = that.params();
  params.rdt = "1";
  if (C) {
    const B = C.e_d;
    if (B && B instanceof Object) {
      Object.assign(params.element_data, B);
      delete C.e_d;
    } else {
      if (B && typeof B == "string") {
        let ed_arr = B.split("&");
        for (let j in ed_arr) {
          let entry = ed_arr[j];
          let pair = entry.split("=");
          params.element_data[pair[0]] = pair[1];
        }
        delete C.e_d;
      }
    }
    params = helper.extend(params, C);
  }
  if (params.e_t && params.product && params.b_t) {
    helper.send(that.server, params);
  } else {
    console.log("Argument e_t or product or b_t has not set.");
  }
}