var lnkover = 0;




export function showLword() {
    lnkover = 3;
    changeModule('lword');
    g_comm.QuitWait();
    g_comm.ShutDown(true);
    handleCustMsg('lword');
}
