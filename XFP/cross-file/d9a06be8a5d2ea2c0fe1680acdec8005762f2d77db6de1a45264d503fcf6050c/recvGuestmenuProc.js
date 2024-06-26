export function recvGuestmenuProc(title, ids, mustids, msgid, button) {
    try {
        showVisitorForm(title, ids, mustids, 'formid_' + msgid, button);
        clearTimeout(carousel_id);
    } catch (e) {
    }
}
