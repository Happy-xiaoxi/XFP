
export function preventDefault(t) {
    t.preventDefault ? t.preventDefault() : t.returnValue = !1;
}
