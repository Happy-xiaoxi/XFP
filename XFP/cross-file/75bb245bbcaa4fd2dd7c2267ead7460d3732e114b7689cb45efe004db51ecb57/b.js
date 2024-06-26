export function b() {
  var a = navigator.userAgent.toLowerCase(),
    b = {
      safari: /safari/gi.test(a) && !/chrome/.test(a),
      winphone: /windows phone/gi.test(a),
    };
  return (
    (b.version = b.safari
      ? (a.match(/.+?(?:on|ri)[\/: ]([\d.]+)/) || [])[1]
      : (a.match(/.+(?:ox|me|ra|ie|opr)[\/: ]([\d.]+)/) || [])[1]),
    b
  );
}