export function iFrameHasSandbox() {
    return b.winphone || (b.safari && 5 === parseInt(b.version, 10));
  }