export function HandlePing(a) {
  try {
    var c = new Date().getTime(),
      b = (c - this._pingStartTime) / 2;
    this._timeData.push({ ctd: a.s - c - Math.abs(b), cl: b });
    this._currentRequestNum++;
    if (this._currentRequestNum < this._requestedPingsNum)
      this.makePingRequest();
    else {
      for (var d = (b = c = 0); d < this._timeData.length; d++)
        (c += this._timeData[d].ctd), (b += this._timeData[d].cl);
      c = Math.round(c / this._timeData.length);
      b = Math.round(b / this._timeData.length);
      a = { DeviceSync: c, DeviceSyncLag: b };
      this._onPingMeasurmentsDone(a);
    }
  } catch (f) {
    this.Core.sendScriptError(f);
  }
}