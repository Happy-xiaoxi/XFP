export function g(n) {
    for (
      var o = document.getElementsByTagName("meta"), _ = 0;
      _ < o.length;
      _++
    )
      if (o[_].name == n && o[_].value != 0 && o[_].value != "disabled")
        return !0;
  }