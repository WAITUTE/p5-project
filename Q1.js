function setup() {
  createCanvas(700, 400);
  
}

function draw() {
  background(144, 49, 233);
  rectMode(CENTER);
  
  // Set the number of squares
  const numSquares = 5;
  const cornerRadius = 20;
  const padding = 10;
  const squareWidth = (width - (numSquares + 1) * padding) / numSquares;
  const squareHeight = height / 2;
  
  for (let i = 0; i < numSquares; i++) {
    const fillColor = lerpColor(color("blue"), color("green"), i / (numSquares - 1));
    
    fill(fillColor);
    stroke(0);
    strokeWeight(2);
    const squareX = i * (squareWidth + padding) + squareWidth / 2 + padding;
    const squareY = height / 2;
    
    rect(squareX, squareY, squareWidth, squareHeight, cornerRadius);
  }
}
