

export function getNextWeekStart(t) {
    var e = t || new Date(), i = e.getDay(), n = e.getDate() + (0 == i ? 7 : 7 - i);
    return hstc.utils.clearTimePart(new Date(e.setDate(n)));
}
