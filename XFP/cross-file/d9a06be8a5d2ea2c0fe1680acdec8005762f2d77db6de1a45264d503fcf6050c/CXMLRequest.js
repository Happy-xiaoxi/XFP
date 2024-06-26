
export function CXMLRequest(tag, client) {
    this.m_tag = tag;
    this.m_client = client;
    this.m_url = '';
    this.m_postData = '';
    this.m_isSubmit = false;
    this.m_xmlHttp = null;
    this.m_retryNum = 1;
    if (typeof CXMLRequest._initialized == 'undefined') {
        var myProto = CXMLRequest.prototype;
        myProto.CreateAjax = function () {
            var me = this;
            if (window.XMLHttpRequest) {
                this.m_xmlHttp = new XMLHttpRequest();
            } else {
                this.m_xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            this.m_xmlHttp.onreadystatechange = function () {
                me.AjaxHandler();
            };
        };
        myProto.AjaxHandler = function () {
            var me = this;
            if (4 == this.m_xmlHttp.readyState) {
                if (200 == this.m_xmlHttp.status) {
                    this.m_client.RequestHandler(me);
                    this.m_xmlHttp = null;
                    me = null;
                } else {
                    var cmdArray = [
                        'LNK',
                        'REG',
                        'QST',
                        'FIL',
                        'SRV',
                        'NAM',
                        'NTS',
                        'TIP',
                        'STE',
                        'ITK',
                        'IFIL',
                        'GET',
                        'ULN'
                    ];
                    if (/cmd=([^&]+)/.test(this.m_postData) && cmdArray.indexOf(RegExp.$1) >= 0) {
                        if (this.m_retryNum > 0) {
                            this.m_retryNum--;
                            this.Repost();
                        } else {
                            this.m_client.RequestHandler(me);
                        }
                    }
                }
            }
        };
        myProto.SendReq = function (cmd) {
            if (location.href.indexOf('webCompany_bg.php?') > -1)
                this.AddPostData('rnd', page_rnd);
            if (!this.m_isSubmit) {
                this.m_xmlHttp.open('POST', this.m_url, true);
                this.m_xmlHttp.setRequestHeader('CONTENT-TYPE', 'application/x-www-form-urlencoded');
                this.m_xmlHttp.send(this.m_postData);
                this.m_isSubmit = true;
            }
        };
        myProto.SetURL = function (URL) {
            if ('' == this.m_url) {
                this.m_url = URL + '?_=' + new Date().getTime();
            }
        };
        myProto.AddPostData = function (name, value) {
            this.m_postData += name + '=' + value + '&';
        };
        myProto.SetPostData = function (value) {
            this.m_postData = value;
        };
        myProto.GetPostData = function (value) {
            return this.m_postData;
        };
        myProto.GetTag = function () {
            return this.m_tag;
        };
        myProto.GetXmlHttp = function () {
            return this.m_xmlHttp;
        };
        myProto.Repost = function () {
            this.m_isSubmit = false;
            this.CreateAjax();
            this.SendReq();
        };
        CXMLRequest._initialized = true;
    }
    this.CreateAjax();
}
