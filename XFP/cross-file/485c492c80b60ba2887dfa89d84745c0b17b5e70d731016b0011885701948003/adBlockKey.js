import { getAdBlock } from './getAdBlock.js'
var adBlockKey = function (done) {
    done(getAdBlock())
  }
  export { adBlockKey }