export function guid() {
    console.log("guid");
    function s4() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
