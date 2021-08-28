(function() {
    const header_canvas = document.querySelector('#header-canvas');
    header_canvas.width = 630;
    header_canvas.height = 420;

    const ctx = header_canvas.getContext('2d');

    function degToRad(degrees) {
        return degrees * Math.PI / 180;
    };

    function drawCircle(color, x, y, radius) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, degToRad(0), degToRad(360), false);
        ctx.fill();
    }

    let image = new Image();
    image.src = '../assets/img/bubble-img.png';

    drawCircle('rgba(236, 159, 91, 1)', 440, 210, 200)

    image.onload = function() {
        ctx.drawImage(image, 0, 60, 460, 495, 220, 10, 368, 392);
        drawCircle('rgba(204, 181, 20, 1)', 330, 330, 60)
        drawCircle('rgba(218, 51, 51, 1)', 630, 300, 70)
        drawCircle('rgba(145, 0, 123, 1)', 380, 100, 20)
        drawCircle('rgba(31, 127, 190, 1)', 280, 80, 40)
        drawCircle('rgba(30, 132, 127, 1)', 600, 10, 55)
        drawCircle('rgba(75, 145, 0, 1)', 600, 100, 10)
        drawCircle('rgba(135, 94, 5, 1)', 100, 70, 15)
        drawCircle('rgba(100, 88, 73, 1)', 180, 250, 20)
    }

})();