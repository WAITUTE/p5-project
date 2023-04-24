let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ellipseMode(RADIUS);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  rotate(angle);


  noStroke();
  fill(0);
  arc(0, 0, 200, 200, 90, 270); // Left half of the circle
  fill(255);
  arc(0, 0, 200, 200, -90, 90); // Right half of the circle
  fill(255);
  ellipse(0, -100, 100, 100); // White circle
  fill(0);
  ellipse(0, 100, 100, 100); // Black circle
  fill(0);
  ellipse(0, -100, 40, 40); // Small black circle
  fill(255);
  ellipse(0, 100, 40, 40); // Small white circle

  angle += 1;
}
