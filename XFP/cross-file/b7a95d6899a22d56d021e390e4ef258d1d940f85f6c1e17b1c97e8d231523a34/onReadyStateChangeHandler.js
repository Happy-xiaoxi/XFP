export function onReadyStateChangeHandler () {
  if (4 === this.req.readyState)
    if (this.req.error && this.callbacks.hasOwnProperty("error"))
      this.callbacks.error(this, this.req.error);
    else if (0 === this.req.status && this.callbacks.hasOwnProperty("error"))
      this.callbacks.error(this, new Error("0: Interrupted"));
    else if (404 === this.req.status && this.callbacks.hasOwnProperty("error"))
      this.callbacks.error(this, new Error("404: Not Found"));
    else if (
      200 === this.req.status &&
      this.callbacks.hasOwnProperty("success")
    ) {
      if (void 0 === this.req.response)
        try {
          this.req.response = this.req.responseText;
        } catch (e) {}
      this.callbacks.success(this);
    }
}