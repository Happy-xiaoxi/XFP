export function load() {
  var me = this,
    id;

  /* initialize variables and items array */
  me.items = {};
  me.total = 0.0;
  me.quantity = 0;

  /* retrieve item data from cookie */
  /* v2.2.2 code 
  if( readCookie(simpleCart.storagePrefix + 'simpleCart_' + "chunks") ){
    var chunkCount = 1*readCookie(simpleCart.storagePrefix + 'simpleCart_' + "chunks"),
      dataArray = [],
      dataString = "",
      data = "",
      info,
      newItem,
      y=0;
    if(chunkCount>0) {	
      for( y=0;y<chunkCount;y++){
        dataArray.push( readCookie( simpleCart.storagePrefix + 'simpleCart_' + (1 + y ) ) );
      }
    
      dataString = unescape( dataArray.join("") );
      data = dataString.split("++");
    }
    for(var x=0, xlen=data.length;x<xlen;x++){

      info = data[x].split('||');
      newItem = new CartItem();

      if( newItem.parseValuesFromArray( info ) ){
        newItem.checkQuantityAndPrice();
        // store the new item in the cart 
        me.items[newItem.id] = newItem;
      }
    }
  }
  */

  /* code from v3 */
  try {
    var items = unescape(
      localStorage.getItem(simpleCart.storagePrefix + "simpleCart_items")
    );
    var timestamp =
      localStorage.getItem(
        simpleCart.storagePrefix + "simpleCart_items_expiration"
      ) || new Date().setMinutes(new Date().getMinutes() + 1);
    if (items && timestamp > new Date()) {
      simpleCart.each(JSON.parse(items), function (item, x, id) {
        var newItem = new CartItem(),
          attrs = [];
        newItem.id = id;

        // add all the values
        simpleCart.each(item, function (val, x, name) {
          attrs.push(name + "=" + val);
        });

        if (newItem.parseValuesFromArray(attrs)) {
          newItem.checkQuantityAndPrice();
          // store the new item in the cart
          me.items[newItem.id] = newItem;
        }
      });
    }
  } catch (e) {}

  me.isLoaded = true;
}