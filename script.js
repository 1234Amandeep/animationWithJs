const canvas = document.querySelector(".canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(ctx);

// Intial state of particlesArray
const particlesArray = [];

let hue = 0;

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
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particles());
  }
});

// mouseMove interation
canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particles());
  }
});

// Particles blueprint
class Particles {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = "hsl(" + hue + ", 100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

const handleParticles = () => {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = particlesArray[i].color;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
};

// animations
const animate = () => {
  // clearing canvas each pixels
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue += 1;
  requestAnimationFrame(animate);
};

animate();
