/****************************************************************************
Copyright (c) 2011 The Wojo Group

thewojogroup.com
simplecartjs.com
http://github.com/thewojogroup/simplecart-js/tree/master

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
import {set} from './set.js';
import {increment} from './increment.js';
import {decrement} from './decrement.js';
import {print} from './print.js';
import {checkQuantityAndPrice} from './checkQuantityAndPrice.js';
import {parseValuesFromArray} from './parseValuesFromArray.js';
import {remove} from './remove.js';
import {createCookie} from './createCookie.js';
import {readCookie} from './readCookie.js';
import {eraseCookie} from './eraseCookie.js';
import {Shelf} from './Shelf.js';
import {add} from './add.js';
import {empty} from './empty.js';
import {clear} from './clear.js';
import {find} from './find.js';
import {each} from './each.js';
import {chunk} from './chunk.js';
import {checkout} from './checkout.js';
import {paypalCheckout} from './paypalCheckout.js';
import {googleCheckout} from './googleCheckout.js';
import {emailCheckout} from './emailCheckout.js';
import {customCheckout} from './customCheckout.js';
import {load} from './load.js';
import {save} from './save.js';
import {initializeView} from './initializeView.js';
import {updateView} from './updateView.js';
import {updateViewTotals} from './updateViewTotals.js';
import {updateCartView} from './updateCartView.js';
import {createCartRow} from './createCartRow.js';
import {addEventToArray} from './addEventToArray.js';
import {createHiddenElement} from './createHiddenElement.js';
import {bind} from './bind.js';
import {trigger} from './trigger.js';
import {ready} from './ready.js';
import {currencySymbol} from './currencySymbol.js';
import {currencyStringForPaypalCheckout} from './currencyStringForPaypalCheckout.js';
import {valueToCurrencyString} from './valueToCurrencyString.js';
import {valueToPercentageString} from './valueToPercentageString.js';
import {valueToImageString} from './valueToImageString.js';
import {valueToTextInput} from './valueToTextInput.js';
import {valueToLink} from './valueToLink.js';
import {valueToElement} from './valueToElement.js';
import {hasItem} from './hasItem.js';
import {update} from './update.js';
import {updateTotals} from './updateTotals.js';
import {shipping} from './shipping.js';
import {initialize} from './initialize.js';
import { _isLocalStorageSupport } from './_isLocalStorageSupport.js';
import { CartItem } from './CartItem.js';
import { getElementsByClassName } from './getElementsByClassName.js';
import { _convertFunc } from './_convertFunc.js';


var Custom = "Custom",
  GoogleCheckout = "GoogleCheckout",
  PayPal = "PayPal",
  Email = "Email",
  BrazilianReal = "BRL",
  BRL = "BRL",
  AustralianDollar = "AUD",
  AUD = "AUD",
  CanadianDollar = "CAD",
  CAD = "CAD",
  CzechKoruna = "CZK",
  CZK = "CZK",
  DanishKrone = "DKK",
  DKK = "DKK",
  Euro = "EUR",
  EUR = "EUR",
  HongKongDollar = "HKD",
  HKD = "HKD",
  HungarianForint = "HUF",
  HUF = "HUF",
  IsraeliNewSheqel = "ILS",
  ILS = "ILS",
  JapaneseYen = "JPY",
  JPY = "JPY",
  MexicanPeso = "MXN",
  MXN = "MXN",
  NorwegianKrone = "NOK",
  NOK = "NOK",
  NewZealandDollar = "NZD",
  NZD = "NZD",
  PolishZloty = "PLN",
  PLN = "PLN",
  PoundSterling = "GBP",
  GBP = "GBP",
  SingaporeDollar = "SGD",
  SGD = "SGD",
  SwedishKrona = "SEK",
  SEK = "SEK",
  SwissFranc = "CHF",
  CHF = "CHF",
  ThaiBaht = "THB",
  THB = "THB",
  USDollar = "USD",
  USD = "USD";
function Cart() {
  var me = this;
  /* member variables */
  me.nextId = 1;
  me.Version = "2.2.3";
  me.Shelf = null;
  me.items = {};
  me.isLoaded = false;
  me.invoice = null;
  me.pageIsReady = false;
  me.quantity = 0;
  me.total = 0;
  me.taxRate = 0;
  me.taxCost = 0;
  me.shippingFlatRate = 0;
  me.shippingTotalRate = 0;
  me.shippingQuantityRate = 0;
  me.shippingRate = 0;
  me.shippingCost = 0;
  me.currency = USD;
  me.checkoutTo = PayPal;
  me.email = "";
  me.merchantId = "";
  me.successUrl = null;
  me.cancelUrl = null;
  me.cookieDuration = 30; // default duration in days
  me.storagePrefix = "sc_";
  me.MAX_COOKIE_SIZE = 4000;
  me.cartHeaders = ["Name", "Price", "Quantity", "Total"];
  me.events = {};
  me.sandbox = false;
  me.paypalHTTPMethod = "GET";
  /*
		cart headers:
		you can set these to which ever order you would like, and the cart will display the appropriate headers
		and item info.	any field you have for the items in the cart can be used, and 'Total' will automatically
		be price*quantity.

		there are keywords that can be used:

			1) "_input" - the field will be a text input with the value set to the given field. when the user
				changes the value, it will update the cart.	 this can be useful for quantity. (ie "Quantity_input")

			2) "increment" - a link with "+" that will increase the item quantity by 1

			3) "decrement" - a link with "-" that will decrease the item quantity by 1

			4) "remove" - a link that will remove the item from the cart

			5) "_image" or "Image" - the field will be an img tag with the src set to the value. You can simply use "Image" if
				you set a field in the items called "Image".  If you have a field named something else, like "Thumb", you can add
				the "_image" to create the image tag (ie "Thumb_image").

			6) "_noHeader" - this will skip the header for that field (ie "increment_noHeader")


	*/
  /******************************************************
			function for setting options 
	 ******************************************************/
  me.options = function (values) {
    me.each(values, function (value, x, name) {
      me[name] = value;
    });
  };

  /******************************************************
			add/remove items to cart
	 ******************************************************/

 
  /******************************************************
				Language managment
	 ******************************************************/
  me.ln = {
    en_us: {
      quantity: "Quantity",
      price: "Price",
      total: "Total",
      decrement: "Decrement",
      increment: "Increment",
      remove: "Remove",
      tax: "Tax",
      shipping: "Shipping",
      image: "Image",
    },
  };

  me.language = "en_us";
  me.add = add;
  me.remove = remove;
  me.empty = empty;
  me.clear = clear;
  me.find = find;
  me.each = each;
  me.chunk = chunk;
  me.checkout = checkout;
  me.paypalCheckout = paypalCheckout;
  me.googleCheckout = googleCheckout;
  me.emailCheckout = emailCheckout;
  me.customCheckout = customCheckout;
  me.load = load;
  me.save = save;
  me.initializeView = initializeView;
  me.updateView = updateView;
  me.updateViewTotals = updateViewTotals;
  me.updateCartView = updateCartView;
  me.createCartRow = createCartRow;
  me.addEventToArray = addEventToArray;
  me.createHiddenElement = createHiddenElement;
  me.bind = bind;
  me.trigger = trigger;
  me.ready = ready;
  me.currencySymbol = currencySymbol;
  me.currencyStringForPaypalCheckout = currencyStringForPaypalCheckout;
  me.valueToCurrencyString = valueToCurrencyString;
  me.valueToPercentageString = valueToPercentageString;
  me.valueToImageString = valueToImageString;
  me.valueToTextInput = valueToTextInput;
  me.valueToLink = valueToLink;
  me.valueToElement = valueToElement;
  me.hasItem = hasItem;
  me.print = print;
  me.update = update;
  me.updateTotals = updateTotals;
  me.shipping = shipping;
  me.initialize = initialize;
}

/********************************************************************************************************
 *			Cart Item Object
 ********************************************************************************************************/


CartItem.prototype = {
  set:set,
  increment:increment,
  decrement:decrement,
  print:print,
  checkQuantityAndPrice:checkQuantityAndPrice,
  parseValuesFromArray:parseValuesFromArray,
  remove:remove,
};

/********************************************************************************************************
 *			Shelf Object for managing items on shelf that can be added to cart
 ********************************************************************************************************/


Shelf.prototype = {
  readPage: function () {
    this.items = {};
    var newItems = getElementsByClassName("simpleCart_shelfItem"),
      newItem;
    me = this;

    for (var x = 0, xlen = newItems.length; x < xlen; x++) {
      newItem = new ShelfItem();
      me.checkChildren(newItems[x], newItem);
      me.items[newItem.id] = newItem;
    }
  },

  checkChildren: function (item, newItem) {
    if (!item.childNodes) return;
    for (var x = 0; item.childNodes[x]; x++) {
      var node = item.childNodes[x];
      if (node.className && node.className.match(/item_[^ ]+/)) {
        var data = /item_[^ ]+/.exec(node.className)[0].split("_");

        if (data[1] == "add" || data[1] == "Add") {
          var tempArray = [];
          tempArray.push(node);
          var addFunction = simpleCart.Shelf.addToCart(newItem.id);
          simpleCart.addEventToArray(tempArray, addFunction, "click");
          node.id = newItem.id;
        } else {
          newItem[data[1]] = node;
        }
      }
      if (node.childNodes[0]) {
        this.checkChildren(node, newItem);
      }
    }
  },

  empty: function () {
    this.items = {};
  },

  addToCart: function (id) {
    return function () {
      if (simpleCart.Shelf.items[id]) {
        simpleCart.Shelf.items[id].addToCart();
      } else {
        error("Shelf item with id of " + id + " does not exist.");
      }
    };
  },
};

/********************************************************************************************************
 *			Shelf Item Object
 ********************************************************************************************************/

function ShelfItem() {
  this.id = "s" + simpleCart.nextId++;
}

ShelfItem.prototype = {
  remove: function () {
    simpleCart.Shelf.items[this.id] = null;
  },

  addToCart: function () {
    var outStrings = [],
      valueString,
      field;

    for (field in this) {
      if (typeof this[field] !== "function" && field !== "id") {
        valueString = "";

        switch (field) {
          case "price":
            if (this[field].value) {
              valueString = this[field].value;
            } else if (this[field].innerHTML) {
              valueString = this[field].innerHTML;
            }
            /* remove all characters from price except digits and a period */
            valueString = valueString.replace(/[^(\d|\.)]*/gi, "");
            valueString = valueString.replace(/,*/, "");
            break;
          case "image":
            valueString = this[field].src;
            break;
          default:
            if (this[field].value) {
              valueString = this[field].value;
            } else if (this[field].innerHTML) {
              valueString = this[field].innerHTML;
            } else if (this[field].src) {
              valueString = this[field].src;
            } else {
              valueString = this[field];
            }
            break;
        }
        outStrings.push(field + "=" + valueString);
      }
    }

    simpleCart.add(outStrings);
  },
};


//*************************************************************************************************
/*
	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/


/********************************************************************************************************
 *	Helpers
 ********************************************************************************************************/

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
Number.prototype.withCommas = function () {
  var x = 6,
    y = parseFloat(this).toFixed(2).toString().reverse();
  while (x < y.length) {
    y = y.substring(0, x) + "," + y.substring(x);
    x += 4;
  }
  return y.reverse();
};
Number.prototype.toCurrency = function () {
  return (arguments[0] ? arguments[0] : "$") + this.withCommas();
};

/************ JSON *************/
var JSON;
JSON || (JSON = {});
_convertFunc()


/************ HTML5 Local Storage Support *************/

_isLocalStorageSupport()

/********************************************************************************************************
 * error management
 ********************************************************************************************************/

function error(message) {
  try {
    console.log(message);
  } catch (err) {
    //	alert( message );
  }
}

var simpleCart = new Cart();

if (typeof jQuery !== "undefined")
  $(document).ready(function () {
    simpleCart.initialize();
  });
else if (typeof Prototype !== "undefined")
  Event.observe(window, "load", function () {
    simpleCart.initialize();
  });
else window.onload = simpleCart.initialize;
