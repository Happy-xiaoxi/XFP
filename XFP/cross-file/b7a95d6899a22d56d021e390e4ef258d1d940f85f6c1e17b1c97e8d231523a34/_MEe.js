export function Ee(e, t, n, i) {
  return (
    (n = n + e.configuration.appId + e.configuration.correlationId),
    t.push("appId", "correlationId", null == i ? void 0 : i.toString()),
    { ph2: he.hash(n), o: t }
  );
}