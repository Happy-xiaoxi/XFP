export function callClientCallback(e) {
    return (
      !clientCallbackCalled &&
      (window.CONFIG_JS_CALLBACK(e), (clientCallbackCalled = !0))
    );
  }