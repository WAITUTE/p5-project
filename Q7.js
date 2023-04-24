let angle = 0;
let x = 0;
let y = 0;
let radius = 100;
let dirX = 1;
let dirY = 1;
let r, g, b;
let bgColor;
let speedSlider;

function setup() {
  createCanvas(400, 200);
  speedSlider = createSlider(1, 20, 5);
  speedSlider.position(10, height - 30);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  bgColor = color(51);
  bgColor.setAlpha(100);
  background(bgColor);
  fill(r, g, b);
  textSize(32);
  textAlign(CENTER);
  text("Learn p5.js", width/2, 50);

  drawCircle();
  moveCircle();
}

function drawCircle() {
  push();
  translate(width/2, height/2);
  rotate(angle);
  fill(r, g, b, 200);
  noStroke();
  ellipse(x, y, radius, radius);
  pop();
}

function moveCircle() {
  let speed = speedSlider.value();
  x += speed * dirX;
  y += speed * dirY;
  if (x > radius/2 || x < -radius/2) {
    dirX *= -1;
    r = random(255);
    g = random(255);
    b = random(255);
  }
  if (y > radius/4 || y < -radius/4) {
    dirY *= -1;
    r = random(255);
    g = random(255);
    b = random(255);
  }
  angle += 0.05;
}
