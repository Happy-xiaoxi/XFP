export function C(e) {
  I()
    .then(function (t) {
      e.configuration.igt = t.isPrivate;
    })
    .catch(function (e) {});
}