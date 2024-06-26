




























export function UBBEncode(str) {
    str = str.replace(/<img[^>]*src=[\'\"\s]*[^\s\'\"]+img\/face\/([^\s\'\"]+)\/([^\s\'\".]+)[^>]*>/gi, function ($1, $2, $3) {
        var face_code = '{' + $2 + '#' + $3.split('_')[1] + '#}';
        return face_code;
    });
    str = str.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/gi, '[s:$1]');
    str = str.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/gi, function ($1, $2) {
        if ($2.substr(0, 2) == '//')
            return '[IMG]' + http_pro + $2.substr(2) + '[/IMG]';
        if ($2.indexOf('http://') == -1 && $2.indexOf('https://') == -1) {
            if ($2.indexOf(host) == -1) {
                return '[IMG]' + http_pro + host + $2 + '[/IMG]';
            }
        }
        return '[IMG]' + $2 + '[/IMG]';
    });
    var apattern = new RegExp(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/i);
    if (apattern.test(str) == true) {
        str = str.replace(/<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/gi, '[URL=' + '$1' + ']' + '$2' + '[/URL]');
        return UBBEncode(str);
    }
    var urlListWithA = [];
    var urlListWithoutA = [];
    var imgList = [];
    if (str.indexOf('[IMG') != -1 || str.indexOf('[img') != -1) {
        var imgpattern = /\[IMG\](https:\/\/|http:\/\/)?(.+?)\[\/IMG\]/gim;
        str = str.replace(imgpattern, function (img) {
            imgList.push(img);
            img = '[HZ6D_IMG_' + (imgList.length - 1) + ']';
            return img;
        });
    }
    if (str.indexOf('[URL') != -1 || str.indexOf('[url') != -1) {
        var pattern = /\[URL\=([^\]]*)\](.+?)\[\/URL\]/gim;
        str = str.replace(pattern, function (url) {
            urlListWithA.push(url);
            url = '[HZ6D_URL_WITH_A' + (urlListWithA.length - 1) + ']';
            return url;
        });
    }
    var re = /\[voice\].+\[\/voice\]/;
    if (!re.test(str)) {
        str = '!' + str;
        var pattern = /([^{\/])(((ftp|http|https):\/\/)?([\w-]+@[\w-]+\.)+(hk|com|cn|info|net|org|me|top|tw|tv|xyz|cc)([\/\?][\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)?)/gim;
        if (!pattern.test(str)) {
            var pattern = /([^{\/])(((ftp|http|https):\/\/)?([\w-]+\.)+(hk|com|cn|info|net|org|me|top|tw|tv|xyz|cc)([\/\?][\w!~;*'()&=\+\$%\-\/\#\?:\.,\|\^]*)?)/gim;
            str = str.replace(pattern, '$1[URL=$2]$2[/URL]');
        }
        str = str.replace('!', '');
    }
    if (str.indexOf('[URL') != -1 || str.indexOf('[url') != -1) {
        var pattern = /\[URL\=([^\]]*)\]([^\[]*)\[\/URL\]/gim;
        str = str.replace(pattern, function (url) {
            urlListWithoutA.push(url);
            url = '[HZ6D_URL_WITHOUT_A' + (urlListWithoutA.length - 1) + ']';
            return url;
        });
    }
    str = str.replace(/\[URL=www/gi, '[URL=' + http_pro + 'www');
    var reg = new RegExp(/[\d]+(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8})(?!\d)+/gi);
    if (!reg.test(str)) {
        str = str.replace(/[^\d]?(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8})(?!\d)+/gi, function (mobi) {
            var tmp1 = mobi.replace(/\D/gi, ''), tmp2 = mobi.replace(/\d/gi, '');
            mobi = tmp2 + '[MOBILE]' + tmp1 + '[/MOBILE]';
            return mobi;
        });
    }
    var reg1 = new RegExp(/[\d]+(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])[\s]\d{4}[\s]\d{4})(?!\d)+/gi);
    if (!reg1.test(str)) {
        str = str.replace(/[^\d]?(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])[\s]\d{4}[\s]\d{4})(?!\d)+/gi, function (mobi) {
            var tmp1 = mobi.replace(/\D/gi, ''), tmp2 = mobi.replace(/\d/gi, '');
            mobi = tmp2 + '[MOBILE]' + tmp1 + '[/MOBILE]';
            return mobi;
        });
    }
    var reg2 = new RegExp(/[\d]+0(\d{2,3}-?\d{7,8})(?!\d)+/gi);
    if (!reg2.test(str)) {
        str = str.replace(/([^\d])?(0(\d{2,3}-?\d{7,8}))(?!\d)+/gi, function ($1, $2, $3) {
            var tmp = $1.replace($3, '');
            var phone = tmp + '[PHONE]' + $3 + '[/PHONE]';
            return phone;
        });
    }
    if (urlListWithA.length > 0) {
        var i = 0;
        str = str.replace(/(\[HZ6D_URL_WITH_A)(\d)+(\])/gi, function (url) {
            url = urlListWithA[i];
            i++;
            return url;
        });
    }
    if (urlListWithoutA.length > 0) {
        var i = 0;
        str = str.replace(/(\[HZ6D_URL_WITHOUT_A)(\d)+(\])/gi, function (url) {
            url = urlListWithoutA[i];
            i++;
            return url;
        });
    }
    if (imgList.length > 0) {
        var i = 0;
        str = str.replace(/(\[HZ6D_IMG_)(\d)+(\])/gi, function (img) {
            img = imgList[i];
            i++;
            return img;
        });
    }
    str = str.replace(/((\w-*\.*)+@(\w-?)+(\.\w{2,})+)/gi, '[EMAIL]$1[/EMAIL]');
    return str;
}
