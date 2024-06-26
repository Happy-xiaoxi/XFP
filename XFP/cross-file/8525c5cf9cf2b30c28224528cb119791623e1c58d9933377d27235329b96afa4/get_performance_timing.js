export function get_performance_timing(b) {
  var t, timing;
  var data = {};
  function subtract(val1, val2) {
    var difference = 0;
    if (val1 > val2) {
      difference = val1 - val2;
    }
    return difference;
  }
  try {
    timing = localStorage.getItem("tealium_timing");
    t = window.performance.timing;
    if (
      timing !== null &&
      timing !== "{}" &&
      typeof b !== "undefined" &&
      u.performance_timing_count === 0
    ) {
      utag.ut.merge(b, utag.ut.flatten({ timing: JSON.parse(timing) }), 1);
    }
  } catch (e) {
    utag.DB(e);
    return;
  }
  u.performance_timing_count++;
  for (var k in t) {
    if (
      (k.indexOf("dom") === 0 || k.indexOf("load") === 0) &&
      t[k] === 0 &&
      u.performance_timing_count < 20
    ) {
      setTimeout(u.get_performance_timing, 1000);
    }
  }
  data["domain"] = location.hostname + "";
  data["pathname"] = location.pathname + "";
  data["query_string"] = ("" + location.search).substring(1);
  data["timestamp"] = new Date().getTime();
  data["dns"] = subtract(t.domainLookupEnd, t.domainLookupStart);
  data["connect"] = subtract(t.connectEnd, t.connectStart);
  data["response"] = subtract(t.responseEnd, t.responseStart);
  data["dom_loading_to_interactive"] = subtract(
    t.domInteractive,
    t.domLoading
  );
  data["dom_interactive_to_complete"] = subtract(
    t.domComplete,
    t.domInteractive
  );
  data["load"] = subtract(t.loadEventEnd, t.loadEventStart);
  data["time_to_first_byte"] = subtract(t.responseStart, t.connectEnd);
  data["front_end"] = subtract(t.loadEventStart, t.responseEnd);
  data["fetch_to_response"] = subtract(t.responseStart, t.fetchStart);
  data["fetch_to_complete"] = subtract(t.domComplete, t.fetchStart);
  data["fetch_to_interactive"] = subtract(t.domInteractive, t.fetchStart);
  try {
    localStorage.setItem("tealium_timing", JSON.stringify(data));
  } catch (e) {
    utag.DB(e);
  }
}