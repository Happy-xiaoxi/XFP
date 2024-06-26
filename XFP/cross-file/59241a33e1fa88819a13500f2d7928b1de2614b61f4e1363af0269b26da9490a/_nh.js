export function h(e, t) {
  return Promise.race([
    e,
    new Promise((e, o) => {
      setTimeout(() => o(new Error("Did not complete in " + t + "ms")), t);
    }),
  ]);
}