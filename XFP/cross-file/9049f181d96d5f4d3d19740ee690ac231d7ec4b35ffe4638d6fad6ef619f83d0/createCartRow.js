export function createCartRow(info, item, outputValue) {
  switch (info[0].toLowerCase()) {
    case "total":
      outputValue = me.valueToCurrencyString(
        parseFloat(item.price) * parseInt(item.quantity, 10)
      );
      break;
    case "increment":
      outputValue = me.valueToLink(
        "+",
        "javascript:;",
        "onclick=\"simpleCart.items['" + item.id + "'].increment();\""
      );
      break;
    case "decrement":
      outputValue = me.valueToLink(
        "-",
        "javascript:;",
        "onclick=\"simpleCart.items['" + item.id + "'].decrement();\""
      );
      break;
    case "remove":
      outputValue = me.valueToLink(
        chart_lang["remove"],
        "javascript:;",
        "onclick=\"simpleCart.items['" + item.id + "'].remove();\""
      );
      break;
    case "price":
      outputValue = me.valueToCurrencyString(
        item[info[0].toLowerCase()] ? item[info[0].toLowerCase()] : " "
      );
      break;
    default:
      outputValue = item[info[0].toLowerCase()]
        ? typeof item[info[0].toLowerCase()] === "function"
          ? item[info[0].toLowerCase()].call(item)
          : item[info[0].toLowerCase()]
        : " ";
      break;
  }

  for (var y = 1, ylen = info.length; y < ylen; y++) {
    option = info[y].toLowerCase();
    switch (option) {
      case "image":
      case "img":
        outputValue = me.valueToImageString(outputValue);
        break;
      case "input":
        outputValue = me.valueToTextInput(
          outputValue,
          "onchange=\"simpleCart.items['" +
            item.id +
            "'].set('" +
            info[0].toLowerCase() +
            "' , this.value);\""
        );
        break;
      case "div":
      case "span":
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "p":
        outputValue = me.valueToElement(option, outputValue, "");
        break;
      case "noheader":
        break;
      default:
        if (typeof item["_" + option] === "function") {
          outputValue = item["_" + option].call(item, outputValue);
        } else {
          error("unkown header option: " + option);
        }
        break;
    }
  }
  return outputValue;
}