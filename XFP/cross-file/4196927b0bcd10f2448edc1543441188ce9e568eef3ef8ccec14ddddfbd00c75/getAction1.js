export function getAction1(a) {
  let cat = a.getAttribute("cat");
  let act = a.getAttribute("act");
  let obj = {};
  if (cat && act) {
    obj = { cat: cat, act: act, rdt: "3" };
  }
  return obj;
}