let angle1 = 0;
let angle2 = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background('green');

  strokeWeight(40);
  stroke('gray');
  noFill();
  ellipse(width/2, height/2, 200, 100);

  strokeWeight(1);
  stroke('yellow');
  noFill();
  ellipse(width/2 , height/2, 200, 100);

  let x1 = cos(angle1) * 85 + width/2 ;
  let y1 = sin(angle1) * 35 + height/2;
  let x2 = cos(angle2) * 110 + width/2;
  let y2 = sin(angle2) * 55 + height/2;

  fill('red');
  noStroke();
  ellipse(x1, y1, 10, 10);
  fill('blue');
  noStroke();
  ellipse(x2, y2, 10, 10);

  angle1 += 1;
  angle2 += 2;
}
