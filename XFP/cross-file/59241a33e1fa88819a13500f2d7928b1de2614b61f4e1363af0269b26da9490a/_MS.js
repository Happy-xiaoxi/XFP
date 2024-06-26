export function S(t, o) {
  return (
    E(),
    new Promise((n) => {
      const s = new I(t, o, n);
      (b = s),
        s.addButton(!1, e("translationsNo"), "no"),
        s.addButton(!0, e("translationsYes"), "yes"),
        s.render();
    })
  );
}