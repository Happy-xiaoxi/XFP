export function addFlashDivNode() {
    var e = document.createElement("div");
    e.setAttribute("id", this.options.swfContainerId),
      document.body.appendChild(e);
  }