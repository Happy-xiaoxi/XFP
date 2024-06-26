  export function getVersionPrecision(version) {
    return version.split(".").length;
  }
  export function map(arr, iterator) {
    var result = [],
      i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }
  export function compareVersions(versions) {
    var precision = Math.max(
      getVersionPrecision(versions[0]),
      getVersionPrecision(versions[1])
    );
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);
      version = version + new Array(delta + 1).join(".0");
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });
    while (--precision >= 0) {
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      } else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          return 0;
        }
      } else {
        return -1;
      }
    }
  }