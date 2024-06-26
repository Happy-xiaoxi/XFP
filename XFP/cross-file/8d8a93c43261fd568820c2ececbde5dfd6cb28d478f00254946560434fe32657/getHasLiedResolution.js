export function getHasLiedResolution() {
    return (
      screen.width < screen.availWidth || screen.height < screen.availHeight
    );
  }