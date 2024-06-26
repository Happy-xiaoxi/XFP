export function M() {
  if ("undefined" != typeof navigator.languages)
    try {
      if (
        navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)
      )
        return !0;
    } catch (e) {
      return !0;
    }
  return !1;
}