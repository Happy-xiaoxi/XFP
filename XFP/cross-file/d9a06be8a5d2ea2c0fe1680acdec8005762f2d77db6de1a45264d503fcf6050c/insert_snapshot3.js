import {snapshot_fun} from './snapshot_fun.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;

























export function insert_snapshot3(host, rand_num, type) {
    if ($('.line-up').css('display') == 'block')
        return;
    if (window.ActiveXObject || 'ActiveXObject' in window) {
        if (document.getElementById('plugin_snapshot').innerHTML) {
            snapshot_fun(type);
        } else {
            var plusCheck = false;
            try {
                new ActiveXObject('KFIESNAPSHOT.KfIESnapshotCtrl.1');
                plusCheck = true;
            } catch (e) {
                var new_window_left = (window.screen.width - 800) / 2;
                window.open('/download/snapshot_show.php', 'newwindow', 'height=' + window.screen.availHeight + ', width=800, top=0, left=' + new_window_left + ', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
                return;
            }
            snapshot_host = host;
            snapshot_rand_num = rand_num;
            if (plusCheck) {
                var ss = '';
                ss += '<object id="snapShot_obj" name="snapShot_obj" classid="clsid:4CC32CB3-E6D8-4042-8A69-5C7783B977D0" codebase="http://' + host + '/download/KFIESnapShot_v1.1.exe#version=1,0,0,2"></object>';
                document.getElementById('plugin_snapshot').innerHTML = ss;
                setTimeout(snapshot_fun(type), 500);
            }
        }
        return;
    }
    if (navigator.userAgent.indexOf('Chrome') != -1) {
        if (navigator.userAgent.indexOf('TheWorld') != -1 || navigator.userAgent.indexOf('Edge') != -1 || navigator.userAgent.indexOf('MetaSr') != -1 || navigator.userAgent.indexOf('BIDUBrowser') != -1 || navigator.userAgent.indexOf('QQBrowser') != -1) {
            var new_window_left = (window.screen.width - 800) / 2;
            var new_window_height = window.screen.availHeight - 80;
            window.open('/download/snapshot_show.php?browser=other', 'newwindow', 'height=' + new_window_height + ', width=800, top=0, left=' + new_window_left + ', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
            return;
        }
        var mimeTypes = navigator.mimeTypes;
        for (var mt in mimeTypes) {
            if (mimeTypes[mt]['type'] == 'application/vnd.chromium.remoting-viewer') {
                var new_window_left = (window.screen.width - 800) / 2;
                var new_window_height = window.screen.availHeight - 80;
                window.open('/download/snapshot_show.php?browser=other', 'newwindow', 'height=' + new_window_height + ', width=800, top=0, left=' + new_window_left + ', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
                return;
            }
        }
        var chrome_version = navigator.userAgent.substr(navigator.userAgent.indexOf('Chrome') + 7, 2);
        if (chrome_version >= 45) {
            var CrxEventFlag = 'myKfCapturteCustomEvent';
            var objFlag = document.getElementById(CrxEventFlag);
            if (objFlag === null) {
                window.open('/download/snapshot_show.php?browser=other', 'newwindow', 'height=' + new_window_height + ', width=800, top=0, left=' + new_window_left + ', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
                return;
            }
            if (!chrome_event_bind) {
                snapshot_host = host;
                document.addEventListener('CaptureEventCallBack', function (evt) {
                    var _aoResult = evt.detail;
                    ocx_callback(_aoResult.state, _aoResult.fpath, _aoResult.fname);
                });
                chrome_event_bind = true;
            }
            if (type == 'hide') {
                try {
                    top.postMessage('53kf_min_window', '*');
                } catch (e) {
                }
            }
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent('myKfCapturteCustomEvent', true, false, '{"host":"' + host + '","id6d":"' + rand_num + '"}');
            document.dispatchEvent(evt);
        } else {
            if (document.getElementById('plugin_snapshot').innerHTML) {
                try {
                    snapshot_fun(type);
                    ocx_callback(snapShot_obj.state, snapShot_obj.fpath, snapShot_obj.fname);
                } catch (e) {
                    alert(e);
                }
            } else {
                var ss = '';
                ss += '<embed id="snapShot_obj" type="application/snapshot-plugin" width=0 height=0></embed>';
                document.getElementById('plugin_snapshot').style.display = 'block';
                document.getElementById('plugin_snapshot').innerHTML = ss;
                snapshot_host = host;
                snapshot_rand_num = rand_num;
                try {
                    snapshot_fun(type);
                    ocx_callback(snapShot_obj.state, snapShot_obj.fpath, snapShot_obj.fname);
                } catch (e) {
                    var new_window_left = (window.screen.width - 800) / 2;
                    var new_window_height = window.screen.availHeight - 80;
                    window.open('/download/snapshot_show.php?browser=other', 'newwindow', 'height=' + new_window_height + ', width=800, top=0, left=' + new_window_left + ', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
                }
            }
        }
        return;
    }
    var new_window_left = (window.screen.width - 800) / 2;
    var new_window_height = window.screen.availHeight - 80;
    window.open('/download/snapshot_show.php?browser=other', 'newwindow', 'height=' + new_window_height + ', width=800, top=0, left=' + new_window_left + ', menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
}