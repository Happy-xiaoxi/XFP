export function queryBuilder(data) {
    var query = [];
    for (var key in data) {
        query.push(key + '=' + data[key]);
    }
    return query.join('&');
}
