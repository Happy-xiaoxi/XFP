export function pageLeave() {
  let that = this;
  let params = that.params();
  params.cat = "页面";
  params.act = "页面离开";
  params.rdt = "1";
  params.dur = new Date().getTime() - window.log.page_start_time;
  params.e_t = "page_leave";
  params.e_d.user_active_dur =
    user_active_dur + new Date().getTime() - timed_start_time;
  proxySend(that.server, params);
  delete this;
}