const canvas = document.querySelector(".canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(ctx);

// Intial state of particlesArray
const particlesArray = [];

// fn for drawing a filled Rectangle
const drawFillRect = () => {
  ctx.fillStyle = "green";
  ctx.fillRect(mouse.x, mouse.y, 20, 20);
};

// fn for drawing a filled Circle
const drawFillCircle = (x, y) => {
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(x, y, 50 / 5, 0, 2 * Math.PI);
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

// colors pallete
const colors = [
  "red",
  "blue",
  "orange",
  "purple",
  "pink",
  "yellow",
  "white",
  "grey",
  "magenta",
];

// Particles blueprint
class Particles {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    if (
      this.x < 50 ||
      this.x > canvas.width - 50 ||
      this.y < 50 ||
      this.y > canvas.height - 50
    ) {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
    } else {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  draw() {
    let index = Math.floor(Math.random() * 8 + 0);
    let color = colors[index];
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50 / 4, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

// initial setup for particles animation
const init = () => {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particles());
  }
};

init();

const handleParticles = () => {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
};

// animations
const animate = () => {
  // clearing canvas each pixels
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
};

animate();
