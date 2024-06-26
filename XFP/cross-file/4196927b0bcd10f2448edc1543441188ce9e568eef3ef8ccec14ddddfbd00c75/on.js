export function on(D, C, B) {
  if (D.addEventListener) {
    D.addEventListener(C, B, false);
  } else {
    D.attachEvent(
      "on" + C,
      function (E) {
        return B.call(D, setEvent);
      },
      false
    );
  }
}