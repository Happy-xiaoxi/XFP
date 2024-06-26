export function searchForVideosInWindow(a) {
  try {
    a.jwplayer;
  } catch (c) {
    return;
  }
  this.searchForFlowPlayerPlayersInWindow(a);
  this.searchForJWPlayerPlayersInWindow(a);
  this.searchForVideoJSPlayersInWindow(a);
}