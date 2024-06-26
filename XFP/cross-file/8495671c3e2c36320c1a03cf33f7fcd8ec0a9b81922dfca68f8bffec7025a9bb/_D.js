export function D(e){
    e.forEach(function (e) {
      e.interactionId &&
        ((O = Math.min(O, e.interactionId)),
        (I = Math.max(I, e.interactionId)),
        (P = I ? (I - O) / 7 + 1 : 0));
    });
  }