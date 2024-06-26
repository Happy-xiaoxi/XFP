export function isChecked() {
  return (
    (SucInfo_OrderId =
      window.SucInfo_OrderId ||
      JA.util.getParameter(document.location.href, "suc_orderid") ||
      undefined),
    (SucInfo_OrderType =
      window.SucInfo_OrderType ||
      JA.util.getParameter(document.location.href, "suc_ordertype") ||
      undefined),
    (SucInfo_OrderDetail =
      window.SucInfo_OrderDetail ||
      decodeURIComponent(
        JA.util.getParameter(document.location.href, "suc_sku")
      ) ||
      undefined),
    SucInfo_OrderId && SucInfo_OrderDetail
  );
}