export function GetPostDataValue(postData, position) {
    return getStringField(getStringField(postData, '&', position), '=', 2);
}
