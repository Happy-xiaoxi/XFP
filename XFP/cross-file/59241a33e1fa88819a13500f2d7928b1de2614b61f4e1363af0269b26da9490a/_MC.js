export function C(t, o) {
  return (
    E(),
    new Promise((n) => {
      const s = new I(t, o, n);
      (b = s), s.addButton(void 0, e("translationsOk"), "ok"), s.render();
    })
  );
}