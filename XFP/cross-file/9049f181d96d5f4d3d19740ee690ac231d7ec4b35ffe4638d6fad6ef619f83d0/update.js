export function update() {
  if (!simpleCart.isLoaded) {
    simpleCart.load();
  }
  if (!simpleCart.pageIsReady) {
    simpleCart.initializeView();
  }
  me.updateTotals();
  me.updateView();
  me.save();
}