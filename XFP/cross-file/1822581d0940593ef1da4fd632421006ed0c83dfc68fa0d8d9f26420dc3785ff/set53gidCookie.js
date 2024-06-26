;
;
export function set53gidCookie(key, value, expire) {
    $53.setCookie(key, value, { 'expires': expire });
    switch (key) {
    case '53gid2':
        $53.setCookie('visitor_type', 'new');
        break;
    case '53gid0':
        $53.data('is_uv', 1);
        break;
    case '53gid1':
        $53.data('is_rv', 1);
        break;
    }
}