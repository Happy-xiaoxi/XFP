var MauticJS = MauticJS || {};










export function makeCORSRequest(method, url, data, callbackSuccess, callbackError) {
    data = MauticJS.appendTrackedContact(data);
    var query = MauticJS.serialize(data);
    if (method.toUpperCase() === 'GET') {
        url = url + '?' + query;
        var query = '';
    }
    var xhr = MauticJS.createCORSRequest(method, url);
    var response;
    callbackSuccess = callbackSuccess || function (response, xhr) {
    };
    callbackError = callbackError || function (response, xhr) {
    };
    if (!xhr) {
        MauticJS.log('MauticJS.debug: Could not create an XMLHttpRequest instance.');
        return false;
    }
    if (!MauticJS.CORSRequestsAllowed) {
        callbackError({}, xhr);
        return false;
    }
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === xhr.DONE || xhr.readyState === 4) {
            response = MauticJS.parseTextToJSON(xhr.responseText);
            if (xhr.status === 200) {
                callbackSuccess(response, xhr);
            } else {
                callbackError(response, xhr);
                if (xhr.status === XMLHttpRequest.UNSENT) {
                    MauticJS.CORSRequestsAllowed = false;
                }
            }
        }
    };
    if (typeof xhr.setRequestHeader !== 'undefined') {
        if (method.toUpperCase() === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.withCredentials = true;
    }
    xhr.send(query);
}
