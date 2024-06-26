export function g(){
    return "hidden" !== document.visibilityState || document.prerendering
      ? 1 / 0
      : 0;
  }