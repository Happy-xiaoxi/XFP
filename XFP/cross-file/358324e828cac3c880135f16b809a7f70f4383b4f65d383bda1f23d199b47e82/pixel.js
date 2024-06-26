export function pixel(url, data) {
    new Image().src = url + '?' + advcake_helper.queryBuilder(data);
}
