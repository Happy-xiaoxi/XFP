export function searchForJWPlayerPlayersInWindow(a) {
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
}