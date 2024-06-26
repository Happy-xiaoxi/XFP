export function getKfPromptTime() {
    var busy_prompt_time = busy_prompt_time_list[obj_id];
    if (busy_prompt_time == '' || busy_prompt_time == undefined || busy_prompt_list[obj_id] == '' || busy_prompt_list[obj_id] == undefined) {
        busy_prompt_time = kf_auto_tip == '0' ? '1800' : kf_auto_tip;
    }
    return busy_prompt_time;
}
