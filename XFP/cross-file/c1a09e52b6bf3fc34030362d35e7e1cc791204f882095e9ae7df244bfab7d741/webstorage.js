import { hasSessionStorage } from './hasSessionStorage.js'
import { hasLocalStorage } from './hasLocalStorage.js'
import { hasIndexedDB } from './hasIndexedDB.js'

var sessionStorageKey = function (done, options) {
    done(hasSessionStorage(options))
  }
var localStorageKey = function (done, options) {
done(hasLocalStorage(options))
}
var indexedDbKey = function (done, options) {
done(hasIndexedDB(options))
}


export {sessionStorageKey, localStorageKey, indexedDbKey}