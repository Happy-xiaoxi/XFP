
  export function getScreenResolution(e) {
    var t;
    return (
      (t =
        this.options.detectScreenOrientation && screen.height > screen.width
          ? [screen.height, screen.width]
          : [screen.width, screen.height]),
      void 0 !== t && e.push({ key: "resolution", value: t }),
      e
    );
  }