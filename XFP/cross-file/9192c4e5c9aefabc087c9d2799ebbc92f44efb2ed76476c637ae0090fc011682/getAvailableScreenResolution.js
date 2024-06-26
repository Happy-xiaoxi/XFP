  export function getAvailableScreenResolution(e) {
    var t;
    return (
      screen.availWidth &&
        screen.availHeight &&
        (t = this.options.detectScreenOrientation
          ? screen.availHeight > screen.availWidth
            ? [screen.availHeight, screen.availWidth]
            : [screen.availWidth, screen.availHeight]
          : [screen.availHeight, screen.availWidth]),
      void 0 !== t && e.push({ key: "available_resolution", value: t }),
      e
    );
  }