export function fetchGumResponseAndStoreItInLocalStorage(e, t, n, o) {
    if (rtusCalledViaFetch) return sendMetrics(), Promise.resolve();
    rtusCalledViaFetch = !0;
    var r = new Headers();
    return (
      e.hasValue() && (r.set("x-crto-sid", e.value), logCounter("Headers.Sid")),
      t.value && (r.set("x-crto-optout", "1"), logCounter("Headers.Optout")),
      n.hasValue() &&
        (r.set("x-crto-idcpy", n.value), logCounter("Headers.Idpcy")),
      o.hasValue() &&
        (r.set("x-crto-bundle", o.value), logCounter("Headers.Bundle")),
      logCounter("Events.InitiateFetch"),
      fetch(currentScriptSrc, { headers: r, cache: "reload", mode: "cors" })
        .then(function (e) {
          return e.text();
        })
        .then(function (e) {
          if (!(0 < e.indexOf('"status":"Unknown"'))) {
            var t = jsonDelimiterRegex.exec(e);
            t && t[1]
              ? (localStorage.setItem(rtusResponseLsKeyWithCallerId, t[1]),
                logCounter("Events.SaveResponseOnLocalStorage"))
              : logError("Events.JsonpParseError", "JSONP could not be parsed");
          }
        })
        .catch(logCounter.bind(null, "Events.FetchError"))
        .then(sendMetrics)
    );
  }