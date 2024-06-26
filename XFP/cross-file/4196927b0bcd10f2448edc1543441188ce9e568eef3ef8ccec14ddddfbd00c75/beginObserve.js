export function beginObserve(b, f) {
  try {
    let arr = document.querySelectorAll(b);
    let observer = new IntersectionObserver(
      function (h) {
        for (let i = 0; i < h.length; i++) {
          const g = h[i];
          if (g.isIntersecting && g.target) {
            let element1 = g.target;
            f(element1);
          }
        }
      },
      { threshold: 0.6 }
    );
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      const a = e.getAttribute("bigdata_view");
      if (a == null || a === "0") {
        observer.observe(e);
        e.setAttribute("bigdata_view", "1");
      }
    }
    setTimeout(function () {
      beginObserve(b, f);
    }, 3000);
  } catch (d) {
    console.log(d);
  }
}