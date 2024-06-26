export function T(e){
    document.prerendering
      ? addEventListener(
          "prerenderingchange",
          function () {
            return e();
          },
          !0
        )
      : e();
  }