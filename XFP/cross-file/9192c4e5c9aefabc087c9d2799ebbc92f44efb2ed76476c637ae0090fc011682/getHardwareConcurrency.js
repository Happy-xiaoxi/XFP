export function getHardwareConcurrency() {
    return navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency
      : "unknown";
  }