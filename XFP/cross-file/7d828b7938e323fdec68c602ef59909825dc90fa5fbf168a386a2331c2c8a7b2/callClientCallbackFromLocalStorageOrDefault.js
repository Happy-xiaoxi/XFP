export function callClientCallbackFromLocalStorageOrDefault(e) {
    var t = getRtusResponseFromLocalStorage();
    logElapsedTime(
      "Duration.CallClientCallback." +
        window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS,
      rtusInitTime
    ),
      logElapsedTime(
        "Duration.CallClientCallbackByOrigin." +
          e +
          "." +
          window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS,
        rtusInitTime
      ),
      t
        ? (callClientCallback(parseJSON(t)),
          logCounter("Origin." + e + ".Valid"))
        : (callClientCallback(defaultRtusResponse),
          logCounter("Origin." + e + ".Unknown")),
      sendMetrics();
  }