function scriptSrcToElement(w, d, t, u) {
    var a = d.createElement(t);
    a.async = true;
    a.crossorigin = 'anonymous';
    a.src = u;
    var s = d.getElementsByTagName(t)[0];
    s.parentNode.insertBefore(a, s);
}

export function setupHadron(w, d, au1d) {
        if ((w.hadron || { loaded: false }).loaded === true) {
            const hadronId = w.hadron.id;
            const imgSrc = 'https://ids.ad.gt/api/v1/halo_match?id=' + au1d + '&halo_id=' + hadronId;
            const img = imgSrcToElement(imgSrc, d);
            d.body.appendChild(img);
            return hadronId;
        } else {
            scriptSrcToElement(w, d, 'script', 'https://cdn.hadronid.net/hadron.js?partner_id=95&sync=1&url=' + encodeURIComponent(w.location.href));
            return null;
        }
    }