export function searchForVideoJSPlayersInWindow(a) {
  if (a.videojs && "object" == typeof a.videojs.players)
    for (videoId in a.videojs.players) {
      var c = a.videojs.players[videoId];
      c &&
        0 > this.foundVideoPlayers.indexOf(c) &&
        (this.foundVideoPlayers.push(c),
        this.newVideoFoundCallback("videojs", a.videojs.VERSION, c));
    }
}