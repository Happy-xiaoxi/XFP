export function _FPExtra(e) {
  return (
    e.push({ key: "eh_im", value: EHTalon.IM() ? 1 : 0 }),
    e.push({ key: "eh_wb", value: EHTalon.WB() }),
    void 0 !== navigator.languages &&
      navigator.languages.length > 0 &&
      navigator.languages.forEach(function (t, n, i) {
        e.push(t);
      }),
    e
  );
}