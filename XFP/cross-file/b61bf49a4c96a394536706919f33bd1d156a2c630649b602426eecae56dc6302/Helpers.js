import {extend} from './extend.js';
import {jsonToParams} from './jsonToParams.js';
import {generateUUID} from './generateUUID.js';
import {isNull} from './isNull.js';
import {post} from './post.js';

export function Helpers() {
  //NO QA PLS
  this.extend = extend;
  this.jsonToParams = jsonToParams;
  this.generateUUID = generateUUID;
  this.isNull = isNull;
  this.post = post;

}