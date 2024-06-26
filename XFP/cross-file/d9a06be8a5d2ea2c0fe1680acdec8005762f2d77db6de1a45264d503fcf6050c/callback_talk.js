var g_comm = null;
export function callback_talk() {
    g_comm.OnErr = errProc;
    g_comm.OnDebug = debugProc;
    g_comm.OnLinkOpen = linkOpenProc;
    g_comm.OnLinkClose = linkCloseProc;
    g_comm.OnTimeOverClose = timeOverCloseProc;
    g_comm.OnRecvTalkMsg = recvTalkMsgProc;
    g_comm.OnRecvCinfoMsg = recvCinfoMsgProc;
    g_comm.OnRecvReceiveMsg = recvReceiveMsgProc;
    g_comm.OnTyping = typingProc;
    g_comm.OnSetupTyping = setupTypingProc;
    g_comm.OnRecvFile = recvFileProc;
    g_comm.OnWaitCount = waitCountProc;
    g_comm.OnRecvRlk = recvRlkProc;
    g_comm.OnLnkFail = lnkFailProc;
    g_comm.OnQstFail = qstFailProc;
    g_comm.OnFilFail = filFailProc;
    g_comm.OnRecvVote = recvVoteProc;
    g_comm.OnRecvQst = recvQstProc;
    g_comm.OnRecvReqst = recvReqstProc;
    g_comm.OnRecvRemsg = recvRemsgProc;
    g_comm.OnRecvGuestmenu = recvGuestmenuProc;
    g_comm.OnTranslate = recvTranslateProc;
    g_comm.OnBCPKW = recvBCPKWProc;
}
