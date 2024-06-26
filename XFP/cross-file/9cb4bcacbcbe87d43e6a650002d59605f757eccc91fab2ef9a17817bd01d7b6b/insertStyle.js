



export function insertStyle(styleUrl) {
    var linksInHead = document.getElementsByTagName('head')[0].getElementsByTagName('link');
    var lastLink = linksInHead[linksInHead.length - 1];
    var linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.type = 'text/css';
    linkTag.href = styleUrl;
    if (lastLink) {
        lastLink.parentNode.insertBefore(linkTag, lastLink.nextSibling);
    } else {
        document.getElementsByTagName('head')[0].appendChild(linkTag);
    }
}
