var task_robot_obj = new Object();
var m_robid = '';
var robotTimeOut = new RobotTimeOut();
var robot_nlp_obj = new Object();
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;





export function createTaskRobot() {
    robot_client.init();
    task_robot_obj = new taskRobot();
    var robot_info = robotList[m_robid];
    if (nlp_robot_use != 1)
        robotTimeOut.init(robot_info.robot_time);
    robotTimeOut.initTaskRobot(task_robot_obj);
    robotTimeOut.show = function (content) {
        msg = robotMsgReplace(content);
        if (msg != '') {
            display_robot_answer(0, HtmlDecode(msg), '');
            playSound();
        }
        getClueByMsg(msg, 'w');
        qstRobotMsg(msg, 'p');
        try {
            robot_unshow_msg--;
            removeRobotLoad();
        } catch (e) {
        }
    };
    robotTimeOut.isHasAttr = function (attribute) {
        if (attribute == 'wechat')
            return is_wechat;
        else if (attribute == 'mobile')
            return is_mobile;
    };
    robotTimeOut.setAttr = function (attribute) {
        if (attribute == 'wechat')
            is_wechat = 1;
        else if (attribute == 'mobile')
            is_mobile = 1;
    };
    robotTimeOut.startTimeoutTimer = function () {
        try {
            showRobotLoad();
            robot_unshow_msg++;
        } catch (e) {
        }
    };
    robotTimeOut.clearTimeoutTimer = function () {
        try {
            robot_unshow_msg--;
            removeRobotLoad();
        } catch (e) {
        }
    };
    task_robot_obj.kfShow = function (msg, now_task, show_index, index_times, prompt_guide_size, hots) {
        msg = robotMsgReplace(msg);
        var hots_info = '';
        if (hots != undefined && hots != '') {
            hots_info = new Array();
            var hot = new Object();
            for (var i = 0; i < hots.length; i++) {
                if (taskHotsInfo[hots[i]] != undefined) {
                    hot = taskHotsInfo[hots[i]];
                    hot.id = hots[i];
                    hots_info.push(hot);
                }
            }
        }
        if (msg != '') {
            display_robot_answer(0, setupFilter(HtmlDecode(msg)), '', hots_info);
            playSound();
        }
        var task_zsk_id = 0;
        var index = 0;
        var times = 0;
        if (typeof now_task.id != 'undefined') {
            task_zsk_id = now_task.id;
            index = show_index;
            times = index_times;
        }
        guide_size = prompt_guide_size == undefined ? -1 : prompt_guide_size;
        getClueByMsg(msg, 'w');
        if (msg != '') {
            qstRobotMsg(setupFilter(msg), 'p', task_zsk_id, index, times, guide_size);
        }
        if (show_index == 0)
            robotTimeOut.handle();
    };
    task_robot_obj.historyShow = function (msg, hots) {
        var hots_info = '';
        if (hots != undefined && hots != '') {
            hots_info = new Array();
            var hot = new Object();
            for (var i = 0; i < hots.length; i++) {
                if (taskHotsInfo[hots[i]] != undefined) {
                    hot = taskHotsInfo[hots[i]];
                    hot.id = hots[i];
                    hots_info.push(hot);
                }
            }
        }
        msg = UBBCode(msg);
        msg = msg.replace(/(<br>)/g, '<br>');
        msg = msg.replace(/\[voice\](.*?)\[\/voice\]/g, '''''');
        display_robot_answer(0, msg, '', hots_info);
    };
    task_robot_obj.sendGetKw = function () {
        robot_client.sendGetKw();
    };
    task_robot_obj.connectKf = function () {
        offToTalk('robot');
    };
    task_robot_obj.endTask = function () {
        task_robot_use = 0;
        robotTimeOut.closeTRTimeOut();
        try {
            removeRobotLoad();
        } catch (e) {
        }
    };
    task_robot_obj.addLoading = function () {
        try {
            showRobotLoad();
            robot_unshow_msg++;
        } catch (e) {
        }
    };
    task_robot_obj.removeLoading = function () {
        try {
            robot_unshow_msg--;
            removeRobotLoad();
        } catch (e) {
        }
    };
    task_robot_obj.showOption = function (options) {
        showTaskOption(options);
    };
    task_robot_obj.showList = function (lists) {
        showTaskList(lists);
    };
    task_robot_obj.showForm = function (forms, submit_text, success_text, fail_text, overtime) {
        showTaskForm(forms, submit_text, success_text, fail_text, overtime);
    };
    task_robot_obj.callbackUnMatch = function (options) {
        if (zsk_zdzrg == '1') {
            robot_cannot_answer_times += 1;
            if (robot_cannot_answer_times == zsk_unret_times) {
                offToTalk('robot');
                robot_cannot_answer_times = 0;
            }
        }
    };
    task_robot_obj.handleMatchWX = function (msg) {
        is_wechat = true;
        var data_new = {
            mobile: '',
            phone: '',
            email: '',
            qq: '',
            wechat: ''
        };
        var msg = msg.replace(/\[URL=.*?]/g, '').replace(/\[IMG\](.*?)\[\/IMG\]/g, '');
        data_new.wechat = msgInfoFilter(msg, 'wechat');
        saveRobotClue(data_new);
    };
    robot_nlp_obj = new robotNlp();
    var is_task_use = task_robot_use;
    if (nlp_robot_use == 1 && task_robot_use == 1) {
        robot_nlp_obj.msgShow = function (msg, task_zsk_id, index) {
            msg = robotMsgReplace(msg);
            if (msg != '') {
                display_robot_answer(0, setupFilter(HtmlDecode(msg)), '');
                playSound();
            }
            getClueByMsg(msg, 'w');
            qstRobotMsg(setupFilter(msg), 'p', task_zsk_id, index, 0, 0);
        };
        robot_nlp_obj.addLoading = function () {
            try {
                showRobotLoad();
                robot_unshow_msg++;
            } catch (e) {
            }
        };
        robot_nlp_obj.removeLoading = function () {
            try {
                robot_unshow_msg--;
                removeRobotLoad();
            } catch (e) {
            }
        };
        is_task_use = 0;
        robot_nlp_obj.init(m_robid, talk_robot_info);
    }
    task_robot_obj.init(company_id, task_robot_info, is_task_use, talk_robot_info, '', robot_prompt_guide, landpage, keyword, task_type, talkpage, search_engine, guide_type, false);
}
