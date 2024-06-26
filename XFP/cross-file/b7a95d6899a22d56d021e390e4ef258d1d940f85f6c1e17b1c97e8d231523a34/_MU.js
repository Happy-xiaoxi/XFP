export function U(e) {
  var t = document.createElement("a");
  return (
    (t.href = e), { hostname: t.hostname, pathname: t.pathname, port: t.port }
  );
}