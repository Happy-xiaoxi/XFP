export function lookupIabConsentForGpp(n, t) {
	const e = this.cmpClient({ apiName: "__gpp", apiVersion: 1 });
    if (!e) return t("GPP CMP not found.");
    e({
      command: "addEventListener",
      callback: function (o) {
        o &&
          ("sectionChange" === o.eventName || "loaded" === o.pingData.cmpStatus
            ? e({ command: "getGPPData" }).then((o) =>
                Promise.all(
                  (o?.pingData?.supportedAPIs || []).map((n) =>
                    e({ command: "getSection", parameter: n })
                      .catch(() => {})
                      .then((t) => [n, t])
                  )
                ).then((e) => {
                  const a = Object.fromEntries(e.filter(([n, t]) => null != t));
                  !(function (n, { onSuccess: t, onError: e }) {
                    function o() {
                      const t = n?.gppData?.gppString,
                        e = n?.gppData?.applicableSections;
                      return !(
                        Array.isArray(e) &&
                        (!Array.isArray(e) ||
                          (t &&
                            ((o = t),
                            "[object String]" ===
                              Object.prototype.toString.call(o))))
                      );
                      var o;
                    }
                    o()
                      ? e(
                          "CMP returned unexpected value during lookup process.",
                          n
                        )
                      : t(
                          (function ({ gppData: n, sectionData: t } = {}) {
                            let e = {
                              gppString: n ? n.gppString : void 0,
                              gppData: n || void 0,
                            };
                            return (
                              (e.applicableSections = (function (n) {
                                return n &&
                                  Array.isArray(n.applicableSections) &&
                                  n.applicableSections.length > 0 &&
                                  0 !== n.applicableSections[0]
                                  ? n.applicableSections
                                  : [];
                              })(n)),
                              (e.apiVersion = 1),
                              (e.sectionData = t),
                              e
                            );
                          })(n)
                        );
                  })(
                    { gppData: o, sectionData: a },
                    { onSuccess: n, onError: t }
                  );
                })
              )
            : "error" === o.pingData.cmpStatus &&
              t(
                "CMP returned with a cmpStatus:error response.  Check CMP setup."
              ));
      },
    });
  }