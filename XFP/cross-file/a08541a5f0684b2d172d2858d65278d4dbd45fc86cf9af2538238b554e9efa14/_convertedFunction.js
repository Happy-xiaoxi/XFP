export function _convertedFunction(name, context, definition) {
    context = context || (typeof window !== 'undefined' ? window : {});
    if (typeof define === 'function' && define.amd) {
        define(definition);
    } 
    // else if (typeof module !== 'undefined' && module.exports) {
    //     module.exports = definition();
    // } else if (context.exports) {
    //     context.exports = definition();
    // } 
    else {
        context[name] = definition();
    }
}