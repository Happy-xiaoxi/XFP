
export function fingerprint_canvas() {
    "use strict";
    var canvas = null;
    var ctx = null;
    var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?";
    var hash = null;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(text, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(text, 4, 17);

    ctx.font = '50px serif';
    ctx.strokeText('Hello world', 50, 90);

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(20, 20);
    ctx.lineTo(120, 120);
    ctx.stroke();

    let start = { x: 50,    y: 20  };
    let cp1 =   { x: 230,   y: 30  };
    let cp2 =   { x: 150,   y: 80  };
    let end =   { x: 250,   y: 100 };

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);  // Start point
    ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);      // End point
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
    ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#ff6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.moveTo(20, 20);
    ctx.lineTo(180, 20);
    ctx.lineTo(130, 130);
    ctx.closePath();
    ctx.fill();

    ctx.clearRect(10, 10, 120, 100);

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, 100, 100);

    ctx.beginPath();
    ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(0, 200);
    ctx.lineTo(200, 0);
    ctx.stroke();

    var gradient = ctx.createLinearGradient(20,0, 220,0);

    gradient.addColorStop(0, 'green');
    gradient.addColorStop(.5, 'cyan');
    gradient.addColorStop(1, 'green');

    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(20, 20, 200, 100);

    var gradient = ctx.createRadialGradient(110,90,30, 100,100,70);

    gradient.addColorStop(0, 'pink');
    gradient.addColorStop(.9, 'white');
    gradient.addColorStop(1, 'green');

    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(20, 20, 160, 160);

    ctx.isPointInPath(30, 70);

    let imageData = ctx.getImageData(60, 60, 200, 100);
    ctx.putImageData(imageData, 150, 10);

    let hello = ctx.measureText('Hello world');
    console.log(hello.width);
    console.log(hello.height);


    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.quadraticCurveTo(230, 30, 50, 100);
    ctx.stroke();

    ctx.save();
    ctx.fillStyle = 'green';
    ctx.rect(400, 20, 150, 100);
    ctx.fill();
    ctx.restore();
    ctx.fillRect(150, 40, 100, 100);


    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.fillStyle = 'gray';
    ctx.fillRect(100, 0, 80, 20);
    ctx.translate(110, 30);

    // Rotated rectangle
    ctx.rotate(45 * Math.PI / 180);
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 0, 80, 20);

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    
    hash = canvas.toDataURL();
    return hash;
}