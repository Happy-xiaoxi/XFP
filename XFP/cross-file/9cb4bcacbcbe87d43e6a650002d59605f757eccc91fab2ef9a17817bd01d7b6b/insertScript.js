



export function insertScript(scriptUrl) {
    var scriptsInHead = document.getElementsByTagName('head')[0].getElementsByTagName('script');
    var lastScript = scriptsInHead[scriptsInHead.length - 1];
    var scriptTag = document.createElement('script');
    scriptTag.async = 1;
    scriptTag.src = scriptUrl;
    if (lastScript) {
        lastScript.parentNode.insertBefore(scriptTag, lastScript);
    } else {
        document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
}
