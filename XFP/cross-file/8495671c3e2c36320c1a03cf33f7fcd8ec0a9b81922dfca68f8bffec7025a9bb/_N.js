export function N(){
    var e = window.location;
    return {
      protocol: e.protocol,
      hostname: e.hostname,
      pathname: e.pathname,
    };
  }