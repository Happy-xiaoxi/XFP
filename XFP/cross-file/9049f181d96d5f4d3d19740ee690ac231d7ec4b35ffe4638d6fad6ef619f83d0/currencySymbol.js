export function currencySymbol() {
  switch (me.currency) {
    case CHF:
      return "CHF&nbsp;";
    case CZK:
      return "CZK&nbsp;";
    case DKK:
      return "DKK&nbsp;";
    case HUF:
      return "HUF&nbsp;";
    case NOK:
      return "NOK&nbsp;";
    case PLN:
      return "PLN&nbsp;";
    case SEK:
      return "SEK&nbsp;";
    case JPY:
      return "&yen;";
    case EUR:
      return "&euro;";
    case GBP:
      return "&pound;";
    case CHF:
      return "CHF&nbsp;";
    case THB:
      return "&#3647;";
    case USD:
    case CAD:
    case AUD:
    case NZD:
    case HKD:
    case SGD:
      return "&#36;";
    default:
      return "";
  }
}