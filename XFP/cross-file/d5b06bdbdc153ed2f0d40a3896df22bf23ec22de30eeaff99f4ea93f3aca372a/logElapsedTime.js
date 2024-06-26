export function logElapsedTime(e, t) {
    csmClient.logHistogram(e, Date.now() - t);
  }