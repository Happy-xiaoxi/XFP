

export function loseWebglContext(context) {
    var loseContextExtension = context.getExtension('WEBGL_lose_context');
    if (loseContextExtension != null) {
        loseContextExtension.loseContext();
    }
}
