export function RecommendTrans(recName, tag, logtype) {
  for (
    var cookieNames = recName.split(","), i = 0;
    i < cookieNames.length;
    i++
  ) {
    var recCookies = eval("(" + getCookie(cookieNames[i]) + ")");
    for (var k in recCookies)
      "" != recCookies[k] &&
        loginfo(
          recCookies[k],
          k.toString(),
          "cai2012" == k ? "R" : tag,
          logtype
        );
  }
}