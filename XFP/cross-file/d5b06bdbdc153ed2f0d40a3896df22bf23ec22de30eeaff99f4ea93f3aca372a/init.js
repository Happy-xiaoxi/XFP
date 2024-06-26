export function init() {
    return __awaiter(this, void 0, void 0, function () {
      var t, n, o, r, i, a, s;
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              logCounter("Events.StartInit"),
              (rtusInitTime = Date.now()),
              (t = syncframe.fetchUserData()),
              (n = t.getSid()),
              (o = t.getOptOut()),
              (r = t.getIdCpy()),
              (i = t.getBundle()),
              (a = t.getLocalWebId()),
              (cookiesWriteable = canWriteCookies()),
              (localStorageWritable = canWriteLocalStorage()),
              [4, consentManager.retrieveConsentGDPR()]
            );
          case 1:
            return (
              (gdprConsent = e.sent()),
              [4, consentManager.retrieveConsentCCPA()]
            );
          case 2:
            return (
              (ccpaConsent = e.sent()), [4, consentManager.retrieveConsentGPP()]
            );
          case 3:
            return (
              (gppConsent = e.sent()),
              a.hasValue() && logCounter("Origin.FromLocalWebId"),
              (rtusHandleTimeoutId = setTimeout(function () {
                logCounter(
                  "Events.Timeout." +
                    window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS
                ),
                  callClientCallbackFromLocalStorageOrDefault();
              }, window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS)),
              syncframe.appendGumIFrameOnCompletedDomIfItDoesNotExist(
                createGumRequest
              ),
              (s = getRtusResponseFromLocalStorage())
                ? (callClientCallback(parseJSON(s)),
                  logCounter("Origin.FromLocalRtusResponse"),
                  sendMetrics())
                : (n.hasValue() || o.value || r.hasValue() || i.hasValue()) &&
                  (n.hasValue() &&
                    logCounter(
                      "Origin.FromLocalSid." +
                        window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS
                    ),
                  o.value &&
                    logCounter(
                      "Origin.FromLocalOptout." +
                        window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS
                    ),
                  r.hasValue() &&
                    logCounter(
                      "Origin.FromIdCpy." +
                        window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS
                    ),
                  i.hasValue() &&
                    logCounter(
                      "Origin.FromBundle." +
                        window.CONFIG_RTUS_RESPONSE_RECEIVED_TIMEOUT_MS
                    ),
                  fetchGumResponseAndStoreItInLocalStorage(n, o, r, i)
                    .then(function () {
                      logElapsedTime(
                        "Duration.AfterRtusFetchFromCachedSyncframe",
                        rtusInitTime
                      ),
                        logCounter("Events.AfterRtusFetchFromCachedSyncframe");
                    })
                    .then(function () {
                      return callClientCallbackFromLocalStorageOrDefault();
                    })),
              sendMetrics(),
              [2]
            );
        }
      });
    });
  }