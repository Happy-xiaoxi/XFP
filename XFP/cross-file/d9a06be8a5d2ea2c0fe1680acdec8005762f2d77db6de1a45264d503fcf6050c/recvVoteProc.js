


export function recvVoteProc(id6d, state) {
    if (kfpf == 0) {
        replayVote('4');
    } else if (vote_true) {
        replayVote('3');
    } else {
        showVote();
    }
}
