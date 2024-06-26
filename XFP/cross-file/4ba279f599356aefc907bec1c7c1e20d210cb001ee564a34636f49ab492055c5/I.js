export function I(n, o) {
    if (
      !(!n || !n.hostname || n.href.indexOf("http") != 0) &&
      !(!o && L(n.hostname))
    ) {
      var _ = n.getAttribute("eltkstat");
      _ ||
        (n.addEventListener
          ? (n.addEventListener("click", function (f) {
              var l = f.currentTarget,
                p = {
                  url: l.href,
                  referer: document.location.href,
                  title: l.textContent,
                };
              _wd_track_external(p);
            }),
            n.setAttribute("eltkstat", !0))
          : n.attachEvent &&
            (n.attachEvent("onclick", function () {
              var f = window.event.srcElement,
                l = {
                  url: f.href,
                  referer: document.location.href,
                  title: f.innerText,
                };
              _wd_track_external(l);
            }),
            n.setAttribute("eltkstat", !0)));
    }
  }