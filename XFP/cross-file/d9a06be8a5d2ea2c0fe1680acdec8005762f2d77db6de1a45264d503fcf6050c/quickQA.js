export function quickQA(obj, cmd, type_id, question_id, wd) {
    var robid = 0;
    if (cmd == undefined) {
        cmd = 'GetHotList';
        type_id = 0;
        question_id = '';
        wd = '';
        if (robot_id != '') {
            robid = robot_id;
        }
    } else {
        robid = robot_id;
    }
    try {
        var senddata = 'cmd=' + cmd + '&company_id=' + company_id + '&robot_id=' + robid + '&type_id=' + type_id + '&question_id=' + question_id + '&wd=' + wd;
        var url = 'impl/zsk.php';
        var xmlhttp = createHttpRequest();
        xmlhttp.open('POST', url, false);
        xmlhttp.setRequestHeader('CONTENT-TYPE', 'application/x-www-form-urlencoded');
        xmlhttp.send(senddata);
        var dom = xmlhttp.responseXML;
        var rspNodes = XMLGetNodes(dom, 'Response');
        var rspNode = XMLGetNode(rspNodes, 0);
        if (rspNode != null) {
            var ecode = XMLGetNamedAttr(rspNode, 'ecode');
            var cmd = XMLGetNamedAttr(rspNode, 'cmd');
        } else {
            return;
        }
        if (ecode == 0) {
            switch (cmd) {
            case 'GetHotList':
                var hotArray = new Array();
                var datas = XMLGetNodes(rspNode, 'Data');
                var data = XMLGetNode(datas, 0);
                var rowList = XMLGetNodes(data, 'row');
                var nodeLength = XMLGetNodesLength(rowList);
                for (var i = 0; i < nodeLength; i++) {
                    var node = XMLGetNode(rowList, i);
                    var hot = new Object();
                    hot.id = XMLGetNamedAttr(node, 'id');
                    hot.question = XMLGetNamedAttr(node, 'question');
                    hotArray.push(hot);
                }
                showQuickList(obj, hotArray);
                break;
            case 'GetAnswer':
                setKfNoTalkVariable();
                setImKfNoTalkVariable();
                var answer = XMLGetNamedAttr(rspNode, 'answer');
                display_kf_msg(UBBCode(UBBEncode(answer.replace(/(\n)/g, '<br>'))));
                getClueByMsg(answer, 'w');
                break;
            default:
                break;
            }
        } else if (ecode == 1) {
            basic.toastOut(langs[46]);
        } else if (ecode == 2) {
            basic.toastOut(langs[47]);
        }
    } catch (e) {
    }
}
