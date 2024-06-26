export function parseTextToJSON(maybeJSON) {
    var response;
    try {
        response = JSON.parse(maybeJSON);
    } catch (error) {
        response = maybeJSON;
    }
    return response;
}
