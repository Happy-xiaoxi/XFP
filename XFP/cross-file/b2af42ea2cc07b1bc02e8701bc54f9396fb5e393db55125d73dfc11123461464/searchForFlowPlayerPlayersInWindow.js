export function searchForFlowPlayerPlayersInWindow(a) {
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
}