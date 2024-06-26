export function M(e) {
  if (
    /iPod|iPhone|iPad|Android|BlackBerry|BB10|Palm|CriOS|IEMobile|Windows Phone OS|webOS|Symbian|silk|Kindle|Opera Mini|mobile/i.test(
      e
    ) ||
    /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i.test(
      e
    )
  ) {
    if ("Android" === F(e)) {
      var t = x(e);
      return t < 4.4
        ? /Version\/[.0-9]*/i.test(e)
        : t < 5
        ? /Version\/[.0-9]* Chrome\/[.0-9]*/i.test(e)
        : /wv.+Version\/[.0-9]* Chrome\/[.0-9]*/i.test(e);
    }
    return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)|PLAYSTATION|iPadApp/i.test(
      e
    );
  }
  return !1;
}