export function getUid() {
    var gUid = 0
    var gCnt = 30
    var key = 'st_uid'
    if (!gUid) {
      gUid = (w.localStorage && w.localStorage.getItem(key)) || getCookie(key)
      if (!gUid) {
        gUid = generateUid()
        w.localStorage && w.localStorage.setItem(key, gUid)
        d.cookie = key + '=' + gUid + '; path=/; max-age=259200'
      }
    }
    try {
      if (cookieStore) {
        cookieStore.addEventListener('change', function(event) {
          if (
            ((event.changed &&
              event.changed.some(function(c) {
                return c.name === key
              })) ||
              (event.deleted &&
                event.deleted.some(function(c) {
                  return c.name === key
                }))) &&
            getCookie(key) !== gUid &&
            gCnt
          ) {
            w.localStorage && w.localStorage.setItem(key, gUid)
            d.cookie = key + '=' + gUid + '; path=/; max-age=259200'
            --gCnt
          }
        })
      }
    } catch (error) {}

    return gUid
  }