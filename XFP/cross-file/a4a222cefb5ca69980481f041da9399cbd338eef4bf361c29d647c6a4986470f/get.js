export function get() {
  var ua = navigator.userAgent.toLowerCase();
  var keys = [];
  var navLang = navigator.language || navigator.browserLanguage;
  var navLangArr = navLang.split("-");
  if (typeof navLangArr[0] == "undefined") {
    navLang = navLang;
  } else {
    navLang = navLangArr[0];
  }
  keys.push((this.indexProperties ? "a:" : "") + navLang);
  keys.push((this.indexProperties ? "b:" : "") + screen.colorDepth);
  keys.push(
    (this.indexProperties ? "c:" : "") + new Date().getTimezoneOffset()
  );
  keys.push((this.indexProperties ? "d:" : "") + this.hasSessionStorage());
  if (ua.indexOf("android") == -1) {
    keys.push((this.indexProperties ? "e:" : "") + this.hasLocalStorage());
  }
  if (navigator.platform != "iPhone" && navigator.platform != "iPad") {
    var hasDb;
    try {
      hasDb = !!window.indexedDB;
    } catch (e) {
      hasDb = true;
    }
    keys.push((this.indexProperties ? "f:" : "") + hasDb);
  }
  if (document.body) {
    keys.push(
      (this.indexProperties ? "g:" : "") + typeof document.body.addBehavior
    );
  } else {
    keys.push((this.indexProperties ? "g:" : "") + typeof undefined);
  }
  if (ua.indexOf("android") == -1) {
    keys.push((this.indexProperties ? "h:" : "") + typeof window.openDatabase);
  }
  keys.push((this.indexProperties ? "i:" : "") + navigator.cpuClass);
  keys.push((this.indexProperties ? "j:" : "") + navigator.platform);
  if (this.hasher) {
    return this.hasher(keys.join("###"), 31);
  } else {
    return this.murmurhash3_32_gc(keys.join("###"), 31);
  }
}