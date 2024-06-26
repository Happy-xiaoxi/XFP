var m_clickLink = false;



export function to_kf(wid, is_online) {
    if (m_clickLink)
        return;
    m_clickLink = true;
    hiddenAutoLink();
    worker_ids = wid;
    if (is_online == 1) {
        sendLNK();
    } else {
        showLword();
    }
}
