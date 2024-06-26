export function rB() {
  var t = [],
    e = [
      "__webdriver_evaluate",
      "__selenium_evaluate",
      "__webdriver_script_function",
      "__webdriver_script_func",
      "__webdriver_script_fn",
      "__fxdriver_evaluate",
      "__driver_unwrapped",
      "__webdriver_unwrapped",
      "__driver_evaluate",
      "__selenium_unwrapped",
      "__fxdriver_unwrapped",
    ],
    r = [
      "_phantom",
      "__nightmare",
      "_selenium",
      "callPhantom",
      "callSelenium",
      "_Selenium_IDE_Recorder",
    ];
  for (var n in r) {
    var i = r[n];
    window[i] && t.push({ key: "window", value: i });
  }
  for (var o in e)
    (r = e[o]),
      window.document[r] && t.push({ key: "window_document", value: r });
  for (var a in window.document)
    a.match(/\$[a-z]dc_/) &&
      window.document[a].cache_ &&
      t.push({ key: "document", value: a });
  return (
    window.external &&
      JSON.stringify(window.external) &&
      -1 != JSON.stringify(window.external).indexOf("Sequentum") &&
      t.push({ key: "window_external", value: 1 }),
    window.document.documentElement.getAttribute("selenium") &&
      t.push({ key: "document_selenium", value: 1 }),
    window.document.documentElement.getAttribute("webdriver") &&
      t.push({ key: "document_webdriver", value: 1 }),
    window.document.documentElement.getAttribute("driver") &&
      t.push({ key: "document_driver", value: 1 }),
    t
  );
}