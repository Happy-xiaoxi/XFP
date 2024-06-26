export function CXMLGETRequest(tag, client) {
    var me = this;
    var m_tag = tag;
    var m_client = client;
    var m_url = '';
    var m_postData = '';
    var m_isSubmit = false;
    this.SendReq = function () {
        if (!m_isSubmit) {
            try {
                $.getJSON(m_url + '?' + m_postData + 'jsoncallback=?', function (xmlStr) {
                    var xml = me.loadXML(xmlStr);
                    m_client.GETRequestHandler(me, xml);
                });
            } catch (e) {
            }
            m_isSubmit = true;
        }
    };
    this.loadXML = function (xmlStr) {
        var xmlDom = null;
        if (window.ActiveXObject) {
            xmlDom = new ActiveXObject('Microsoft.XMLDOM');
            xmlDom.async = false;
            xmlDom.loadXML(xmlStr);
        } else {
            xmlDom = new DOMParser().parseFromString(xmlStr, 'text/xml');
        }
        return xmlDom;
    };
    this.SetURL = function (URL) {
        if ('' == m_url) {
            m_url = URL;
        }
    };
    this.AddPostData = function (name, value) {
        m_postData += name + '=' + value + '&';
    };
    this.SetPostData = function (value) {
        m_postData = value;
    };
    this.GetPostData = function (value) {
        return m_postData;
    };
    this.GetTag = function () {
        return m_tag;
    };
}
