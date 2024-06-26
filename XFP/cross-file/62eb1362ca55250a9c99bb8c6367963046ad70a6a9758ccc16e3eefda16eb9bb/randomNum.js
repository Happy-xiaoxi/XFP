export function randomNum(t) {
  for (var e = Math.floor(9 * Math.random()) + 1 + "", r = 1; r < t; r++)
    e += Math.floor(10 * Math.random());
  return e;
}