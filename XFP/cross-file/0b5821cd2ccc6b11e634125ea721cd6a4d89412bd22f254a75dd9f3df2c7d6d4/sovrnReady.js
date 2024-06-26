export function sovrnReady(n) {
    /in/.test(document.readyState)
      ? setTimeout(function () {
          sovrn.auction.sovrnReady(n);
        }, 50)
      : n();
  }