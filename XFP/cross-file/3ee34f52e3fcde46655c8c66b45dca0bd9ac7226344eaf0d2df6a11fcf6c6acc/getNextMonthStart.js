export function getNextMonthStart(t) {
    for (var e = t || new Date(), i = e.getMonth(); i == e.getMonth();) {
        0;
        e.setDate(e.getDate() + 1);
    }
    return hstc.utils.clearTimePart(e);
}
