  export function getWebRTC(e) {
    return (
      this.initWebRTC(function (t) {
        e.push(t);
      }),
      e
    );
  }