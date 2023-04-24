let x = 30;
let y = 72;
let speed = 2;
let ballSize = 20;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  fill('gray');
  stroke(0);
  strokeWeight(2);
  rect(20, 20, 480, 480, 20);

  fill('lightblue');
  stroke(0);
  strokeWeight(2);
  rect(35, 35, 450, 450, 10);

  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      rect(i * 40 + 55, j * 40 + 55, 40, 40);
    }
  }

  fill('red');
  noStroke();
  ellipse(x, y, ballSize, ballSize);

  x += speed;
  if (x > 495) {
    x = 55;
    y += 40;
  }
}
