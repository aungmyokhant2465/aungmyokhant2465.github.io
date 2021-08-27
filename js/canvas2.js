(function() {
    const canvas= document.querySelector('#home-canvas-1');
    const canvas2 = document.querySelector('#home-canvas-2');

    canvas.width = 300;
    canvas.height = 300;

    canvas2.width = 300;
    canvas2.height = 300;

    function degToRad(degrees) {
        return degrees * Math.PI / 180;
    };

    const ctx = canvas.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    let image = new Image();
    image.src = '../assets/img/art1.png';

    let image2 = new Image();
    image2.src = '../assets/img/art2.png';

    ctx.fillStyle = 'rgba(236, 159, 91, 1)';
    ctx.beginPath();
    ctx.arc(150, 150, 150, degToRad(45), degToRad(-45), false);
    ctx.lineTo(150, 150);
    ctx.fill();

    ctx.fillStyle = 'rgba(236, 159, 91, 1)';
    ctx.beginPath();
    ctx.arc(170, 150, 120, degToRad(45), degToRad(-45), true);
    ctx.lineTo(170, 150);
    ctx.fill();

    image.onload = function () {
        ctx.drawImage(image, 0, 0, 819, 981, 20, 0, 246, 294);
    }

    image2.onload = function () {
        ctx2.drawImage(image2, 20, 20, 980, 810, 0, 0, 300, 300)
    }
})();