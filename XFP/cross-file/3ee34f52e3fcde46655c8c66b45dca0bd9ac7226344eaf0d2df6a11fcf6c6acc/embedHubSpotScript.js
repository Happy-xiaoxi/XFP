
export function embedHubSpotScript(t, i) {
    if (!(this.hasTrackingGate('AnalyticsTracking:BlockEmbeddedScriptReload') && this.context.getWindow()._hstc_loaded || document.getElementById(i)) && this.trackingEnabled) {
        var n = document.createElement('script');
        n.src = t;
        n.type = 'text/javascript';
        n.id = i;
        e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(n, e);
    }
}
