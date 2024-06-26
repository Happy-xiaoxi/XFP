export function c(e){
    addEventListener(
      "pageshow",
      function (n) {
        n.persisted && ((a = n.timeStamp), e(n));
      },
      !0
    );
  }