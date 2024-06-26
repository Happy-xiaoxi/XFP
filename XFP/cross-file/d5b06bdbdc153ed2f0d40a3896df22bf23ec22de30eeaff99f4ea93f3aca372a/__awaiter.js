export function __awaiter(i, a, s, u) {
    return new (s = s || Promise)(function (e, t) {
      function n(e) {
        try {
          r(u.next(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        try {
          r(u.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function r(t) {
        t.done
          ? e(t.value)
          : new s(function (e) {
              e(t.value);
            }).then(n, o);
      }
      r((u = u.apply(i, a || [])).next());
    });
  }