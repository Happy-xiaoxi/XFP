

export function initEventVisualizerScript() {
    const t = 'eventVisualizerIsLocal', e = 'hubspotEventVisualizeMode', i = 'true', n = 'hs-events-builder', r = this.hasTrackingGate('WA:FeatureEventVisualizer'), s = this.context.getReferrer(), o = /^https:\/\/(app|local)(-[a-z]{2}[0-9]{1})?\.hubspot(qa)?\.com/, c = 'hsExchangeCredentials';
    try {
        if (r) {
            const r = localStorage.getItem(e) === i, a = localStorage.getItem(t) === i, h = () => {
                    if (!document.getElementById(n)) {
                        const t = document.createElement('script'), e = /^https:\/\/js(-?[a-z0-9]*)\.([a-z0-9-]+)\./i, i = this.currentScriptUrl.match(e);
                        if (i) {
                            const e = a ? '' : i[1], r = a ? 'local' : 'app', s = 'hs-analytics' === i[2] ? 'hubspot' : 'hubspotqa';
                            t.id = n;
                            t.src = `https://${ r }${ e }.${ s }.com/events-visualizer.js`;
                            t.async = !0;
                            document.body.appendChild(t);
                        }
                    }
                };
            this.eventBuilderMessageHandler = t => {
                const {
                        data: e,
                        origin: i
                    } = t, {message: n} = e;
                (o.test(i) || a) && n === c && h();
            };
            window.addEventListener('message', this.eventBuilderMessageHandler);
            (o.test(s) || r) && h();
        }
    } catch (t) {
        hstc.utils.logError(t);
    }
}
