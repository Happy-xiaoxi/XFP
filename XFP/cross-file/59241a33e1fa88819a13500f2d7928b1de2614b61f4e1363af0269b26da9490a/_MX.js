export function X(e, t, o, n) {
  try {
    t && (t = btoa(t)),
      (n ??= new Date()),
      n.setMonth(n.getMonth() + 1),
      (document.cookie = `${e}=${t};domain=.${o};path=/;expires=${n.toUTCString()}`);
  } catch (e) {}
}