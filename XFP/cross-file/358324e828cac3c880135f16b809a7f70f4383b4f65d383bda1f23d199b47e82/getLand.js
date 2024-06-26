export function getLand(encode) {
    encode = encode || true;
    return encode ? encodeURIComponent(location.href) : location.href;
}
