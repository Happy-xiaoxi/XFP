export function CreateIframe() {
  this.iFrameHolderDiv = this.Core.CreateElement(
    "div",
    {
      id: "DotMetricsPF",
      style:
        "display:none;width:0px;height:0px;position:absolute; left:-2000px;",
    },
    null
  );
  var a = "dotmetricsframe" + this.postIndex;
  this.postIndex++;
  this.iFrameHolderDiv.style.display = "none";
  try {
    this.iframe = document.createElement(
      '<iframe name="' + a + '" style:"display:none;width:0px;height:0px;">'
    );
  } catch (c) {
    this.iframe = this.Core.CreateElement(
      "iframe",
      { name: a, id: a, style: "display:none;width:0px;height:0px;" },
      null
    );
  }
  this.iframe.id = a;
  this.form = this.Core.CreateElement(
    "form",
    {
      action: this.SettingsObject.PostUrl,
      method: "post",
      target: a,
      id: "DotMetricsForm",
    },
    null
  );
  this.formInput = this.Core.CreateElement(
    "input",
    { type: "text", name: "v" },
    null
  );
  document.body.appendChild(this.iFrameHolderDiv);
  this.iFrameHolderDiv.appendChild(this.iframe);
  this.iFrameHolderDiv.appendChild(this.form);
  this.form.appendChild(this.formInput);
  document.getElementById("DotMetricsForm").target = a;
}