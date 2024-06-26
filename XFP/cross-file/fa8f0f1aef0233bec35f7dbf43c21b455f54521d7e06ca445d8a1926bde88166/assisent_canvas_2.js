
export function canvas_draw(ctx){

    // Draw yellow background
    ctx.beginPath();
    ctx.fillStyle = '#ff6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw blue triangle
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.moveTo(20, 20);
    ctx.lineTo(180, 20);
    ctx.lineTo(130, 130);
    ctx.closePath();
    ctx.fill();

    // Clear part of the canvas
    ctx.clearRect(10, 10, 120, 100);

    // Create circular clipping region
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, Math.PI * 2);
    ctx.clip();

    // Draw stuff that gets clipped
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 100, 100);

    // Draw the ellipse
    ctx.beginPath();
    ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw the ellipse's line of reflection
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(0, 200);
    ctx.lineTo(200, 0);
    ctx.stroke();
    return ctx;
}