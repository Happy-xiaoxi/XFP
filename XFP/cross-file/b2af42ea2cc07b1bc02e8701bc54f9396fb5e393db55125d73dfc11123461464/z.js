function z(w) {
  this.foundVideoPlayers = [];
  this.SearchForNewVideoPlayersInterval = 5e3;
  this.newVideoFoundCallback = w;
  this.init = function () {
    this.trackVideos();
  };
  this.trackVideos = function () {
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
  };
  this.searchForVideosInWindow = function (a) {
    try {
      a.jwplayer;
    } catch (c) {
      return;
    }
    this.searchForFlowPlayerPlayersInWindow(a);
    this.searchForJWPlayerPlayersInWindow(a);
    this.searchForVideoJSPlayersInWindow(a);
  };
  this.searchForFlowPlayerPlayersInWindow = function (a) {
    if (a.flowplayer) {
      var c = [],
        b = 0;
      if ("undefined" != typeof a.flowplayer.instances)
        for (
          a.flowplayer.instances.forEach(function (a) {
            c.push(a);
          }),
            b = 0;
          b < c.length;
          b++
        )
          0 > this.foundVideoPlayers.indexOf(c[b]) &&
            (this.foundVideoPlayers.push(c[b]),
            this.newVideoFoundCallback(
              "flowPlayer",
              a.flowplayer.version,
              c[b]
            ));
    }
  };
  this.searchForJWPlayerPlayersInWindow = function (a) {
    if (a.jwplayer) {
      var c = [];
      for (b = 0; a.jwplayer(b) && a.jwplayer(b).id; )
        c.push(a.jwplayer(b)), b++;
      for (var b = 0; b < c.length; b++) {
        a = !0;
        for (var d = 0; d < this.foundVideoPlayers.length; d++)
          this.foundVideoPlayers[d].id &&
            this.foundVideoPlayers[d].id == c[b].id &&
            (a = !1);
        a &&
          (this.foundVideoPlayers.push(c[b]),
          this.newVideoFoundCallback("jwPlayer", c[b].version, c[b]));
      }
    }
  };
  this.searchForVideoJSPlayersInWindow = function (a) {
    if (a.videojs && "object" == typeof a.videojs.players)
      for (videoId in a.videojs.players) {
        var c = a.videojs.players[videoId];
        c &&
          0 > this.foundVideoPlayers.indexOf(c) &&
          (this.foundVideoPlayers.push(c),
          this.newVideoFoundCallback("videojs", a.videojs.VERSION, c));
      }
  };
}