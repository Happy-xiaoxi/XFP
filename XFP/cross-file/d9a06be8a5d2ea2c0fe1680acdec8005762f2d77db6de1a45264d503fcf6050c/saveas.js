var lnkover = 0;
export function saveas() {
    if (lnkover == 1 || lnkover == 2 || lnkover == 4) {
        if (myfirst_tempid == '')
            myfirst_tempid = mytempid;
        try {
            var time = new Date();
            var filename = time.toLocaleDateString();
            filename = filename + ' ' + cname + '.htm';
            if (browserType == 'IE') {
                var a = document.createElement('a');
                a.href = http_pro + host + '/impl/rpc_download_html.php?company_id=' + company_id + '&tempid=' + myfirst_tempid + '&style_id=' + style_id + '&company_tpl=' + company_tpl + '&lang=' + language + '&saverec_code=' + saverec_code + '&filename=' + UrlEncode(filename) + '&gid=' + myid + '&guest_id=' + guest_id;
                a.target = '_blank';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                var winSave = window.open(http_pro + host + '/impl/rpc_download_html.php?company_id=' + company_id + '&tempid=' + myfirst_tempid + '&style_id=' + style_id + '&company_tpl=' + company_tpl + '&lang=' + language + '&saverec_code=' + saverec_code + '&filename=' + UrlEncode(filename) + '&gid=' + myid + '&guest_id=' + guest_id, '_blank', 'top=10000');
            }
        } catch (e) {
        }
    }
}
