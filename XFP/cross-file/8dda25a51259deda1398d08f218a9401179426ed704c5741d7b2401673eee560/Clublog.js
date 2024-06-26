export function Clublog() {
  var e = this.location.pathname.toLowerCase(),
    t = this.location.hostname.toLowerCase();
  e.indexOf("/cart.html", 0) >= 0 || e.indexOf("shoppingcart", 0) >= 0
    ? privateLogWLJS("R2&Page", "Show")
    : e.indexOf("user_home", 0) >= 0
    ? privateLogWLJS("R3&Page", "Show")
    : e.indexOf("initcart.html", 0) >= 0 ||
      e.indexOf("addtocart.html", 0) >= 0 ||
      e.indexOf("initcart.aspx", 0) >= 0
    ? privateLogWLJS("R4R5&Page", "Show")
    : e.indexOf("normal/0829.action", 0) >= 0 ||
      e.indexOf("orderlist.aspx", 0) >= 0
    ? privateLogWLJS("DDR&Page", "Show")
    : "home.360buy.com" == t && "/" == e && privateLogWLJS("R3&Page", "Show");
}