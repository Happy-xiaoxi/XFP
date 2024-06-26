export function trackVideos() {
  function a(c) {
    c.contentWindow && b.searchForVideosInWindow(c.contentWindow);
  }
  this.searchForVideosInWindow(window);
  for (
    var c = window.document.getElementsByTagName("iframe"), b = this, d = 0;
    d < c.length;
    d++
  )
    a(c[d]);
  b = this;
  setTimeout(function () {
    b.trackVideos();
  }, this.SearchForNewVideoPlayersInterval);
}