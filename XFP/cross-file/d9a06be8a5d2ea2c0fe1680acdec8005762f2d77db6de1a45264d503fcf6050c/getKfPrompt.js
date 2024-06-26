export function getKfPrompt(type) {
    var prompt = '';
    var default_prompt = '';
    if (type == 'close_prompt') {
        prompt = close_prompt_list[obj_id];
        default_prompt = close_prompt;
    } else if (type == 'busy_prompt') {
        prompt = busy_prompt_list[obj_id];
        default_prompt = kf_auto_tip_phrase;
    }
    if (prompt == '' || prompt == undefined)
        return default_prompt.replace(/\\/g, '');
    return prompt.replace(/\\/g, '');
}
