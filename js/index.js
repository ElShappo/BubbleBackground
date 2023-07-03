import Circle from '../js/circle.js';
import ctx from '../js/ctx.js';
let circlesNumber = 20;
let circles = [];
for (let i = 0; i < circlesNumber; ++i) {
    let radius = (Math.random() + 1) * Math.min(document.documentElement.clientWidth / 20, document.documentElement.clientHeight / 20);
    let x = Math.random() * (document.documentElement.clientWidth - radius);
    let y = Math.random() * (document.documentElement.clientHeight - radius);
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    if (x < radius) {
        x += radius - x;
    }
    if (y < radius) {
        y += radius - y;
    }
    let circle = new Circle(x, y, radius, dx, dy);
    circles.push(circle);
}
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    for (let circle of circles) {
        circle.draw();
        circle.update();
    }
}
animate();
