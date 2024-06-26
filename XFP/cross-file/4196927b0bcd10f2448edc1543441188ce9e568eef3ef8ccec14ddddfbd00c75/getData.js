import {getCookie} from './getCookie.js';

export function getData(D) {
  let data = {};
  data.abtest = getCookie("_tracker_ab") || "";
  if (window._tracker_) {
    for (let i in window._tracker_) {
      const C = window._tracker_[i][0];
      const B = window._tracker_[i][1];
      if (a.indexOf(C) === -1) {
        const G = C.length;
        if (G > 2 && G < 25) {
          data[C] = B;
        }
      }
    }
  }
  if (window.ilog) {
    for (let k2 in window.ilog) {
      if (a.indexOf(k2) === -1) {
        data[k2] = window.ilog[k2];
      }
    }
  }
  if (window.log.e_d) {
    for (let i in window.log.e_d) {
      const I = i;
      const H = window.log.e_d[i];
      if (a.indexOf(I) === -1) {
        const E = I.length;
        if (E > 2 && E < 25) {
          data[I] = H;
        }
      }
    }
  }
  if (D) {
    let tdata = helper.getTrackerDataFrom(D);
    if (tdata) {
      try {
        for (let te in tdata) {
          data[te] = tdata[te];
        }
      } catch (F) {}
    }
    if (!data.text) {
      try {
        data.text = D.childNodes[0].nodeValue.trim();
      } catch (F) {
        data.text = D.innerText.split("\n")[0].trim();
      }
      if (data.text) {
        if (data.text.length > 30) {
          data.text = "";
        }
      }
    }
    if (!data.product_id) {
      try {
        data.product_id = 0;
        let li = D;
        for (let i = 0; i < 8; i++) {
          if (li.tagName === "LI") {
            break;
          } else {
            li = li.parentElement;
          }
        }
        if (li.tagName === "LI") {
          let tdata2 = helper.getTrackerDataFrom(li);
          if (tdata2) {
            try {
              for (let te2 in tdata2) {
                data[te2] = tdata2[te2];
              }
            } catch (F) {}
          }
        }
      } catch (F) {
        data.product_id = -1;
      }
    }
  }
  return data;
}