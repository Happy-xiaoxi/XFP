  import { hit } from './hit.js'
  import { generateUid } from './generateUid.js';
  import { getCookie } from './getCookie.js';
  import { getInu} from './getInu.js';
  import { getUid} from './getUid.js';
  import { getWGL} from './getWGL.js';
  import { serialize} from './serialize.js';

  var d = document;
  var w = window;
  var nav = navigator;
  var sc = screen;
  var ua = nav.userAgent;


  hit()

  var url = w.location.href
  var count = 0
  var checkInterval = setInterval(function() {
    if (count >= 50) clearInterval(checkInterval)
    else if (url !== w.location.href) {
      hit(url)
      url = w.location.href
      count++
    }
  }, 1000)

