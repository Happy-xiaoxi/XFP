export function d(e, t, o) {
  (e["__original__" + t] = e[t]), (e[t] = o);
  for (const o in e["__original__" + t]) e[t][o] = e["__original__" + t][o];
}