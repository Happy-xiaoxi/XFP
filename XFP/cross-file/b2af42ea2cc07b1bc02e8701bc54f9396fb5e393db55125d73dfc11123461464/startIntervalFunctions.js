export function startIntervalFunctions() {
  var a = this;
  null == this.timeBufferIntervalInstanceId &&
    (this.timeBufferIntervalInstanceId = setInterval(function () {
      try {
        void 0 != document.visibilityState
          ? "visible" == document.visibilityState && a.TimeBuffer++
          : a.TimeBuffer++,
          a.fbInstantArticle && a.emptyTimeBuffer();
      } catch (c) {
        a.Core.sendScriptError(c);
      }
    }, 1e3));
  null == this.saveTimeOnPageIntervalInstanceId &&
    (this.saveTimeOnPageIntervalFunctionId = setInterval(function () {
      a.SaveTimeOnPage();
    }, a.SaveTimeOnPageInterval));
}