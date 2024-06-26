
export function trackFeedbackView(t) {
    t = t || {};
    var e = {
        k: 26,
        st: hstc.utils.safeString(t.surveyType),
        si: hstc.utils.safeString(t.surveyId)
    };
    this._loadImage(e);
}
