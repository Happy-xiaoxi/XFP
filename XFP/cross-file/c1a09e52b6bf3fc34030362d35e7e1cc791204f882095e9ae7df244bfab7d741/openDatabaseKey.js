  var openDatabaseKey = function (done) {
    done(!!window.openDatabase)
  }

  export { openDatabaseKey }