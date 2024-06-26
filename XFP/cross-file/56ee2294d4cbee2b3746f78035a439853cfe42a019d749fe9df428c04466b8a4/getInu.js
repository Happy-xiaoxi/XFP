var w = window;
export function getInu() {
    var key = 'st_uid'

    if (!w.localStorage) {
      return 1
    }

    if (!w.localStorage.getItem(key)) {
      return 1
    } else {
      return 0
    }
  }