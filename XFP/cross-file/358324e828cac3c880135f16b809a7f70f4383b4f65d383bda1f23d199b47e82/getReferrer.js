export function getReferrer(encode) {
    encode = encode || true;
    return encode ? encodeURIComponent(document.referrer) : document.referrer;
}
