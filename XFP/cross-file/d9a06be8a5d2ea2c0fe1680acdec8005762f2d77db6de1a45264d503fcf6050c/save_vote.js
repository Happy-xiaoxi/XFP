var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;



export function save_vote(notes) {
    if (vote_true) {
        display_sys_msg(langs[53]);
        return;
    }
    if (notes == undefined)
        notes = '';
    vote_true = true;
    if (myfirst_tempid == '')
        myfirst_tempid = mytempid;
    var url = 'vote_new.php?client=pc';
    var vote_value = getVoteValue();
    var senddata = 'company_id=' + company_id + '&id6d=' + obj_id + '&action=vote&vote=' + vote_value + '&temp_id=' + myfirst_tempid + '&style_id=' + style_id + '&notes=' + notes + '&guest_id=' + myid + '&device=1';
    $.post(url, senddata, function (data) {
        if (data.ecode == 0) {
            hiddenVoteIcon();
            display_sys_msg(langs[18]);
            replayVote('1', notes);
        }
    }, 'json').error(function () {
        vote_true = false;
        display_sys_msg(langs[54]);
    });
}
