const canvas = document.querySelector(".canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(canvas);
const ctx = canvas.getContext("2d");
console.log(ctx);

// drawing a filled Rectangle
ctx.fillStyle = "green";
ctx.fillRect(25, 25, 100, 100);

// drawing a filled Circle
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(55, 180, 50, 0, 2 * Math.PI);
ctx.fill();

// drawing a stroked Rectangle
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.rect(150, 25, 100, 100);
ctx.stroke();

// drawing a stroked Circle
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(160, 180, 50, 0, 2 * Math.PI);
ctx.stroke();

// Experimenting...
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.moveTo(300, 25);
ctx.lineTo(350, 125);
ctx.stroke();
