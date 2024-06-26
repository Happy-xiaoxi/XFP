export function saveEventQueue() {
  // TODO add stringify method for IE 7 and under
  if (this.canStringify) {
    // We limit the cookie size, because some browser, seems doesn't have any limit for cookie
    // which can be problematic for our varnish
    // Ref 1: http://browsercookielimits.squawky.net/
    // Ref 2: https://s3.amazonaws.com/prod.tracker2/resource/73911429/tcp.log?response-content-disposition=inline&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEX3ET63U5T77TYA%2F20170202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20170202T094342Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=925cf381392b1eec606b7e643885e55715b89602a4b2d3b23b2f39e20989974d
    // And because the cookie is encoded, we will check the encoded length instead plain length
    if (
      this.config.isUseLocalStorage ||
      (JSON.stringify(this.eventQueue).length <=
        this.config.cookieSizeLimit &&
        this.helpers.jsonToParams(this.eventQueue).length <=
          this.config.cookieSizeLimit)
    ) {
      try {
        this.eventStorage.setData(
          "ahoy_events",
          JSON.stringify(this.eventQueue),
          1
        );
      } catch (err) {
        if (
          err instanceof DOMException &&
          err.name === "QuotaExceededError"
        ) {
          this.trackBatchEvent();
          return;
        }
        throw err;
      }
    }
  }
}