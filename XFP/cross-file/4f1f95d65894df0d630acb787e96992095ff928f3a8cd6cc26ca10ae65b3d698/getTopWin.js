export function getTopWin() {
    var a = window;
    try {
        for (; a.parent !== a && a.parent.document;)
            a = a.parent;
    } catch (b) {
    }
    return a;
}
