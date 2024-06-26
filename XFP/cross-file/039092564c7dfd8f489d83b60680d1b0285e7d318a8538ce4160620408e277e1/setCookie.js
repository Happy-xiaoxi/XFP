    
export function setCookie(d, key, value, maxAge = 31536000) {
        d.cookie = "_au_" + key + "=" + encodeURIComponent(value) + "; domain=" + extractDomain(d.location.hostname) + "; secure; samesite=none; path=/; max-age=" + maxAge;
    }
    