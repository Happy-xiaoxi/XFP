export function elementClick(B) {
  let that = this;
  let params = that.params(B);
  params.e_t = "element_click";
  helper.send(that.server, params);
}