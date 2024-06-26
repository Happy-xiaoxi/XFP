export function f(e) {
  return (
    (i = i || document.createElement("a")),
    (i.href = e),
    {
      host: i.host,
      hostname: i.hostname,
      protocol: i.protocol,
      port: i.port,
      pathname: i.pathname,
      origin: i.origin,
      search: i.search,
    }
  );
}