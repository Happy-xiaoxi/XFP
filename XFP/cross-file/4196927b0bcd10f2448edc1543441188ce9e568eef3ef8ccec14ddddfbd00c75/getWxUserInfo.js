export function getWxUserInfo() {
  return helper.getTrackerData("wx_user_info") || {};
}