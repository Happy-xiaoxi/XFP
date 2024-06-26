export function E(){
    return (
      m < 0 &&
        ((m = g()),
        w(),
        c(function () {
          setTimeout(function () {
            (m = g()), w();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return m;
        },
      }
    );
  }