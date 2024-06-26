export function checkShouldSendPageView() {
  const a = window.log.page_url !== window.location.href;
  if (window.log && window.log.page_url && a) {
    window.log.page_url = window.location.href;
    if (window._tracker_api_) {
      window._tracker_api_.pageView();
    }
  }
  setTimeout("checkShouldSendPageView()", 5000);
}