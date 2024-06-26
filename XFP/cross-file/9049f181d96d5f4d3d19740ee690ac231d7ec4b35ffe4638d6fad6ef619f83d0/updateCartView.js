export function updateCartView() {
  for (var x = 0, xlen = me.cartDivs.length; x < xlen; x++) {
    var newRows = [],
      y,
      newRow,
      current,
      header,
      newCell,
      info,
      outputValue,
      option,
      headerInfo;

    /* create headers row */
    newRow = document.createElement("div");
    for (var y = 0, ylen = me.cartHeaders.length; y < ylen; y++) {
      newCell = document.createElement("div");
      headerInfo = me.cartHeaders[y].split("_");

      newCell.innerHTML = me.print(headerInfo[0]);
      newCell.className = "item" + headerInfo[0];
      for (var z = 1, zlen = headerInfo.length; z < zlen; z++) {
        if (headerInfo[z].toLowerCase() == "noheader") {
          newCell.style.display = "none";
        }
      }
      newRow.appendChild(newCell);
    }
    newRow.className = "cartHeaders";
    newRows[0] = newRow;

    /* create a row for each item in the cart */
    me.each(function (item, x) {
      newRow = document.createElement("div");

      for (var y = 0, ylen = me.cartHeaders.length; y < ylen; y++) {
        newCell = document.createElement("div");
        info = me.cartHeaders[y].split("_");

        outputValue = me.createCartRow(info, item, outputValue);

        newCell.innerHTML = outputValue;
        newCell.className = "item" + info[0];

        newRow.appendChild(newCell);
      }
      newRow.className = "itemContainer";
      newRows[x + 1] = newRow;
    });

    /* delete current rows in div */
    var div = me.cartDivs[x];
    if (div.childNodes && div.appendChild) {
      while (div.childNodes[0]) {
        div.removeChild(div.childNodes[0]);
      }
    }
    for (var j = 0, jLen = newRows.length; j < jLen; j++) {
      div.appendChild(newRows[j]);
    }
  }
}