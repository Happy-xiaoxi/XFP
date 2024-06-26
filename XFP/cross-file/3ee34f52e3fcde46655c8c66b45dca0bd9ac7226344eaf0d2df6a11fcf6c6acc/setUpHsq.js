

export function setUpHsq(t) {
    var e = this.context.getWindow(), i = e[hstc.tracking.Runner.hsqParam] = e[hstc.tracking.Runner.hsqParam] || [];
    hstc.utils.isArray(i) || (i = e[hstc.tracking.Runner.hsqParam] = []);
    i.push = t;
}
