export function send(C, B) {
  let protocol = window.location.protocol;
  if (B.e_d) {
    B.e_d = Object.assign(B.e_d, B.element_data);
  }
  if (B.f_p) {
    B.e_d.f_p = B.f_p;
  }
  if (B.img_type) {
    B.e_d.img_type = B.img_type;
  }
  delete B.element_data;
  delete B.w_u;
  delete B.works_id;
  B.c_t = new Date().getTime();
  B.u_a = "";
  if (B.e_d && B.e_d.product_id) {
    B.pid = B.e_d.product_id + "";
  }
  if (navigator.sendBeacon) {
    window.bigdataLogs.push({ url: protocol + C, log: B });
  } else {
    B.e_d = helper.objectToQuery(B.e_d);
    let img = new Image(0, 0);
    img.src = protocol + C + "?" + helper.objectToQuery(B);
  }
}