export function sendSameDomain () {
  try {
    (this.req.withCredentials = !0), this.req.send(this.data);
  } catch (e) {
    "function" == typeof this.callbacks.error &&
      this.callbacks.error(this, new Error("Exception on send"));
  }
}