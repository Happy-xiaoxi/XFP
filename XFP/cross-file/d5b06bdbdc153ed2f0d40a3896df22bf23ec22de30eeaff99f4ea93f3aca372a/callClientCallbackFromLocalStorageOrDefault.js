export function callClientCallbackFromLocalStorageOrDefault() {
    clearTimeout(rtusHandleTimeoutId);
    var e = getRtusResponseFromLocalStorage();
    callClientCallback(e ? parseJSON(e) : defaultRtusResponse), sendMetrics();
  }