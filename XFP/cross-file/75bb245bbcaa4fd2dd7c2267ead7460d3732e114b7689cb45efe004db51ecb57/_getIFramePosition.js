export function getIFramePosition(a) {
    var b = Number(a.height),
      c = 0.3 * b;
    return a.getBoundingClientRect().top - window.innerHeight + c;
  }