;
;
export function smoothMove(start, end) {
    var step = Math.abs(end - start);
    var forword = end - start;
    if (step > 2) {
        step = Math.ceil(step * 0.2) * (forword / Math.abs(forword));
    } else {
        step = step * (forword / Math.abs(forword));
    }
    posi = start + step;
    if (step > 0) {
        if (posi > end)
            posi = end;
    } else {
        if (posi < end)
            posi = end;
    }
    return posi;
}