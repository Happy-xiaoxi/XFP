

export function trackClick(t, e, i) {
    var n = this, r = {
            selector: t,
            eventId: e,
            opts: i = i || {},
            handler: function (t) {
                try {
                    if (hstc.utils.isDefined(n.portalId)) {
                        var r = t && t.target || {}, s = {
                                hs_element_text: (r.innerText || r.value || '').trim(),
                                hs_link_href: r.href,
                                hs_element_id: r.id,
                                hs_element_class: r.className,
                                hs_tracking_config_id: i.trackingConfigId
                            };
                        r && !hstc.utils.isEmpty(r) && n.getParentNodeModuleId(r) && (s.hs_parent_module_id = n.getParentNodeModuleId(r));
                        if (hstc.utils.startsWith(e, 'pe' + n.portalId + '_'))
                            n.trackCustomBehavioralEvent({
                                name: e,
                                properties: s
                            });
                        else if (n._hasAutocaptureClicks() && hstc.utils.startsWith(e, 'autocaptureClick')) {
                            var o = hstc.utils.mergeObject(s, {
                                hs_mouse_x_coordinate: t.clientX,
                                hs_mouse_y_coordinate: t.clientY,
                                hs_scroll_x_coordinate: window.scrollX,
                                hs_scroll_y_coordinate: window.scrollY,
                                hs_viewport_width: document.documentElement.clientWidth,
                                hs_viewport_height: document.documentElement.clientHeight
                            });
                            n.trackClickEvent({ properties: o });
                        }
                    }
                    hstc.utils.isDefined(n.portalId) && (hstc.utils.startsWith(e, 'pe' + n.portalId + '_') || hstc.utils.startsWith(e, 'autocaptureClick')) || n.trackEvent(e, i);
                } catch (t) {
                    hstc.utils.logError(t, n._determineTrackingDomain());
                }
            }
        };
    this.clickSelectors.push(r);
    this._resetClickHandler(r);
}
