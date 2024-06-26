export function g(e, t = 50) {
  return new Promise((o, n) => {
    const s = async () => {
      try {
        if (!(await e())) return setTimeout(s, t);
        o();
      } catch (e) {
        return n(e);
      }
    };
    s();
  });
}