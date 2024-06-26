export function stopIntervalFunctions() {
  this.timeBufferIntervalInstanceId &&
    (clearInterval(this.timeBufferIntervalInstanceId),
    (this.timeBufferIntervalInstanceId = null));
  this.saveTimeOnPageIntervalFunctionId &&
    (clearInterval(this.saveTimeOnPageIntervalFunctionId),
    (this.saveTimeOnPageIntervalFunctionId = null));
}