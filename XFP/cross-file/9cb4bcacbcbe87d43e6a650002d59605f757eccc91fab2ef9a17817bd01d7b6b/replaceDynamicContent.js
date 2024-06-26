

export function replaceDynamicContent(params) {
    params = params || {};
    var dynamicContentSlots = document.querySelectorAll('.mautic-slot, [data-slot="dwc"]');
    if (dynamicContentSlots.length) {
        MauticJS.iterateCollection(dynamicContentSlots)(function (node, i) {
            var slotName = node.dataset['slotName'];
            if ('undefined' === typeof slotName) {
                slotName = node.dataset['paramSlotName'];
            }
            if ('undefined' === typeof slotName) {
                node.innerHTML = '';
                return;
            }
            var url = 'https://sangfor.huoyan.cn/dwc/slotNamePlaceholder'.replace('slotNamePlaceholder', slotName);
            MauticJS.makeCORSRequest('GET', url, params, function (response, xhr) {
                if (response.content) {
                    var dwcContent = response.content;
                    node.innerHTML = dwcContent;
                    if (response.id && response.sid) {
                        MauticJS.setTrackedContact(response);
                    }
                    if (dwcContent.search('mauticform_wrapper') > 0) {
                        if (typeof MauticSDK == 'undefined') {
                            MauticJS.insertScript('https://sangfor.huoyan.cn/media/js/mautic-form.js');
                            var fileInterval = setInterval(function () {
                                if (typeof MauticSDK != 'undefined') {
                                    MauticSDK.onLoad();
                                    clearInterval(fileInterval);
                                }
                            }, 100);
                        } else {
                            MauticSDK.onLoad();
                        }
                    }
                    var m;
                    var regEx = /<script[^>]+src="?([^"\s]+)"?\s/g;
                    while (m = regEx.exec(dwcContent)) {
                        if (m[1].search('/focus/') > 0) {
                            MauticJS.insertScript(m[1]);
                        }
                    }
                    if (dwcContent.search('fr-gatedvideo') > 0) {
                        MauticJS.initGatedVideo();
                    }
                }
            });
        });
    }
}
