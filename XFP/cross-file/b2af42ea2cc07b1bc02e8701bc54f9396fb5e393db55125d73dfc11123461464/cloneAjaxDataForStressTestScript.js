export function cloneAjaxDataForStressTestScript(a) {
  try {
    if ("undefined" != typeof window.DotMetricsObjStress) {
      var c = JSON.parse(JSON.stringify(a));
      "undefined" == typeof window.dmStress &&
        (window.dmStress = { AjaxData: [] });
      for (a = 0; a < c.length; a++) window.dmStress.AjaxData.push(c[a]);
      window.DotMetricsObjStress.onAjaxDataUpdate();
    }
  } catch (b) {}
}