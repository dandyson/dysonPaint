
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
const colorSquares = document.querySelectorAll('.colorSquares')
const clear = document.getElementById('clear');


ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.globalCompositeOperation = 'color';


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//Whenever a colour button is clicked, change the stroke style colour to that colour
function changeColor() {
    for (i = 0; i < colorSquares.length; i++) {
        colorSquares[i].addEventListener('click', function () {
            ctx.strokeStyle = `${this.style.backgroundColor}`;
        })
    }
}


function draw(e) {
    if (!isDrawing) return; //Stop function running when mouse is not held down
    changeColor();
    // changeBrush();
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

clear.addEventListener('click', () => { ctx.clearRect(0, 0, canvas.width, canvas.height) });
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);