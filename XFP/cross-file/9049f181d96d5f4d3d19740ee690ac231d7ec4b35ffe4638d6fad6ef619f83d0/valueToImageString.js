export function valueToImageString(value) {
  if (value.match(/<\s*img.*src\=/)) {
    return value;
  } else {
    return '<img src="' + value + '" />';
  }
}