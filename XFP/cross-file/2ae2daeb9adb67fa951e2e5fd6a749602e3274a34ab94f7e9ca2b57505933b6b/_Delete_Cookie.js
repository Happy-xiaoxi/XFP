export function Delete_Cookie(name, path, domain) {
    domain = document.domain;
    domain = domain.match(/[^\.]*\.[^.]*$/)[0];
    if (Get_Cookie(name))
      document.cookie =
        name +
        "=" +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
  }