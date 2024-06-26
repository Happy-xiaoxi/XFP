var m_checkCodeType = 0;


export function checkCodeError() {
    if (m_checkCodeType == 2) {
        lyClick = false;
        basic.toastOut(langs[31]);
        $('#submit_lword').text(langs[6]).removeClass('loading');
    }
}
