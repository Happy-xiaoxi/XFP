
import {scriptSrcToElement} from './scripts-rct-oe-lement.js'
export function setupHadron(w, d, au1d) {
    if ((w.hadron || { loaded: false }).loaded === true) {
        const hadronId = w.hadron.id;
        const imgSrc = 'https://ids.ad.gt/api/v1/halo_match?id=' + au1d + '&halo_id=' + hadronId;
        const img = imgSrcToElement(imgSrc, d);
        d.body.appendChild(img);
        return hadronId;
    } else {
        scriptSrcToElement(w, d, 'script', 'https://cdn.hadronid.net/hadron.js?partner_id=458&sync=1&url=' + encodeURIComponent(w.location.href));
        return null;
    }
}
