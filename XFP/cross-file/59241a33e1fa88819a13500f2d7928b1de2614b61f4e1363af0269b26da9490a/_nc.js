export function c(e, t) {
  return (
    (e = (e = (e = e.replace(/[\\^$.+?()[\]{}|]/g, "\\$&")).startsWith("*")
      ? e.replace(/^\*+/, "")
      : `^${e}`).endsWith("*")
      ? e.replace(/\*+$/, "")
      : `${e}$`),
    new RegExp(e.replace(/\*/g, ".*")).test(t)
  );
}