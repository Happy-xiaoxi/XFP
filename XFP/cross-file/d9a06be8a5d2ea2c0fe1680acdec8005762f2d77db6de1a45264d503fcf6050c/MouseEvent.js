







export function MouseEvent(e) {
    var p = $('#code_img');
    var position = p.position();
    var positionX = e.pageX - p.offset().left || e.clientX - p.offset().left || e.layerX - p.offset().left;
    this.x = positionX;
    var positionY = e.pageY - p.offset().top || e.clientY - p.offset().top || e.layerY - p.offset().top;
    this.y = positionY;
}
