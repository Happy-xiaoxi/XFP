export function getCookie(d, key) {
        let fkey = "_au_" + key + "=";
        let decodedCookie = decodeURIComponent(d.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(fkey) == 0) {
                return c.substring(fkey.length, c.length);
            }
        }
        console.log("cookie get");
        return null;
    }