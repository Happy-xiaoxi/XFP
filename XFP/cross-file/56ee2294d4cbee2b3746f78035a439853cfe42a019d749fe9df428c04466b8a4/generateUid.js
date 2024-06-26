export function generateUid() {
    var uid = ''

    for (var i = 0; i < 8; i++) {
      uid =
        uid +
        Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
    }

    return uid
  }