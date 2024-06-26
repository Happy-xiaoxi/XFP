export function U(){
    return (
      (U =
        Object.assign ||
        function (e) {
          for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var i in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          return e;
        }),
      U.apply(this, arguments)
    );
  }