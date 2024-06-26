export function emptyTimeBuffer() {
  try {
    if (
      new Date().getTime() - this.lastInteraction.getTime() <=
        this.TimeTreshold ||
      this.fbInstantArticle
    )
      this.TimeOnPage += this.TimeBuffer;
    this.TimeBuffer = 0;
    this.lastInteraction = new Date();
  } catch (a) {
    this.Core.sendScriptError(a);
  }
}