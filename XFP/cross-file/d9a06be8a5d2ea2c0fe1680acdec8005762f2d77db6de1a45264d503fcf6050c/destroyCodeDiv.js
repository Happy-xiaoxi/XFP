



export function destroyCodeDiv() {
    var obj = document.getElementById('validate_freeze');
    obj.parentNode.removeChild(obj);
    obj = document.getElementById('code_div');
    obj.parentNode.removeChild(obj);
}
