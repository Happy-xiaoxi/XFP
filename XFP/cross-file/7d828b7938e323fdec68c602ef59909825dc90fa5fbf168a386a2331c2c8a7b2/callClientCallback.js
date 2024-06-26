export function callClientCallback(e) {
    return (
      clearTimeout(rtusHandleTimeoutId),
      !clientCallbackCalled &&
        (window.CONFIG_JS_CALLBACK(e), (clientCallbackCalled = !0))
    );
  }