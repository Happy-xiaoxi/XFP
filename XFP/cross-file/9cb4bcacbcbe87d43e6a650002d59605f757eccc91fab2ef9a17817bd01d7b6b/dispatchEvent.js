
export function dispatchEvent(name, detail) {
    var event = new CustomEvent(name, { detail: detail });
    document.dispatchEvent(event);
}
