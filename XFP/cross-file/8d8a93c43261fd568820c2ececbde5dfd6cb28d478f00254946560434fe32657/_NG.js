export function _NG() {
    var e = {};
    return (
      (e.i = this.ip),
      (e.u = EHTalon.CLC(this.ua2)),
      (e.f = EHTalon.hash(this.obj.f3 + e.ip)),
      (e.p = this.Cookie(e.f)),
      JSON.stringify(e)
    );
  }