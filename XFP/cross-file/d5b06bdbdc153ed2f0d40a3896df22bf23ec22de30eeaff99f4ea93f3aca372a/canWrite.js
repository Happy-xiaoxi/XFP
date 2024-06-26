export function canWrite(e, t, n) {
    e("cto_write_test", "testWrite", 1);
    var o = "testWrite" === t("cto_write_test");
    return n("cto_write_test"), o;
  }