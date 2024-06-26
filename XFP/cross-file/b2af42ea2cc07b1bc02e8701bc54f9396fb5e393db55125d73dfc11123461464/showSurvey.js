export function showSurvey() {
  this.surveyDone ||
    ((this.surveyDone = !0),
    window
      .open(
        this.Survey.SurveyUrl,
        "",
        "width=" +
          this.Survey.WindowWidth +
          ",height=" +
          this.Survey.WindowHeight +
          ",scrollbars=1"
      )
      .focus());
}