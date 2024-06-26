export function save() {
  /* v2.2.2 code 
  var dataString = "",
    dataArray = [],
    chunkCount = 0;
    
  chunkCount = 1*readCookie(simpleCart.storagePrefix + 'simpleCart_' + "chunks");
  for( var j=0;j<chunkCount;j++){
    eraseCookie(simpleCart.storagePrefix + 'simpleCart_'+ j);
  }
  eraseCookie(simpleCart.storagePrefix + 'simpleCart_' + "chunks");
  
    
  me.each(function(item){
    dataString = dataString + "++" + item.print();
  });
  
  dataArray = simpleCart.chunk( dataString.substring(2) , simpleCart.MAX_COOKIE_SIZE );
  
  for( var x=0,xlen = dataArray.length;x<xlen;x++){
    createCookie(simpleCart.storagePrefix + 'simpleCart_' + (1 + x ), dataArray[x], me.cookieDuration );
  }
      
  createCookie( simpleCart.storagePrefix + 'simpleCart_' + "chunks", "" + dataArray.length , me.cookieDuration );
  */

  /* using code from v3 */
  var items = {};

  // save all the items
  simpleCart.each(function (item) {
    items[item.id] = {};
    simpleCart.each(item, function (value, x, name) {
      if (name !== "id") {
        items[item.id][name] = value;
      }
    });
  });

  try {
    localStorage.setItem(
      simpleCart.storagePrefix + "simpleCart_items",
      escape(JSON.stringify(items))
    );
    // set 30 minutes expiration
    var now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    localStorage.setItem(
      simpleCart.storagePrefix + "simpleCart_items_expiration",
      now.getTime()
    );
  } catch (e) {}
}