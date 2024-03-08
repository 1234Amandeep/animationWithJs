const canvas = document.querySelector(".canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(ctx);

// fn for drawing a filled Rectangle
const drawFillRect = () => {
  ctx.fillStyle = "green";
  ctx.fillRect(mouse.x, mouse.y, 20, 20);
};

// fn for drawing a filled Circle
const drawFillCircle = () => {
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50 / 5, 0, 2 * Math.PI);
  ctx.fill();
};

// fn for drawing a stroked Rectangle
const drawStrokedRect = () => {
  ctx.strokeStyle = "orange";
  ctx.beginPath();
  ctx.rect(mouse.x, mouse.y, 20, 20);
  ctx.stroke();
};

// fn for drawing a stroked Circle
const drawStrokedCircle = () => {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50 / 4, 0, 2 * Math.PI);
  ctx.stroke();
};

// fn for drawing a line
const drawLine = () => {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.moveTo(mouse.x, mouse.y);
  ctx.lineTo(mouse.x + 5, mouse.y + 8);
  ctx.stroke();
};

// mouse interactions

// click interaction
const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawFillCircle();
});

// mouseMove interation
canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawFillCircle();
});

// animations
const animate = () => {
  // clearing canvas each pixels
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFillCircle();
  requestAnimationFrame(animate);
};

animate();
