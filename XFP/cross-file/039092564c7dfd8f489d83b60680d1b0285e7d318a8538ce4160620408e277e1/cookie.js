import { extractDomain } from "./extractDomain.js";

const SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
const DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;


function imgSrcToElement(src, d) {
    var img = d.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = src;
    img.alt = '';
    return img;
}



    
const NEED_HADRON_MATCH = ['index'];
const CURRENT_SECONDS = Math.round(new Date() / 1000);
const COOKIE_TTL = 57600;
const NEED_GDPR_FLAGS = [
    'apn',
    'ttd',
    'rub',
    'smart',
    'son',
    'index'
];


