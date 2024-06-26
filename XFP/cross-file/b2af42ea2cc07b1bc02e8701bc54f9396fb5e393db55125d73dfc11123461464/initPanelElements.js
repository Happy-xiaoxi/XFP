export function initPanelElements() {
  if (
    document.getElementById("DotmetricsPanelUserId") &&
    document.getElementById("DotmetricsPanelHouseholdId")
  ) {
    this.panel = !0;
    this.panelUserId = document.getElementById("DotmetricsPanelUserId").value;
    this.panelHouseholdId = document.getElementById(
      "DotmetricsPanelHouseholdId"
    ).value;
    var a = document.createElement("input");
    a.setAttribute("type", "hidden");
    a.setAttribute("id", "DotmetricsScriptLoaded");
    a.setAttribute("value", "true");
    document.getElementsByTagName("head")[0].appendChild(a);
  }
}