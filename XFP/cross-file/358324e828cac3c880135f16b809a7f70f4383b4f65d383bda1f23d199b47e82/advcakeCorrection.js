export function advcakeCorrection(data) {
    if (typeof data !== 'undefined' && typeof data.pageType !== 'undefined') {
        data.pageType = parseInt(data.pageType);
        data.user = data.user || {};
        data.user.type = data.user.type || '';
        data.user.email = data.user.email || '';
        switch (data.pageType) {
        case 1:
            break;
        case 2:
        case 3:
            data.currentLead = data.currentLead || {};
            data.currentLead.name = data.currentLead.name || 1;
            data.currentLead.price = data.currentLead.price || 0;
            break;
        case 4:
            data.leadInfo = data.leadInfo || {};
            data.leadInfo.name = data.leadInfo.name || 1;
            data.leadInfo.id = data.leadInfo.id || '';
            data.leadInfo.leadid = data.leadInfo.leadid || data.leadInfo.name;
            data.leadInfo.totalPrice = data.leadInfo.totalPrice || data.leadInfo.price || 0;
            break;
        case 5:
            data.leads = data.leads || [];
            break;
        }
    }
    return data;
}
