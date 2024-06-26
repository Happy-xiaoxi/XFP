export function _e(e, t = 0) {
  const o = e.ownerDocument,
    n = o.upscopePseudoCanvas || o.createElement("canvas");
  (o.upscopePseudoCanvas = n),
    n.getContext("2d").clearRect(0, 0, n.width, n.height);
  const s = { 0: 1200, 0.5: 900, 1: 600, 2: 100 }[t],
    i = { 0: 0.8, 0.5: 0.6, 1: 0.6, 2: 0.2 }[t];
  if (
    (R("canvas", e) &&
      ((n.width = Math.min(e.width, s)),
      (n.height = (e.height / e.width) * n.width),
      n
        .getContext("2d")
        .drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height)),
    R("img", e))
  ) {
    if (0 === e.naturalWidth) throw new Error("Image is not loaded");
    if (e.currentSrc && e.currentSrc !== e.src)
      throw new Error("Image is using srcset entry");
    (n.width = Math.min(e.naturalWidth, s)),
      (n.height = (e.naturalHeight / e.naturalWidth) * n.width),
      n
        .getContext("2d")
        .drawImage(
          e,
          0,
          0,
          e.naturalWidth,
          e.naturalHeight,
          0,
          0,
          n.width,
          n.height
        );
  }
  return (
    R("video", e) &&
      ((n.width = Math.min(e.videoWidth, s)),
      (n.height = (e.videoHeight / e.videoWidth) * n.width),
      n
        .getContext("2d")
        .drawImage(
          e,
          0,
          0,
          e.videoWidth,
          e.videoHeight,
          0,
          0,
          n.width,
          n.height
        )),
    n.toDataURL("image/webp", i)
  );
}