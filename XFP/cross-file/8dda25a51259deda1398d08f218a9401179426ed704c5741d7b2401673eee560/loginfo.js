export function loginfo(e, t, r, n, i) {
  for (
    var o = e.split(","),
      a = SucInfo_OrderId,
      s = SucInfo_OrderType,
      d = SucInfo_OrderDetail,
      c = 0;
    c < o.length;
    c++
  )
    if (o[c].length > 0) {
      var u = o[c].toString().split("#")[0];
      SucInfoMethod.Contains(u) &&
        (i
          ? (privateLogWLJS(
              n,
              r,
              t.concat(".o"),
              a,
              s,
              d,
              u + ":" + SucInfoMethod.GetSkuNum(u)
            ),
            privateLogWLJS(
              "4",
              "R" + t.concat(".o"),
              a,
              s,
              d,
              u,
              SucInfoMethod.GetSkuNum(u)
            ))
          : privateLogWLJS(n, r + t, a, s, d, u, SucInfoMethod.GetSkuNum(u)));
    }
}