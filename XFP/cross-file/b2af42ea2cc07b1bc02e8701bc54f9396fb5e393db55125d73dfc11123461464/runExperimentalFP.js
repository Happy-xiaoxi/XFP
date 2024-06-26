export function runExperimentalFP(a) {
  var c = this;
  this.experimentalFP = {};
  this.experimentalFP.hasLocalStorage = this.lsAvailable();
  this.runMediaDeviceInfo(function () {
    c.createAudioFp("sine", function () {
      setTimeout(
        c.createAudioFp("square", function () {
          setTimeout(
            c.createAudioFp("sawtooth", function () {
              setTimeout(c.createAudioFp("triangle", a), 20);
            }),
            20
          );
        }),
        20
      );
    });
  });
}