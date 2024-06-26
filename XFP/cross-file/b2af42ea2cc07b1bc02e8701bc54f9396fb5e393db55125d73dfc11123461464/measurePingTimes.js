export function measurePingTimes(a, c) {
  try {
    (this._timeData = []),
      (this._currentRequestNum = 0),
      (this._requestedPingsNum = a),
      (this._onPingMeasurmentsDone = c),
      this.makePingRequest();
  } catch (b) {
    this.Core.sendScriptError(b);
  }
}