export function CartItem(simpleCart) {
  while (simpleCart.items["c" + simpleCart.nextId]) simpleCart.nextId++;

  this.id = "c" + simpleCart.nextId;
}
