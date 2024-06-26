
export function clearTimePart(t) {
    t.setHours(0);
    t.setMinutes(0);
    t.setSeconds(0);
    t.setMilliseconds(0);
    return t;
}
