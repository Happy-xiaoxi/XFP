export function btnchange() {
    var bg = document.getElementById('code_refresh');
    bg.onmouseover = function () {
        this.setAttribute('className', 'code_refresh_2');
        this.setAttribute('class', 'code_refresh_2');
    };
    bg.onmouseout = function () {
        this.setAttribute('className', 'code_refresh_1');
        this.setAttribute('class', 'code_refresh_1');
    };
    bg.onmousedown = function () {
        this.setAttribute('className', 'code_refresh_3');
        this.setAttribute('class', 'code_refresh_3');
    };
    bg.onmouseup = function () {
        this.setAttribute('className', 'code_refresh_1');
        this.setAttribute('class', 'code_refresh_1');
    };
}
